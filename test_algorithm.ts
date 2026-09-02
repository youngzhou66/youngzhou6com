import { PLAYERS, TIER_INFO, type Player, type Position } from './data/players';

const POSITIONS: Position[] = ['top', 'jungle', 'mid', 'adc', 'support'];

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

interface AssignResult {
  team1: { player: Player; position: Position; elo: number }[];
  team2: { player: Player; position: Position; elo: number }[];
}

function tryAssign(players: Player[]): AssignResult | null {
  const team1: { player: Player; position: Position; elo: number }[] = [];
  const team2: { player: Player; position: Position; elo: number }[] = [];
  const pos1 = new Set<Position>();
  const pos2 = new Set<Position>();
  const shuffled = shuffle(players);
  const assigned = new Set<string>();

  for (const player of shuffled) {
    if (assigned.has(player.name)) continue;

    const playerPositions = POSITIONS.filter(
      (p) => !isNaN(TIER_INFO[player.positions[p]].elo)
    );

    const candidates: { pos: Position; elo: number; team: 't1' | 't2' }[] = [];
    for (const p of playerPositions) {
      const elo = TIER_INFO[player.positions[p]].elo;
      if (!pos1.has(p) && team1.length < 5) candidates.push({ pos: p, elo, team: 't1' });
      if (!pos2.has(p) && team2.length < 5) candidates.push({ pos: p, elo, team: 't2' });
    }
    if (candidates.length === 0) continue;

    const t1Elo = team1.reduce((s, x) => s + x.elo, 0);
    const t2Elo = team2.reduce((s, x) => s + x.elo, 0);
    let best = candidates[0];
    let bestDiff = Infinity;
    for (const c of candidates) {
      const newElo = (c.team === 't1' ? t1Elo : t2Elo) + c.elo;
      const otherElo = c.team === 't1' ? t2Elo : t1Elo;
      const diff = Math.abs(newElo - otherElo);
      if (diff < bestDiff) { bestDiff = diff; best = c; }
    }

    if (best.team === 't1') {
      team1.push({ player, position: best.pos, elo: best.elo });
      pos1.add(best.pos);
    } else {
      team2.push({ player, position: best.pos, elo: best.elo });
      pos2.add(best.pos);
    }
    assigned.add(player.name);
  }

  if (team1.length === 5 && team2.length === 5) return { team1, team2 };
  return null;
}

let successes = 0;
let failures = 0;
let within30Percent = 0;
let minRatio = 1;
let maxRatio = 0;

for (let i = 0; i < 1000; i++) {
  const shuffled = shuffle(PLAYERS);
  const selected = shuffled.slice(0, 10);
  const result = tryAssign(selected);
  
  if (result) {
    successes++;
    const elo1 = result.team1.reduce((s, p) => s + p.elo, 0);
    const elo2 = result.team2.reduce((s, p) => s + p.elo, 0);
    const maxElo = Math.max(elo1, elo2);
    const ratio = Math.abs(elo1 - elo2) / maxElo;
    if (ratio <= 0.3) within30Percent++;
    if (ratio < minRatio) minRatio = ratio;
    if (ratio > maxRatio) maxRatio = ratio;
  } else {
    failures++;
  }
}

console.log('Success:', successes, '/ 1000');
console.log('Failures:', failures, '/ 1000');
console.log('Within 30%:', within30Percent, '/', successes);
console.log('Min diff ratio:', (minRatio * 100).toFixed(1) + '%');
console.log('Max diff ratio:', (maxRatio * 100).toFixed(1) + '%');
