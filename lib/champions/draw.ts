import type { ChampionEntry } from '@/data/champions';
import { shuffle } from '@/lib/grouping/random';
import type { GroupedPlayer } from '@/lib/grouping/types';
import { championPoolFor } from './pool';
import type { ChampionDraws, ChampionPoolMode } from './types';

export function drawChampionAssignments(
  players: GroupedPlayer[],
  mode: ChampionPoolMode,
  count: number
): ChampionDraws | null {
  // 每次尝试都重新随机玩家顺序，避免固定“先选上单、后选打野”造成的位置先后偏差
  const tryPick = () => {
    const taken = new Set<string>();
    const result: ChampionDraws = {};

    for (const groupedPlayer of shuffle(players)) {
      const pool = championPoolFor(groupedPlayer.position, mode);
      const candidates = shuffle(
        pool.filter((champion) => !taken.has(champion.key))
      );

      if (candidates.length < count) return null;

      const chosen = candidates.slice(0, count);
      result[groupedPlayer.player.name] = chosen;

      for (const champion of chosen) taken.add(champion.key);
    }

    return result;
  };

  // 严格保证全场 count*10 个英雄不重复（同一局里不能出现相同英雄），
  // 试不出来就直接返回 null，由页面提示用户，不进入“允许重复”的兜底
  for (let attempt = 0; attempt < 400; attempt++) {
    const result = tryPick();

    if (result) return result;
  }

  return null;
}
