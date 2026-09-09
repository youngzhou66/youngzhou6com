import type { Player } from '@/data/players';
import {
  backtrackRolePairing,
  randomRolePairing,
} from './roles';
import {
  balancedSplitFromRoles,
  randomSplitFromRoles,
} from './split';
import type {
  AssignResult,
  LockedPositions,
  SplitOutcome,
} from './types';

export function generateBalancedGroups(
  players: Player[],
  lockedPositions: LockedPositions,
  threshold: number
): AssignResult {
  const accepted: AssignResult[] = [];
  let best: SplitOutcome | null = null;

  for (let attempt = 0; attempt < 300; attempt++) {
    const roles = randomRolePairing(players, lockedPositions);

    if (!roles) continue;

    const outcome = balancedSplitFromRoles(players, roles);

    if (outcome.diffRatio <= threshold) accepted.push(outcome.result);
    if (!best || outcome.diffRatio < best.diffRatio) best = outcome;
  }

  // 满足阈值的阵容里随机挑一套，而不是固定返回第一套
  if (accepted.length > 0) {
    return accepted[Math.floor(Math.random() * accepted.length)];
  }

  // 锁定位置较多导致随机匹配失败时，用回溯保证至少能凑出阵容
  const fallbackRoles = backtrackRolePairing(players, lockedPositions);

  if (fallbackRoles) {
    const outcome = balancedSplitFromRoles(players, fallbackRoles);

    if (!best || outcome.diffRatio < best.diffRatio) best = outcome;
  }

  return best ? best.result : { team1: [], team2: [] };
}

export function generateRandomGroups(
  players: Player[],
  lockedPositions: LockedPositions
): AssignResult {
  for (let attempt = 0; attempt < 100; attempt++) {
    const roles = randomRolePairing(players, lockedPositions);

    if (roles) return randomSplitFromRoles(players, roles).result;
  }

  const fallbackRoles = backtrackRolePairing(players, lockedPositions);

  if (fallbackRoles) {
    return randomSplitFromRoles(players, fallbackRoles).result;
  }

  return { team1: [], team2: [] };
}
