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
  winProbabilityFor,
  weightedEloFor,
} from '@/lib/grouping/elo';
import { TEST_PLAYERS } from '../helpers';

describe('ELO 位置权重', () => {
  it('默认加权 ELO 阈值是 10%', () => {
    expect(DEFAULT_ELO_THRESHOLD).toBe(0.1);
  });

  it('权重表符合 v1.5 方案', () => {
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
    expect(formatElo(100)).toBe('100');
    expect(formatElo(85.5)).toBe('85.5');
    expect(formatElo(123.04)).toBe('123');
    expect(formatElo(123.06)).toBe('123.1');
    expect(formatWeight(1)).toBe('1.00');
    expect(formatWeight(0.95)).toBe('0.95');
  });
});

describe('winProbabilityFor 胜率换算方向', () => {
  it('分差为 0 时双方各 50%', () => {
    expect(winProbabilityFor(0)).toBe(0.5);
  });

  it('分差为正（己方更强）时胜率高于 50%，为负时低于 50%', () => {
    expect(winProbabilityFor(100)).toBeGreaterThan(0.5);
    expect(winProbabilityFor(-100)).toBeLessThan(0.5);
  });

  it('己方与对方互换时，两者胜率相加恒为 1', () => {
    for (const diff of [0, 1, 30, 100, 400, 900, -30, -400, -900]) {
      expect(winProbabilityFor(diff) + winProbabilityFor(-diff)).toBeCloseTo(
        1,
        12
      );
    }
  });

  it('单调递增：分差越大胜率越高', () => {
    const diffs = [-900, -400, -100, -30, 0, 30, 100, 400, 900];

    for (let i = 1; i < diffs.length; i++) {
      expect(winProbabilityFor(diffs[i])).toBeGreaterThan(
        winProbabilityFor(diffs[i - 1])
      );
    }
  });

  it('Δ400 对应约 10 倍胜算（标准 ELO 尺度）', () => {
    expect(winProbabilityFor(400)).toBeCloseTo(10 / 11, 10);
    expect(winProbabilityFor(-400)).toBeCloseTo(1 / 11, 10);
  });

  it('回归：绝不能把绝对值当参数传入', () => {
    // 曾经的 bug：先用 Math.abs 求分差、再算“蓝方胜率”，
    // 导致结果恒 ≥ 50%，低分一方反而显示更高胜算。
    const blue = 100;
    const red = 1000;
    const signedDiffFromBlue = blue - red;
    const buggyAbsoluteValue = Math.abs(signedDiffFromBlue);

    expect(winProbabilityFor(signedDiffFromBlue)).toBeLessThan(0.5);
    // 反例保留：这正是错误写法会得到的荒谬结果
    expect(winProbabilityFor(buggyAbsoluteValue)).toBeGreaterThan(0.5);
  });
});
