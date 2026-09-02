export type Position = 'top' | 'jungle' | 'mid' | 'adc' | 'support';

export type TierKey =
  | 'hangbaole'
  | 'hang'
  | 'dingji'
  | 'renshangren'
  | 'npc'
  | 'lawanle'
  | 'renji';

export interface Player {
  name: string;
  positions: Record<Position, TierKey>;
}

export const TIER_INFO: Record<TierKey, { label: string; elo: number; color: string; icon: string; rank: string }> = {
  hangbaole:   { label: '夯爆了', elo: 220, color: 'bg-red-500', icon: '🔥', rank: '大师及以上' },
  hang:        { label: '夯',     elo: 210, color: 'bg-orange-500', icon: '💪', rank: '钻1钻2' },
  dingji:     { label: '顶级',   elo: 170, color: 'bg-yellow-500', icon: '👑', rank: '钻石' },
  renshangren:{ label: '人上人', elo: 130, color: 'bg-green-500', icon: '⭐', rank: '翡翠' },
  npc:        { label: 'NPC',    elo:  90, color: 'bg-blue-500', icon: '🤖', rank: '白金' },
  lawanle:    { label: '拉完了', elo:  50, color: 'bg-purple-500', icon: '😭', rank: '黄金' },
  renji:      { label: '人机',   elo:  40, color: 'bg-gray-500', icon: '👾', rank: '骇人鲸' },
};

export const POSITION_LABELS: Record<Position, { zh: string; en: string; icon: string }> = {
  top:     { zh: '上单', en: 'Top',     icon: '🛡️' },
  jungle:  { zh: '打野', en: 'Jungle',  icon: '🌲' },
  mid:     { zh: '中单', en: 'Mid',     icon: '⚡' },
  adc:     { zh: 'AD',   en: 'ADC',     icon: '🏹' },
  support: { zh: '辅助', en: 'Support', icon: '💚' },
};

export const PLAYERS: Player[] = [
  { name: '大灰蛛',         positions: { top: 'lawanle',    jungle: 'dingji', mid: 'npc',        adc: 'renshangren', support: 'npc' } },
  { name: '青衫持刹那',     positions: { top: 'renshangren', jungle: 'hang',   mid: 'hangbaole',    adc: 'dingji',     support: 'npc' } },
  { name: '恶魔人',         positions: { top: 'dingji',     jungle: 'renshangren', mid: 'npc',     adc: 'hang',      support: 'hangbaole' } },
  { name: '忘绝尘',         positions: { top: 'lawanle',    jungle: 'lawanle', mid: 'lawanle',      adc: 'renji',      support: 'renshangren' } },
  { name: '万一赢了呢',     positions: { top: 'renshangren',jungle: 'hangbaole',mid: 'dingji',     adc: 'hang',       support: 'npc' } },
  { name: 'BUG天翼',        positions: { top: 'hang',       jungle: 'hangbaole',mid: 'renshangren', adc: 'dingji',     support: 'lawanle' } },
  { name: '夜行少女',       positions: { top: 'renshangren',jungle: 'lawanle', mid: 'dingji',        adc: 'hang',       support: 'dingji' } },
  { name: '牢王野狗Ovo',    positions: { top: 'hang',       jungle: 'hangbaole',mid: 'dingji',      adc: 'dingji',     support: 'hangbaole' } },
  { name: '叛徒陈锦坤',     positions: { top: 'lawanle',    jungle: 'npc',    mid: 'dingji',        adc: 'renshangren',support: 'hang' } },
  { name: '打弟弟专用号',   positions: { top: 'dingji',     jungle: 'npc',    mid: 'renshangren',   adc: 'lawanle',    support: 'npc' } },
  { name: '充钱怪',         positions: { top: 'lawanle',    jungle: 'npc',    mid: 'hang',          adc: 'dingji',     support: 'dingji' } },
  { name: '杨晓豪石头人塞拉斯', positions: { top: 'lawanle', jungle: 'renshangren',mid: 'dingji',  adc: 'hang',       support: 'hangbaole' } },
  { name: '朗哥',           positions: { top: 'lawanle',    jungle: 'dingji', mid: 'npc',          adc: 'npc',        support: 'dingji' } },
  { name: '杨晓豪塞拉斯石头人', positions: { top: 'dingji',   jungle: 'npc',    mid: 'renshangren', adc: 'lawanle',    support: 'npc' } },
  { name: '小岩',           positions: { top: 'lawanle',    jungle: 'renshangren',mid: 'npc',      adc: 'dingji',     support: 'dingji' } },
  { name: '10子',           positions: { top: 'hangbaole',   jungle: 'hang',   mid: 'dingji',      adc: 'renshangren',support: 'lawanle' } },
  { name: '老鼠头',         positions: { top: 'npc',        jungle: 'lawanle',mid: 'renshangren', adc: 'hangbaole',   support: 'hang' } },
  ];
