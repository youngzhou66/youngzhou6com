'use client';

import { AnimatePresence, motion } from 'framer-motion';

interface AnnouncementModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AnnouncementModal({
  isOpen,
  onClose,
}: AnnouncementModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 16 }}
            transition={{ duration: 0.2 }}
            className="bg-[#1a1d27] border border-white/10 rounded-2xl p-6 shadow-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">📢 版本公告</h3>
                <p className="text-xs text-gray-500 mt-1">
                  当前版本 v1.4 · 2026-09-10
                </p>
              </div>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white text-xl flex-shrink-0"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3">
              <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-4">
                <div className="text-sm font-bold text-cyan-300">
                  🆕 v1.4 · 2026-09-10
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-gray-400 text-sm mt-2">
                  <li>
                    新增 ELO 位置权重：上单 / AD 0.95，中单 / 打野 1.05，辅助 1.00
                  </li>
                  <li>
                    智能平衡模式改为按加权 ELO 计算蓝红分差，让阵容强度评估更贴近实际对局价值
                  </li>
                  <li>默认加权 ELO 差值阈值由 15% 收紧到 10%</li>
                  <li>队伍卡片同时展示原始 ELO 与加权 ELO，方便核对计算过程</li>
                  <li>真随机模式仍只保证阵容结构合法，不参与 ELO 平衡</li>
                </ul>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-bold text-gray-200">
                  v1.3 · 2026-09-09
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-gray-400 text-sm mt-2">
                  <li>
                    新增同队约束：支持为任意两名玩家设置“必须同队”或“不要同队”
                  </li>
                  <li>智能平衡与真随机两种模式均严格遵守同队约束</li>
                  <li>
                    根路径直达分组工具；拆分页面与算法模块，并新增自动化测试覆盖核心算法
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-bold text-gray-200">
                  v1.2 · 2026-09-08
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-gray-400 text-sm mt-2">
                  <li>
                    重构分组算法：先随机分配位置，ELO
                    只负责蓝红均衡，不再把人固定推到弱位置
                  </li>
                  <li>保留位置锁定与真随机模式</li>
                  <li>更新 OP.GG 英雄榜与 Tier 评级快照</li>
                </ul>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-bold text-gray-200">
                  v1.1 · 2026-09-04
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-gray-400 text-sm mt-2">
                  <li>新增分组后按位置直接抽取英雄</li>
                  <li>英雄榜以构建时快照保存，不依赖 OP.GG 实时接口</li>
                  <li>全场英雄不重复，支持重新抽英雄</li>
                </ul>
              </div>
            </div>

            <button
              onClick={onClose}
              className="mt-5 w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white text-sm font-bold transition-all"
            >
              开始使用
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
