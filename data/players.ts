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
  /**
   * 玩家标签，纯展示信息，不参与分组计算。
   * 常驻成员直接写在这里（进 git，所有人可见）；
   * 临时玩家的标签在页面「添加玩家」时确定，存浏览器本地，见 lib/players/。
   */
  tags?: string[];
}

/**
 * 档位 ELO 刻度（v1.5 起）：相邻档位统一相差 30 分，对应单人胜率约 54%，
 * 是"能感觉到、但不过分"的粒度。旧的 10 分档（夯爆了/夯、拉完了/人机）
 * 只对应 51.4% 胜率，等于抛硬币，已废弃。
 * 实测本表 39 位玩家：单人加权均值 115.2，队伍加权总分均值约 576。
 * 注意：由于 5 个位置各有 2 人、共 32 种切分，算法在 300 次尝试内几乎总能凑出
 * 恰好 0 分差的完美五五开，因此 10% 阈值实际很少成为约束条件。
 */
export const TIER_INFO: Record<TierKey, { label: string; elo: number; color: string; icon: string; rank: string }> = {
  hangbaole:   { label: '夯爆了', elo: 220, color: 'bg-red-500', icon: '🔥', rank: '大师及以上' },
  hang:        { label: '夯',     elo: 190, color: 'bg-orange-500', icon: '💪', rank: '钻1钻2' },
  dingji:     { label: '顶级',   elo: 160, color: 'bg-yellow-500', icon: '👑', rank: '钻石' },
  renshangren:{ label: '人上人', elo: 130, color: 'bg-green-500', icon: '⭐', rank: '翡翠' },
  npc:        { label: 'NPC',    elo: 100, color: 'bg-blue-500', icon: '🤖', rank: '白金' },
  lawanle:    { label: '拉完了', elo:  70, color: 'bg-purple-500', icon: '😭', rank: '黄金' },
  renji:      { label: '人机',   elo:  40, color: 'bg-gray-500', icon: '👾', rank: '黑铁 / 骇人鲸' },
};

export const POSITION_LABELS: Record<Position, { zh: string; en: string; icon: string }> = {
  top:     { zh: '上单', en: 'Top',     icon: '🛡️' },
  jungle:  { zh: '打野', en: 'Jungle',  icon: '🌲' },
  mid:     { zh: '中单', en: 'Mid',     icon: '⚡' },
  adc:     { zh: 'AD',   en: 'ADC',     icon: '🏹' },
  support: { zh: '辅助', en: 'Support', icon: '💚' },
};

