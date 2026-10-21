import { describe, expect, it } from 'vitest';
import { CHAMPIONS_DATA } from '@/data/champions';
import type { Position } from '@/data/players';
import { championPoolFor } from '@/lib/champions/pool';

const POSITIONS: Position[] = ['top', 'jungle', 'mid', 'adc', 'support'];

describe('championPoolFor', () => {
  it('本位置全池返回该位置整张榜单', () => {
    for (const position of POSITIONS) {
      expect(championPoolFor(position, 'all')).toHaveLength(
        CHAMPIONS_DATA.positions[position].length
      );
    }
  });

  it('T0~T2 只含 tier <= 2，且包含全部 T0', () => {
    for (const position of POSITIONS) {
      const pool = championPoolFor(position, 'meta');
      const poolKeys = new Set(pool.map((champion) => champion.key));

      expect(pool.length).toBeGreaterThan(0);
      expect(pool.every((champion) => champion.tier <= 2)).toBe(true);

      // T0 是最强势的一档，必须被包含（用 tier <= 2 判断天然收进来）
      for (const champion of CHAMPIONS_DATA.positions[position]) {
        if (champion.tier === 0) {
          expect(poolKeys.has(champion.key)).toBe(true);
        }
      }
    }
  });

  it('T0~T3 是 T0~T2 的超集，且只含 tier <= 3', () => {
    for (const position of POSITIONS) {
      const meta = championPoolFor(position, 'meta');
      const mainstream = championPoolFor(position, 'mainstream');
      const mainstreamKeys = new Set(
        mainstream.map((champion) => champion.key)
      );

      expect(mainstream.every((champion) => champion.tier <= 3)).toBe(true);
      expect(mainstream.length).toBeGreaterThanOrEqual(meta.length);
      for (const champion of meta) {
        expect(mainstreamKeys.has(champion.key)).toBe(true);
      }
    }
  });

  it('T4~T5 只含 tier >= 4，且与 T0~T2 完全不相交', () => {
    for (const position of POSITIONS) {
      const bottom = championPoolFor(position, 'bottom');
      const metaKeys = new Set(
        championPoolFor(position, 'meta').map((champion) => champion.key)
      );

      expect(bottom.length).toBeGreaterThan(0);
      expect(bottom.every((champion) => champion.tier >= 4)).toBe(true);
      for (const champion of bottom) {
        expect(metaKeys.has(champion.key)).toBe(false);
      }
    }
  });

  it('每个位置的下水道路子都够 10 人局抽（每人最多 3 个）', () => {
    for (const position of POSITIONS) {
      expect(championPoolFor(position, 'bottom').length).toBeGreaterThanOrEqual(
        6
      );
    }
  });
});
