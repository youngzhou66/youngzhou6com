import { beforeEach, describe, expect, it } from 'vitest';
import { PLAYERS, type Position, type TierKey } from '@/data/players';
import {
  CUSTOM_PLAYERS_STORAGE_KEY,
  loadCustomPlayers,
  sanitizePlayerName,
  saveCustomPlayers,
  validateNewPlayerName,
} from '@/lib/players/storage';
import {
  MAX_PLAYER_NAME_LENGTH,
  MAX_TAGS_PER_PLAYER,
  MAX_TAG_LENGTH,
  normalizeTags,
} from '@/lib/players/tags';

const FULL_TIERS: Record<Position, TierKey> = {
  top: 'npc',
  jungle: 'dingji',
  mid: 'renshangren',
  adc: 'lawanle',
  support: 'npc',
};

/** 内存版 localStorage，测试里注入到 window 上 */
function createMemoryStorage() {
  const store = new Map<string, string>();

  return {
    getItem: (key: string) => store.get(key) ?? null,
    setItem: (key: string, value: string) => {
      store.set(key, value);
    },
    removeItem: (key: string) => {
      store.delete(key);
    },
    clear: () => store.clear(),
    key: (index: number) => [...store.keys()][index] ?? null,
    get length() {
      return store.size;
    },
  };
}

const memoryStorage = createMemoryStorage();

beforeEach(() => {
  memoryStorage.clear();
  (globalThis as { window?: unknown }).window = {
    localStorage: memoryStorage,
  };
});

describe('sanitizePlayerName', () => {
  it('去掉首尾空白与控制字符', () => {
    expect(sanitizePlayerName('  小明  ')).toBe('小明');
    expect(sanitizePlayerName('小\u0000明')).toBe('小明');
    expect(sanitizePlayerName('\n\t')).toBe('');
  });

  it('截断超长名字', () => {
    expect(sanitizePlayerName('一'.repeat(50))).toHaveLength(
      MAX_PLAYER_NAME_LENGTH
    );
  });
});

describe('玩家名长度上限', () => {
  it('上限是 8 字（卡片宽度按此设计）', () => {
    expect(MAX_PLAYER_NAME_LENGTH).toBe(8);
  });

  it('超过上限的名字被拒绝', () => {
    const tooLong = '一'.repeat(MAX_PLAYER_NAME_LENGTH + 1);

    expect(validateNewPlayerName(tooLong, [])).toContain('不能超过');
  });

  it('恰好到上限的名字可用', () => {
    const exactly = '一'.repeat(MAX_PLAYER_NAME_LENGTH);

    expect(validateNewPlayerName(exactly, [])).toBeNull();
  });

  it('基础名单里没有名字超限（否则卡片会被截断）', () => {
    const tooLong = PLAYERS.filter(
      (player) => [...player.name].length > MAX_PLAYER_NAME_LENGTH
    );

    expect(tooLong.map((player) => player.name)).toEqual([]);
  });
});

describe('validateNewPlayerName', () => {
  const existing = ['羊羊', '牢王Ovo'];

  it('正常名字通过', () => {
    expect(validateNewPlayerName('新来的', existing)).toBeNull();
  });

  it('拒绝空名字', () => {
    expect(validateNewPlayerName('   ', existing)).toContain('请输入');
  });

  it('拒绝与基础名单重名', () => {
    expect(validateNewPlayerName('羊羊', existing)).toContain('已存在');
  });

  it('拒绝与已有临时玩家重名（前后空格也算）', () => {
    expect(validateNewPlayerName('羊羊 ', existing)).toContain('已存在');
  });
});

describe('临时玩家持久化', () => {
  it('没有 window 时（服务端）返回空数组', () => {
    delete (globalThis as { window?: unknown }).window;

    expect(loadCustomPlayers(['羊羊'])).toEqual([]);
  });

  it('保存后能原样读回', () => {
    saveCustomPlayers([{ name: '新来的', positions: FULL_TIERS }]);

    expect(loadCustomPlayers(['羊羊'])).toEqual([
      { name: '新来的', positions: FULL_TIERS },
    ]);
  });

  it('空列表时清掉 storage key', () => {
    saveCustomPlayers([{ name: '新来的', positions: FULL_TIERS }]);
    saveCustomPlayers([]);

    expect(memoryStorage.getItem(CUSTOM_PLAYERS_STORAGE_KEY)).toBeNull();
  });

  it('丢弃与基础名单重名的缓存条目', () => {
    saveCustomPlayers([
      { name: '羊羊', positions: FULL_TIERS },
      { name: '新来的', positions: FULL_TIERS },
    ]);

    expect(loadCustomPlayers(['羊羊']).map((player) => player.name)).toEqual([
      '新来的',
    ]);
  });

  it('丢弃缓存内部互相重名的重复条目', () => {
    memoryStorage.setItem(
      CUSTOM_PLAYERS_STORAGE_KEY,
      JSON.stringify([
        { name: '新来的', positions: FULL_TIERS },
        { name: '新来的', positions: FULL_TIERS },
      ])
    );

    expect(loadCustomPlayers([])).toHaveLength(1);
  });
});

