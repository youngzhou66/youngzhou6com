import { TIER_INFO, type Player, type Position } from '@/data/players';
import { POSITION_ELO_WEIGHTS } from './constants';
import type { GroupedPlayer } from './types';

export function rawEloFor(player: Player, position: Position): number {
  return TIER_INFO[player.positions[position]].elo;
}

export function positionEloWeight(position: Position): number {
  return POSITION_ELO_WEIGHTS[position];
}

export function weightedEloFor(player: Player, position: Position): number {
  return rawEloFor(player, position) * positionEloWeight(position);
}

export function buildGroupedPlayer(
  player: Player,
  position: Position
): GroupedPlayer {
  const tier = player.positions[position];
  const rawElo = rawEloFor(player, position);
  const weight = positionEloWeight(position);

  return {
    player,
    position,
    tier,
    rawElo,
    weight,
    weightedElo: rawElo * weight,
  };
}

export function formatElo(value: number): string {
  const rounded = Math.round(value * 10) / 10;

  return Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(1);
}

export function formatWeight(weight: number): string {
  return weight.toFixed(2);
}

/**
 * 标准 ELO 公式：把「带符号的」分差换算成胜率。
 *
 * 注意参数必须是 `己方总分 - 对方总分`，不能传绝对值：
 * 传绝对值会让结果恒 ≥ 50%，从而把胜算判给分低的一方。
 */
export function winProbabilityFor(signedDiff: number): number {
  return 1 / (1 + Math.pow(10, -signedDiff / 400));
}
