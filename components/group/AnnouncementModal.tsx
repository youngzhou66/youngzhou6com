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
                  当前版本 v1.7 · 2026-09-16
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
                  🆕 v1.7 · 2026-09-16
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-gray-400 text-sm mt-2">
                  <li>
                    选人页新增搜索框：按玩家 id 实时过滤，大小写不敏感，
                    支持空格分词（如「状态 一换一」）
                  </li>
                  <li>
                    新增标签筛选栏：列出当前名单里出现过的标签，点击即筛、可多选
                  </li>
                  <li>
                    搜索词与标签之间取<span className="text-white">交集</span>（越筛越窄），
                    可组合使用；带实时匹配计数与「重置筛选」
                  </li>
                  <li>搜索只影响展示，不会改变你已经选中的玩家</li>
                </ul>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-bold text-gray-200">
                  v1.6 · 2026-09-15
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-gray-400 text-sm mt-2">
                  <li>
                    新增玩家标签：常驻成员的标签写在 data/players.ts（跟着 git 走），
                    临时玩家在「➕ 添加玩家」时选；选人页与结果页都会显示
                  </li>
                  <li>
                    预设标签：咕咕嘎嘎 / 精英咕咕嘎嘎 / ikun翡翠兄弟 / ikun战神 / 再次抽象，
                    也可输入自定义标签；配色统一成青色调
                  </li>
                  <li>
                    标签只做识别用，<span className="text-white">不影响分组算法</span>；
                    想“不要同队”请用「同队约束」
                  </li>
                  <li>
                    选人页玩家卡片改为统一尺寸（132×72），名字长短、有无标签都不影响卡片大小；
                    多标签只显示第一个，多余用 +N，悬停可看全部
                  </li>
                  <li>玩家名长度上限调整为 8 字，超长自动省略号并显示全名</li>
                  <li>
                    临时玩家改为存在你自己的浏览器里，刷新不丢；
                    选人页新增管理区块，支持逐个删除与一键全部删除
                  </li>
                  <li>
                    修复重名隐患：玩家名是选中 / 位置锁定 / 同队约束 / 英雄抽取的主键，
                    现在添加重名会明确报错
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-bold text-gray-200">
                  v1.5.1 · 2026-09-15
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-gray-400 text-sm mt-2">
                  <li>
                    修复胜率显示方向：曾误用分差绝对值，导致蓝方胜率恒不低于 50%
                  </li>
                  <li>
                    说明补全：加权 ELO 阈值只管“队伍总分差”，无位置锁定时算法几乎总能凑出
                    总分差 ≈ 0，滑杆平时拉大拉小结果一样；总分为 0 也不等于每条路都公平
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-bold text-gray-200">
                  v1.5 · 2026-09-15
                </div>
                <ul className="list-disc list-inside space-y-1.5 text-gray-400 text-sm mt-2">
                  <li>
                    档位 ELO 重新标定，相邻档位统一相差 30 分，对应单人胜率约 54%
                  </li>
                  <li>
                    修掉旧刻度里两个“相当于抛硬币”的 10 分档：夯爆了 / 夯、拉完了 / 人机
                  </li>
                  <li>
                    新刻度：220 / 190 / 160 / 130 / 100 / 70 / 40（位置权重与默认 10% 阈值不变）
                  </li>
                  <li>结果卡片新增估算胜率，双方胜算一眼可见</li>
                </ul>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <div className="text-sm font-bold text-gray-200">
                  v1.4 · 2026-09-10
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
