/**
 * 从 OP.GG 抓取五个位置的英雄榜单，生成 data/champions.ts 静态数据快照。
 *
 * 用法: npm run update:champions
 *
 * OP.GG 的页面结构可能随版本更新而变化，如果脚本解析失败，会给出
 * 明确的报错信息。页面本身不依赖本脚本，快照提交到仓库后即可离线构建。
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUTPUT_FILE = path.resolve(__dirname, '../data/champions.ts');

const POSITIONS = ['top', 'jungle', 'mid', 'adc', 'support'];
const SOURCE_URL = 'https://op.gg/lol/champions';
const USER_AGENT =
  'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';

async function fetchText(url) {
  for (let attempt = 1; attempt <= 3; attempt++) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 30000);
      const res = await fetch(url, {
        headers: {
          'user-agent': USER_AGENT,
          'accept-language': 'zh-CN,zh;q=0.9',
          accept: 'text/html,application/xhtml+xml',
        },
        signal: controller.signal,
      });
      clearTimeout(timer);
      if (!res.ok) {
        throw new Error(`HTTP ${res.status} ${res.statusText}`);
      }
      return await res.text();
    } catch (err) {
      if (attempt === 3) throw err;
      await new Promise((resolve) => setTimeout(resolve, 800 * attempt));
    }
  }
  throw new Error('unreachable');
}

/** 把 HTML 里 self.__next_f.push 的字符串还原成普通文本数组 */
function extractPayloads(html) {
  const re = /self\.__next_f\.push\(\[1,"((?:\\.|[^"\\])*)"\]\)/g;
  const payloads = [];
  let match;
  while ((match = re.exec(html)) !== null) {
    try {
      payloads.push(JSON.parse(`"${match[1]}"`));
    } catch {
      // 个别非关键数据块解析失败不影响主流程，跳过即可
    }
  }
  return payloads;
}

function walk(value, visit) {
  if (Array.isArray(value)) {
    for (const item of value) walk(item, visit);
    return;
  }
  if (!value || typeof value !== 'object') return;
  visit(value);
  for (const item of Object.values(value)) {
    walk(item, visit);
  }
}

/** 在页面数据流里找出带榜单数据的节点（按 positionTierData 识别） */
function findChampionList(root, position) {
  let best = null;
  const target = position.toUpperCase();
  walk(root, (node) => {
    const data = node.data;
    if (!Array.isArray(data) || data.length < 10) return;
    const first = data[0];
    if (!first || typeof first !== 'object') return;
    if (typeof first.name !== 'string' || !('positionTierData' in first)) return;
    const allMatch = data.every(
      (item) =>
        item.positionName === target &&
        typeof item.image_url === 'string' &&
        Number.isFinite(item.positionRank)
    );
    if (allMatch && (!best || data.length > best.length)) {
      best = data;
    }
  });
  return best;
}

/** 读取页面参数（版本 / 服务器 / 分段） */
function findMeta(root, position) {
  let meta = null;
  walk(root, (node) => {
    const params = node.params;
    if (!params || typeof params !== 'object') return;
    if (
      params.position === position &&
      typeof params.version === 'string' &&
      typeof params.region === 'string' &&
      typeof params.tier === 'string'
    ) {
      meta = params;
    }
  });
  return meta;
}

function parsePayload(payload) {
  const colon = payload.indexOf(':');
  if (colon < 0) return null;
  try {
    return JSON.parse(payload.slice(colon + 1));
  } catch {
    return null;
  }
}

async function fetchPosition(position) {
  const url = `${SOURCE_URL}?position=${position}&hl=zh_CN`;
  console.log(`→ 抓取 ${position}: ${url}`);
  const html = await fetchText(url);
  const payloads = extractPayloads(html);
  if (payloads.length === 0) {
    throw new Error(`${position}: 没有找到页面数据，OP.GG 页面结构可能已改版`);
  }

  let championList = null;
  let meta = null;
  for (const payload of payloads) {
    const root = parsePayload(payload);
    if (!root) continue;
    championList = championList || findChampionList(root, position);
    meta = meta || findMeta(root, position);
    if (championList && meta) break;
  }

  if (!championList) {
    throw new Error(
      `${position}: 没有解析到英雄榜单。OP.GG 页面结构可能已改版，请检查页面: ${url}`
    );
  }
  if (!meta) {
    throw new Error(`${position}: 没有解析到版本信息。OP.GG 页面结构可能已改版`);
  }

  return {
    position,
    meta,
    entries: championList.map((item) => ({
      key: item.key,
      // hl=zh_CN 时 OP.GG 直接返回中文英雄名
      name: item.name,
      imageUrl: item.image_url,
      tier: item.positionTier ?? item.positionTierData?.tier,
      rank: item.positionRank,
      winRate: item.positionWinRate,
      pickRate: item.positionPickRate,
      banRate: item.positionBanRate,
    })),
  };
}

async function main() {
  const results = [];
  for (const position of POSITIONS) {
    results.push(await fetchPosition(position));
    await new Promise((resolve) => setTimeout(resolve, 400));
  }

  const firstMeta = results[0].meta;
  const snapshot = {
    source: 'OP.GG',
    sourceUrl: SOURCE_URL,
    queue: firstMeta.type,
    region: firstMeta.region,
    tier: firstMeta.tier,
    patch: firstMeta.version,
    updatedAt: new Date().toISOString(),
    positions: Object.fromEntries(
      results.map(({ position, entries }) => [position, entries])
    ),
  };

  const counts = results
    .map(({ position, entries }) => `${position}:${entries.length}`)
    .join(' ');
  console.log(`→ 解析完成 (${counts}), Patch ${snapshot.patch}`);

  const typeDefs = `/* eslint-disable */
// 本文件由 scripts/update-champions.mjs 自动生成，请勿手动编辑。
// 英雄数据来自 OP.GG（${snapshot.patch} 版本快照），可用 npm run update:champions 更新。

export type ChampionPosition = 'top' | 'jungle' | 'mid' | 'adc' | 'support';

export interface ChampionEntry {
  key: string;
  /** 中文名（抓取时使用 OP.GG 中文站） */
  name: string;
  imageUrl: string;
  tier: number;
  rank: number;
  winRate: number;
  pickRate: number;
  banRate: number;
}

export interface ChampionsSnapshot {
  source: string;
  sourceUrl: string;
  queue: string;
  region: string;
  tier: string;
  patch: string;
  updatedAt: string;
  positions: Record<ChampionPosition, ChampionEntry[]>;
}

export const CHAMPIONS_DATA: ChampionsSnapshot = `;

  fs.mkdirSync(path.dirname(OUTPUT_FILE), { recursive: true });
  fs.writeFileSync(
    OUTPUT_FILE,
    `${typeDefs}${JSON.stringify(snapshot, null, 2)};\n`,
    'utf8'
  );
  console.log(`→ 已写入 ${OUTPUT_FILE}`);
}

main().catch((err) => {
  console.error('英雄数据更新失败:', err.message || err);
  process.exit(1);
});
