/**
 * 玩家标签（Tag）配置。
 *
 * 设计取舍：
 * - 标签是纯识别信息，**不参与分组算法**（`buildGroupedPlayer` 只读 positions）。
 *   想做"情侣不要同队"请用现有的「同队约束」，避免两套机制互相打架。
 * - 常驻成员的标签写在 `data/players.ts`（跟着 git 走）；
 *   临时玩家的标签在「添加玩家」时确定，随玩家存进浏览器本地（见 `./storage`）。
 * - 所有标签共用同一套配色，不做一标签一色：颜色多了反而花，且自定义标签
 *   无法保证两两不同色（8 个颜色配 4 个标签，实测几种哈希都会撞）。
 */

export interface TagDefinition {
  label: string;
  /** 进阶链标识，仅用于说明标签之间的升级关系，不影响展示 */
  chain?: string;
}

/**
 * 全部标签统一的配色（取自 `咕咕嘎嘎`）。
 * 想换主题色只改这一处。
 */
export const TAG_COLOR =
  'bg-cyan-500/15 text-cyan-300 border-cyan-500/30';

/** 预设标签：添加玩家时可在 TagPicker 里直接勾选 */
export const TAG_PRESETS: TagDefinition[] = [
  { label: '咕咕嘎嘎', chain: 'gugu' },
  { label: '精英咕咕嘎嘎', chain: 'gugu' },
  { label: 'ikun翡翠兄弟', chain: 'ikun' },
  { label: 'ikun战神', chain: 'ikun' },
  { label: '再次抽象' },
];

const PRESET_MAP = new Map(TAG_PRESETS.map((tag) => [tag.label, tag]));

export const MAX_TAGS_PER_PLAYER = 5;
export const MAX_TAG_LENGTH = 8;

/**
 * 玩家名长度上限（按字符数，不是字节）。
 * 名单里最长的名字是 7 字，所以收到 8 字既够用，又能保证卡片宽度放得下。
 */
export const MAX_PLAYER_NAME_LENGTH = 8;

/**
 * 选人页玩家卡片的统一尺寸。
 * 用固定宽高 + 统一的单行高度，保证所有卡片（有无标签、名字长短不同）完全一样大。
 *
 * 宽度按"上限长度的全中文名也不换行、不截断"倒推：
 * 132px − 左右各 8px 内边距 = 116px 内容区；
 * 8 个中文字（14px 字号 ≈ 112px）刚好放得下，名单里最长的 7 字名（98px）更宽裕。
 */
export const PLAYER_CARD_WIDTH = 'w-[132px]';
export const PLAYER_CARD_HEIGHT = 'h-[72px]';

/** 所有标签（预设与自定义）共用同一配色 */
export function tagStyleFor(label: string): string {
  void label;

  return TAG_COLOR;
}

export function isPresetTag(label: string): boolean {
  return PRESET_MAP.has(label);
}

export function tagChainFor(label: string): string | undefined {
  return PRESET_MAP.get(label)?.chain;
}

/**
 * 清洗用户自定义标签：
 * - 去掉首尾空白与内部换行/控制字符
 * - 截断到最大长度
 * - 空字符串返回 null（调用方据此拒绝）
 */
export function sanitizeCustomTag(raw: string): string | null {
  const cleaned = raw
    // 去掉换行、制表符等控制字符（含全角空格以外的不可见字符）
    .replace(/[\u0000-\u001f\u007f]/g, '')
    .trim();

  if (!cleaned) return null;

  return cleaned.slice(0, MAX_TAG_LENGTH);
}

/**
 * 归一化一个玩家的标签列表：清洗 → 去重 → 截断到上限。
 * 保留原顺序，保证 UI 稳定。
 */
export function normalizeTags(tags: readonly string[]): string[] {
  const seen = new Set<string>();
  const result: string[] = [];

  for (const tag of tags) {
    const cleaned = sanitizeCustomTag(tag);

    if (!cleaned || seen.has(cleaned)) continue;

    seen.add(cleaned);
    result.push(cleaned);

    if (result.length >= MAX_TAGS_PER_PLAYER) break;
  }

  return result;
}

/** 尝试新增一个标签，返回新数组；重复 / 非法 / 超上限时原样返回 */
export function addTag(current: readonly string[], raw: string): string[] {
  const cleaned = sanitizeCustomTag(raw);

  if (!cleaned) return [...current];
  if (current.includes(cleaned)) return [...current];
  if (current.length >= MAX_TAGS_PER_PLAYER) return [...current];

  return [...current, cleaned];
}

export function removeTag(current: readonly string[], label: string): string[] {
  return current.filter((tag) => tag !== label);
}

export function toggleTag(current: readonly string[], label: string): string[] {
  return current.includes(label)
    ? removeTag(current, label)
    : addTag(current, label);
}
