'use client';

import { motion } from 'framer-motion';
import { TIER_INFO } from '@/data/players';

export default function TierTable() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="mt-8 bg-[#1a1d27] border border-white/5 rounded-2xl p-6 shadow-xl"
    >
      <h3 className="text-lg font-bold text-white mb-4">档次对照表</h3>
      <p className="text-xs text-gray-500 mb-4">
        分组按位置权重计算 ELO：上单 / AD ×0.95，中单 / 打野
        ×1.05，辅助 ×1.00。
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-3">
        {Object.entries(TIER_INFO).map(([key, info]) => (
          <div
            key={key}
            className="flex flex-col items-center p-3 bg-white/5 rounded-lg border border-white/5"
          >
            <div
              className={`w-10 h-10 rounded-full ${info.color} mb-2 flex items-center justify-center text-lg`}
            >
              {info.icon}
            </div>
            <div className="text-sm font-medium text-gray-200">
              {info.label}
            </div>
            <div className="text-xs text-gray-500">{info.elo} ELO</div>
            <div className="mt-1 text-[11px] text-cyan-400/80 bg-cyan-500/10 px-2 py-0.5 rounded">
              {info.rank}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
