'use client';

import { motion } from 'framer-motion';
import {
  POSITION_LABELS,
  TIER_INFO,
  type Player,
  type Position,
} from '@/data/players';
import { POSITIONS } from '@/lib/grouping/constants';
import type { LockedPositions } from '@/lib/grouping/types';

interface PositionLockEditorProps {
  players: Player[];
  lockedPositions: LockedPositions;
  onTogglePosition: (name: string, position: Position) => void;
}

export default function PositionLockEditor({
  players,
  lockedPositions,
  onTogglePosition,
}: PositionLockEditorProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="bg-[#1a1d27] border border-white/5 rounded-2xl p-6 shadow-xl mb-6"
    >
      <h3 className="text-lg font-bold text-white mb-1">
        位置锁定（可选，支持多选）
      </h3>
      <p className="text-xs text-gray-500 mb-4">
        点击位置按钮锁定该位置（高亮），可同时锁定多个位置
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {players.map((player) => {
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
              <div
                className={`font-medium text-sm mb-2 flex items-center gap-2 ${
                  locked.length > 0 ? 'text-cyan-300' : 'text-white'
                }`}
              >
                <span>{player.name}</span>
                {locked.length > 0 && (
                  <span className="text-xs bg-cyan-500/20 text-cyan-300 px-1.5 py-0.5 rounded">
                    已锁定 {locked.length}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-1 gap-1">
                {POSITIONS.map((position) => {
                  const isLocked = locked.includes(position);
                  const tier = TIER_INFO[player.positions[position]];

                  return (
                    <button
                      key={position}
                      onClick={() => onTogglePosition(player.name, position)}
                      title={`${POSITION_LABELS[position].zh}: ${tier.label} (${tier.elo})`}
                      className={`px-2 py-1.5 rounded text-xs transition-all flex items-center justify-between border ${
                        isLocked
                          ? `${tier.color} text-white font-bold border-transparent shadow-md scale-[1.02]`
                          : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-gray-200 border-white/5'
                      }`}
                    >
                      <span className={isLocked ? 'text-white' : ''}>
                        {POSITION_LABELS[position].zh}
                      </span>
                      <span
                        className={
                          isLocked ? 'text-white/95' : 'text-gray-500'
                        }
                      >
                        {isLocked && '🔒 '}
                        {tier.icon} {tier.label} {tier.elo}
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
  );
}
