import {
  CHAMPIONS_DATA,
  type ChampionEntry,
} from '@/data/champions';
import type { Position } from '@/data/players';
import type { ChampionPoolMode } from './types';

export function championPoolFor(
  position: Position,
  mode: ChampionPoolMode
): ChampionEntry[] {
  const list = CHAMPIONS_DATA.positions[position];

  if (mode === 'top20') return list.slice(0, 20);
  if (mode === 'meta') return list.filter((champion) => champion.tier <= 2);

  return list;
}
