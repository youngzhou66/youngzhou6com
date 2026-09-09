import type { ChampionEntry } from '@/data/champions';

export type ChampionPoolMode = 'all' | 'top20' | 'meta';

export type ChampionDraws = Record<string, ChampionEntry[]>;
