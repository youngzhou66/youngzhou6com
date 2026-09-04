'use client';

import { useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  PLAYERS as BASE_PLAYERS,
  TIER_INFO,
  POSITION_LABELS,
  type Player,
  type Position,
  type TierKey,
} from '@/data/players';
import {
  CHAMPIONS_DATA,
  type ChampionEntry,
} from '@/data/champions';

type SortMode = 'balanced' | 'random';

interface GroupedPlayer {
  player: Player;
  position: Position;
  tier: TierKey;
  elo: number;
}

interface Team {
  name: string;
  color: string;
  players: GroupedPlayer[];
  totalElo: number;
}

type ChampionPoolMode = 'all' | 'top20' | 'meta';

const CHAMPION_POOL_OPTIONS: { id: ChampionPoolMode; label: string; hint: string }[] = [
  { id: 'all', label: '全英雄', hint: '从该位置 OP.GG 全部榜单英雄中抽取' },
  { id: 'top20', label: '热门 前20', hint: '只从该位置胜率/登场率前 20 名中抽取' },
  { id: 'meta', label: 'Tier 1~2', hint: '只从 OP.GG 版本强势（Tier 1~2）英雄中抽取' },
];

function championDrawErrorText(count: number): string {
  return `当前英雄池无法为 10 位玩家凑出 ${count * 10} 个不重复的英雄，请切换到更大的英雄池后再试`;
}

const OPGG_QUEUE_LABELS: Record<string, string> = { ranked: '单双排' };
const OPGG_REGION_LABELS: Record<string, string> = { global: '全服' };
const OPGG_TIER_LABELS: Record<string, string> = {
  emerald_plus: '翡翠+',
  diamond_plus: '钻石+',
  platinum_plus: '白金+',
};

function opggSnapshotText(): string {
  const queue = OPGG_QUEUE_LABELS[CHAMPIONS_DATA.queue] ?? CHAMPIONS_DATA.queue;
  const region = OPGG_REGION_LABELS[CHAMPIONS_DATA.region] ?? CHAMPIONS_DATA.region;
  const tier = OPGG_TIER_LABELS[CHAMPIONS_DATA.tier] ?? CHAMPIONS_DATA.tier;
  const date = CHAMPIONS_DATA.updatedAt.slice(0, 10);
  return `${queue} · ${region} · ${tier} · 更新 ${date}`;
}

const POSITIONS: Position[] = ['top', 'jungle', 'mid', 'adc', 'support'];

const TEAM_NAMES = [
  { zh: '蓝方', en: 'Blue Side', color: 'from-blue-500 to-blue-600' },
  { zh: '红方', en: 'Red Side', color: 'from-red-500 to-red-600' },
];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface AssignResult {
  team1: GroupedPlayer[];
  team2: GroupedPlayer[];
}

function tryAssign(
  players: Player[],
  lockedPositions: Record<string, Position[]>
): AssignResult | null {
  const team1: GroupedPlayer[] = [];
  const team2: GroupedPlayer[] = [];
  const pos1 = new Set<Position>();
  const pos2 = new Set<Position>();

  const shuffled = shuffle(players);

  const assigned = new Set<string>();

  for (const player of shuffled) {
    if (assigned.has(player.name)) continue;

    const locked = lockedPositions[player.name] || [];

    const candidates: { pos: Position; elo: number; team: 't1' | 't2' }[] = [];

    if (locked.length > 0) {
      for (const pos of locked) {
        const elo = TIER_INFO[player.positions[pos]].elo;
        if (!pos1.has(pos) && team1.length < 5) {
          candidates.push({ pos, elo, team: 't1' });
        }
        if (!pos2.has(pos) && team2.length < 5) {
          candidates.push({ pos, elo, team: 't2' });
        }
      }
    } else {
      const playerPositions = POSITIONS.filter(
        (p) => !isNaN(TIER_INFO[player.positions[p]].elo)
      );

      for (const p of playerPositions) {
        const elo = TIER_INFO[player.positions[p]].elo;
        if (!pos1.has(p) && team1.length < 5) {
          candidates.push({ pos: p, elo, team: 't1' });
        }
        if (!pos2.has(p) && team2.length < 5) {
          candidates.push({ pos: p, elo, team: 't2' });
        }
      }
    }

    if (candidates.length === 0) continue;

    candidates.sort((a, b) => a.elo - b.elo);

    const t1Elo = team1.reduce((s, x) => s + x.elo, 0);
    const t2Elo = team2.reduce((s, x) => s + x.elo, 0);

    let best = candidates[0];
    let bestDiff = Infinity;

    for (const c of candidates) {
      const newElo = (c.team === 't1' ? t1Elo : t2Elo) + c.elo;
      const otherElo = c.team === 't1' ? t2Elo : t1Elo;
      const diff = Math.abs(newElo - otherElo);
      if (diff < bestDiff) {
        bestDiff = diff;
        best = c;
      }
    }

    if (best.team === 't1') {
      team1.push({ player, position: best.pos, tier: player.positions[best.pos], elo: best.elo });
      pos1.add(best.pos);
    } else {
      team2.push({ player, position: best.pos, tier: player.positions[best.pos], elo: best.elo });
      pos2.add(best.pos);
    }
    assigned.add(player.name);
  }

  if (team1.length === 5 && team2.length === 5) {
    return { team1, team2 };
  }
  return null;
}

