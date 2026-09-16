'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import {
  POSITION_LABELS,
  TIER_INFO,
  type Player,
  type Position,
  type TierKey,
} from '@/data/players';
import { POSITIONS, TIER_KEYS } from '@/lib/grouping/constants';
import {
  collectAvailableTags,
  filterPlayers,
  toggleFilterTag,
} from '@/lib/players/search';
import {
  MAX_PLAYER_NAME_LENGTH,
  PLAYER_CARD_HEIGHT,
  PLAYER_CARD_WIDTH,
  tagStyleFor,
} from '@/lib/players/tags';
import TagPicker from './TagPicker';

interface PlayerSelectorProps {
  allPlayers: Player[];
  customPlayers: Player[];
  selected: string[];
  showAddForm: boolean;
  newPlayerName: string;
  newPlayerTiers: Record<Position, TierKey>;
  newPlayerTags: string[];
  addPlayerError: string | null;
  searchQuery: string;
  onTogglePlayer: (name: string) => void;
  onRandomSelect: () => void;
  onClearAll: () => void;
  onToggleAddForm: () => void;
  onShowAlgorithm: () => void;
  onNewPlayerNameChange: (value: string) => void;
  onNewPlayerTierChange: (position: Position, tier: TierKey) => void;
  onNewPlayerTagsChange: (tags: string[]) => void;
  onAddCustomPlayer: () => void;
  onRemoveCustomPlayer: (name: string) => void;
  onClearCustomPlayers: () => void;
  onSearchQueryChange: (value: string) => void;
}

function TagChip({ label }: { label: string }) {
  return (
    <span
      className={`rounded-full border px-1.5 py-0.5 text-[10px] leading-tight ${tagStyleFor(
        label
      )}`}
    >
      {label}
    </span>
  );
}

