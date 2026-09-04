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
  { name: '大灰蛛',         positions: { top: 'npc',    jungle: 'dingji', mid: 'lawanle',        adc: 'renshangren', support: 'npc' } },
  { name: '忘绝尘',         positions: { top: 'lawanle',    jungle: 'lawanle', mid: 'lawanle',      adc: 'lawanle',      support: 'renshangren' } },
  { name: '夜行少女',       positions: { top: 'renshangren',jungle: 'lawanle', mid: 'renshangren',        adc: 'hang',       support: 'dingji' } },
  { name: '牢王Ovo',    positions: { top: 'hang',       jungle: 'hangbaole',mid: 'dingji',      adc: 'renshangren',     support: 'hang' } },
  { name: '余晖光年',     positions: { top: 'lawanle',    jungle: 'npc',    mid: 'dingji',        adc: 'renshangren',support: 'hang' } },
  { name: '打弟弟专用号',   positions: { top: 'dingji',     jungle: 'npc',    mid: 'renshangren',   adc: 'lawanle',    support: 'npc' } },
  { name: '充钱怪',         positions: { top: 'lawanle',    jungle: 'npc',    mid: 'hang',          adc: 'renshangren',     support: 'dingji' } },
  { name: '朗哥',           positions: { top: 'lawanle',    jungle: 'dingji', mid: 'npc',          adc: 'npc',        support: 'dingji' } },
  { name: '杨晓豪塞拉斯石头人', positions: { top: 'dingji',   jungle: 'npc',    mid: 'renshangren', adc: 'lawanle',    support: 'npc' } },
  { name: '小岩',           positions: { top: 'lawanle',    jungle: 'renshangren',mid: 'npc',      adc: 'renshangren',     support: 'dingji' } },
  { name: '青衫持刹那',     positions: { top: 'npc',       jungle: 'hang',    mid: 'renshangren',   adc: 'renshangren', support: 'dingji' } },
  { name: '吕庚辰',         positions: { top: 'dingji',    jungle: 'lawanle', mid: 'renshangren',   adc: 'lawanle',     support: 'renshangren' } },
  { name: '早春野湖',       positions: { top: 'lawanle',       jungle: 'renshangren', mid: 'npc', adc: 'dingji',     support: 'renshangren' } },
  { name: '水里de石头',     positions: { top: 'dingji',    jungle: 'lawanle', mid: 'renshangren',   adc: 'dingji',      support: 'renshangren' } },
  { name: '再见时心动',     positions: { top: 'lawanle',   jungle: 'lawanle', mid: 'npc',          adc: 'renshangren', support: 'dingji' } },
  { name: '不发脾气',       positions: { top: 'lawanle',   jungle: 'lawanle', mid: 'lawanle',       adc: 'npc',         support: 'renshangren' } },
  { name: '恶魔人',         positions: { top: 'dingji',    jungle: 'renshangren', mid: 'hangbaole', adc: 'renshangren', support: 'renshangren' } },
  { name: '唐牛',           positions: { top: 'npc',       jungle: 'npc',    mid: 'npc',           adc: 'lawanle',     support: 'npc' } },
  { name: '10子',           positions: { top: 'npc',       jungle: 'npc',    mid: 'dingji',        adc: 'npc',         support: 'npc' } },
  { name: '老五',           positions: { top: 'lawanle',   jungle: 'lawanle', mid: 'lawanle',       adc: 'npc',         support: 'npc' } },
  { name: '阳哥',           positions: { top: 'npc',       jungle: 'npc',    mid: 'dingji',        adc: 'renshangren', support: 'npc' } },
  { name: '牛智',           positions: { top: 'dingji',    jungle: 'npc',    mid: 'dingji',        adc: 'npc',         support: 'renshangren' } },
  { name: '一头一尾',       positions: { top: 'npc',       jungle: 'npc',    mid: 'npc',           adc: 'npc',         support: 'npc' } },
  { name: '我从未觉得',     positions: { top: 'npc',       jungle: 'renshangren', mid: 'npc',      adc: 'npc',         support: 'npc' } },
  { name: '哄完老婆',     positions: { top: 'lawanle',       jungle: 'lawanle', mid: 'npc',      adc: 'npc',         support: 'renshangren' } },
  { name: '雇佣者',         positions: { top: 'renshangren', jungle: 'renshangren', mid: 'npc',     adc: 'npc',         support: 'npc' } },
  { name: '雷展赫',         positions: { top: 'renshangren',       jungle: 'dingji', mid: 'npc',       adc: 'npc',         support: 'npc' } },
  { name: '许天麒',         positions: { top: 'npc',       jungle: 'lawanle',     mid: 'renshangren', adc: 'lawanle',      support: 'npc' } },
  { name: '张序然',         positions: { top: 'renshangren', jungle: 'npc',        mid: 'npc',       adc: 'npc',     support: 'npc' } },
  { name: '我一点都不温柔',           positions: { top: 'npc',       jungle: 'renshangren', mid: 'dingji',    adc: 'dingji',      support: 'renshangren' } },
  { name: '羊羊',           positions: { top: 'dingji', jungle: 'hang',   mid: 'hang', adc: 'renshangren',   support: 'renshangren' } },
  { name: '泰隆0u0',           positions: { top: 'renshangren',   jungle: 'dingji', mid: 'hang', adc: 'renshangren',         support: 'renshangren' } },
  { name: '成都meiko',      positions: { top: 'lawanle',   jungle: 'npc',         mid: 'npc',         adc: 'npc',         support: 'renshangren' } },
  { name: '孤独娱乐',           positions: { top: 'npc',       jungle: 'dingji',     mid: 'npc',         adc: 'dingji',      support: 'npc' } },
  { name: '佳佳pp',          positions: { top: 'lawanle',   jungle: 'lawanle',    mid: 'npc',         adc: 'npc',         support: 'renshangren' } },
  { name: '你的笑点好低',     positions: { top: 'renshangren', jungle: 'hang',     mid: 'renshangren', adc: 'renshangren', support: 'npc' } },
  { name: '状态好能一换一',   positions: { top: 'npc',       jungle: 'npc',         mid: 'npc',         adc: 'hang',        support: 'npc' } },
  { name: '青山不解风情',     positions: { top: 'lawanle',   jungle: 'lawanle',    mid: 'renshangren', adc: 'lawanle',    support: 'dingji' } }
];