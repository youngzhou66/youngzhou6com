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
