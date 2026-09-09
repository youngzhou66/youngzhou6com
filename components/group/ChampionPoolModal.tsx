'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { CHAMPIONS_DATA } from '@/data/champions';
import { POSITION_LABELS } from '@/data/players';
import { CHAMPION_POOL_OPTIONS } from '@/lib/champions/constants';
import { championPoolFor } from '@/lib/champions/pool';
import type { ChampionPoolMode } from '@/lib/champions/types';
import { POSITIONS } from '@/lib/grouping/constants';

interface ChampionPoolModalProps {
  isOpen: boolean;
  championPoolMode: ChampionPoolMode;
  onClose: () => void;
}

export default function ChampionPoolModal({
  isOpen,
  championPoolMode,
  onClose,
}: ChampionPoolModalProps) {
  const selectedPoolOption = CHAMPION_POOL_OPTIONS.find(
    (option) => option.id === championPoolMode
  );
  const championCount = POSITIONS.reduce(
    (sum, position) => sum + championPoolFor(position, championPoolMode).length,
    0
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-[#1a1d27] border border-white/10 rounded-2xl p-6 shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-1">
              <div>
                <h3 className="text-xl font-bold text-white">
                  🗂️ 当前英雄池
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {selectedPoolOption?.label} · 共 {championCount} 名英雄 · Patch{' '}
                  {CHAMPIONS_DATA.patch}
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white text-xl flex-shrink-0"
              >
                ✕
              </button>
            </div>
            <p className="text-[11px] text-gray-500 mb-5">
              按位置显示当前可选英雄，抽取时会从对应位置的池子中随机选择
            </p>

            <div className="space-y-5">
              {POSITIONS.map((position) => {
                const list = championPoolFor(position, championPoolMode);

                return (
                  <div key={position}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-bold text-white">
                        {POSITION_LABELS[position].icon}{' '}
                        {POSITION_LABELS[position].zh}
                      </span>
                      <span className="text-xs text-gray-500">
                        ({list.length})
                      </span>
                      <div className="flex-1 h-px bg-white/10" />
                    </div>
                    <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-2">
                      {list.map((champion) => (
                        <div
                          key={champion.key}
                          title={champion.name}
                          className="flex flex-col items-center gap-1 bg-white/5 border border-white/5 rounded-lg p-2 hover:bg-white/10 transition-colors"
                        >
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img
                            src={champion.imageUrl}
                            alt={champion.name}
                            loading="lazy"
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <span className="text-[11px] text-gray-300 max-w-full truncate">
                            {champion.name}
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
  );
}
