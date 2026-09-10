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
