/**
 * 临时玩家的本地持久化。
 *
 * 设计要点：
 * - 只存在**访问者自己的浏览器**里（localStorage），不联网、不同步；
 * - 基础名单（`data/players.ts`）是构建时常量，运行时只读，页面上不提供编辑入口；
 * - 标签在"添加玩家"时一并确定，因此和玩家存在同一条记录里，不需要额外的覆盖层；
 * - 从 localStorage 读回的数据一律当作不可信输入做 schema 校验，
 *   非法数据直接丢弃，绝不让坏缓存把页面搞崩。
 */

import { POSITIONS, TIER_KEYS } from '@/lib/grouping/constants';
import type { Player, Position, TierKey } from '@/data/players';
import { MAX_PLAYER_NAME_LENGTH, normalizeTags } from './tags';

export const CUSTOM_PLAYERS_STORAGE_KEY = 'lol:custom-players:v1';

export { MAX_PLAYER_NAME_LENGTH };

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function isTierKey(value: unknown): value is TierKey {
  return typeof value === 'string' && TIER_KEYS.includes(value as TierKey);
}

function isStringArray(value: unknown): value is string[] {
  return Array.isArray(value) && value.every((item) => typeof item === 'string');
}

/** localStorage 在隐私模式 / 被禁用时会直接抛异常，这里统一兜底 */
function readStorage(key: string): string | null {
  if (typeof window === 'undefined') return null;

  try {
    return window.localStorage.getItem(key);
  } catch {
    return null;
  }
}

function writeStorage(key: string, value: string | null): void {
  if (typeof window === 'undefined') return;

  try {
    if (value === null) {
      window.localStorage.removeItem(key);
    } else {
      window.localStorage.setItem(key, value);
    }
  } catch {
    // 写入失败（配额满 / 隐私模式）时静默降级为"本次会话内有效"
  }
}

/** 清洗玩家名：去掉控制字符并截断 */
export function sanitizePlayerName(raw: string): string {
  return raw
    .replace(/[\u0000-\u001f\u007f]/g, '')
    .trim()
    .slice(0, MAX_PLAYER_NAME_LENGTH);
}

function parsePlayer(value: unknown): Player | null {
  if (!isRecord(value)) return null;

  if (typeof value.name !== 'string') return null;
  const name = sanitizePlayerName(value.name);
  if (!name) return null;

  if (!isRecord(value.positions)) return null;

  const positions = {} as Record<Position, TierKey>;

  for (const position of POSITIONS) {
    const tier = value.positions[position];
    if (!isTierKey(tier)) return null;
    positions[position] = tier;
  }

  // 标签是可选的：缺失或格式不对就当作"没有标签"，不影响这条玩家记录本身是否可用
  const tags = isStringArray(value.tags) ? normalizeTags(value.tags) : [];

  return tags.length > 0 ? { name, positions, tags } : { name, positions };
}

/**
 * 读取临时玩家。
 * 缓存损坏、字段缺失、与基础名单或彼此重名时，丢弃对应条目。
 */
export function loadCustomPlayers(baseNames: readonly string[]): Player[] {
  const raw = readStorage(CUSTOM_PLAYERS_STORAGE_KEY);
  if (!raw) return [];

  let parsed: unknown;

  try {
    parsed = JSON.parse(raw);
  } catch {
    return [];
  }

  if (!Array.isArray(parsed)) return [];

  const taken = new Set(baseNames);
  const result: Player[] = [];

  for (const item of parsed) {
    const player = parsePlayer(item);

    if (!player) continue;
    if (taken.has(player.name)) continue;

    taken.add(player.name);
    result.push(player);
  }

  return result;
}

export function saveCustomPlayers(players: readonly Player[]): void {
  if (players.length === 0) {
    writeStorage(CUSTOM_PLAYERS_STORAGE_KEY, null);
    return;
  }

  const payload = players.map((player) => {
    const tags = normalizeTags(player.tags ?? []);

    return {
      name: player.name,
      positions: player.positions,
      // 没有标签就不写这个字段，保持缓存干净
      ...(tags.length > 0 ? { tags } : {}),
    };
  });

  writeStorage(CUSTOM_PLAYERS_STORAGE_KEY, JSON.stringify(payload));
}

/**
 * 校验新玩家名字。返回错误文案，null 表示可用。
 * 玩家 name 在整条链路里充当主键（选中 / 位置锁定 / 同队约束 / 英雄抽取），
 * 所以必须阻止重名，否则会出现"点一个选中两个"这类静默错误。
 */
export function validateNewPlayerName(
  raw: string,
  existingNames: readonly string[]
): string | null {
  const name = sanitizePlayerName(raw);

  if (!name) return '请输入玩家名称';
  if (name.length > MAX_PLAYER_NAME_LENGTH) {
    return `名称不能超过 ${MAX_PLAYER_NAME_LENGTH} 个字符`;
  }
  if (existingNames.includes(name)) {
    return `“${name}” 已存在，请换个名字`;
  }

  return null;
}
