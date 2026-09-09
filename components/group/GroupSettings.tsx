'use client';

import { CHAMPIONS_DATA } from '@/data/champions';
import {
  CHAMPION_POOL_OPTIONS,
  opggSnapshotText,
} from '@/lib/champions/constants';
import type { ChampionPoolMode } from '@/lib/champions/types';
import type { SortMode } from '@/lib/grouping/types';

interface GroupSettingsProps {
  selectedCount: number;
  sortMode: SortMode;
  threshold: number;
  championPoolMode: ChampionPoolMode;
  heroCountPerPlayer: number;
  onSortModeChange: (mode: SortMode) => void;
  onThresholdChange: (threshold: number) => void;
  onChampionPoolModeChange: (mode: ChampionPoolMode) => void;
  onHeroCountChange: (count: number) => void;
  onShowChampionPool: () => void;
  onGenerate: () => void;
}

export default function GroupSettings({
  selectedCount,
  sortMode,
  threshold,
  championPoolMode,
  heroCountPerPlayer,
  onSortModeChange,
  onThresholdChange,
  onChampionPoolModeChange,
  onHeroCountChange,
  onShowChampionPool,
  onGenerate,
}: GroupSettingsProps) {
  const selectedPoolOption = CHAMPION_POOL_OPTIONS.find(
    (option) => option.id === championPoolMode
  );

  return (
    <>
      <div className="mt-6 pt-5 border-t border-white/10">
        <div className="flex flex-wrap items-center gap-3 mb-4">
          <h3 className="text-base font-bold text-white">
            ⚙️ 分组与英雄设置
          </h3>
          <span className="text-xs text-gray-500">
            已出结果时修改设置会立即按新配置重新抽取
          </span>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-4">
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <div className="text-sm font-medium text-gray-300 mb-3">
              🧩 分组模式
            </div>
            <div className="flex bg-[#0f1117] rounded-lg p-1 border border-white/10">
              <button
                onClick={() => onSortModeChange('balanced')}
                className={`flex-1 px-3 py-2 rounded-md text-sm transition-colors ${
                  sortMode === 'balanced'
                    ? 'bg-cyan-500 text-white font-medium'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                智能平衡
              </button>
              <button
                onClick={() => onSortModeChange('random')}
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
              <span className="text-sm font-medium text-gray-300">
                ⚖️ ELO 差值阈值
              </span>
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
                  onChange={(event) =>
                    onThresholdChange(Number(event.target.value) / 100)
                  }
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
              <span className="text-sm font-medium text-gray-300">
                🎯 英雄池
              </span>
              <button
                onClick={onShowChampionPool}
                className="text-xs text-cyan-400/80 hover:text-cyan-300 transition-colors"
              >
                👁 查看英雄
              </button>
            </div>
            <div className="grid grid-cols-3 gap-1.5 bg-[#0f1117] rounded-lg p-1 border border-white/10">
              {CHAMPION_POOL_OPTIONS.map((option) => (
                <button
                  key={option.id}
                  onClick={() => onChampionPoolModeChange(option.id)}
                  title={option.hint}
                  className={`px-2 py-2 rounded-md text-xs transition-colors ${
                    championPoolMode === option.id
                      ? 'bg-cyan-500 text-white font-medium'
                      : 'text-gray-400 hover:text-gray-200'
                  }`}
                >
                  {option.label}
                </button>
              ))}
            </div>
            <p className="text-[11px] text-gray-500 mt-2">
              {selectedPoolOption?.hint}
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm font-medium text-gray-300">
                🎲 每人英雄数
              </span>
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
              onChange={(event) =>
                onHeroCountChange(Number(event.target.value))
              }
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
            onClick={onGenerate}
            disabled={selectedCount !== 10}
            className={`px-10 py-3 rounded-xl font-bold text-white transition-all ${
              selectedCount === 10
                ? 'bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40'
                : 'bg-gray-600 cursor-not-allowed'
            }`}
          >
            ⚔️ 开始分组
            {selectedCount === 10 ? '' : `（还需 ${10 - selectedCount} 人）`}
          </button>
        </div>
      </div>
      <div className="mt-5 pt-4 border-t border-white/5 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-gray-500">
        <span>
          🎯 分组完成后会自动为每位玩家按位置抽出 {heroCountPerPlayer}{' '}
          个英雄，默认全场不重复
        </span>
        <a
          href={CHAMPIONS_DATA.sourceUrl}
          target="_blank"
          rel="noreferrer"
          className="text-cyan-400/70 hover:text-cyan-300 transition-colors"
        >
          🎮 英雄数据来自 OP.GG · Patch {CHAMPIONS_DATA.patch} ·{' '}
          {opggSnapshotText()}
        </a>
      </div>
    </>
  );
}
