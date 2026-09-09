'use client';

import { motion } from 'framer-motion';
import { POSITION_LABELS, TIER_INFO } from '@/data/players';
import type { ChampionDraws } from '@/lib/champions/types';
import { POSITIONS } from '@/lib/grouping/constants';
import type { Team } from '@/lib/grouping/types';
import ChampionPickCard from './ChampionPickCard';

interface TeamCardProps {
  team: Team;
  teamIndex: number;
  championDraws: ChampionDraws;
}

export default function TeamCard({
  team,
  teamIndex,
  championDraws,
}: TeamCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: teamIndex === 0 ? -30 : 30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.2 + teamIndex * 0.1 }}
      className={`relative rounded-2xl shadow-2xl overflow-hidden border-2 ${
        teamIndex === 0 ? 'border-blue-500/40' : 'border-red-500/40'
      }`}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${team.color} opacity-10`}
      />
      <div className={`relative bg-gradient-to-r ${team.color} p-5`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-xl backdrop-blur-sm">
              {teamIndex === 0 ? '🛡️' : '⚔️'}
            </div>
            <div>
              <h3 className="text-2xl font-display font-bold text-white drop-shadow">
                {team.name}
              </h3>
              <div className="text-white/80 text-xs mt-0.5">
                {teamIndex === 0 ? 'BLUE SIDE' : 'RED SIDE'}
              </div>
            </div>
          </div>
          <div className="text-right bg-white/15 backdrop-blur-sm rounded-xl px-4 py-2">
            <div className="text-white/70 text-xs tracking-wide">总 ELO</div>
            <div className="text-white text-3xl font-bold">
              {team.totalElo}
            </div>
          </div>
        </div>
      </div>

      <div className="relative p-4 space-y-2 bg-[#1a1d27]/80 backdrop-blur-sm">
        {POSITIONS.map((position) => {
          const groupedPlayer = team.players.find(
            (player) => player.position === position
          );

          if (!groupedPlayer) return null;

          const tier = TIER_INFO[groupedPlayer.tier];
          const champions = championDraws[groupedPlayer.player.name];

          return (
            <div
              key={position}
              className="flex items-center gap-3 p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 transition-colors"
            >
              <div
                className={`w-9 h-9 rounded-lg ${tier.color} flex items-center justify-center text-lg flex-shrink-0`}
              >
                {POSITION_LABELS[position].icon}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs text-gray-400 flex items-center gap-1.5">
                  <span className="font-medium text-gray-300">
                    {POSITION_LABELS[position].zh}
                  </span>
                  <span className="text-gray-600">·</span>
                  <span>{tier.label}</span>
                </div>
                <div className="font-semibold text-white text-sm truncate">
                  {groupedPlayer.player.name}
                </div>
                {champions && champions.length > 0 && (
                  <div
                    className={`mt-2 grid gap-1.5 ${
                      champions.length === 1
                        ? 'grid-cols-1'
                        : champions.length === 2
                        ? 'grid-cols-2'
                        : 'grid-cols-2 sm:grid-cols-3'
                    }`}
                  >
                    {champions.map((champion) => (
                      <ChampionPickCard
                        key={champion.key}
                        champion={champion}
                      />
                    ))}
                  </div>
                )}
              </div>
              <div
                className={`px-2.5 py-1 rounded-full text-white text-xs font-bold ${tier.color} flex-shrink-0`}
              >
                {tier.icon} {tier.elo}
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
