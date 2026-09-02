export type Position = 'top' | 'jungle' | 'mid' | 'adc' | 'support';

export type TierKey =
  | 'hanbaole'
  | 'hanbao'
  | 'dingji'
  | 'renshangren'
  | 'npc'
  | 'lawanle'
  | 'renji';

export interface Player {
  name: string;
  positions: Record<Position, TierKey>;
}

export const TIER_INFO: Record<TierKey, { label: string; elo: number; color: string; icon: string }> = {
  hanbaole:   { label: '夯爆了', elo: 220, color: 'bg-red-500', icon: '🔥' },
  hanbao:     { label: '夯',     elo: 210, color: 'bg-orange-500', icon: '💪' },
  dingji:     { label: '顶级',   elo: 170, color: 'bg-yellow-500', icon: '👑' },
  renshangren:{ label: '人上人', elo: 130, color: 'bg-green-500', icon: '⭐' },
  npc:        { label: 'NPC',    elo:  90, color: 'bg-blue-500', icon: '🤖' },
  lawanle:    { label: '拉完了', elo:  50, color: 'bg-purple-500', icon: '😭' },
  renji:      { label: '人机',   elo:  40, color: 'bg-gray-500', icon: '👾' },
};

export const POSITION_LABELS: Record<Position, { zh: string; en: string; icon: string }> = {
  top:     { zh: '上单', en: 'Top',     icon: '🛡️' },
  jungle:  { zh: '打野', en: 'Jungle',  icon: '🌲' },
  mid:     { zh: '中单', en: 'Mid',     icon: '⚡' },
  adc:     { zh: 'AD',   en: 'ADC',     icon: '🏹' },
  support: { zh: '辅助', en: 'Support', icon: '💚' },
};

export const PLAYERS: Player[] = [
  { name: '大灰蛛',         positions: { top: 'hanbao',      jungle: 'npc',    mid: 'renshangren', adc: 'hanbaole',   support: 'dingji' } },
  { name: '青衫持刹那',     positions: { top: 'renshangren', jungle: 'hanbao', mid: 'hanbaole',    adc: 'dingji',     support: 'npc' } },
  { name: '恶魔人',         positions: { top: 'dingji',     jungle: 'renshangren', mid: 'npc',     adc: 'hanbao',    support: 'hanbaole' } },
  { name: '忘绝尘',         positions: { top: 'hanbaole',   jungle: 'dingji', mid: 'hanbao',      adc: 'renshangren',support: 'lawanle' } },
  { name: '万一赢了呢',     positions: { top: 'renshangren',jungle: 'hanbaole',mid: 'dingji',     adc: 'hanbao',     support: 'npc' } },
  { name: 'BUG天翼',        positions: { top: 'hanbao',     jungle: 'hanbaole',mid: 'renshangren', adc: 'dingji',     support: 'lawanle' } },
  { name: '夜行少女',       positions: { top: 'lawanle',    jungle: 'npc',    mid: 'hanbao',      adc: 'hanbaole',   support: 'dingji' } },
  { name: '牢王野狗Ovo',    positions: { top: 'renshangren',jungle: 'dingji', mid: 'hanbao',      adc: 'lawanle',    support: 'hanbaole' } },
  { name: '叛徒陈锦坤',     positions: { top: 'dingji',     jungle: 'hanbao', mid: 'renshangren', adc: 'hanbaole',   support: 'lawanle' } },
  { name: '打弟弟专用号',   positions: { top: 'hanbao',     jungle: 'dingji', mid: 'hanbaole',    adc: 'renji',      support: 'renshangren' } },
  { name: '充钱怪',         positions: { top: 'renshangren',jungle: 'lawanle',mid: 'hanbao',      adc: 'dingji',     support: 'hanbaole' } },
  { name: '杨晓豪石头人塞拉斯', positions: { top: 'lawanle', jungle: 'renshangren',mid: 'dingji',  adc: 'hanbao',     support: 'hanbaole' } },
  { name: '10子',           positions: { top: 'hanbaole',   jungle: 'hanbao', mid: 'dingji',      adc: 'renshangren',support: 'lawanle' } },
  { name: '老鼠头',         positions: { top: 'npc',        jungle: 'lawanle',mid: 'renshangren', adc: 'hanbaole',   support: 'hanbao' } },
  { name: '烧比羊羊',       positions: { top: 'renji',      jungle: 'npc',    mid: 'hanbao',      adc: 'dingji',     support: 'hanbaole' } },
  { name: '临时玩家1',      positions: { top: 'hanbao',     jungle: 'hanbaole',mid: 'hanbao',     adc: 'dingji',     support: 'renshangren' } },
  { name: '临时玩家2',      positions: { top: 'lawanle',    jungle: 'renji',  mid: 'dingji',      adc: 'hanbao',     support: 'hanbaole' } },
  { name: '临时玩家3',      positions: { top: 'dingji',     jungle: 'renshangren',mid: 'hanbaole', adc: 'lawanle',    support: 'hanbao' } },
  { name: '临时玩家4',      positions: { top: 'renshangren',jungle: 'dingji', mid: 'lawanle',     adc: 'hanbao',     support: 'hanbaole' } },
  { name: '临时玩家5',      positions: { top: 'hanbaole',   jungle: 'lawanle',mid: 'renshangren', adc: 'hanbao',     support: 'dingji' } },
  { name: '临时玩家6',      positions: { top: 'lawanle',    jungle: 'renshangren',mid: 'hanbao',  adc: 'hanbaole',   support: 'dingji' } },
  { name: '临时玩家7',      positions: { top: 'dingji',     jungle: 'hanbaole',mid: 'dingji',     adc: 'renshangren',support: 'lawanle' } },
  { name: '临时玩家8',      positions: { top: 'hanbao',     jungle: 'hanbaole',mid: 'dingji',     adc: 'lawanle',    support: 'renshangren' } },
  { name: '临时玩家9',      positions: { top: 'renshangren',jungle: 'hanbao', mid: 'hanbaole',    adc: 'lawanle',    support: 'dingji' } },
  { name: '临时玩家10',     positions: { top: 'lawanle',    jungle: 'renshangren',mid: 'dingji',  adc: 'hanbao',     support: 'hanbaole' } },
];
