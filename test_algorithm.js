const PLAYERS = [
  { name: '后妈', positions: { top: 'hanbao', jungle: 'dingji', mid: 'hanbaole', adc: 'renshangren', support: 'npc' } },
  { name: '银河', positions: { top: 'hanbao', jungle: 'hanbaole', mid: 'dingji', adc: 'npc', support: 'renshangren' } },
  { name: '经理', positions: { top: 'dingji', jungle: 'hanbao', mid: 'renshangren', adc: 'hanbaole', support: 'npc' } },
  { name: '只是npc', positions: { top: 'npc', jungle: 'lawanle', mid: 'lawanle', adc: 'npc', support: 'lawanle' } },
  { name: '亚非王', positions: { top: 'hanbaole', jungle: 'hanbao', mid: 'dingji', adc: 'renshangren', support: 'npc' } },
  { name: '小寻', positions: { top: 'renshangren', jungle: 'hanbaole', mid: 'hanbao', adc: 'dingji', support: 'npc' } },
  { name: '雄狮', positions: { top: 'hanbao', jungle: 'hanbaole', mid: 'dingji', adc: 'renshangren', support: 'npc' } },
  { name: '天空', positions: { top: 'dingji', jungle: 'renshangren', mid: 'hanbaole', adc: 'hanbao', support: 'npc' } },
  { name: '阿呆', positions: { top: 'renshangren', jungle: 'npc', mid: 'hanbao', adc: 'hanbaole', support: 'dingji' } },
  { name: '小智', positions: { top: 'npc', jungle: 'renshangren', mid: 'hanbao', adc: 'dingji', support: 'hanbaole' } },
  { name: '7053', positions: { top: 'hanbao', jungle: 'hanbaole', mid: 'dingji', adc: 'renshangren', support: 'npc' } },
  { name: '大小眼', positions: { top: 'hanbaole', jungle: 'hanbao', mid: 'dingji', adc: 'npc', support: 'renshangren' } },
  { name: '两败俱伤', positions: { top: 'renshangren', jungle: 'npc', mid: 'hanbao', adc: 'hanbaole', support: 'dingji' } },
  { name: '徐凤年', positions: { top: 'hanbaole', jungle: 'hanbao', mid: 'dingji', adc: 'renshangren', support: 'npc' } },
  { name: '小梅', positions: { top: 'npc', jungle: 'renshangren', mid: 'hanbao', adc: 'dingji', support: 'hanbaole' } },
  { name: '喜丶悦', positions: { top: 'hanbao', jungle: 'hanbaole', mid: 'dingji', adc: 'npc', support: 'renshangren' } },
  { name: '苏神', positions: { top: 'hanbaole', jungle: 'hanbao', mid: 'dingji', adc: 'renshangren', support: 'npc' } },
  { name: '小柠檬', positions: { top: 'dingji', jungle: 'renshangren', mid: 'hanbaole', adc: 'hanbao', support: 'npc' } },
  { name: 'ztt', positions: { top: 'npc', jungle: 'lawanle', mid: 'lawanle', adc: 'npc', support: 'lawanle' } },
  { name: '韩国飞行员', positions: { top: 'hanbaole', jungle: 'hanbao', mid: 'dingji', adc: 'renshangren', support: 'npc' } },
  { name: '对抗路c', positions: { top: 'hanbao', jungle: 'hanbaole', mid: 'dingji', adc: 'renshangren', support: 'npc' } },
  { name: '过江鱼', positions: { top: 'renshangren', jungle: 'hanbaole', mid: 'hanbao', adc: 'dingji', support: 'npc' } },
  { name: '杨子哥', positions: { top: 'hanbao', jungle: 'hanbaole', mid: 'dingji', adc: 'renshangren', support: 'npc' } },
  { name: '双大哥', positions: { top: 'hanbaole', jungle: 'hanbao', mid: 'dingji', adc: 'npc', support: 'renshangren' } },
  { name: '鱼玄机', positions: { top: 'npc', jungle: 'renshangren', mid: 'hanbao', adc: 'dingji', support: 'hanbaole' } },
  { name: '辉子', positions: { top: 'dingji', jungle: 'hanbao', mid: 'renshangren', adc: 'hanbaole', support: 'npc' } },
  { name: '友人A', positions: { top: 'hanbao', jungle: 'hanbaole', mid: 'dingji', adc: 'renshangren', support: 'npc' } },
  { name: '小碗儿凶巴巴', positions: { top: 'hanbaole', jungle: 'hanbao', mid: 'dingji', adc: 'renshangren', support: 'npc' } },
  { name: '爱的日记', positions: { top: 'hanbao', jungle: 'hanbaole', mid: 'dingji', adc: 'npc', support: 'renshangren' } },
  { name: 'hp', positions: { top: 'renshangren', jungle: 'npc', mid: 'hanbao', adc: 'hanbaole', support: 'dingji' } },
  { name: '元台', positions: { top: 'hanbaole', jungle: 'hanbao', mid: 'dingji', adc: 'renshangren', support: 'npc' } },
  { name: 'ex', positions: { top: 'npc', jungle: 'renshangren', mid: 'hanbao', adc: 'dingji', support: 'hanbaole' } },
  { name: '董大', positions: { top: 'hanbao', jungle: 'hanbaole', mid: 'dingji', adc: 'renshangren', support: 'npc' } },
  { name: '我还木有想好', positions: { top: 'hanbaole', jungle: 'hanbao', mid: 'dingji', adc: 'npc', support: 'renshangren' } },
  { name: '老朱', positions: { top: 'dingji', jungle: 'hanbao', mid: 'renshangren', adc: 'hanbaole', support: 'npc' } },
  { name: '小青', positions: { top: 'npc', jungle: 'lawanle', mid: 'lawanle', adc: 'npc', support: 'lawanle' } },
  { name: '狗叫', positions: { top: 'renshangren', jungle: 'npc', mid: 'hanbao', adc: 'hanbaole', support: 'dingji' } },
  { name: '野犬', positions: { top: 'hanbaole', jungle: 'hanbao', mid: 'dingji', adc: 'renshangren', support: 'npc' } },
  { name: '热河路', positions: { top: 'hanbao', jungle: 'hanbaole', mid: 'dingji', adc: 'npc', support: 'renshangren' } },
  { name: '羊羊', positions: { top: 'hanbaole', jungle: 'hanbao', mid: 'dingji', adc: 'renshangren', support: 'npc' } },
  { name: '青莲剑歌', positions: { top: 'dingji', jungle: 'renshangren', mid: 'hanbaole', adc: 'hanbao', support: 'npc' } },
  { name: '西安王', positions: { top: 'hanbao', jungle: 'hanbaole', mid: 'dingji', adc: 'renshangren', support: 'npc' } },
  { name: '嘉豪', positions: { top: 'npc', jungle: 'renji', mid: 'lawanle', adc: 'npc', support: 'lawanle' } },
  { name: '又生气', positions: { top: 'hanbaole', jungle: 'hanbao', mid: 'dingji', adc: 'renshangren', support: 'npc' } },
  { name: '佳佳', positions: { top: 'hanbao', jungle: 'hanbaole', mid: 'dingji', adc: 'renshangren', support: 'npc' } },
];

