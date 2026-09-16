import { describe, expect, it } from 'vitest';
import { PLAYERS, type Player } from '@/data/players';
import {
  collectAvailableTags,
  filterPlayers,
  matchesQuery,
  matchesTags,
  parseSearchTerms,
  toggleFilterTag,
} from '@/lib/players/search';
import { TAG_PRESETS } from '@/lib/players/tags';

const player = (name: string, tags?: string[]): Player => ({
  name,
  positions: {
    top: 'npc',
    jungle: 'npc',
    mid: 'npc',
    adc: 'npc',
    support: 'npc',
  },
  ...(tags ? { tags } : {}),
});

const roster: Player[] = [
  player('羊羊', ['咕咕嘎嘎']),
  player('牢王Ovo', ['ikun战神']),
  player('成都meiko', ['咕咕嘎嘎', '白虎']),
  player('状态好能一换一', ['再次抽象']),
  player('小岩'),
];

describe('parseSearchTerms', () => {
  it('按空白拆词并转小写', () => {
    expect(parseSearchTerms('Ovo ikun')).toEqual(['ovo', 'ikun']);
  });

  it('忽略多余空白', () => {
    expect(parseSearchTerms('  羊羊   ')).toEqual(['羊羊']);
    expect(parseSearchTerms('a   b\tc')).toEqual(['a', 'b', 'c']);
  });

  it('空输入返回空数组', () => {
    expect(parseSearchTerms('')).toEqual([]);
    expect(parseSearchTerms('   ')).toEqual([]);
  });
});

describe('matchesQuery（按 id 搜索）', () => {
  const meiko = player('成都meiko');

  it('子串匹配', () => {
    expect(matchesQuery(meiko, 'meiko')).toBe(true);
    expect(matchesQuery(meiko, '成都')).toBe(true);
    expect(matchesQuery(meiko, 'mei')).toBe(true);
  });

  it('大小写不敏感', () => {
    expect(matchesQuery(meiko, 'MEIKO')).toBe(true);
    expect(matchesQuery(meiko, 'MeIkO')).toBe(true);
  });

  it('不匹配时返回 false', () => {
    expect(matchesQuery(meiko, '羊羊')).toBe(false);
  });

  it('空查询匹配所有人', () => {
    expect(matchesQuery(meiko, '')).toBe(true);
    expect(matchesQuery(meiko, undefined)).toBe(true);
  });

  it('多个关键词需要全部命中（AND，越搜越窄）', () => {
    expect(matchesQuery(player('状态好能一换一'), '状态 一换一')).toBe(true);
    expect(matchesQuery(player('状态好能一换一'), '状态 不存在')).toBe(false);
  });
});

describe('matchesTags（按标签筛选）', () => {
  const meiko = player('成都meiko', ['咕咕嘎嘎', '白虎']);

  it('单个标签命中', () => {
    expect(matchesTags(meiko, ['咕咕嘎嘎'])).toBe(true);
    expect(matchesTags(meiko, ['不存在'])).toBe(false);
  });

  it('多个标签需要全部具备（AND）', () => {
    expect(matchesTags(meiko, ['咕咕嘎嘎', '白虎'])).toBe(true);
    expect(matchesTags(meiko, ['咕咕嘎嘎', '再次抽象'])).toBe(false);
  });

  it('未选标签时匹配所有人', () => {
    expect(matchesTags(meiko, [])).toBe(true);
    expect(matchesTags(meiko, undefined)).toBe(true);
  });

  it('没有标签的玩家不会被任何标签筛中', () => {
    expect(matchesTags(player('小岩'), ['咕咕嘎嘎'])).toBe(false);
  });
});

describe('filterPlayers（组合筛选）', () => {
  it('无筛选条件时返回全部', () => {
    expect(filterPlayers(roster, {})).toHaveLength(roster.length);
  });

  it('只按 id 搜', () => {
    expect(filterPlayers(roster, { query: 'meiko' }).map((p) => p.name)).toEqual([
      '成都meiko',
    ]);
  });

  it('只按标签筛', () => {
    expect(
      filterPlayers(roster, { tags: ['咕咕嘎嘎'] }).map((p) => p.name)
    ).toEqual(['羊羊', '成都meiko']);
  });

  it('id 与标签是交集（AND）', () => {
    expect(
      filterPlayers(roster, { query: '成都', tags: ['白虎'] }).map((p) => p.name)
    ).toEqual(['成都meiko']);
    expect(filterPlayers(roster, { query: '羊羊', tags: ['白虎'] })).toEqual([]);
  });

  it('无匹配时返回空数组', () => {
    expect(filterPlayers(roster, { query: '不存在的人' })).toEqual([]);
  });

  it('不改动传入的数组（纯函数）', () => {
    const before = roster.length;

    filterPlayers(roster, { query: 'meiko' });

    expect(roster).toHaveLength(before);
  });

  it('在真实名单上：搜 "meiko" 只出成都meiko', () => {
    expect(
      filterPlayers(PLAYERS, { query: 'meiko' }).map((p) => p.name)
    ).toEqual(['成都meiko']);
  });

  it('在真实名单上：按 咕咕嘎嘎 筛出 9 人', () => {
    expect(filterPlayers(PLAYERS, { tags: ['咕咕嘎嘎'] })).toHaveLength(9);
  });

  it('在真实名单上：咕咕嘎嘎 + 再次抽象 交集为空（无人同时具备）', () => {
    expect(
      filterPlayers(PLAYERS, { tags: ['咕咕嘎嘎', '再次抽象'] })
    ).toHaveLength(0);
  });
});

describe('collectAvailableTags', () => {
  it('只收集实际出现过的标签', () => {
    expect(collectAvailableTags(roster).sort()).toEqual(
      ['咕咕嘎嘎', 'ikun战神', '再次抽象', '白虎'].sort()
    );
  });

  it('预设标签排在自定义标签前面', () => {
    const tags = collectAvailableTags(roster);
    const firstCustom = tags.findIndex(
      (tag) => !TAG_PRESETS.some((preset) => preset.label === tag)
    );

    expect(firstCustom).toBeGreaterThan(0);
    expect(
      tags.slice(0, firstCustom).every((tag) =>
        TAG_PRESETS.some((preset) => preset.label === tag)
      )
    ).toBe(true);
  });

  it('真实名单上收集到 7 种标签', () => {
    expect(collectAvailableTags(PLAYERS)).toHaveLength(7);
  });

  it('没有标签的名单返回空数组', () => {
    expect(collectAvailableTags([player('孤单一人')])).toEqual([]);
  });
});

describe('toggleFilterTag', () => {
  it('未选中则加入', () => {
    expect(toggleFilterTag([], '咕咕嘎嘎')).toEqual(['咕咕嘎嘎']);
  });

  it('已选中则移除', () => {
    expect(toggleFilterTag(['咕咕嘎嘎'], '咕咕嘎嘎')).toEqual([]);
  });

  it('不改动传入的数组（纯函数）', () => {
    const original = ['a'];

    toggleFilterTag(original, 'b');

    expect(original).toEqual(['a']);
  });
});
