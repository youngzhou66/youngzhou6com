'use client';

import {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { motion } from 'framer-motion';
import {
  PLAYERS as BASE_PLAYERS,
  type Player,
  type Position,
  type TierKey,
} from '@/data/players';
import { championDrawErrorText } from '@/lib/champions/constants';
import { drawChampionAssignments } from '@/lib/champions/draw';
import type { ChampionDraws, ChampionPoolMode } from '@/lib/champions/types';
import { normalizeTags } from '@/lib/players/tags';
import {
  loadCustomPlayers,
  sanitizePlayerName,
  saveCustomPlayers,
  validateNewPlayerName,
} from '@/lib/players/storage';
import {
  DEFAULT_ELO_THRESHOLD,
  TEAM_NAMES,
} from '@/lib/grouping/constants';
import {
  generateBalancedGroups,
  generateRandomGroups,
} from '@/lib/grouping/generate';
import { shuffle } from '@/lib/grouping/random';
import type {
  LockedPositions,
  PairConstraint,
  PairConstraintType,
  SortMode,
  Team,
} from '@/lib/grouping/types';
import AlgorithmModal from './AlgorithmModal';
import AnnouncementModal from './AnnouncementModal';
import ChampionPoolModal from './ChampionPoolModal';
import GroupSettings from './GroupSettings';
import PairConstraintEditor from './PairConstraintEditor';
import PlayerSelector from './PlayerSelector';
import PositionLockEditor from './PositionLockEditor';
import TeamResult from './TeamResult';
import TierTable from './TierTable';

export default function GroupPageContent() {
  const [customPlayers, setCustomPlayers] = useState<Player[]>([]);
  const [addPlayerError, setAddPlayerError] = useState<string | null>(null);
  const [selected, setSelected] = useState<string[]>([]);
  const [lockedPositions, setLockedPositions] = useState<LockedPositions>({});
  const [pairConstraints, setPairConstraints] = useState<PairConstraint[]>([]);
  const [teams, setTeams] = useState<Team[] | null>(null);
  const [championPoolMode, setChampionPoolMode] =
    useState<ChampionPoolMode>('all');
  const [championDraws, setChampionDraws] = useState<ChampionDraws>({});
  const [heroCountPerPlayer, setHeroCountPerPlayer] = useState(2);
  const [showChampionPool, setShowChampionPool] = useState(false);
  const [championDrawError, setChampionDrawError] = useState<string | null>(
    null
  );
  const [sortMode, setSortMode] = useState<SortMode>('balanced');
  const [threshold, setThreshold] = useState(DEFAULT_ELO_THRESHOLD);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showAlgorithm, setShowAlgorithm] = useState(false);
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  const [newPlayerName, setNewPlayerName] = useState('');
  const [newPlayerTiers, setNewPlayerTiers] = useState<
    Record<Position, TierKey>
  >({
    top: 'npc',
    jungle: 'npc',
    mid: 'npc',
    adc: 'npc',
    support: 'npc',
  });
  // 标签在"添加玩家"时一次定好，随玩家一起存进本地缓存
  const [newPlayerTags, setNewPlayerTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const resultRef = useRef<HTMLDivElement>(null);

  // 基础名单（构建时常量）没有标签，只有临时玩家带标签
  const allPlayers = useMemo(
    () => [...BASE_PLAYERS, ...customPlayers],
    [customPlayers]
  );
  const selectedPlayers = useMemo(
    () => allPlayers.filter((player) => selected.includes(player.name)),
    [allPlayers, selected]
  );

  // 只在挂载时恢复一次缓存。
  // - 必须放在 effect 里：静态导出时服务端渲染拿不到 localStorage，直接进 state 会 hydration 不一致
  // - 依赖为空是刻意的：读取的 BASE_PLAYERS 是模块常量，setState 函数是稳定引用，
  //   没有需要响应变化的闭包变量
  useEffect(() => {
    setCustomPlayers(
      loadCustomPlayers(BASE_PLAYERS.map((player) => player.name))
    );
  }, []);

  const updateCustomPlayers = useCallback((next: Player[]) => {
    setCustomPlayers(next);
    saveCustomPlayers(next);
  }, []);

  const togglePlayer = (name: string) => {
    if (selected.includes(name)) {
      setSelected(selected.filter((selectedName) => selectedName !== name));
      const nextLockedPositions = { ...lockedPositions };

      delete nextLockedPositions[name];
      setLockedPositions(nextLockedPositions);
      setPairConstraints((current) =>
        current.filter(
          (constraint) =>
            constraint.playerA !== name && constraint.playerB !== name
        )
      );
    } else {
      setSelected([...selected, name]);
      setLockedPositions({ ...lockedPositions, [name]: [] });
    }

    setTeams(null);
  };

  const togglePosition = (name: string, position: Position) => {
    const current = lockedPositions[name] || [];
    const next = current.includes(position)
      ? current.filter((lockedPosition) => lockedPosition !== position)
      : [...current, position];

    setLockedPositions({ ...lockedPositions, [name]: next });
  };

  const handleGenerate = useCallback(() => {
    if (selected.length !== 10) return;

    const selectedPlayers = allPlayers.filter((player) =>
      selected.includes(player.name)
    );
    const result =
      sortMode === 'balanced'
        ? generateBalancedGroups(
            selectedPlayers,
            lockedPositions,
            threshold,
            pairConstraints
          )
        : generateRandomGroups(
            selectedPlayers,
            lockedPositions,
            pairConstraints
          );

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

    const rawElo1 = result.team1.reduce(
      (sum, player) => sum + player.rawElo,
      0
    );
    const rawElo2 = result.team2.reduce(
      (sum, player) => sum + player.rawElo,
      0
    );
    const weightedElo1 = result.team1.reduce(
      (sum, player) => sum + player.weightedElo,
      0
    );
    const weightedElo2 = result.team2.reduce(
      (sum, player) => sum + player.weightedElo,
      0
    );

    setTeams([
      {
        name: TEAM_NAMES[0].zh,
        color: TEAM_NAMES[0].color,
        players: result.team1,
        totalRawElo: rawElo1,
        totalWeightedElo: weightedElo1,
      },
      {
        name: TEAM_NAMES[1].zh,
        color: TEAM_NAMES[1].color,
        players: result.team2,
        totalRawElo: rawElo2,
        totalWeightedElo: weightedElo2,
      },
    ]);
  }, [
    selected,
    sortMode,
    lockedPositions,
    threshold,
    allPlayers,
    championPoolMode,
    heroCountPerPlayer,
    pairConstraints,
  ]);

  const rerollChampions = () => {
    if (
      !teams ||
      teams[0].players.length !== 5 ||
      teams[1].players.length !== 5
    ) {
      return;
    }

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

    if (
      teams &&
      teams[0].players.length === 5 &&
      teams[1].players.length === 5
    ) {
      const drawnPlayers = [...teams[0].players, ...teams[1].players];
      const nextDraw = drawChampionAssignments(
        drawnPlayers,
        mode,
        heroCountPerPlayer
      );

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

    if (
      teams &&
      teams[0].players.length === 5 &&
      teams[1].players.length === 5
    ) {
      const drawnPlayers = [...teams[0].players, ...teams[1].players];
      const nextDraw = drawChampionAssignments(
        drawnPlayers,
        championPoolMode,
        count
      );

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
    if (!teams || !resultRef.current) return;

    const timeoutId = window.setTimeout(() => {
      resultRef.current?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);

    return () => window.clearTimeout(timeoutId);
  }, [teams]);

  const clearAll = () => {
    setSelected([]);
    setLockedPositions({});
    setPairConstraints([]);
    setTeams(null);
  };

  const randomSelect = () => {
    const shuffled = shuffle(allPlayers);
    const selectedNames = shuffled.slice(0, 10).map((player) => player.name);
    const nextLockedPositions: LockedPositions = {};

    selectedNames.forEach((name) => {
      nextLockedPositions[name] = [];
    });

    setSelected(selectedNames);
    setLockedPositions(nextLockedPositions);
    setPairConstraints([]);
    setTeams(null);
  };

  const resetNewPlayerForm = () => {
    setNewPlayerName('');
    setNewPlayerTiers({
      top: 'npc',
      jungle: 'npc',
      mid: 'npc',
      adc: 'npc',
      support: 'npc',
    });
    setNewPlayerTags([]);
  };

  const addCustomPlayer = () => {
    // 名字在整条链路里充当主键，重名会导致"点一个选中两个"这类静默错误，必须拦住
    const error = validateNewPlayerName(
      newPlayerName,
      allPlayers.map((player) => player.name)
    );

    if (error) {
      setAddPlayerError(error);
      return;
    }

    const tags = normalizeTags(newPlayerTags);
    const newPlayer: Player = {
      name: sanitizePlayerName(newPlayerName),
      positions: { ...newPlayerTiers },
      ...(tags.length > 0 ? { tags } : {}),
    };

    updateCustomPlayers([...customPlayers, newPlayer]);
    resetNewPlayerForm();
    setAddPlayerError(null);
    setShowAddForm(false);
  };

  /**
   * 批量移除临时玩家。
   * 注意不能循环调用 removeCustomPlayer —— 那些 setState 都基于同一次渲染的旧数组，
   * 循环会互相覆盖，所以这里一次性算好所有要清理的状态。
   */
  const removeCustomPlayers = (names: string[]) => {
    if (names.length === 0) return;

    const removed = new Set(names);

    updateCustomPlayers(
      customPlayers.filter((player) => !removed.has(player.name))
    );

    setSelected((current) => current.filter((name) => !removed.has(name)));

    setLockedPositions((current) => {
      const next = { ...current };

      names.forEach((name) => delete next[name]);
      return next;
    });

    setPairConstraints((current) =>
      current.filter(
        (constraint) =>
          !removed.has(constraint.playerA) && !removed.has(constraint.playerB)
      )
    );

    // 英雄抽取结果同样以玩家名为 key，不清理会留下孤儿数据
    setChampionDraws((current) => {
      const next = { ...current };

      names.forEach((name) => delete next[name]);
      return next;
    });

    // 标签随玩家记录一起存在 customPlayers 里，上面 updateCustomPlayers 已一并移除
    setTeams(null);
  };

  const removeCustomPlayer = (name: string) => removeCustomPlayers([name]);

  const clearCustomPlayers = () =>
    removeCustomPlayers(customPlayers.map((player) => player.name));

  const addPairConstraint = (
    playerA: string,
    playerB: string,
    type: PairConstraintType
  ) => {
    if (playerA === playerB) return;

    setPairConstraints((current) => [
      ...current.filter(
        (constraint) =>
          !(
            (constraint.playerA === playerA && constraint.playerB === playerB) ||
            (constraint.playerA === playerB && constraint.playerB === playerA)
          )
      ),
      {
        id: `${Date.now()}-${Math.random().toString(36).slice(2)}`,
        playerA,
        playerB,
        type,
      },
    ]);
    setTeams(null);
  };

  const removePairConstraint = (id: string) => {
    setPairConstraints((current) =>
      current.filter((constraint) => constraint.id !== id)
    );
    setTeams(null);
  };

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
              选择 10 位玩家，系统将根据位置加权 ELO 智能平衡双方实力，并按位置抽取英雄
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-[#1a1d27] border border-white/5 rounded-2xl p-6 shadow-xl mb-6"
          >
            <PlayerSelector
              allPlayers={allPlayers}
              customPlayers={customPlayers}
              selected={selected}
              showAddForm={showAddForm}
              newPlayerName={newPlayerName}
              newPlayerTiers={newPlayerTiers}
              onTogglePlayer={togglePlayer}
              onRandomSelect={randomSelect}
              onClearAll={clearAll}
              onToggleAddForm={() => setShowAddForm(!showAddForm)}
              onShowAlgorithm={() => setShowAlgorithm(true)}
              onNewPlayerNameChange={(value) => {
                setNewPlayerName(value);
                setAddPlayerError(null);
              }}
              onNewPlayerTierChange={(position, tier) =>
                setNewPlayerTiers({
                  ...newPlayerTiers,
                  [position]: tier,
                })
              }
              addPlayerError={addPlayerError}
              newPlayerTags={newPlayerTags}
              onNewPlayerTagsChange={setNewPlayerTags}
              searchQuery={searchQuery}
              onSearchQueryChange={setSearchQuery}
              onAddCustomPlayer={addCustomPlayer}
              onRemoveCustomPlayer={removeCustomPlayer}
              onClearCustomPlayers={clearCustomPlayers}
            />
            <GroupSettings
              selectedCount={selected.length}
              sortMode={sortMode}
              threshold={threshold}
              championPoolMode={championPoolMode}
              heroCountPerPlayer={heroCountPerPlayer}
              onSortModeChange={setSortMode}
              onThresholdChange={setThreshold}
              onChampionPoolModeChange={changeChampionPoolMode}
              onHeroCountChange={changeHeroCountPerPlayer}
              onShowChampionPool={() => setShowChampionPool(true)}
              onGenerate={handleGenerate}
            />
          </motion.div>

          {selected.length > 0 && (
            <PositionLockEditor
              players={selectedPlayers}
              lockedPositions={lockedPositions}
              onTogglePosition={togglePosition}
            />
          )}

          {selectedPlayers.length >= 2 && (
            <PairConstraintEditor
              players={selectedPlayers}
              constraints={pairConstraints}
              onAddConstraint={addPairConstraint}
              onRemoveConstraint={removePairConstraint}
            />
          )}

          <TeamResult
            teams={teams}
            championDraws={championDraws}
            championDrawError={championDrawError}
            championPoolMode={championPoolMode}
            threshold={threshold}
            resultRef={resultRef}
            onRerollChampions={rerollChampions}
          />

          <TierTable />
        </div>
      </div>

      <AlgorithmModal
        isOpen={showAlgorithm}
        onClose={() => setShowAlgorithm(false)}
      />
      <ChampionPoolModal
        isOpen={showChampionPool}
        championPoolMode={championPoolMode}
        onClose={() => setShowChampionPool(false)}
      />
      <AnnouncementModal
        isOpen={showAnnouncement}
        onClose={() => setShowAnnouncement(false)}
      />
    </div>
  );
}
