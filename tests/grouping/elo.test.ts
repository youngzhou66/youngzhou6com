import { describe, expect, it } from 'vitest';
import { TIER_INFO } from '@/data/players';
import {
  DEFAULT_ELO_THRESHOLD,
  POSITION_ELO_WEIGHTS,
  POSITIONS,
} from '@/lib/grouping/constants';
import {
  buildGroupedPlayer,
  formatElo,
  formatWeight,
  positionEloWeight,
  rawEloFor,
  weightedEloFor,
} from '@/lib/grouping/elo';
import { TEST_PLAYERS } from '../helpers';

describe('ELO 位置权重', () => {
  it('默认加权 ELO 阈值是 10%', () => {
    expect(DEFAULT_ELO_THRESHOLD).toBe(0.1);
  });

  it('权重表符合 v1.4 方案', () => {
    expect(POSITION_ELO_WEIGHTS).toEqual({
      top: 0.95,
      adc: 0.95,
      mid: 1.05,
      jungle: 1.05,
      support: 1,
    });
  });

  it('原始 ELO × 位置权重得到加权 ELO', () => {
    const player = TEST_PLAYERS[0];

    for (const position of POSITIONS) {
      const rawElo = TIER_INFO[player.positions[position]].elo;
      const weight = POSITION_ELO_WEIGHTS[position];

      expect(rawEloFor(player, position)).toBe(rawElo);
      expect(positionEloWeight(position)).toBe(weight);
      expect(weightedEloFor(player, position)).toBeCloseTo(
        rawElo * weight,
        10
      );
    }
  });

  it('GroupedPlayer 同时保存原始 ELO、权重和加权 ELO', () => {
    const player = TEST_PLAYERS[0];
    const position = 'jungle';
    const groupedPlayer = buildGroupedPlayer(player, position);
    const rawElo = TIER_INFO[player.positions[position]].elo;
    const weight = POSITION_ELO_WEIGHTS[position];

    expect(groupedPlayer).toMatchObject({
      player,
      position,
      tier: player.positions[position],
      rawElo,
      weight,
    });
    expect(groupedPlayer.weightedElo).toBeCloseTo(rawElo * weight, 10);
  });

  it('ELO 和权重显示格式稳定', () => {
    expect(formatElo(90)).toBe('90');
    expect(formatElo(85.5)).toBe('85.5');
    expect(formatElo(123.04)).toBe('123');
    expect(formatElo(123.06)).toBe('123.1');
    expect(formatWeight(1)).toBe('1.00');
    expect(formatWeight(0.95)).toBe('0.95');
  });
});
