'use client';

import { useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LanguageProvider } from '@/lib/i18n/LanguageContext';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import {
  PLAYERS as BASE_PLAYERS,
  TIER_INFO,
  POSITION_LABELS,
  type Player,
  type Position,
  type TierKey,
} from '@/data/players';

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
  lockedPositions: Record<string, Position | null>
): AssignResult | null {
  const team1: GroupedPlayer[] = [];
  const team2: GroupedPlayer[] = [];
  const pos1 = new Set<Position>();
  const pos2 = new Set<Position>();

  const shuffled = shuffle(players);

  const assigned = new Set<string>();

  for (const player of shuffled) {
    if (assigned.has(player.name)) continue;

    const locked = lockedPositions[player.name];

    if (locked) {
      const elo = TIER_INFO[player.positions[locked]].elo;
      const t1Elo = team1.reduce((s, p) => s + p.elo, 0);
      const t2Elo = team2.reduce((s, p) => s + p.elo, 0);

      if (!pos1.has(locked) && team1.length < 5 && (t1Elo <= t2Elo || team2.length >= 5)) {
        team1.push({ player, position: locked, tier: player.positions[locked], elo });
        pos1.add(locked);
      } else if (!pos2.has(locked) && team2.length < 5 && (t2Elo < t1Elo || team1.length >= 5)) {
        team2.push({ player, position: locked, tier: player.positions[locked], elo });
        pos2.add(locked);
      } else {
        continue;
      }
      assigned.add(player.name);
      continue;
    }

    const playerPositions = POSITIONS.filter(
      (p) => !isNaN(TIER_INFO[player.positions[p]].elo)
    );

    const candidates: { pos: Position; elo: number; team: 't1' | 't2' }[] = [];

    for (const p of playerPositions) {
      const elo = TIER_INFO[player.positions[p]].elo;
      const t1Elo = team1.reduce((s, x) => s + x.elo, 0);
      const t2Elo = team2.reduce((s, x) => s + x.elo, 0);

      if (!pos1.has(p) && team1.length < 5) {
        candidates.push({ pos: p, elo, team: 't1' });
      }
      if (!pos2.has(p) && team2.length < 5) {
        candidates.push({ pos: p, elo, team: 't2' });
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
  lockedPositions: Record<string, Position | null>,
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
  lockedPositions: Record<string, Position | null>
): AssignResult {
  for (let attempt = 0; attempt < 100; attempt++) {
    const result = tryAssign(players, lockedPositions);
    if (result) return result;
  }
  return { team1: [], team2: [] };
}

const TIER_KEYS = Object.keys(TIER_INFO) as TierKey[];

export default function GroupPage() {
  return (
    <LanguageProvider>
      <Navigation />
      <GroupPageContent />
      <Footer />
    </LanguageProvider>
  );
}

function GroupPageContent() {
  const [customPlayers, setCustomPlayers] = useState<Player[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [lockedPositions, setLockedPositions] = useState<Record<string, Position | null>>({});
  const [teams, setTeams] = useState<Team[] | null>(null);
  const [sortMode, setSortMode] = useState<SortMode>('balanced');
  const [threshold, setThreshold] = useState(0.15);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [newPlayerTiers, setNewPlayerTiers] = useState<Record<Position, TierKey>>({
    top: 'npc', jungle: 'npc', mid: 'npc', adc: 'npc', support: 'npc',
  });

  const allPlayers = useMemo(() => [...BASE_PLAYERS, ...customPlayers], [customPlayers]);

  const togglePlayer = (name: string) => {
    if (selected.includes(name)) {
      setSelected(selected.filter((n) => n !== name));
      const newLocked = { ...lockedPositions };
      delete newLocked[name];
      setLockedPositions(newLocked);
    } else {
      setSelected([...selected, name]);
      setLockedPositions({ ...lockedPositions, [name]: null });
    }
    setTeams(null);
  };

  const setPosition = (name: string, pos: Position | null) => {
    setLockedPositions({ ...lockedPositions, [name]: pos });
  };

  const selectedCount = selected.length;
  const selectedSet = new Set(selected);

  const handleGenerate = useCallback(() => {
    if (selected.length !== 10) return;
    const selectedPlayers = allPlayers.filter((p) => selected.includes(p.name));

    const result = sortMode === 'balanced'
      ? generateBalancedGroups(selectedPlayers, lockedPositions, threshold)
      : generateRandomGroups(selectedPlayers, lockedPositions);

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
  }, [selected, sortMode, lockedPositions, threshold, allPlayers]);

  const clearAll = () => {
    setSelected([]);
    setLockedPositions({});
    setTeams(null);
  };

  const randomSelect = () => {
    const shuffled = shuffle(allPlayers);
    const selected10 = shuffled.slice(0, 10).map((p) => p.name);
    setSelected(selected10);
    const newLocked: Record<string, Position | null> = {};
    selected10.forEach((name) => {
      newLocked[name] = null;
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
    <div className="min-h-screen bg-[#0f1117] text-gray-100 pt-24 pb-16">
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
            选择 10 位玩家，系统将根据 ELO 智能平衡双方实力
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-[#1a1d27] border border-white/5 rounded-2xl p-6 shadow-xl mb-6"
        >
          <div className="flex flex-wrap items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">
                已选择: <span className="text-cyan-400 font-bold">{selectedCount}</span> / 10
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={randomSelect}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-200 text-sm rounded-lg border border-white/10 transition-colors"
              >
                🎲 随机选10人
              </button>
              <button
                onClick={clearAll}
                className="px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-200 text-sm rounded-lg border border-white/10 transition-colors"
              >
                🗑️ 清空
              </button>
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-sm rounded-lg border border-cyan-500/30 transition-colors"
              >
                ➕ 添加玩家
              </button>
            </div>
            <div className="flex-1" />
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">模式:</span>
              <div className="flex bg-white/5 rounded-lg p-1 border border-white/10">
                <button
                  onClick={() => setSortMode('balanced')}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    sortMode === 'balanced'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  智能平衡
                </button>
                <button
                  onClick={() => setSortMode('random')}
                  className={`px-3 py-1 rounded text-sm transition-colors ${
                    sortMode === 'random'
                      ? 'bg-cyan-500 text-white'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  真随机
                </button>
              </div>
            </div>
            <button
              onClick={handleGenerate}
              disabled={selected.length !== 10}
              className={`px-6 py-2 rounded-lg font-medium text-white transition-all ${
                selected.length === 10
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 shadow-lg shadow-cyan-500/30'
                  : 'bg-gray-600 cursor-not-allowed'
              }`}
            >
              ⚔️ 开始分组
            </button>
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

          {sortMode === 'balanced' && (
            <div className="mb-4 bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-300">ELO 差值阈值</span>
                <span className="text-sm font-bold text-cyan-400">{(threshold * 100).toFixed(0)}%</span>
              </div>
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
            </div>
          )}

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
        </motion.div>

        {selected.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#1a1d27] border border-white/5 rounded-2xl p-6 shadow-xl mb-6"
          >
            <h3 className="text-lg font-bold text-white mb-4">位置锁定（可选）</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {allPlayers.filter((p) => selected.includes(p.name)).map((player) => (
                <div
                  key={player.name}
                  className="bg-white/5 border border-white/10 rounded-lg p-3"
                >
                  <div className="font-medium text-white text-sm mb-2">{player.name}</div>
                  <div className="grid grid-cols-1 gap-1">
                    {POSITIONS.map((pos) => {
                      const current = lockedPositions[player.name];
                      const isSelected = current === pos;
                      const tier = TIER_INFO[player.positions[pos]];
                      return (
                        <button
                          key={pos}
                          onClick={() => setPosition(player.name, isSelected ? null : pos)}
                          title={`${POSITION_LABELS[pos].zh}: ${tier.label} (${tier.elo})`}
                          className={`px-2 py-1 rounded text-xs transition-all flex items-center justify-between ${
                            isSelected
                              ? `${tier.color} text-white font-medium`
                              : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200'
                          }`}
                        >
                          <span>{POSITION_LABELS[pos].zh}</span>
                          <span className={isSelected ? 'text-white/90' : 'text-gray-500'}>
                            {tier.icon} {tier.label} {tier.elo}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <AnimatePresence mode="wait">
          {teams && (
            <motion.div
              key="result"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-6"
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
                        className="bg-[#1a1d27] border border-white/5 rounded-2xl shadow-xl overflow-hidden"
                      >
                        <div className={`bg-gradient-to-r ${team.color} p-4`}>
                          <div className="flex items-center justify-between">
                            <h3 className="text-2xl font-display font-bold text-white">{team.name}</h3>
                            <div className="text-right">
                              <div className="text-white/80 text-xs">总 ELO</div>
                              <div className="text-white text-2xl font-bold">{team.totalElo}</div>
                            </div>
                          </div>
                        </div>

                        <div className="p-4 space-y-2">
                          {POSITIONS.map((pos) => {
                            const gp = team.players.find((p) => p.position === pos);
                            if (!gp) return null;
                            const tier = TIER_INFO[gp.tier];
                            return (
                              <div
                                key={pos}
                                className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5"
                              >
                                <span className="text-xl">{POSITION_LABELS[pos].icon}</span>
                                <div className="flex-1">
                                  <div className="text-xs text-gray-400">
                                    {POSITION_LABELS[pos].zh}
                                  </div>
                                  <div className="font-medium text-white">{gp.player.name}</div>
                                </div>
                                <div className={`px-3 py-1 rounded-full text-white text-xs font-medium ${tier.color}`}>
                                  {tier.icon} {tier.label} ({tier.elo})
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
                    <div className="inline-flex items-center gap-4 bg-[#1a1d27] border border-white/10 rounded-full px-6 py-3 shadow-xl">
                      <span className="text-gray-400 text-sm">双方 ELO 差:</span>
                      <span
                        className={`text-xl font-bold ${
                          diffRatio <= 0.15
                            ? 'text-green-400'
                            : diffRatio <= threshold
                            ? 'text-yellow-400'
                            : 'text-red-400'
                        }`}
                      >
                        {eloDiff} ({(diffRatio * 100).toFixed(1)}%)
                      </span>
                      <span className="text-gray-400 text-sm">
                        {diffRatio <= 0.15
                          ? '⚖️ 势均力敌'
                          : diffRatio <= threshold
                          ? '🙂 差距不大'
                          : '😅 有一定差距'}
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
  );
}
