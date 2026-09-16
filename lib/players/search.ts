/**
 * 玩家搜索与筛选。
 *
 * 匹配规则：
 * - 名字（id）：**大小写不敏感的子串匹配**；输入里的空格会把关键词拆成多个词，
 *   需要**全部命中**（AND）才算匹配，方便"缩写 + 片段"式的快速定位。
 * - 标签：可多选，选中的标签必须**全部具备**（AND），与名字条件再取交集。
 *
 * 之所以都取 AND：搜索的直觉是"越搜越窄"。OR 会让多选标签后结果变多，反直觉。
 */

import type { Player } from '@/data/players';
import { TAG_PRESETS } from './tags';

/** 把搜索词拆成小写关键词，忽略多余空白 */
export function parseSearchTerms(query: string): string[] {
  return query
    .toLowerCase()
    .split(/\s+/)
    .map((term) => term.trim())
    .filter(Boolean);
}

export interface PlayerSearchFilters {
  /** 名字 / id 关键词，支持空格分隔的多词 */
  query?: string;
  /** 选中的标签，必须全部具备 */
  tags?: readonly string[];
}

export function matchesQuery(
  player: Player,
  query: string | undefined
): boolean {
  const terms = parseSearchTerms(query ?? '');

  if (terms.length === 0) return true;

  const name = player.name.toLowerCase();

  return terms.every((term) => name.includes(term));
}

export function matchesTags(
  player: Player,
  tags: readonly string[] | undefined
): boolean {
  if (!tags || tags.length === 0) return true;

  const playerTags = player.tags ?? [];

  return tags.every((tag) => playerTags.includes(tag));
}

export function filterPlayers(
  players: readonly Player[],
  filters: PlayerSearchFilters
): Player[] {
  return players.filter(
    (player) => matchesQuery(player, filters.query) && matchesTags(player, filters.tags)
  );
}

/**
 * 当前名单里实际出现过的标签（用于筛选栏）。
 * 预设标签永远排在前面，其余按出现次数降序，保证顺序稳定好找。
 */
export function collectAvailableTags(players: readonly Player[]): string[] {
  const counts = new Map<string, number>();

  for (const player of players) {
    for (const tag of player.tags ?? []) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  const presetOrder = TAG_PRESETS.map((preset) => preset.label);
  const used = [...counts.keys()];

  const presets = presetOrder.filter((label) => counts.has(label));
  const others = used
    .filter((label) => !presetOrder.includes(label))
    .sort((a, b) => {
      const diff = (counts.get(b) ?? 0) - (counts.get(a) ?? 0);

      return diff !== 0 ? diff : a.localeCompare(b);
    });

  return [...presets, ...others];
}

/** 切换某个标签的选中状态 */
export function toggleFilterTag(
  current: readonly string[],
  tag: string
): string[] {
  return current.includes(tag)
    ? current.filter((item) => item !== tag)
    : [...current, tag];
}
