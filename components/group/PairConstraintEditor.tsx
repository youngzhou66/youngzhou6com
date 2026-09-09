'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import type { Player } from '@/data/players';
import type {
  PairConstraint,
  PairConstraintType,
} from '@/lib/grouping/types';

interface PairConstraintEditorProps {
  players: Player[];
  constraints: PairConstraint[];
  onAddConstraint: (
    playerA: string,
    playerB: string,
    type: PairConstraintType
  ) => void;
  onRemoveConstraint: (id: string) => void;
}

const CONSTRAINT_OPTIONS: {
  id: PairConstraintType;
  label: string;
  hint: string;
}[] = [
  { id: 'avoid', label: '不要同队', hint: '两人必须分在蓝红不同队' },
  { id: 'require', label: '必须同队', hint: '两人必须分在同一队' },
];

export default function PairConstraintEditor({
  players,
  constraints,
  onAddConstraint,
  onRemoveConstraint,
}: PairConstraintEditorProps) {
  const [playerA, setPlayerA] = useState('');
  const [playerB, setPlayerB] = useState('');
  const [type, setType] = useState<PairConstraintType>('avoid');

  useEffect(() => {
    setPlayerA(players[0]?.name ?? '');
    setPlayerB(players[1]?.name ?? '');
  }, [players]);

  const canAdd =
    players.length >= 2 && playerA !== '' && playerB !== '' && playerA !== playerB;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.25 }}
      className="bg-[#1a1d27] border border-white/5 rounded-2xl p-6 shadow-xl mb-6"
    >
      <h3 className="text-lg font-bold text-white mb-1">🤝 同队约束（可选）</h3>
      <p className="text-xs text-gray-500 mb-4">
        支持指定任意两名玩家“必须同队”或“不要同队”，两种分组模式都会遵守。
      </p>

      <div className="flex flex-wrap items-end gap-3">
        <label className="flex-1 min-w-[150px]">
          <span className="block text-xs text-gray-400 mb-1">玩家 A</span>
          <select
            value={playerA}
            onChange={(event) => setPlayerA(event.target.value)}
            className="w-full px-3 py-2 bg-[#0f1117] border border-white/10 rounded-lg text-gray-100 text-sm focus:outline-none focus:border-cyan-500/50"
          >
            {players.map((player) => (
              <option key={player.name} value={player.name}>
                {player.name}
              </option>
            ))}
          </select>
        </label>

        <label className="w-[150px]">
          <span className="block text-xs text-gray-400 mb-1">关系</span>
          <select
            value={type}
            onChange={(event) =>
              setType(event.target.value as PairConstraintType)
            }
            className="w-full px-3 py-2 bg-[#0f1117] border border-white/10 rounded-lg text-gray-100 text-sm focus:outline-none focus:border-cyan-500/50"
          >
            {CONSTRAINT_OPTIONS.map((option) => (
              <option key={option.id} value={option.id}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className="flex-1 min-w-[150px]">
          <span className="block text-xs text-gray-400 mb-1">玩家 B</span>
          <select
            value={playerB}
            onChange={(event) => setPlayerB(event.target.value)}
            className="w-full px-3 py-2 bg-[#0f1117] border border-white/10 rounded-lg text-gray-100 text-sm focus:outline-none focus:border-cyan-500/50"
          >
            {players.map((player) => (
              <option key={player.name} value={player.name}>
                {player.name}
              </option>
            ))}
          </select>
        </label>

        <button
          onClick={() => onAddConstraint(playerA, playerB, type)}
          disabled={!canAdd}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
            canAdd
              ? 'bg-cyan-500 hover:bg-cyan-400 text-white'
              : 'bg-gray-600 text-gray-300 cursor-not-allowed'
          }`}
        >
          ➕ 添加约束
        </button>
      </div>

      {constraints.length > 0 ? (
        <div className="mt-4 space-y-2">
          {constraints.map((constraint) => {
            const option = CONSTRAINT_OPTIONS.find(
              (item) => item.id === constraint.type
            );

            return (
              <div
                key={constraint.id}
                className="flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5"
              >
                <div className="min-w-0">
                  <div className="text-sm text-gray-200">
                    <span className="font-semibold text-white">
                      {constraint.playerA}
                    </span>
                    <span className="text-gray-500"> 与 </span>
                    <span className="font-semibold text-white">
                      {constraint.playerB}
                    </span>
                    <span
                      className={`ml-2 inline-flex rounded-full border px-2 py-0.5 text-xs font-medium ${
                        constraint.type === 'avoid'
                          ? 'border-red-500/20 bg-red-500/10 text-red-300'
                          : 'border-emerald-500/20 bg-emerald-500/10 text-emerald-300'
                      }`}
                    >
                      {option?.label}
                    </span>
                  </div>
                  <div className="mt-0.5 text-[11px] text-gray-500">
                    {option?.hint}
                  </div>
                </div>
                <button
                  onClick={() => onRemoveConstraint(constraint.id)}
                  className="text-xs text-gray-500 hover:text-red-400 transition-colors"
                >
                  删除
                </button>
              </div>
            );
          })}
        </div>
      ) : (
        <p className="mt-4 text-xs text-gray-600">暂无同队约束</p>
      )}

      <p className="mt-3 text-[11px] text-gray-500">
        注意：同一位置的两人无法“必须同队”；如果约束无解，分组会提示失败。
      </p>
    </motion.div>
  );
}
