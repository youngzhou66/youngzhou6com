'use client';

import type { RefObject } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { CHAMPION_POOL_OPTIONS } from '@/lib/champions/constants';
import type { ChampionDraws, ChampionPoolMode } from '@/lib/champions/types';
import { DEFAULT_ELO_THRESHOLD } from '@/lib/grouping/constants';
import { formatElo } from '@/lib/grouping/elo';
import type { Team } from '@/lib/grouping/types';
import TeamCard from './TeamCard';

interface TeamResultProps {
  teams: Team[] | null;
  championDraws: ChampionDraws;
  championDrawError: string | null;
  championPoolMode: ChampionPoolMode;
  threshold: number;
  resultRef: RefObject<HTMLDivElement>;
  onRerollChampions: () => void;
}

export default function TeamResult({
  teams,
  championDraws,
  championDrawError,
  championPoolMode,
  threshold,
  resultRef,
  onRerollChampions,
}: TeamResultProps) {
  const eloDiff = teams
    ? Math.abs(
        teams[0].totalWeightedElo - teams[1].totalWeightedElo
      )
    : 0;
  const maxElo = teams
    ? Math.max(teams[0].totalWeightedElo, teams[1].totalWeightedElo)
    : 1;
  const diffRatio = maxElo > 0 ? eloDiff / maxElo : 0;

  return (
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
          {teams[0].players.length === 5 &&
          teams[1].players.length === 5 ? (
            <>
              <div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center text-xs text-gray-400">
                加权 ELO = 原始 ELO × 位置权重（上单/AD ×0.95、中单/打野
                ×1.05、辅助 ×1.00），分差按加权 ELO 计算。
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {teams.map((team, teamIndex) => (
                  <TeamCard
                    key={team.name}
                    team={team}
                    teamIndex={teamIndex}
                    championDraws={championDraws}
                  />
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
                    <span className="text-blue-400 text-xs">蓝方加权</span>
                    <span className="text-xl font-bold text-white">
                      {formatElo(teams[0].totalWeightedElo)}
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-xs text-gray-500">VS</span>
                    <span
                      className={`text-lg font-bold ${
                        diffRatio <= DEFAULT_ELO_THRESHOLD
                          ? 'text-green-400'
                          : diffRatio <= threshold
                          ? 'text-yellow-400'
                          : 'text-red-400'
                      }`}
                    >
                      {formatElo(eloDiff)} ({(diffRatio * 100).toFixed(1)}%)
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-white">
                      {formatElo(teams[1].totalWeightedElo)}
                    </span>
                    <span className="text-red-400 text-xs">红方加权</span>
                  </div>
                </div>
                <div className="mt-3">
                  <span
                    className={`text-sm ${
                      diffRatio <= DEFAULT_ELO_THRESHOLD
                        ? 'text-green-400'
                        : diffRatio <= threshold
                        ? 'text-yellow-400'
                        : 'text-red-400'
                    }`}
                  >
                    {diffRatio <= DEFAULT_ELO_THRESHOLD
                      ? '⚖️ 势均力敌'
                      : diffRatio <= threshold
                      ? '🙂 差距不大'
                      : '😅 有一定差距'}
                  </span>
                </div>
                <div className="mt-2 text-[11px] text-gray-500">
                  分差按位置加权 ELO 计算
                </div>
                {championDrawError && (
                  <div className="mt-4 mx-auto max-w-lg rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-300">
                    ⚠️ {championDrawError}
                  </div>
                )}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
                  <button
                    onClick={onRerollChampions}
                    title="保持当前队伍和位置，只重新抽取英雄"
                    className="px-5 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 text-sm rounded-lg border border-cyan-500/30 transition-colors"
                  >
                    🎲 重新抽英雄
                  </button>
                  <span className="text-xs text-gray-500">
                    {
                      CHAMPION_POOL_OPTIONS.find(
                        (option) => option.id === championPoolMode
                      )?.hint
                    }
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
                <li>• 检查“同队/不要同队”约束是否冲突</li>
                <li>• 切换「真随机」模式</li>
                <li>• 调高加权 ELO 差值阈值</li>
              </ul>
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
