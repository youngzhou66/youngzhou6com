import type { ChampionEntry } from '@/data/champions';

export type ChampionPoolMode =
  | 'all'
  /** Tier 0~2：版本强势 */
  | 'meta'
  /** Tier 0~3：版本相对主流 */
  | 'mainstream'
  /** Tier 4~5：版本下水道 */
  | 'bottom';

export type ChampionDraws = Record<string, ChampionEntry[]>;
