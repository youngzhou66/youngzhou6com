import { CHAMPIONS_DATA } from '@/data/champions';
import type { ChampionPoolMode } from './types';

export const CHAMPION_POOL_OPTIONS: {
  id: ChampionPoolMode;
  label: string;
  hint: string;
}[] = [
  {
    id: 'all',
    label: '全英雄',
    hint: '从该位置 OP.GG 全部榜单英雄中抽取',
  },
  {
    id: 'top20',
    label: '热门 前20',
    hint: '只从该位置胜率/登场率前 20 名中抽取',
  },
  {
    id: 'meta',
    label: 'Tier 1~2',
    hint: '只从 OP.GG 版本强势（Tier 1~2）英雄中抽取',
  },
];

const OPGG_QUEUE_LABELS: Record<string, string> = {
  ranked: '单双排',
};

const OPGG_REGION_LABELS: Record<string, string> = {
  global: '全服',
};

const OPGG_TIER_LABELS: Record<string, string> = {
  emerald_plus: '翡翠+',
  diamond_plus: '钻石+',
  platinum_plus: '白金+',
};

export function championDrawErrorText(count: number): string {
  return `当前英雄池无法为 10 位玩家凑出 ${count * 10} 个不重复的英雄，请切换到更大的英雄池后再试`;
}

export function opggSnapshotText(): string {
  const queue = OPGG_QUEUE_LABELS[CHAMPIONS_DATA.queue] ?? CHAMPIONS_DATA.queue;
  const region =
    OPGG_REGION_LABELS[CHAMPIONS_DATA.region] ?? CHAMPIONS_DATA.region;
  const tier = OPGG_TIER_LABELS[CHAMPIONS_DATA.tier] ?? CHAMPIONS_DATA.tier;
  const date = CHAMPIONS_DATA.updatedAt.slice(0, 10);

  return `${queue} · ${region} · ${tier} · 更新 ${date}`;
}
