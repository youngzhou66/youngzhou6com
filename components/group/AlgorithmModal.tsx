'use client';

import { AnimatePresence, motion } from 'framer-motion';

interface AlgorithmModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AlgorithmModal({
  isOpen,
  onClose,
}: AlgorithmModalProps) {
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
            className="bg-[#1a1d27] border border-white/10 rounded-2xl p-6 shadow-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-white">📖 算法原理</h3>
              <button
                onClick={onClose}
                className="text-gray-400 hover:text-white text-xl"
              >
                ✕
              </button>
            </div>
            <div className="space-y-4 text-sm text-gray-300">
              <div>
                <div className="font-bold text-cyan-400 mb-1">🎯 目标</div>
                <p>
                  把 10 人分成两队，每队 5 人，让两队 ELO 总分尽量接近；
                  同时避免某个玩家总是被安排到同一个弱位置。
                </p>
              </div>
              <div>
                <div className="font-bold text-cyan-400 mb-1">🔄 步骤</div>
                <ol className="list-decimal list-inside space-y-1 text-gray-400">
                  <li>随机把 10 人匹配到 10 个位置名额（每个位置恰好 2 人）</li>
                  <li>每个位置的两人分别进入蓝方和红方</li>
                  <li>枚举蓝红切分（32 种），用 ELO 找到分差最小的组合</li>
                  <li>
                    满足阈值的阵容里再随机返回一套，避免总出同一种阵容
                  </li>
                </ol>
              </div>
              <div>
                <div className="font-bold text-cyan-400 mb-1">🧠 举例</div>
                <p className="text-gray-400">
                  羊羊可打：上单 顶级(170) / 打野 夯(210) / 中单 夯(210) /
                  AD 人上人(130) / 辅助 人上人(130)
                  <br />
                  系统先随机决定他这局打哪个位置，
                  再用他的 ELO 决定进蓝方还是红方，
                  <br />
                  不会因为“打 AD 更容易凑平分差”就总让他打 AD。
                </p>
              </div>
              <div>
                <div className="font-bold text-cyan-400 mb-1">⚙️ 两种模式</div>
                <p className="text-gray-400">
                  <span className="text-white">智能平衡</span>
                  ：随机生成 300 套位置分配，
                  每套都找出蓝红最优切分，再从分差达标的结果中随机返回一套
                  <br />
                  <span className="text-white">真随机</span>
                  ：位置和蓝红双方完全随机
                </p>
              </div>
              <div>
                <div className="font-bold text-cyan-400 mb-1">
                  🎮 英雄抽取
                </div>
                <p className="text-gray-400">
                  分组完成后，按每个人分到的位置，从 OP.GG
                  快照的对应位置英雄池中抽英雄， 每人数量可在 1~3
                  之间调整（默认 2 个）。
                </p>
                <ol className="list-decimal list-inside space-y-1 text-gray-400 mt-2">
                  <li>选择英雄池：全英雄 / 热门前 20 / Tier 1~2</li>
                  <li>每次尝试前随机打乱 10 人顺序，避免固定先后手</li>
                  <li>每个人从自己位置剩余可选的英雄中随机取所需数量</li>
                  <li>
                    抽过的英雄全局标记，其他位置不会再抽到（跨位置不重复）
                  </li>
                  <li>
                    同一局所有玩家拿到的英雄都必须不重复，凑不齐时提示换更大的英雄池
                  </li>
                </ol>
                <p className="text-gray-400 mt-2">
                  一个英雄可能同时出现在多个位置池（例如剑魔可上单也可打野），
                  只要被任意位置抽到，它在其他位置池中也会同步失效。
                </p>
              </div>
              <div>
                <div className="font-bold text-cyan-400 mb-1">🔒 位置锁定</div>
                <p className="text-gray-400">
                  锁定位置后，系统只从锁定的位置中分配，确保位置不跑偏。
                </p>
              </div>
              <div>
                <div className="font-bold text-cyan-400 mb-1">
                  ❓ 为什么要打乱？
                </div>
                <p className="text-gray-400">
                  分组先随机分配位置、再均衡队伍，不让“先到先得”影响结果；
                  抽英雄也每次重新打乱顺序，避免共用英雄总被固定的先手位置“抢走”。
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
