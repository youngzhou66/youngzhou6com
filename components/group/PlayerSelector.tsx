'use client';

import { AnimatePresence, motion } from 'framer-motion';
import {
  POSITION_LABELS,
  TIER_INFO,
  type Player,
  type Position,
  type TierKey,
} from '@/data/players';
import { POSITIONS, TIER_KEYS } from '@/lib/grouping/constants';

interface PlayerSelectorProps {
  allPlayers: Player[];
  customPlayers: Player[];
  selected: string[];
  showAddForm: boolean;
  newPlayerName: string;
  newPlayerTiers: Record<Position, TierKey>;
  onTogglePlayer: (name: string) => void;
  onRandomSelect: () => void;
  onClearAll: () => void;
  onToggleAddForm: () => void;
  onShowAlgorithm: () => void;
  onNewPlayerNameChange: (value: string) => void;
  onNewPlayerTierChange: (position: Position, tier: TierKey) => void;
  onAddCustomPlayer: () => void;
  onRemoveCustomPlayer: (name: string) => void;
}

export default function PlayerSelector({
  allPlayers,
  customPlayers,
  selected,
  showAddForm,
  newPlayerName,
  newPlayerTiers,
  onTogglePlayer,
  onRandomSelect,
  onClearAll,
  onToggleAddForm,
  onShowAlgorithm,
  onNewPlayerNameChange,
  onNewPlayerTierChange,
  onAddCustomPlayer,
  onRemoveCustomPlayer,
}: PlayerSelectorProps) {
  const selectedSet = new Set(selected);

  return (
    <>
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-base font-bold text-white">
            👥 选择 10 位玩家
          </span>
          <span className="px-2.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-300">
            已选 {selected.length} / 10
          </span>
        </div>
        <div className="flex-1" />
        <div className="flex flex-wrap gap-2">
          <button
            onClick={onRandomSelect}
            className="px-3.5 py-2 bg-white/5 hover:bg-white/10 text-gray-200 text-sm rounded-lg border border-white/10 transition-colors"
          >
            🎲 随机选10人
          </button>
          <button
            onClick={onClearAll}
            className="px-3.5 py-2 bg-white/5 hover:bg-white/10 text-gray-200 text-sm rounded-lg border border-white/10 transition-colors"
          >
            🗑️ 清空
          </button>
          <button
            onClick={onToggleAddForm}
            className="px-3.5 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-sm rounded-lg border border-cyan-500/30 transition-colors"
          >
            ➕ 添加玩家
          </button>
          <button
            onClick={onShowAlgorithm}
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
                  onChange={(event) =>
                    onNewPlayerNameChange(event.target.value)
                  }
                  placeholder="玩家名称"
                  className="flex-1 min-w-[150px] px-3 py-2 bg-[#0f1117] border border-white/10 rounded-lg text-gray-100 text-sm focus:outline-none focus:border-cyan-500/50"
                />
                <button
                  onClick={onAddCustomPlayer}
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
              <div className="text-xs text-gray-400 mb-2">
                为每个位置选择档次:
              </div>
              <div className="grid grid-cols-5 gap-2">
                {POSITIONS.map((position) => (
                  <div
                    key={position}
                    className="bg-[#0f1117] rounded-lg p-2 border border-white/5"
                  >
                    <div className="text-xs text-gray-400 mb-1 text-center">
                      {POSITION_LABELS[position].zh}
                    </div>
                    <select
                      value={newPlayerTiers[position]}
                      onChange={(event) =>
                        onNewPlayerTierChange(
                          position,
                          event.target.value as TierKey
                        )
                      }
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
          <div className="text-xs text-gray-400 mb-2">
            临时玩家 ({customPlayers.length}):
          </div>
          <div className="flex flex-wrap gap-2">
            {customPlayers.map((player) => (
              <div
                key={player.name}
                className="flex items-center gap-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full px-2 py-1"
              >
                <span className="text-xs text-cyan-300">{player.name}</span>
                <button
                  onClick={() => onRemoveCustomPlayer(player.name)}
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
          const isCustom = customPlayers.some(
            (customPlayer) => customPlayer.name === player.name
          );

          return (
            <div key={player.name} className="relative group">
              <button
                onClick={() => onTogglePlayer(player.name)}
                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                  selectedSet.has(player.name)
                    ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                } ${isCustom ? 'ring-1 ring-cyan-400/50' : ''}`}
              >
                {player.name}
              </button>
              {isCustom && (
                <span
                  className="absolute -top-1 -right-1 w-2 h-2 bg-cyan-400 rounded-full"
                  title="临时玩家"
                />
              )}
            </div>
          );
        })}
      </div>
    </>
  );
}
