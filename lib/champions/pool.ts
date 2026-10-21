import {
  CHAMPIONS_DATA,
  type ChampionEntry,
} from '@/data/champions';
import type { Position } from '@/data/players';
import type { ChampionPoolMode } from './types';

/**
 * 按位置取英雄池。
 *
 * OP.GG 的 `tier` 是 **0~5** 的档位，**数字越小越强势**：T0 是最顶的一档
 * （每个位置通常只有 1~2 个，有的位置没有 T0，由 T1 顶上），T5 是最末一档。
 *
 * - `all`：本位置全池（该位置全部英雄，不做档位筛选）
 * - `meta`：Tier 0~2，版本强势
 * - `mainstream`：Tier 0~3，版本相对主流
 * - `bottom`：Tier 4~5，版本下水道
 *
 * 注意 `meta` 用 `tier <= 2` 判断，**T0 天然包含在内**，不需要单独列出来。
 */
export function championPoolFor(
  position: Position,
  mode: ChampionPoolMode
): ChampionEntry[] {
  const list = CHAMPIONS_DATA.positions[position];

  if (mode === 'meta') return list.filter((champion) => champion.tier <= 2);
  if (mode === 'mainstream') {
    return list.filter((champion) => champion.tier <= 3);
  }
  if (mode === 'bottom') return list.filter((champion) => champion.tier >= 4);

  return list;
}
