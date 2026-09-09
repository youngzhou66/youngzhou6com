import type { ChampionEntry } from '@/data/champions';

interface ChampionPickCardProps {
  champion: ChampionEntry;
}

export default function ChampionPickCard({
  champion,
}: ChampionPickCardProps) {
  const winColor =
    champion.winRate >= 50
      ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20'
      : 'bg-red-500/10 text-red-300 border-red-500/20';

  return (
    <div
      title={`${champion.name} · OP.GG #${champion.rank} · 胜率 ${champion.winRate.toFixed(1)}% · 登场率 ${champion.pickRate.toFixed(1)}%`}
      className="flex items-center gap-2 rounded-lg bg-[#12151f] border border-white/10 px-2 py-1.5 shadow-sm hover:border-cyan-400/30 transition-colors"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={champion.imageUrl}
        alt={champion.name}
        loading="lazy"
        className="w-9 h-9 rounded-lg object-cover border border-white/10 flex-shrink-0"
      />
      <div className="min-w-0">
        <div className="text-xs font-semibold text-gray-100 truncate">
          {champion.name}
        </div>
        <div className="mt-1 flex flex-wrap items-center gap-1">
          <span
            className={`inline-flex items-center rounded border px-1 py-0.5 text-[10px] font-medium leading-none ${winColor}`}
          >
            胜率 {champion.winRate.toFixed(1)}%
          </span>
          <span className="inline-flex items-center rounded border border-sky-500/20 bg-sky-500/10 px-1 py-0.5 text-[10px] font-medium leading-none text-sky-300">
            登场 {champion.pickRate.toFixed(1)}%
          </span>
        </div>
      </div>
    </div>
  );
}