describe('标签随玩家一起持久化', () => {
  it('保存并读回标签', () => {
    saveCustomPlayers([
      { name: '新来的', positions: FULL_TIERS, tags: ['咕咕嘎嘎', 'ikun战神'] },
    ]);

    expect(loadCustomPlayers(['羊羊'])).toEqual([
      { name: '新来的', positions: FULL_TIERS, tags: ['咕咕嘎嘎', 'ikun战神'] },
    ]);
  });

  it('写入前清洗标签：去重、去空白、截断到上限', () => {
    saveCustomPlayers([
      {
        name: '新来的',
        positions: FULL_TIERS,
        tags: [' 咕咕嘎嘎 ', '咕咕嘎嘎', '', 'a', 'b', 'c', 'd', 'e'],
      },
    ]);

    expect(loadCustomPlayers([])[0].tags).toEqual([
      '咕咕嘎嘎',
      'a',
      'b',
      'c',
      'd',
    ]);
  });

  it('没有标签时不写 tags 字段，保持缓存干净', () => {
    saveCustomPlayers([{ name: '新来的', positions: FULL_TIERS }]);

    const raw = memoryStorage.getItem(CUSTOM_PLAYERS_STORAGE_KEY) ?? '';

    expect(raw).not.toContain('tags');
    expect(loadCustomPlayers([])[0]).toEqual({
      name: '新来的',
      positions: FULL_TIERS,
    });
  });

  it('标签全为空时也不写 tags 字段', () => {
    saveCustomPlayers([
      { name: '新来的', positions: FULL_TIERS, tags: ['', '  '] },
    ]);

    const raw = memoryStorage.getItem(CUSTOM_PLAYERS_STORAGE_KEY) ?? '';

    expect(raw).not.toContain('tags');
  });

  it('缓存里的 tags 不是字符串数组时，丢弃标签但保留玩家', () => {
    memoryStorage.setItem(
      CUSTOM_PLAYERS_STORAGE_KEY,
      JSON.stringify([
        { name: '怪标签', positions: FULL_TIERS, tags: [1, 2, 3] },
        { name: '标签是字符串', positions: FULL_TIERS, tags: '咕咕嘎嘎' },
      ])
    );

    expect(loadCustomPlayers([])).toEqual([
      { name: '怪标签', positions: FULL_TIERS },
      { name: '标签是字符串', positions: FULL_TIERS },
    ]);
  });
});

describe('坏缓存兜底', () => {
  it('JSON 解析失败返回空数组', () => {
    memoryStorage.setItem(CUSTOM_PLAYERS_STORAGE_KEY, '{ 不是合法 json');

    expect(loadCustomPlayers([])).toEqual([]);
  });

  it('顶层不是数组返回空数组', () => {
    memoryStorage.setItem(CUSTOM_PLAYERS_STORAGE_KEY, '{"a":1}');

    expect(loadCustomPlayers([])).toEqual([]);
  });

  it('缺字段 / 非法档位 / 空名字的条目被逐个丢弃，合法条目保留', () => {
    memoryStorage.setItem(
      CUSTOM_PLAYERS_STORAGE_KEY,
      JSON.stringify([
        { name: '缺位置' },
        { name: '非法档位', positions: { ...FULL_TIERS, mid: '不存在' } },
        { name: '   ', positions: FULL_TIERS },
        { name: '合法的', positions: FULL_TIERS },
        null,
        'string',
      ])
    );

    expect(loadCustomPlayers([]).map((player) => player.name)).toEqual([
      '合法的',
    ]);
  });
});

describe('localStorage 不可用时的降级', () => {
  it('getItem 抛异常时不崩溃', () => {
    (globalThis as { window?: unknown }).window = {
      localStorage: {
        getItem: () => {
          throw new Error('SecurityError');
        },
        setItem: () => {
          throw new Error('QuotaExceededError');
        },
        removeItem: () => {
          throw new Error('SecurityError');
        },
      },
    };

    expect(loadCustomPlayers([])).toEqual([]);
    expect(() =>
      saveCustomPlayers([{ name: '新来的', positions: FULL_TIERS }])
    ).not.toThrow();
  });
});

describe('基础名单里的标签必须合规', () => {
  const playersWithTags = PLAYERS.filter(
    (player) => (player.tags?.length ?? 0) > 0
  );

  it('名单里没有重名玩家（name 是主键）', () => {
    const names = PLAYERS.map((player) => player.name);

    expect(new Set(names).size).toBe(names.length);
  });

  it('每个玩家的标签都是非空字符串', () => {
    for (const player of playersWithTags) {
      for (const tag of player.tags ?? []) {
        expect(typeof tag).toBe('string');
        expect(tag.trim()).toBe(tag);
        expect(tag.length).toBeGreaterThan(0);
      }
    }
  });

  it('标签不超过每人上限，且清洗后内容不变（已规范化）', () => {
    for (const player of playersWithTags) {
      const tags = player.tags ?? [];

      expect(tags.length).toBeLessThanOrEqual(MAX_TAGS_PER_PLAYER);
      expect(normalizeTags(tags)).toEqual(tags);
    }
  });

  it('单个标签不超过长度上限', () => {
    for (const player of playersWithTags) {
      for (const tag of player.tags ?? []) {
        expect(tag.length).toBeLessThanOrEqual(MAX_TAG_LENGTH);
      }
    }
  });
});
