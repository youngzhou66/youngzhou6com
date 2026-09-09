import { describe, expect, it } from 'vitest';
import { POSITIONS } from '@/lib/grouping/constants';
import {
  generateBalancedGroups,
  generateRandomGroups,
} from '@/lib/grouping/generate';
import type {
  AssignResult,
  PairConstraint,
} from '@/lib/grouping/types';
import {
  allGroupedPlayers,
  lockedPositionsByRole,
  TEST_PLAYERS,
} from '../helpers';

function expectValidAssignment(result: AssignResult) {
  expect(result.team1).toHaveLength(5);
  expect(result.team2).toHaveLength(5);

  const allPlayers = allGroupedPlayers(result);
  expect(new Set(allPlayers.map((item) => item.player.name)).size).toBe(10);

  for (const team of [result.team1, result.team2]) {
    expect(new Set(team.map((item) => item.position))).toEqual(
      new Set(POSITIONS)
    );
  }
}

function pairConstraint(
  playerA: string,
  playerB: string,
  type: PairConstraint['type']
): PairConstraint {
  return { id: `${playerA}-${playerB}`, playerA, playerB, type };
}

function isSameTeam(result: AssignResult, playerA: string, playerB: string) {
  const teamA = result.team1.some((item) => item.player.name === playerA)
    ? 1
    : 2;
  const teamB = result.team1.some((item) => item.player.name === playerB)
    ? 1
    : 2;

  return teamA === teamB;
}

describe('generateBalancedGroups', () => {
  it('生成完整且不重复的 5v5 阵容', () => {
    for (let run = 0; run < 20; run++) {
      expectValidAssignment(
        generateBalancedGroups(TEST_PLAYERS, {}, 0.6)
      );
    }
  });

  it('遵守位置锁定', () => {
    const lockedPositions = lockedPositionsByRole();

    for (let run = 0; run < 5; run++) {
      const result = generateBalancedGroups(
        TEST_PLAYERS,
        lockedPositions,
        0.6
      );
      expectValidAssignment(result);

      allGroupedPlayers(result).forEach((item) => {
        expect(lockedPositions[item.player.name]).toContain(item.position);
      });
    }
  });

  it('遵守必须同队和不要同队约束', () => {
    const [playerA, playerB, playerC, playerD] = TEST_PLAYERS;
    const constraints = [
      pairConstraint(playerA.name, playerB.name, 'require'),
      pairConstraint(playerC.name, playerD.name, 'avoid'),
    ];

    for (let run = 0; run < 20; run++) {
      const result = generateBalancedGroups(
        TEST_PLAYERS,
        {},
        0.6,
        constraints
      );
      expectValidAssignment(result);
      expect(isSameTeam(result, playerA.name, playerB.name)).toBe(true);
      expect(isSameTeam(result, playerC.name, playerD.name)).toBe(false);
    }
  });

  it('同位置两人必须同队时返回失败', () => {
    const [playerA, playerB, ...remainingPlayers] = TEST_PLAYERS;
    const lockedPositions = {
      [playerA.name]: ['top' as const],
      [playerB.name]: ['top' as const],
      ...Object.fromEntries(
        remainingPlayers.map((player, index) => [
          player.name,
          [POSITIONS[(index + 1) % POSITIONS.length]],
        ])
      ),
    };
    const result = generateBalancedGroups(
      TEST_PLAYERS,
      lockedPositions,
      0.6,
      [pairConstraint(playerA.name, playerB.name, 'require')]
    );

    expect(result.team1).toHaveLength(0);
    expect(result.team2).toHaveLength(0);
  });
});

describe('generateRandomGroups', () => {
  it('生成完整且不重复的 5v5 阵容', () => {
    for (let run = 0; run < 20; run++) {
      expectValidAssignment(generateRandomGroups(TEST_PLAYERS, {}));
    }
  });

  it('遵守必须同队和不要同队约束', () => {
    const [playerA, playerB, playerC, playerD] = TEST_PLAYERS;
    const constraints = [
      pairConstraint(playerA.name, playerB.name, 'require'),
      pairConstraint(playerC.name, playerD.name, 'avoid'),
    ];

    for (let run = 0; run < 20; run++) {
      const result = generateRandomGroups(TEST_PLAYERS, {}, constraints);
      expectValidAssignment(result);
      expect(isSameTeam(result, playerA.name, playerB.name)).toBe(true);
      expect(isSameTeam(result, playerC.name, playerD.name)).toBe(false);
    }
  });
});
