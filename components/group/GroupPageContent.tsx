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
import { TEAM_NAMES } from '@/lib/grouping/constants';
import {
  generateBalancedGroups,
  generateRandomGroups,
} from '@/lib/grouping/generate';
import { shuffle } from '@/lib/grouping/random';
import type {
  LockedPositions,
  SortMode,
  Team,
} from '@/lib/grouping/types';
import AlgorithmModal from './AlgorithmModal';
import AnnouncementModal from './AnnouncementModal';
import ChampionPoolModal from './ChampionPoolModal';
import GroupSettings from './GroupSettings';
import PlayerSelector from './PlayerSelector';
import PositionLockEditor from './PositionLockEditor';
import TeamResult from './TeamResult';
import TierTable from './TierTable';

export default function GroupPageContent() {
  const [customPlayers, setCustomPlayers] = useState<Player[]>([]);
  const [selected, setSelected] = useState<string[]>([]);
  const [lockedPositions, setLockedPositions] = useState<LockedPositions>({});
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
  const [threshold, setThreshold] = useState(0.15);
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

  const resultRef = useRef<HTMLDivElement>(null);

  const allPlayers = useMemo(
    () => [...BASE_PLAYERS, ...customPlayers],
    [customPlayers]
  );
  const selectedPlayers = useMemo(
    () => allPlayers.filter((player) => selected.includes(player.name)),
    [allPlayers, selected]
  );

  const togglePlayer = (name: string) => {
    if (selected.includes(name)) {
      setSelected(selected.filter((selectedName) => selectedName !== name));
      const nextLockedPositions = { ...lockedPositions };

      delete nextLockedPositions[name];
      setLockedPositions(nextLockedPositions);
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

    const elo1 = result.team1.reduce((sum, player) => sum + player.elo, 0);
    const elo2 = result.team2.reduce((sum, player) => sum + player.elo, 0);

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
  }, [
    selected,
    sortMode,
    lockedPositions,
    threshold,
    allPlayers,
    championPoolMode,
    heroCountPerPlayer,
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
    setNewPlayerTiers({
      top: 'npc',
      jungle: 'npc',
      mid: 'npc',
      adc: 'npc',
      support: 'npc',
    });
    setShowAddForm(false);
  };

  const removeCustomPlayer = (name: string) => {
    setCustomPlayers(customPlayers.filter((player) => player.name !== name));

    if (selected.includes(name)) {
      setSelected(selected.filter((selectedName) => selectedName !== name));
      const nextLockedPositions = { ...lockedPositions };

      delete nextLockedPositions[name];
      setLockedPositions(nextLockedPositions);
    }

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
              选择 10 位玩家，系统将根据 ELO 智能平衡双方实力，并按位置抽取英雄
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
              onNewPlayerNameChange={setNewPlayerName}
              onNewPlayerTierChange={(position, tier) =>
                setNewPlayerTiers({
                  ...newPlayerTiers,
                  [position]: tier,
                })
              }
              onAddCustomPlayer={addCustomPlayer}
              onRemoveCustomPlayer={removeCustomPlayer}
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
