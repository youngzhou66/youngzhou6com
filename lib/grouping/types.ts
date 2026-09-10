import type { Player, Position, TierKey } from '@/data/players';

export type SortMode = 'balanced' | 'random';

export interface GroupedPlayer {
  player: Player;
  position: Position;
  tier: TierKey;
  rawElo: number;
  weight: number;
  weightedElo: number;
}

export interface Team {
  name: string;
  color: string;
  players: GroupedPlayer[];
  totalRawElo: number;
  totalWeightedElo: number;
}

export interface AssignResult {
  team1: GroupedPlayer[];
  team2: GroupedPlayer[];
}

export interface SplitOutcome {
  result: AssignResult;
  diffRatio: number;
}

export type LockedPositions = Record<string, Position[]>;

export type PairConstraintType = 'avoid' | 'require';

export interface PairConstraint {
  id: string;
  playerA: string;
  playerB: string;
  type: PairConstraintType;
}
