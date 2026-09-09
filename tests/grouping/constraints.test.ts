import { describe, expect, it } from 'vitest';
import { satisfiesPairConstraints } from '@/lib/grouping/constraints';
import type { PairConstraint } from '@/lib/grouping/types';
import { groupedPlayersWithRoles } from '../helpers';

function constraint(
  playerA: string,
  playerB: string,
  type: PairConstraint['type']
): PairConstraint {
  return { id: `${playerA}-${playerB}`, playerA, playerB, type };
}

describe('satisfiesPairConstraints', () => {
  const groupedPlayers = groupedPlayersWithRoles();
  const result = {
    team1: groupedPlayers.slice(0, 5),
    team2: groupedPlayers.slice(5),
  };
  const [playerA, playerB] = groupedPlayers;
  const opponent = groupedPlayers[5];

  it('没有约束时始终满足', () => {
    expect(satisfiesPairConstraints(result, [])).toBe(true);
  });

  it('正确处理必须同队', () => {
    expect(
      satisfiesPairConstraints(result, [
        constraint(playerA.player.name, playerB.player.name, 'require'),
      ])
    ).toBe(true);

    expect(
      satisfiesPairConstraints(result, [
        constraint(playerA.player.name, opponent.player.name, 'require'),
      ])
    ).toBe(false);
  });

  it('正确处理不要同队', () => {
    expect(
      satisfiesPairConstraints(result, [
        constraint(playerA.player.name, playerB.player.name, 'avoid'),
      ])
    ).toBe(false);

    expect(
      satisfiesPairConstraints(result, [
        constraint(playerA.player.name, opponent.player.name, 'avoid'),
      ])
    ).toBe(true);
  });

  it('引用不存在的玩家时判定为不满足', () => {
    expect(
      satisfiesPairConstraints(result, [
        constraint(playerA.player.name, '不存在的玩家', 'avoid'),
      ])
    ).toBe(false);
  });
});
