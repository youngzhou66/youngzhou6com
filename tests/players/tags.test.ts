import { describe, expect, it } from 'vitest';
import {
  MAX_TAGS_PER_PLAYER,
  MAX_TAG_LENGTH,
  TAG_COLOR,
  TAG_PRESETS,
  addTag,
  isPresetTag,
  normalizeTags,
  removeTag,
  sanitizeCustomTag,
  tagStyleFor,
  toggleTag,
} from '@/lib/players/tags';

describe('预设标签', () => {
  it('包含群里的 6 个既有标签', () => {
    const labels = TAG_PRESETS.map((preset) => preset.label);

    expect(labels).toEqual([
      '咕咕嘎嘎',
      '精英咕咕嘎嘎',
      'ikun翡翠兄弟',
      'ikun战神',
      '再次抽象',
      '水豚噜噜',
    ]);
  });

  it('预设标签各不相同', () => {
    const labels = TAG_PRESETS.map((preset) => preset.label);

    expect(new Set(labels).size).toBe(labels.length);
  });

  it('进阶链共用同一个 chain 标记', () => {
    expect(TAG_PRESETS.find((t) => t.label === '咕咕嘎嘎')?.chain).toBe('gugu');
    expect(TAG_PRESETS.find((t) => t.label === '精英咕咕嘎嘎')?.chain).toBe(
      'gugu'
    );
    expect(TAG_PRESETS.find((t) => t.label === 'ikun翡翠兄弟')?.chain).toBe(
      'ikun'
    );
    expect(TAG_PRESETS.find((t) => t.label === 'ikun战神')?.chain).toBe('ikun');
  });

  it('isPresetTag 能区分预设与自定义', () => {
    expect(isPresetTag('ikun战神')).toBe(true);
    expect(isPresetTag('我自己编的')).toBe(false);
  });
});

describe('标签配色统一', () => {
  it('所有标签共用同一配色（取自咕咕嘎嘎）', () => {
    for (const preset of TAG_PRESETS) {
      expect(tagStyleFor(preset.label)).toBe(TAG_COLOR);
    }
  });

  it('自定义标签也用同一配色，不再一标签一色', () => {
    expect(tagStyleFor('牢王')).toBe(TAG_COLOR);
    expect(tagStyleFor('大董')).toBe(TAG_COLOR);
    expect(tagStyleFor('谁都没见过的标签')).toBe(TAG_COLOR);
  });

  it('配色是青色系（不是白色/灰色）', () => {
    expect(TAG_COLOR).toContain('cyan');
    expect(TAG_COLOR).not.toContain('white');
    expect(TAG_COLOR).not.toContain('gray');
  });
});

describe('sanitizeCustomTag', () => {
  it('去掉首尾空白', () => {
    expect(sanitizeCustomTag('  战神  ')).toBe('战神');
  });

  it('去掉控制字符与换行', () => {
    expect(sanitizeCustomTag('战\u0000神')).toBe('战神');
    expect(sanitizeCustomTag('战\n神')).toBe('战神');
  });

  it('空白输入返回 null', () => {
    expect(sanitizeCustomTag('')).toBeNull();
    expect(sanitizeCustomTag('    ')).toBeNull();
    expect(sanitizeCustomTag('\n\t')).toBeNull();
  });

  it('超长输入被截断', () => {
    expect(sanitizeCustomTag('一'.repeat(50))).toHaveLength(MAX_TAG_LENGTH);
  });
});

describe('normalizeTags', () => {
  it('去重并保持原顺序', () => {
    expect(normalizeTags(['b', 'a', 'b', 'c'])).toEqual(['b', 'a', 'c']);
  });

  it('过滤空标签', () => {
    expect(normalizeTags(['战神', '', '   '])).toEqual(['战神']);
  });

  it('截断到每人上限', () => {
    const many = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

    expect(normalizeTags(many)).toHaveLength(MAX_TAGS_PER_PLAYER);
    expect(normalizeTags(many)).toEqual(['a', 'b', 'c', 'd', 'e']);
  });

  it('非数组内容不报错（防御性）', () => {
    expect(normalizeTags([])).toEqual([]);
  });
});

describe('addTag / removeTag / toggleTag', () => {
  it('新增标签', () => {
    expect(addTag([], '战神')).toEqual(['战神']);
  });

  it('重复标签不重复添加', () => {
    expect(addTag(['战神'], '战神')).toEqual(['战神']);
  });

  it('空白标签不添加', () => {
    expect(addTag(['战神'], '   ')).toEqual(['战神']);
  });

  it('达到上限后不再添加', () => {
    const full = ['a', 'b', 'c', 'd', 'e'];

    expect(addTag(full, 'f')).toEqual(full);
  });

  it('移除标签', () => {
    expect(removeTag(['a', 'b'], 'a')).toEqual(['b']);
    expect(removeTag(['a', 'b'], '不存在')).toEqual(['a', 'b']);
  });

  it('toggle 在有无之间切换', () => {
    expect(toggleTag([], '战神')).toEqual(['战神']);
    expect(toggleTag(['战神'], '战神')).toEqual([]);
  });

  it('不改动传入的数组（纯函数）', () => {
    const original = ['a'];
    const next = addTag(original, 'b');

    expect(original).toEqual(['a']);
    expect(next).toEqual(['a', 'b']);
  });
});