export default function PlayerSelector({
  allPlayers,
  customPlayers,
  selected,
  showAddForm,
  newPlayerName,
  newPlayerTiers,
  newPlayerTags,
  addPlayerError,
  searchQuery,
  onTogglePlayer,
  onRandomSelect,
  onClearAll,
  onToggleAddForm,
  onShowAlgorithm,
  onNewPlayerNameChange,
  onNewPlayerTierChange,
  onNewPlayerTagsChange,
  onAddCustomPlayer,
  onRemoveCustomPlayer,
  onClearCustomPlayers,
  onSearchQueryChange,
}: PlayerSelectorProps) {
  const selectedSet = new Set(selected);
  const [confirmingClear, setConfirmingClear] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const availableTags = useMemo(
    () => collectAvailableTags(allPlayers),
    [allPlayers]
  );
  const visiblePlayers = useMemo(
    () => filterPlayers(allPlayers, { query: searchQuery, tags: selectedTags }),
    [allPlayers, searchQuery, selectedTags]
  );

  const isFiltering = searchQuery.trim().length > 0 || selectedTags.length > 0;

  const resetFilters = () => {
    onSearchQueryChange('');
    setSelectedTags([]);
  };

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
                  maxLength={MAX_PLAYER_NAME_LENGTH}
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
              {addPlayerError && (
                <p className="-mt-2 mb-3 text-xs text-red-400">
                  ⚠️ {addPlayerError}
                </p>
              )}
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

              <div className="mt-4 border-t border-white/10 pt-3">
                <TagPicker
                  value={newPlayerTags}
                  onChange={onNewPlayerTagsChange}
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {customPlayers.length > 0 && (
        <div className="mb-4 bg-white/5 border border-white/10 rounded-xl p-3">
          <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs text-gray-300">
                🧑‍💻 临时玩家（{customPlayers.length}）
              </span>
              <span className="text-[10px] text-gray-500">
                仅保存在本机浏览器，换设备或清缓存会丢失
              </span>
            </div>
            {confirmingClear ? (
              <div className="flex items-center gap-2">
                <span className="text-[11px] text-red-300">
                  确定删除全部 {customPlayers.length} 人？
                </span>
                <button
                  onClick={() => {
                    onClearCustomPlayers();
                    setConfirmingClear(false);
                  }}
                  className="text-xs text-red-300 hover:text-red-200"
                >
                  确定删除
                </button>
                <button
                  onClick={() => setConfirmingClear(false)}
                  className="text-xs text-gray-400 hover:text-gray-200"
                >
                  取消
                </button>
              </div>
            ) : (
              <button
                onClick={() => setConfirmingClear(true)}
                className="text-xs text-gray-500 transition-colors hover:text-red-400"
              >
                🗑️ 全部删除
              </button>
            )}
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
                  title={`删除临时玩家 ${player.name}`}
                  className="text-gray-500 hover:text-red-400 text-xs ml-1"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mb-4 border-t border-white/10 pt-4">
        <div className="mb-3 flex flex-wrap items-center gap-2">
          <div className="relative min-w-[200px] flex-1 sm:max-w-xs">
            <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-sm text-gray-500">
              🔍
            </span>
            <input
              type="text"
              value={searchQuery}
              onChange={(event) => onSearchQueryChange(event.target.value)}
              placeholder="搜索玩家 id（支持空格分词）"
              className="w-full rounded-lg border border-white/10 bg-[#0f1117] py-2 pl-9 pr-8 text-sm text-gray-100 focus:border-cyan-500/50 focus:outline-none"
            />
            {searchQuery.length > 0 && (
              <button
                onClick={() => onSearchQueryChange('')}
                title="清空搜索"
                className="absolute right-2 top-1/2 -translate-y-1/2 px-1 text-gray-500 transition-colors hover:text-gray-200"
              >
                ✕
              </button>
            )}
          </div>

          <span className="text-xs text-gray-500">
            共 {allPlayers.length} 人，匹配 {visiblePlayers.length} 人
          </span>

          {isFiltering && (
            <button
              onClick={resetFilters}
              className="text-xs text-cyan-400/80 transition-colors hover:text-cyan-300"
            >
              重置筛选
            </button>
          )}
        </div>

        {availableTags.length > 0 && (
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="mr-1 text-[11px] text-gray-500">
              按标签筛选（可多选）:
            </span>
            {availableTags.map((tag) => {
              const active = selectedTags.includes(tag);

              return (
                <button
                  key={tag}
                  onClick={() =>
                    setSelectedTags(toggleFilterTag(selectedTags, tag))
                  }
                  className={`rounded-full border px-2.5 py-1 text-[11px] transition-all ${
                    active
                      ? `${tagStyleFor(tag)} font-bold`
                      : 'border-white/10 bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200'
                  }`}
                >
                  {active ? '✓ ' : ''}
                  {tag}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {visiblePlayers.length === 0 ? (
        <div className="rounded-xl border border-white/10 bg-white/5 py-10 text-center">
          <div className="mb-2 text-3xl">🔍</div>
          <p className="text-sm text-gray-400">没有匹配的玩家</p>
          <p className="mt-1 text-xs text-gray-500">
            试试换个关键词，或点下方按钮重置筛选
          </p>
          <button
            onClick={resetFilters}
            className="mt-3 rounded-lg border border-cyan-500/30 bg-cyan-500/20 px-4 py-1.5 text-xs text-cyan-300 transition-colors hover:bg-cyan-500/30"
          >
            重置筛选
          </button>
        </div>
      ) : (
        <div className="flex flex-wrap gap-2">
          {visiblePlayers.map((player) => {
            const isCustom = customPlayers.some(
              (customPlayer) => customPlayer.name === player.name
            );
            const isSelected = selectedSet.has(player.name);
            const tags = player.tags ?? [];

            return (
              <div
                key={player.name}
                className={`${PLAYER_CARD_WIDTH} ${PLAYER_CARD_HEIGHT} flex flex-col justify-center rounded-xl border px-2 py-1.5 transition-all ${
                  isSelected
                    ? 'border-cyan-400/60 bg-cyan-500/20'
                    : 'border-white/10 bg-white/5 hover:bg-white/10'
                } ${isCustom ? 'ring-1 ring-cyan-400/50' : ''}`}
              >
                <button
                  onClick={() => onTogglePlayer(player.name)}
                  title={player.name}
                  className={`w-full truncate text-center text-sm font-medium transition-colors ${
                    isSelected ? 'text-white' : 'text-gray-300'
                  }`}
                >
                  {player.name}
                </button>

                {tags.length > 0 && (
                  <div
                    className="mt-1 flex items-center justify-center gap-1"
                    title={tags.join(' / ')}
                  >
                    <TagChip label={tags[0]} />
                    {tags.length > 1 && (
                      <span className="text-[10px] leading-none text-gray-500">
                        +{tags.length - 1}
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}
