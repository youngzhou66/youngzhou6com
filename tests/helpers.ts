import {
  PLAYERS,
  type Player,
  type Position,
} from '@/data/players';
import { POSITIONS } from '@/lib/grouping/constants';
import { buildGroupedPlayer } from '@/lib/grouping/elo';
import type {
  AssignResult,
  GroupedPlayer,
  LockedPositions,
} from '@/lib/grouping/types';

export const TEST_PLAYERS = PLAYERS.slice(0, 10);

export function groupedPlayersWithRoles(
  players: Player[] = TEST_PLAYERS
): GroupedPlayer[] {
  return players.map((player, index) => {
    const position = POSITIONS[index % POSITIONS.length];

    return buildGroupedPlayer(player, position);
  });
}

export function playersByPosition(): Record<Position, Player[]> {
  return POSITIONS.reduce(
    (groups, position, positionIndex) => {
      groups[position] = [
        TEST_PLAYERS[positionIndex * 2],
        TEST_PLAYERS[positionIndex * 2 + 1],
      ];

      return groups;
    },
    {} as Record<Position, Player[]>
  );
}

export function lockedPositionsByRole(): LockedPositions {
  const lockedPositions: LockedPositions = {};
  const groups = playersByPosition();

  for (const position of POSITIONS) {
    for (const player of groups[position]) {
      lockedPositions[player.name] = [position];
    }
  }

  return lockedPositions;
}

export function allGroupedPlayers(result: AssignResult): GroupedPlayer[] {
  return [...result.team1, ...result.team2];
}
