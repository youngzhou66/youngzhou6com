import { TIER_INFO, type Player, type Position } from '@/data/players';
import { POSITIONS } from './constants';
import { shuffle } from './random';
import type { LockedPositions } from './types';

export function allowedPositionsFor(
  player: Player,
  lockedPositions: LockedPositions
): Position[] {
  const locked = lockedPositions[player.name] || [];

  if (locked.length > 0) return locked;

  return POSITIONS.filter(
    (position) => !Number.isNaN(TIER_INFO[player.positions[position]].elo)
  );
}

/**
 * 随机把 10 人匹配到 10 个位置名额（每个位置恰好 2 人，蓝/红各一）。
 * 先分配位置、再考虑队伍，避免“为了压低队伍分差而把某人塞到弱位置”。
 */
export function randomRolePairing(
  players: Player[],
  lockedPositions: LockedPositions
): Position[] | null {
  const roles = shuffle([...POSITIONS, ...POSITIONS]);

  for (let i = 0; i < players.length; i++) {
    const allowed = allowedPositionsFor(players[i], lockedPositions);

    if (!allowed.includes(roles[i])) return null;
  }

  return roles;
}

/** 兜底：位置锁定较多时用随机回溯找一套可行匹配 */
export function backtrackRolePairing(
  players: Player[],
  lockedPositions: LockedPositions
): Position[] | null {
  const remaining: Record<Position, number> = {
    top: 2,
    jungle: 2,
    mid: 2,
    adc: 2,
    support: 2,
  };
  const order = shuffle(players.map((_, index) => index));
  const result = new Array<Position>(players.length);

  const search = (step: number): boolean => {
    if (step === players.length) return true;

    const playerIndex = order[step];
    const allowed = shuffle(
      allowedPositionsFor(players[playerIndex], lockedPositions)
    );

    for (const role of allowed) {
      if (remaining[role] === 0) continue;

      remaining[role]--;
      result[playerIndex] = role;

      if (search(step + 1)) return true;

      remaining[role]++;
    }

    return false;
  };

  return search(0) ? result : null;
}