const TIER_INFO = {
  hanbaole: { elo: 220 },
  hanbao: { elo: 210 },
  dingji: { elo: 170 },
  renshangren: { elo: 130 },
  npc: { elo: 90 },
  lawanle: { elo: 50 },
  renji: { elo: 40 },
};

const POSITIONS = ['top', 'jungle', 'mid', 'adc', 'support'];

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function tryAssign(players) {
  const team1 = [];
  const team2 = [];
  const pos1 = new Set();
  const pos2 = new Set();
  const shuffled = shuffle(players);
  const assigned = new Set();

  for (const player of shuffled) {
    if (assigned.has(player.name)) continue;

    const playerPositions = POSITIONS.filter(
      (p) => !isNaN(TIER_INFO[player.positions[p]].elo)
    );

    const candidates = [];
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
let failureExamples = [];

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
    if (failureExamples.length < 5) {
      failureExamples.push(selected.map(p => p.name).join(', '));
    }
  }
}

console.log('=== Algorithm Test Results (1000 iterations) ===');
console.log('Success:', successes, '/ 1000');
console.log('Failures:', failures, '/ 1000');
console.log('Within 30%:', within30Percent, '/', successes);
console.log('Min diff ratio:', (minRatio * 100).toFixed(1) + '%');
console.log('Max diff ratio:', (maxRatio * 100).toFixed(1) + '%');
if (failureExamples.length > 0) {
  console.log('\nFailure examples (first 5):');
  failureExamples.forEach((ex, i) => console.log(`  ${i+1}. ${ex}`));
}
