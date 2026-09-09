import { describe, expect, it } from 'vitest';
import { POSITIONS } from '@/lib/grouping/constants';
import {
  backtrackRolePairing,
  randomRolePairing,
} from '@/lib/grouping/roles';
import { lockedPositionsByRole, TEST_PLAYERS } from '../helpers';

function expectRoleCounts(roles: string[]) {
  expect(roles).toHaveLength(10);

  for (const position of POSITIONS) {
    expect(roles.filter((role) => role === position)).toHaveLength(2);
  }
}

describe('角色分配', () => {
  it('无位置锁定时每个位置恰好两人', () => {
    for (let run = 0; run < 50; run++) {
      const roles = randomRolePairing(TEST_PLAYERS, {});

      expect(roles).not.toBeNull();
      expectRoleCounts(roles as string[]);
    }
  });

  it('回溯分配会遵守位置锁定', () => {
    const lockedPositions = lockedPositionsByRole();
    const roles = backtrackRolePairing(TEST_PLAYERS, lockedPositions);

    expect(roles).not.toBeNull();
    expectRoleCounts(roles as string[]);

    TEST_PLAYERS.forEach((player, index) => {
      expect(lockedPositions[player.name]).toContain(roles?.[index]);
    });
  });
});