function generateBalancedGroups(
  players: Player[],
  lockedPositions: Record<string, Position[]>,
  threshold: number
): AssignResult {
  for (let attempt = 0; attempt < 300; attempt++) {
    const result = tryAssign(players, lockedPositions);
    if (result) {
      const elo1 = result.team1.reduce((s, p) => s + p.elo, 0);
      const elo2 = result.team2.reduce((s, p) => s + p.elo, 0);
      const maxElo = Math.max(elo1, elo2);
      const diffRatio = Math.abs(elo1 - elo2) / maxElo;
      if (diffRatio <= threshold) {
        return result;
      }
    }
  }

  for (let attempt = 0; attempt < 500; attempt++) {
    const result = tryAssign(players, lockedPositions);
    if (result) return result;
  }

  return { team1: [], team2: [] };
}

function generateRandomGroups(
  players: Player[],
  lockedPositions: Record<string, Position[]>
): AssignResult {
  for (let attempt = 0; attempt < 100; attempt++) {
    const result = tryAssign(players, lockedPositions);
    if (result) return result;
  }
  return { team1: [], team2: [] };
}

function championPoolFor(position: Position, mode: ChampionPoolMode): ChampionEntry[] {
  const list = CHAMPIONS_DATA.positions[position];
  if (mode === 'top20') return list.slice(0, 20);
  if (mode === 'meta') return list.filter((c) => c.tier <= 2);
  return list;
}

function drawChampionAssignments(
  players: GroupedPlayer[],
  mode: ChampionPoolMode,
  count: number
): Record<string, ChampionEntry[]> | null {
  // 每次尝试都重新随机玩家顺序，避免固定“先选上单、后选打野”造成的位置先后偏差
  const tryPick = () => {
    const taken = new Set<string>();
    const result: Record<string, ChampionEntry[]> = {};

    for (const gp of shuffle(players)) {
      const pool = championPoolFor(gp.position, mode);
      const candidates = shuffle(pool.filter((c) => !taken.has(c.key)));
      if (candidates.length < count) return null;

      const chosen = candidates.slice(0, count);
      result[gp.player.name] = chosen;
      for (const c of chosen) taken.add(c.key);
    }
    return result;
  };

  // 严格保证全场 count*10 个英雄不重复（同一局里不能出现相同英雄），
  // 试不出来就直接返回 null，由页面提示用户，不进入“允许重复”的兜底
  for (let attempt = 0; attempt < 400; attempt++) {
    const result = tryPick();
    if (result) return result;
  }
  return null;
}

