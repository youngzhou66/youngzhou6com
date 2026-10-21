import { CHAMPIONS_DATA } from '@/data/champions';
import type { ChampionPoolMode } from './types';

export const CHAMPION_POOL_OPTIONS: {
  id: ChampionPoolMode;
  label: string;
  hint: string;
}[] = [
  {
    id: 'all',
    label: '本位置全池',
    hint: '玩家分到的那个位置的全部英雄（该位置 OP.GG 完整榜单），不做档位筛选',
  },
  {
    id: 'meta',
    label: 'T0~T2（版本强势）',
    hint: '只从 OP.GG 版本强势（Tier 0~2）英雄中抽取',
  },
  {
    id: 'mainstream',
    label: 'T0~T3（版本相对主流）',
    hint: '只从 OP.GG 版本相对主流（Tier 0~3）英雄中抽取，比强势档多一档',
  },
  {
    id: 'bottom',
    label: 'T4~T5（版本下水道）',
    hint: '只从 OP.GG 版本下水道（Tier 4~5）英雄中抽取',
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
