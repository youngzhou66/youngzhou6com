import { TIER_INFO, type Position, type TierKey } from '@/data/players';

export const POSITIONS: Position[] = [
  'top',
  'jungle',
  'mid',
  'adc',
  'support',
];

export const TEAM_NAMES = [
  { zh: '蓝方', en: 'Blue Side', color: 'from-blue-500 to-blue-600' },
  { zh: '红方', en: 'Red Side', color: 'from-red-500 to-red-600' },
];

export const TIER_KEYS = Object.keys(TIER_INFO) as TierKey[];

export const POSITION_ELO_WEIGHTS: Record<Position, number> = {
  top: 0.95,
  adc: 0.95,
  mid: 1.05,
  jungle: 1.05,
  support: 1,
};

export const DEFAULT_ELO_THRESHOLD = 0.1;
