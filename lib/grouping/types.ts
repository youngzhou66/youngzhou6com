import type { Player, Position, TierKey } from '@/data/players';

export type SortMode = 'balanced' | 'random';

export interface GroupedPlayer {
  player: Player;
  position: Position;
  tier: TierKey;
  elo: number;
}

export interface Team {
  name: string;
  color: string;
  players: GroupedPlayer[];
  totalElo: number;
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