export const PLAYERS: Player[] = [
  { name: '大灰蛛',         tags: ['咕咕嘎嘎'], positions: { top: 'npc',    jungle: 'dingji', mid: 'lawanle',        adc: 'renshangren', support: 'npc' } },
  { name: '忘绝尘',         tags: ['咕咕嘎嘎'], positions: { top: 'lawanle',    jungle: 'lawanle', mid: 'lawanle',      adc: 'lawanle',      support: 'renshangren' } },
  { name: '夜行少女',       tags: ['咕咕嘎嘎'], positions: { top: 'renshangren',jungle: 'lawanle', mid: 'renshangren',        adc: 'hang',       support: 'dingji' } },
  { name: '牢王Ovo',    tags: ['牢王'], positions: { top: 'hang',       jungle: 'hangbaole',mid: 'dingji',      adc: 'renshangren',     support: 'hang' } },
  { name: '余晖光年',     tags: ['咕咕嘎嘎'], positions: { top: 'lawanle',    jungle: 'npc',    mid: 'dingji',        adc: 'renshangren',support: 'hang' } },
  { name: '打弟弟专用号',   tags: ['咕咕嘎嘎'], positions: { top: 'dingji',     jungle: 'npc',    mid: 'renshangren',   adc: 'lawanle',    support: 'npc' } },
  { name: '充钱怪',         tags: ['咕咕嘎嘎'], positions: { top: 'lawanle',    jungle: 'npc',    mid: 'hang',          adc: 'renshangren',     support: 'dingji' } },
  { name: '朗哥',           tags: ['咕咕嘎嘎'], positions: { top: 'lawanle',    jungle: 'dingji', mid: 'npc',          adc: 'npc',        support: 'dingji' } },
  { name: '杨晓豪石头人', tags: ['咕咕嘎嘎'], positions: { top: 'dingji',   jungle: 'npc',    mid: 'renshangren', adc: 'lawanle',    support: 'npc' } },
  { name: '小岩',           tags: ['咕咕嘎嘎'], positions: { top: 'lawanle',    jungle: 'renshangren',mid: 'npc',      adc: 'renshangren',     support: 'dingji' } },
  { name: '青衫持刹那',     tags: ['再次抽象'], positions: { top: 'npc',       jungle: 'hang',    mid: 'renshangren',   adc: 'renshangren', support: 'dingji' } },
  { name: '吕庚辰',         tags: ['再次抽象'], positions: { top: 'dingji',    jungle: 'lawanle', mid: 'renshangren',   adc: 'lawanle',     support: 'renshangren' } },
  { name: '早春野湖',       tags: ['再次抽象'], positions: { top: 'lawanle',       jungle: 'renshangren', mid: 'npc', adc: 'dingji',     support: 'renshangren' } },
  { name: '水里de石头',     tags: ['再次抽象'], positions: { top: 'dingji',    jungle: 'lawanle', mid: 'renshangren',   adc: 'dingji',      support: 'renshangren' } },
  { name: '再见时心动',     tags: ['再次抽象'], positions: { top: 'lawanle',   jungle: 'lawanle', mid: 'npc',          adc: 'renshangren', support: 'dingji' } },
  { name: '不发脾气',       tags: ['再次抽象'], positions: { top: 'lawanle',   jungle: 'lawanle', mid: 'lawanle',       adc: 'npc',         support: 'renshangren' } },
  { name: '恶魔人',         tags: ['再次抽象'], positions: { top: 'dingji',    jungle: 'renshangren', mid: 'hangbaole', adc: 'renshangren', support: 'renshangren' } },
  { name: 'BUG天翼',           tags: ['精英咕咕嘎嘎'], positions: { top: 'npc',       jungle: 'npc',    mid: 'npc',           adc: 'lawanle',     support: 'npc' } },
  { name: '10子',           tags: ['精英咕咕嘎嘎'], positions: { top: 'npc',       jungle: 'npc',    mid: 'dingji',        adc: 'npc',         support: 'npc' } },
  { name: '老五',           tags: ['精英咕咕嘎嘎'], positions: { top: 'lawanle',   jungle: 'lawanle', mid: 'lawanle',       adc: 'npc',         support: 'npc' } },
  { name: '阳哥',           tags: ['精英咕咕嘎嘎'], positions: { top: 'npc',       jungle: 'npc',    mid: 'dingji',        adc: 'renshangren', support: 'npc' } },
  { name: '万一赢了呢',           tags: ['精英咕咕嘎嘎'], positions: { top: 'dingji',    jungle: 'npc',    mid: 'dingji',        adc: 'npc',         support: 'renshangren' } },
  { name: '一头一尾',       tags: ['精英咕咕嘎嘎'], positions: { top: 'npc',       jungle: 'npc',    mid: 'npc',           adc: 'npc',         support: 'npc' } },
  { name: '我从未觉得',     positions: { top: 'npc',       jungle: 'renshangren', mid: 'npc',      adc: 'npc',         support: 'npc' } },
  { name: '哄完老婆',     tags: ['大董'], positions: { top: 'lawanle',       jungle: 'lawanle', mid: 'npc',      adc: 'npc',         support: 'renshangren' } },
  { name: '雇佣者',         positions: { top: 'renshangren', jungle: 'renshangren', mid: 'npc',     adc: 'npc',         support: 'npc' } },
  { name: '雷展赫',         positions: { top: 'renshangren',       jungle: 'dingji', mid: 'npc',       adc: 'npc',         support: 'npc' } },
  { name: '许天麒',         positions: { top: 'npc',       jungle: 'lawanle',     mid: 'renshangren', adc: 'lawanle',      support: 'npc' } },
  { name: '张序然',         positions: { top: 'renshangren', jungle: 'npc',        mid: 'npc',       adc: 'npc',     support: 'npc' } },
  { name: '羊羊',           tags: ['羊羊'], positions: { top: 'dingji', jungle: 'hang',   mid: 'hang', adc: 'renshangren',   support: 'renshangren' } },
  { name: '泰隆0u0',           positions: { top: 'renshangren',   jungle: 'dingji', mid: 'hang', adc: 'renshangren',         support: 'renshangren' } },
  { name: '成都meiko',      positions: { top: 'lawanle',   jungle: 'npc',         mid: 'npc',         adc: 'npc',         support: 'renshangren' } },
  { name: '孤独娱乐',           tags: ['白虎'], positions: { top: 'npc',       jungle: 'dingji',     mid: 'renshangren',         adc: 'dingji',      support: 'npc' } },
  { name: '佳佳pp',          positions: { top: 'lawanle',   jungle: 'lawanle',    mid: 'npc',         adc: 'npc',         support: 'renshangren' } },
  { name: '你的笑点好低',     positions: { top: 'renshangren', jungle: 'hang',     mid: 'renshangren', adc: 'renshangren', support: 'npc' } },
  { name: '状态好能一换一',   positions: { top: 'npc',       jungle: 'npc',         mid: 'npc',         adc: 'hang',        support: 'npc' } },
  { name: '临江边',   positions: { top: 'renji',       jungle: 'lawanle',         mid: 'renji',         adc: 'lawanle',        support: 'renji' } },
  { name: '童话书',   positions: { top: 'npc',       jungle: 'lawanle',         mid: 'renshangren',         adc: 'lawanle',        support: 'dingji' } },
  { name: '青山不解风情',     positions: { top: 'lawanle',   jungle: 'lawanle',    mid: 'renshangren', adc: 'lawanle',    support: 'dingji' } }
];