function ChampionPickCard({ champion }: { champion: ChampionEntry }) {
  const winColor =
    champion.winRate >= 50
      ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
      : 'bg-red-500/10 text-red-300 border-red-500/20';

  return (
    <div
      title={`${champion.name} · OP.GG #${champion.rank} · 胜率 ${champion.winRate.toFixed(1)}% · 登场率 ${champion.pickRate.toFixed(1)}%`}
      className="flex items-center gap-2 rounded-lg bg-[#12151f] border border-white/10 px-2 py-1.5 shadow-sm hover:border-cyan-400/30 transition-colors"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={champion.imageUrl}
        alt={champion.name}
        loading="lazy"
        className="w-9 h-9 rounded-lg object-cover border border-white/10 flex-shrink-0"
      />
      <div className="min-w-0">
        <div className="text-xs font-semibold text-gray-100 truncate">{champion.name}</div>
        <div className="mt-1 flex flex-wrap items-center gap-1">
          <span
            className={`inline-flex items-center rounded border px-1 py-0.5 text-[10px] font-medium leading-none ${winColor}`}
          >
            胜率 {champion.winRate.toFixed(1)}%
          </span>
          <span className="inline-flex items-center rounded border border-sky-500/20 bg-sky-500/10 px-1 py-0.5 text-[10px] font-medium leading-none text-sky-300">
            登场 {champion.pickRate.toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
}

const TIER_KEYS = Object.keys(TIER_INFO) as TierKey[];

export default function GroupPage() {
  return <GroupPageContent />;
}

function GroupPageContent() {
  const [customPlayers, setCustomPlayers] = useState<Player[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [lockedPositions, setLockedPositions] = useState<Record<string, Position[]>>({});
  const [teams, setTeams] = useState<Team[] | null>(null);
  const [championPoolMode, setChampionPoolMode] = useState<ChampionPoolMode>('all');
  const [championDraws, setChampionDraws] = useState<Record<string, ChampionEntry[]>>({});
  const [heroCountPerPlayer, setHeroCountPerPlayer] = useState(2);
  const [showChampionPool, setShowChampionPool] = useState(false);
  const [championDrawError, setChampionDrawError] = useState<string | null>(null);
  const [sortMode, setSortMode] = useState<SortMode>('balanced');
  const [threshold, setThreshold] = useState(0.15);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showAlgorithm, setShowAlgorithm] = useState(false);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [newPlayerTiers, setNewPlayerTiers] = useState<Record<Position, TierKey>>({
    top: 'npc', jungle: 'npc', mid: 'npc', adc: 'npc', support: 'npc',
  });

  const resultRef = useRef<HTMLDivElement>(null);

  const allPlayers = useMemo(() => [...BASE_PLAYERS, ...customPlayers], [customPlayers]);

  const togglePlayer = (name: string) => {
    if (selected.includes(name)) {
      setSelected(selected.filter((n) => n !== name));
      const newLocked = { ...lockedPositions };
      delete newLocked[name];
      setLockedPositions(newLocked);
    } else {
      setSelected([...selected, name]);
      setLockedPositions({ ...lockedPositions, [name]: [] });
    }
    setTeams(null);
  };

  const togglePosition = (name: string, pos: Position) => {
    const current = lockedPositions[name] || [];
    const next = current.includes(pos)
      ? current.filter((p) => p !== pos)
      : [...current, pos];
    setLockedPositions({ ...lockedPositions, [name]: next });
  };

  const selectedCount = selected.length;
  const selectedSet = new Set(selected);

  const handleGenerate = useCallback(() => {
    if (selected.length !== 10) return;
    const selectedPlayers = allPlayers.filter((p) => selected.includes(p.name));

    const result = sortMode === 'balanced'
      ? generateBalancedGroups(selectedPlayers, lockedPositions, threshold)
      : generateRandomGroups(selectedPlayers, lockedPositions);

    const championAssignments = drawChampionAssignments(
      [...result.team1, ...result.team2],
      championPoolMode,
      heroCountPerPlayer
    );
    if (championAssignments) {
      setChampionDraws(championAssignments);
      setChampionDrawError(null);
    } else {
      setChampionDraws({});
      setChampionDrawError(championDrawErrorText(heroCountPerPlayer));
    }

    const elo1 = result.team1.reduce((s, p) => s + p.elo, 0);
    const elo2 = result.team2.reduce((s, p) => s + p.elo, 0);

    setTeams([
      {
        name: TEAM_NAMES[0].zh,
        color: TEAM_NAMES[0].color,
        players: result.team1,
        totalElo: elo1,
      },
      {
        name: TEAM_NAMES[1].zh,
        color: TEAM_NAMES[1].color,
        players: result.team2,
        totalElo: elo2,
      },
    ]);
  }, [selected, sortMode, lockedPositions, threshold, allPlayers, championPoolMode, heroCountPerPlayer]);

  const rerollChampions = () => {
    if (!teams || teams[0].players.length !== 5 || teams[1].players.length !== 5) return;
    const drawnPlayers = [...teams[0].players, ...teams[1].players];
    const nextDraw = drawChampionAssignments(
      drawnPlayers,
      championPoolMode,
      heroCountPerPlayer
    );
    if (nextDraw) {
      setChampionDraws(nextDraw);
      setChampionDrawError(null);
    } else {
      setChampionDraws({});
      setChampionDrawError(championDrawErrorText(heroCountPerPlayer));
    }
  };

  const changeChampionPoolMode = (mode: ChampionPoolMode) => {
    setChampionPoolMode(mode);
    if (teams && teams[0].players.length === 5 && teams[1].players.length === 5) {
      const drawnPlayers = [...teams[0].players, ...teams[1].players];
      const nextDraw = drawChampionAssignments(drawnPlayers, mode, heroCountPerPlayer);
      if (nextDraw) {
        setChampionDraws(nextDraw);
        setChampionDrawError(null);
      } else {
        setChampionDraws({});
        setChampionDrawError(championDrawErrorText(heroCountPerPlayer));
      }
    }
  };

  const changeHeroCountPerPlayer = (count: number) => {
    setHeroCountPerPlayer(count);
    if (teams && teams[0].players.length === 5 && teams[1].players.length === 5) {
      const drawnPlayers = [...teams[0].players, ...teams[1].players];
      const nextDraw = drawChampionAssignments(drawnPlayers, championPoolMode, count);
      if (nextDraw) {
        setChampionDraws(nextDraw);
        setChampionDrawError(null);
      } else {
        setChampionDraws({});
        setChampionDrawError(championDrawErrorText(count));
      }
    }
  };

  useEffect(() => {
    if (teams && resultRef.current) {
      setTimeout(() => {
        resultRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }
  }, [teams]);

  const clearAll = () => {
    setSelected([]);
    setLockedPositions({});
    setTeams(null);
  };

  const randomSelect = () => {
    const shuffled = shuffle(allPlayers);
    const selected10 = shuffled.slice(0, 10).map((p) => p.name);
    setSelected(selected10);
    const newLocked: Record<string, Position[]> = {};
    selected10.forEach((name) => {
      newLocked[name] = [];
    });
    setLockedPositions(newLocked);
    setTeams(null);
  };

  const addCustomPlayer = () => {
    if (!newPlayerName.trim()) return;
    const newPlayer: Player = {
      name: newPlayerName.trim(),
      positions: { ...newPlayerTiers },
    };
    setCustomPlayers([...customPlayers, newPlayer]);
    setNewPlayerName('');
    setNewPlayerTiers({ top: 'npc', jungle: 'npc', mid: 'npc', adc: 'npc', support: 'npc' });
    setShowAddForm(false);
  };

  const removeCustomPlayer = (name: string) => {
    setCustomPlayers(customPlayers.filter((p) => p.name !== name));
    if (selected.includes(name)) {
      setSelected(selected.filter((n) => n !== name));
      const newLocked = { ...lockedPositions };
      delete newLocked[name];
      setLockedPositions(newLocked);
    }
    setTeams(null);
  };

  const eloDiff = teams ? Math.abs(teams[0].totalElo - teams[1].totalElo) : 0;
  const maxElo = teams ? Math.max(teams[0].totalElo, teams[1].totalElo) : 1;
  const diffRatio = maxElo > 0 ? eloDiff / maxElo : 0;

  return (
    <div>
      <div className="aurora-bg">
        <div className="aurora-orb" />
        <div className="aurora-lines" />
        <div className="aurora-grid" />
      </div>
      <div className="relative min-h-screen bg-gradient-to-b from-[#0c0e1a] via-[#0f1117] to-[#0c0e1a] text-gray-100 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
              LOL 智能分组
            </h1>
            <p className="text-gray-400 text-lg">
              选择 10 位玩家，系统将根据 ELO 智能平衡双方实力，并按位置抽取英雄
            </p>
          </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#1a1d27] border border-white/5 rounded-2xl p-6 shadow-xl mb-6"
        >
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="text-base font-bold text-white">👥 选择 10 位玩家</span>
              <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-300">
                已选 {selectedCount} / 10
              </span>
            </div>
            <div className="flex-1" />
            <div className="flex flex-wrap gap-2">
              <button
                onClick={randomSelect}
                className="px-3.5 py-2 bg-white/5 hover:bg-white/10 text-gray-200 text-sm rounded-lg border border-white/10 transition-colors"
              >
                🎲 随机选10人
              </button>
              <button
                onClick={clearAll}
                className="px-3.5 py-2 bg-white/5 hover:bg-white/10 text-gray-200 text-sm rounded-lg border border-white/10 transition-colors"
              >
                🗑️ 清空
              </button>
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="px-3.5 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-sm rounded-lg border border-cyan-500/30 transition-colors"
              >
                ➕ 添加玩家
              </button>
              <button
                onClick={() => setShowAlgorithm(true)}
                className="px-3.5 py-2 bg-white/5 hover:bg-white/10 text-gray-300 text-sm rounded-lg border border-white/10 transition-colors"
              >
                📖 算法原理
              </button>
            </div>
          </div>

          <AnimatePresence>
            {showAddForm && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="mb-4 overflow-hidden"
              >
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <div className="flex items-center gap-4 mb-4 flex-wrap">
                    <input
                      type="text"
                      value={newPlayerName}
                      onChange={(e) => setNewPlayerName(e.target.value)}
                      placeholder="玩家名称"
                      className="flex-1 min-w-[150px] px-3 py-2 bg-[#0f1117] border border-white/10 rounded-lg text-gray-100 text-sm focus:outline-none focus:border-cyan-500/50"
                    />
                    <button
                      onClick={addCustomPlayer}
                      disabled={!newPlayerName.trim()}
                      className={`px-4 py-2 rounded-lg text-sm font-medium text-white transition-all ${
                        newPlayerName.trim()
                          ? 'bg-cyan-500 hover:bg-cyan-400'
                          : 'bg-gray-600 cursor-not-allowed'
                      }`}
                    >
                      确认添加
                    </button>
                  </div>
                  <div className="text-xs text-gray-400 mb-2">为每个位置选择档次:</div>
                  <div className="grid grid-cols-5 gap-2">
                    {POSITIONS.map((pos) => (
                      <div key={pos} className="bg-[#0f1117] rounded-lg p-2 border border-white/5">
                        <div className="text-xs text-gray-400 mb-1 text-center">{POSITION_LABELS[pos].zh}</div>
                        <select
                          value={newPlayerTiers[pos]}
                          onChange={(e) => setNewPlayerTiers({ ...newPlayerTiers, [pos]: e.target.value as TierKey })}
                          className="w-full text-xs bg-[#1a1d27] border border-white/10 rounded px-1 py-1 text-gray-100 focus:outline-none focus:border-cyan-500/50"
                        >
                          {TIER_KEYS.map((key) => (
                            <option key={key} value={key}>
                              {TIER_INFO[key].label} ({TIER_INFO[key].elo})
                            </option>
                          ))}
                        </select>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {customPlayers.length > 0 && (
            <div className="mb-4 bg-white/5 border border-white/10 rounded-xl p-3">
              <div className="text-xs text-gray-400 mb-2">临时玩家 ({customPlayers.length}):</div>
              <div className="flex flex-wrap gap-2">
                {customPlayers.map((p) => (
                  <div key={p.name} className="flex items-center gap-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-2 py-1">
                    <span className="text-xs text-cyan-300">{p.name}</span>
                    <button
                      onClick={() => removeCustomPlayer(p.name)}
                      className="text-gray-500 hover:text-red-400 text-xs ml-1"
                    >
                      ✕
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-wrap gap-2">
            {allPlayers.map((player) => {
              const isCustom = customPlayers.some((p) => p.name === player.name);
              return (
                <div key={player.name} className="relative group">
                  <button
                    onClick={() => togglePlayer(player.name)}
                    className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                      selectedSet.has(player.name)
                        ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                        : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                    } ${isCustom ? 'ring-1 ring-cyan-400/50' : ''}`}
                  >
                    {player.name}
                  </button>
                  {isCustom && (
                    <span className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full" title="临时玩家" />
                  )}
                </div>
              );
            })}
          </div>
          <div className="mt-6 pt-5 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h3 className="text-base font-bold text-white">⚙️ 分组与英雄设置</h3>
              <span className="text-xs text-gray-500">
                已出结果时修改设置会立即按新配置重新抽取
              </span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="text-sm font-medium text-gray-300 mb-3">🧩 分组模式</div>
                <div className="flex bg-[#0f1117] rounded-lg p-1 border border-white/10">
                  <button
                    onClick={() => setSortMode('balanced')}
                    className={`flex-1 px-3 py-2 rounded-md text-sm transition-colors ${
                      sortMode === 'balanced'
                        ? 'bg-cyan-500 text-white font-medium'
                        : 'text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    智能平衡
                  </button>
                  <button
                    onClick={() => setSortMode('random')}
                    className={`flex-1 px-3 py-2 rounded-md text-sm transition-colors ${
                      sortMode === 'random'
                        ? 'bg-cyan-500 text-white font-medium'
                        : 'text-gray-400 hover:text-gray-200'
                    }`}
                  >
                    真随机
                  </button>
                </div>
                <p className="text-[11px] text-gray-500 mt-2">
                  智能平衡按 ELO 均衡实力；真随机只保证能凑成 5v5
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-300">⚖️ ELO 差值阈值</span>
                  {sortMode === 'balanced' && (
                    <span className="text-sm font-bold text-cyan-400">
                      {(threshold * 100).toFixed(0)}%
                    </span>
                  )}
                </div>
                {sortMode === 'balanced' ? (
                  <>
                    <input
                      type="range"
                      min="5"
                      max="60"
                      step="5"
                      value={threshold * 100}
                      onChange={(e) => setThreshold(Number(e.target.value) / 100)}
                      className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>严格 5%</span>
                      <span>宽松 60%</span>
                    </div>
                  </>
                ) : (
                  <p className="text-xs text-gray-500 leading-relaxed">
                    真随机模式不参与 ELO 均衡，无阈值
                  </p>
                )}
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-300">🎯 英雄池</span>
                  <button
                    onClick={() => setShowChampionPool(true)}
                    className="text-xs text-cyan-400/80 hover:text-cyan-300 transition-colors"
                  >
                    👁 查看英雄
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-1.5 bg-[#0f1117] rounded-lg p-1 border border-white/10">
                  {CHAMPION_POOL_OPTIONS.map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => changeChampionPoolMode(opt.id)}
                      title={opt.hint}
                      className={`px-2 py-2 rounded-md text-xs transition-colors ${
                        championPoolMode === opt.id
                          ? 'bg-cyan-500 text-white font-medium'
                          : 'text-gray-400 hover:text-gray-200'
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-gray-500 mt-2">
                  {CHAMPION_POOL_OPTIONS.find((o) => o.id === championPoolMode)?.hint}
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-300">🎲 每人英雄数</span>
                  <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-bold text-cyan-300">
                    {heroCountPerPlayer} 个
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="3"
                  step="1"
                  value={heroCountPerPlayer}
                  onChange={(e) => changeHeroCountPerPlayer(Number(e.target.value))}
                  className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1 px-0.5">
                  <span>1</span>
                  <span>2</span>
                  <span>3</span>
                </div>
                <p className="text-[11px] text-gray-500 mt-2">
                  10 人共需 {heroCountPerPlayer * 10} 个不重复英雄
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-center">
              <button
                onClick={handleGenerate}
                disabled={selected.length !== 10}
                className={`px-10 py-3 rounded-xl font-bold text-white transition-all ${
                  selected.length === 10
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40'
                    : 'bg-gray-600 cursor-not-allowed'
                }`}
              >
                ⚔️ 开始分组{selected.length === 10 ? '' : `（还需 ${10 - selected.length} 人）`}
              </button>
            </div>
          </div>
          <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-gray-500">
            <span>🎯 分组完成后会自动为每位玩家按位置抽出 {heroCountPerPlayer} 个英雄，默认全场不重复</span>
            <a
              href={CHAMPIONS_DATA.sourceUrl}
              target="_blank"
              rel="noreferrer"
              className="text-cyan-400/70 hover:text-cyan-300 transition-colors"
            >
              🎮 英雄数据来自 OP.GG · Patch {CHAMPIONS_DATA.patch} · {opggSnapshotText()}
            </a>
          </div>
        </motion.div>

        {selected.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#1a1d27] border border-white/5 rounded-2xl p-6 shadow-xl mb-6"
          >
            <h3 className="text-lg font-bold text-white mb-1">位置锁定（可选，支持多选）</h3>
            <p className="text-xs text-gray-500 mb-4">点击位置按钮锁定该位置（高亮），可同时锁定多个位置</p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {allPlayers.filter((p) => selected.includes(p.name)).map((player) => {
                const locked = lockedPositions[player.name] || [];
                return (
                  <div
                    key={player.name}
                    className={`bg-white/5 border rounded-lg p-3 transition-all ${
                      locked.length > 0
                        ? 'border-cyan-500/50 bg-cyan-500/5 shadow-lg shadow-cyan-500/10'
                        : 'border-white/10'
                    }`}
                  >
                    <div className={`font-medium text-sm mb-2 flex items-center gap-2 ${
                      locked.length > 0 ? 'text-cyan-300' : 'text-white'
                    }`}>
                      <span>{player.name}</span>
                      {locked.length > 0 && (
                        <span className="text-xs bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded">
                          已锁定 {locked.length}
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-1 gap-1">
                      {POSITIONS.map((pos) => {
                        const isLocked = locked.includes(pos);
                        const tier = TIER_INFO[player.positions[pos]];
                        return (
                          <button
                            key={pos}
                            onClick={() => togglePosition(player.name, pos)}
                            title={`${POSITION_LABELS[pos].zh}: ${tier.label} (${tier.elo})`}
                            className={`px-2 py-1.5 rounded text-xs transition-all flex items-center justify-between border ${
                              isLocked
                                ? `${tier.color} text-white font-bold border-transparent shadow-md scale-[1.02]`
                                : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200 border-white/5'
                            }`}
                          >
                            <span className={isLocked ? 'text-white' : ''}>{POSITION_LABELS[pos].zh}</span>
                            <span className={isLocked ? 'text-white/95' : 'text-gray-500'}>
                              {isLocked && '🔒 '}{tier.icon} {tier.label} {tier.elo}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {teams && (
            <motion.div
              key="result"
              ref={resultRef}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6 scroll-mt-24"
            >
              {teams[0].players.length === 5 && teams[1].players.length === 5 ? (
                <>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {teams.map((team, teamIdx) => (
                      <motion.div
                        key={team.name}
                        initial={{ opacity: 0, x: teamIdx === 0 ? -30 : 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + teamIdx * 0.1 }}
                        className={`relative rounded-2xl shadow-2xl overflow-hidden border-2 ${
                          teamIdx === 0 ? 'border-blue-500/40' : 'border-red-500/40'
                        }`}
                      >
                        <div className={`absolute inset-0 bg-gradient-to-br ${team.color} opacity-10`} />
                        <div className={`relative bg-gradient-to-r ${team.color} p-5`}>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl backdrop-blur-sm`}>
                                {teamIdx === 0 ? '🛡️' : '⚔️'}
                              </div>
                              <div>
                                <h3 className="text-2xl font-display font-bold text-white drop-shadow">
                                  {team.name}
                                </h3>
                                <div className="text-white/80 text-xs mt-0.5">
                                  {teamIdx === 0 ? 'BLUE SIDE' : 'RED SIDE'}
                                </div>
                              </div>
                            </div>
                            <div className="text-right bg-white/15 backdrop-blur-sm rounded-xl px-4 py-2">
                              <div className="text-white/70 text-xs tracking-wide">总 ELO</div>
                              <div className="text-white text-3xl font-bold">{team.totalElo}</div>
                            </div>
                          </div>
                        </div>

                        <div className="relative p-4 space-y-2 bg-[#1a1d27]/80 backdrop-blur-sm">
                          {POSITIONS.map((pos) => {
                            const gp = team.players.find((p) => p.position === pos);
                            if (!gp) return null;
                            const tier = TIER_INFO[gp.tier];
                            const champions = championDraws[gp.player.name];
                            return (
                              <div
                                key={pos}
                                className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
                              >
                                <div className={`w-9 h-9 rounded-lg ${tier.color} flex items-center justify-center text-lg flex-shrink-0`}>
                                  {POSITION_LABELS[pos].icon}
                                </div>
                                <div className="flex-1 min-w-0">
                                  <div className="text-xs text-gray-400 flex items-center gap-1.5">
                                    <span className="font-medium text-gray-300">{POSITION_LABELS[pos].zh}</span>
                                    <span className="text-gray-600">·</span>
                                    <span>{tier.label}</span>
                                  </div>
                                  <div className="font-semibold text-white text-sm truncate">{gp.player.name}</div>
                                  {champions && champions.length > 0 && (
                                    <div
                                      className={`mt-2 grid gap-1.5 ${
                                        champions.length === 1
                                          ? 'grid-cols-1'
                                          : champions.length === 2
                                          ? 'grid-cols-2'
                                          : 'grid-cols-2 sm:grid-cols-3'
                                      }`}
                                    >
                                      {champions.map((c) => (
                                        <ChampionPickCard key={c.key} champion={c} />
                                      ))}
                                    </div>
                                  )}
                                </div>
                                <div className={`px-2.5 py-1 rounded-full text-white text-xs font-bold ${tier.color} flex-shrink-0`}>
                                  {tier.icon} {tier.elo}
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center"
                  >
                    <div className="inline-flex items-center gap-6 bg-[#1a1d27] border border-white/10 rounded-full px-8 py-4 shadow-2xl">
                      <div className="flex items-center gap-2">
                        <span className="text-blue-400 text-sm">蓝方</span>
                        <span className="text-xl font-bold text-white">{teams[0].totalElo}</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <span className="text-xs text-gray-500">VS</span>
                        <span
                          className={`text-lg font-bold ${
                            diffRatio <= 0.15
                              ? 'text-green-400'
                              : diffRatio <= threshold
                              ? 'text-yellow-400'
                              : 'text-red-400'
                          }`}
                        >
                          {eloDiff} ({(diffRatio * 100).toFixed(1)}%)
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-white">{teams[1].totalElo}</span>
                        <span className="text-red-400 text-sm">红方</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <span className={`text-sm ${
                        diffRatio <= 0.15
                          ? 'text-green-400'
                          : diffRatio <= threshold
                          ? 'text-yellow-400'
                          : 'text-red-400'
                      }`}>
                        {diffRatio <= 0.15
                          ? '⚖️ 势均力敌'
                          : diffRatio <= threshold
                          ? '🙂 差距不大'
                          : '😅 有一定差距'}
                      </span>
                    </div>
                    {championDrawError && (
                      <div className="mt-4 mx-auto max-w-lg rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                        ⚠️ {championDrawError}
                      </div>
                    )}
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                      <button
                        onClick={rerollChampions}
                        title="保持当前队伍和位置，只重新抽取英雄"
                        className="px-5 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-sm rounded-lg border border-cyan-500/30 transition-colors"
                      >
                        🎲 重新抽英雄
                      </button>
                      <span className="text-xs text-gray-500">
                        {CHAMPION_POOL_OPTIONS.find((o) => o.id === championPoolMode)?.hint}
                      </span>
                    </div>
                  </motion.div>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12 bg-[#1a1d27] border border-white/5 rounded-2xl shadow-xl"
                >
                  <div className="text-6xl mb-4">😢</div>
                  <h3 className="text-xl font-bold text-white mb-2">分组失败</h3>
                  <p className="text-gray-400">
                    无法为 10 位玩家分配满足位置约束的阵容，请尝试：
                  </p>
                  <ul className="text-gray-400 text-sm mt-4 space-y-1">
                    <li>• 取消位置锁定后重试</li>
                    <li>• 更换部分玩家后重试</li>
                    <li>• 切换「真随机」模式</li>
                    <li>• 调高 ELO 差值阈值</li>
                  </ul>
                </motion.div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 bg-[#1a1d27] border border-white/5 rounded-2xl p-6 shadow-xl"
        >
          <h3 className="text-lg font-bold text-white mb-4">档次对照表</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
            {Object.entries(TIER_INFO).map(([key, info]) => (
              <div
                key={key}
                className="flex flex-col items-center p-3 bg-white/5 rounded-lg border border-white/5"
              >
                <div className={`w-10 h-10 rounded-full ${info.color} mb-2 flex items-center justify-center text-lg`}>
                  {info.icon}
                </div>
                <div className="text-sm font-medium text-gray-200">{info.label}</div>
                <div className="text-xs text-gray-500">{info.elo} ELO</div>
                <div className="mt-1 text-[11px] text-cyan-400/80 bg-cyan-500/10 px-2 py-0.5 rounded">
                  {info.rank}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
      </div>

      <AnimatePresence>
        {showAlgorithm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowAlgorithm(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#1a1d27] border border-white/10 rounded-2xl p-6 shadow-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">📖 算法原理</h3>
                <button
                  onClick={() => setShowAlgorithm(false)}
                  className="text-gray-400 hover:text-white text-xl"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-4 text-sm text-gray-300">
                <div>
                  <div className="font-bold text-cyan-400 mb-1">🎯 目标</div>
                  <p>把 10 人分成两队，每队 5 人，让两队 ELO 总分尽量接近。</p>
                </div>
                <div>
                  <div className="font-bold text-cyan-400 mb-1">🔄 步骤</div>
                  <ol className="list-decimal list-inside space-y-1 text-gray-400">
                    <li>玩家名单随机打乱</li>
                    <li>依次给每个玩家分配位置</li>
                    <li>每次选让双方分差最小的方案</li>
                  </ol>
                </div>
                <div>
                  <div className="font-bold text-cyan-400 mb-1">🧠 举例</div>
                  <p className="text-gray-400">
                    玩家 A 可选：上单 NPC(90) / 打野 顶级(170) / 中单 夯(210)<br/>
                    蓝方 200 vs 红方 350<br/>
                    → A 去蓝方打野：蓝方 370，差距 20（最小）✓
                  </p>
                </div>
                <div>
                  <div className="font-bold text-cyan-400 mb-1">⚙️ 两种模式</div>
                  <p className="text-gray-400">
                    <span className="text-white">智能平衡</span>：重试 300 次找符合阈值的最优解<br/>
                    <span className="text-white">真随机</span>：随机分配，能分成就行
                  </p>
                </div>
                <div>
                  <div className="font-bold text-cyan-400 mb-1">🎮 英雄抽取</div>
                  <p className="text-gray-400">
                    分组完成后，按每个人分到的位置，从 OP.GG 快照的对应位置英雄池中抽英雄，
                    每人数量可在 1~3 之间调整（默认 2 个）。
                  </p>
                  <ol className="list-decimal list-inside space-y-1 text-gray-400 mt-2">
                    <li>选择英雄池：全英雄 / 热门前 20 / Tier 1~2</li>
                    <li>每次尝试前随机打乱 10 人顺序，避免固定先后手</li>
                    <li>每个人从自己位置剩余可选的英雄中随机取所需数量</li>
                    <li>抽过的英雄全局标记，其他位置不会再抽到（跨位置不重复）</li>
                    <li>同一局所有玩家拿到的英雄都必须不重复，凑不齐时提示换更大的英雄池</li>
                  </ol>
                  <p className="text-gray-400 mt-2">
                    一个英雄可能同时出现在多个位置池（例如剑魔可上单也可打野），
                    只要被任意位置抽到，它在其他位置池中也会同步失效。
                  </p>
                </div>
                <div>
                  <div className="font-bold text-cyan-400 mb-1">🔒 位置锁定</div>
                  <p className="text-gray-400">锁定位置后，系统只从锁定的位置中分配，确保位置不跑偏。</p>
                </div>
                <div>
                  <div className="font-bold text-cyan-400 mb-1">❓ 为什么要打乱？</div>
                  <p className="text-gray-400">
                    先分配的人选择空间最大。分组和抽英雄都会在每次尝试时重新打乱玩家顺序，
                    既能帮分组找到更优解，也能避免某个位置固定先选、把共用英雄都“抢走”。
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showChampionPool && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowChampionPool(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-[#1a1d27] border border-white/10 rounded-2xl p-6 shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-start justify-between gap-4 mb-1">
                <div>
                  <h3 className="text-xl font-bold text-white">🗂️ 当前英雄池</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {CHAMPION_POOL_OPTIONS.find((o) => o.id === championPoolMode)?.label} ·
                    共 {POSITIONS.reduce((sum, pos) => sum + championPoolFor(pos, championPoolMode).length, 0)} 名英雄 ·
                    Patch {CHAMPIONS_DATA.patch}
                  </p>
                </div>
                <button
                  onClick={() => setShowChampionPool(false)}
                  className="text-gray-400 hover:text-white text-xl flex-shrink-0"
                >
                  ✕
                </button>
              </div>
              <p className="text-[11px] text-gray-500 mb-5">
                按位置显示当前可选英雄，抽取时会从对应位置的池子中随机选择
              </p>

              <div className="space-y-5">
                {POSITIONS.map((pos) => {
                  const list = championPoolFor(pos, championPoolMode);
                  return (
                    <div key={pos}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-sm font-bold text-white">
                          {POSITION_LABELS[pos].icon} {POSITION_LABELS[pos].zh}
                        </span>
                        <span className="text-xs text-gray-500">({list.length})</span>
                        <div className="flex-1 h-px bg-white/10" />
                      </div>
                      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
                        {list.map((c) => (
                          <div
                            key={c.key}
                            title={c.name}
                            className="flex flex-col items-center gap-1 bg-white/5 border border-white/5 rounded-lg p-2 hover:bg-white/10 transition-colors"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={c.imageUrl}
                              alt={c.name}
                              loading="lazy"
                              className="w-10 h-10 rounded-full object-cover"
                            />
                            <span className="text-[11px] text-gray-300 max-w-full truncate">
                              {c.name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
