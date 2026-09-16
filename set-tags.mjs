// 批量设置指定玩家的标签（支持替换已有的、给无标签的加）
import { readFileSync, writeFileSync } from 'node:fs';

const FILE = 'data/players.ts';

// 目标：玩家 → 期望的标签数组
const PLAN = {
  我从未觉得: ['精英咕咕嘎嘎'],
  雇佣者: ['精英咕咕嘎嘎'], // 替换原来的 水豚噜噜
  你的笑点好低: ['撸撸的超'], // 自定义标签
};

const src = readFileSync(FILE, 'utf8');
const eol = src.includes('\r\n') ? '\r\n' : '\n';
const lines = src.split(/\r?\n/);

// 快照：位置数据 + 名字顺序
const snapshot = (ls) => {
  const map = new Map();
  for (const line of ls) {
    const m = line.match(/\{ name: '([^']+)',(?:.*?)positions: \{([^}]+)\}/);
    if (m) map.set(m[1], m[2].trim());
  }
  return map;
};
const before = snapshot(lines);

const report = [];
const seen = new Set();

const out = lines.map((line) => {
  const nameMatch = line.match(/\{ name: '([^']+)',\s*/);
  if (!nameMatch) return line;

  const name = nameMatch[1];
  if (!(name in PLAN)) return line;

  seen.add(name);
  const next = PLAN[name];
  const hadTags = /tags:\s*\[[^\]]*\]/.test(line);
  const oldTags = hadTags
    ? line.match(/tags:\s*\[([^\]]*)\]/)[1].replace(/'/g, '').trim()
    : '(无)';

  let updated;
  if (hadTags) {
    updated = line.replace(/tags:\s*\[[^\]]*\]/, `tags: [${next.map((t) => `'${t}'`).join(', ')}]`);
  } else {
    updated = line.replace(/(\{ name: '[^']+',)(\s*)/, `$1 tags: [${next.map((t) => `'${t}'`).join(', ')}],$2`);
  }

  report.push({ name, oldTags, newTags: next.join(', ') });
  return updated;
});

const missing = Object.keys(PLAN).filter((n) => !seen.has(n));
const after = snapshot(out);

const posChanged = [...before.entries()].filter(([n, v]) => after.get(n) !== v);
const nameDiff =
  before.size !== after.size ||
  [...before.keys()].some((n, i) => [...after.keys()][i] !== n);

console.log('=== 改动明细 ===');
for (const r of report) {
  console.log(`  ${r.name.padEnd(7)} ${r.oldTags}  →  ${r.newTags}`);
}

console.log('\n=== 校验 ===');
console.log(`  计划中未找到的玩家: ${missing.length ? missing.join('、') : '无'}`);
console.log(`  位置数据被改动: ${posChanged.length ? posChanged.map(([n]) => n).join('、') : '无'}`);
console.log(`  玩家数/顺序变化: ${nameDiff ? '是 ✗' : '否 ✓'}`);

if (missing.length > 0 || posChanged.length > 0 || nameDiff || report.length !== 3) {
  console.error('\n❌ 校验失败，未写入文件');
  process.exit(1);
}

writeFileSync(FILE, out.join(eol));

const allTags = [...out.join(eol).matchAll(/tags: \[([^\]]*)\]/g)].flatMap((m) =>
  m[1].split(',').map((t) => t.trim().replace(/'/g, '')).filter(Boolean)
);
const counts = {};
for (const t of allTags) counts[t] = (counts[t] ?? 0) + 1;

console.log(`\n=== 新的标签分布（${allTags.length} 个实例 / ${Object.keys(counts).length} 种）===`);
for (const [t, n] of Object.entries(counts).sort((a, b) => b[1] - a[1])) {
  console.log(`  ${t.padEnd(10)} ${n} 人`);
}
console.log(`\n✅ 已写入 ${FILE}`);
