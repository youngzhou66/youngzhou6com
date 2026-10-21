/* eslint-disable */
// 本文件由 scripts/update-champions.mjs 自动生成，请勿手动编辑。
// 英雄数据来自 OP.GG（16.20 版本快照），可用 npm run update:champions 更新。

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

export const CHAMPIONS_DATA: ChampionsSnapshot = {
  "source": "OP.GG",
  "sourceUrl": "https://op.gg/lol/champions",
  "queue": "ranked",
  "region": "global",
  "tier": "emerald_plus",
  "patch": "16.20",
  "updatedAt": "2026-10-10T01:52:50.968Z",
  "positions": {
    "top": [
      {
        "key": "malphite",
        "name": "熔岩巨兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Malphite.png",
        "tier": 1,
        "rank": 1,
        "winRate": 52.0941,
        "pickRate": 7.082249999999999,
        "banRate": 17.2543
      },
      {
        "key": "ornn",
        "name": "山隐之焰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Ornn.png",
        "tier": 1,
        "rank": 2,
        "winRate": 51.9702,
        "pickRate": 3.55405,
        "banRate": 0.532999
      },
      {
        "key": "mordekaiser",
        "name": "铁铠冥魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Mordekaiser.png",
        "tier": 1,
        "rank": 3,
        "winRate": 50.823499999999996,
        "pickRate": 5.69898,
        "banRate": 7.98593
      },
      {
        "key": "yone",
        "name": "封魔剑魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Yone.png",
        "tier": 1,
        "rank": 4,
        "winRate": 49.666900000000005,
        "pickRate": 8.84116,
        "banRate": 14.0768
      },
      {
        "key": "sett",
        "name": "腕豪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Sett.png",
        "tier": 1,
        "rank": 5,
        "winRate": 50.593999999999994,
        "pickRate": 5.90279,
        "banRate": 2.47046
      },
      {
        "key": "teemo",
        "name": "迅捷斥候",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Teemo.png",
        "tier": 1,
        "rank": 6,
        "winRate": 51.186699999999995,
        "pickRate": 4.14198,
        "banRate": 6.70019
      },
      {
        "key": "camille",
        "name": "青钢影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Camille.png",
        "tier": 2,
        "rank": 7,
        "winRate": 50.89399999999999,
        "pickRate": 4.17079,
        "banRate": 2.76878
      },
      {
        "key": "nasus",
        "name": "沙漠死神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Nasus.png",
        "tier": 2,
        "rank": 8,
        "winRate": 50.488699999999994,
        "pickRate": 4.61677,
        "banRate": 18.2929
      },
      {
        "key": "fiora",
        "name": "无双剑姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Fiora.png",
        "tier": 2,
        "rank": 9,
        "winRate": 50.537,
        "pickRate": 4.655539999999999,
        "banRate": 6.0094899999999996
      },
      {
        "key": "shen",
        "name": "暮光之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Shen.png",
        "tier": 2,
        "rank": 10,
        "winRate": 51.1404,
        "pickRate": 3.4555299999999995,
        "banRate": 0.687025
      },
      {
        "key": "gangplank",
        "name": "海洋之灾",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Gangplank.png",
        "tier": 2,
        "rank": 11,
        "winRate": 50.186600000000006,
        "pickRate": 5.33732,
        "banRate": 8.99723
      },
      {
        "key": "urgot",
        "name": "无畏战车",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Urgot.png",
        "tier": 2,
        "rank": 12,
        "winRate": 51.657799999999995,
        "pickRate": 2.54324,
        "banRate": 0.8999170000000001
      },
      {
        "key": "garen",
        "name": "德玛西亚之力",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Garen.png",
        "tier": 2,
        "rank": 13,
        "winRate": 49.9666,
        "pickRate": 6.02398,
        "banRate": 4.42565
      },
      {
        "key": "aatrox",
        "name": "暗裔剑魔",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Aatrox.png",
        "tier": 2,
        "rank": 14,
        "winRate": 49.8266,
        "pickRate": 6.291779999999999,
        "banRate": 7.2229600000000005
      },
      {
        "key": "pantheon",
        "name": "不屈之枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Pantheon.png",
        "tier": 2,
        "rank": 15,
        "winRate": 51.082499999999996,
        "pickRate": 3.17078,
        "banRate": 2.4421399999999998
      },
      {
        "key": "jax",
        "name": "武器大师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Jax.png",
        "tier": 2,
        "rank": 16,
        "winRate": 49.8239,
        "pickRate": 5.8958,
        "banRate": 10.0981
      },
      {
        "key": "renekton",
        "name": "荒漠屠夫",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Renekton.png",
        "tier": 2,
        "rank": 17,
        "winRate": 50.0039,
        "pickRate": 5.47419,
        "banRate": 4.10695
      },
      {
        "key": "darius",
        "name": "诺克萨斯之手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Darius.png",
        "tier": 2,
        "rank": 18,
        "winRate": 49.5978,
        "pickRate": 6.10978,
        "banRate": 11.9918
      },
      {
        "key": "irelia",
        "name": "刀锋舞者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Irelia.png",
        "tier": 2,
        "rank": 19,
        "winRate": 50,
        "pickRate": 4.75554,
        "banRate": 13.047600000000001
      },
      {
        "key": "chogath",
        "name": "虚空恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Chogath.png",
        "tier": 2,
        "rank": 20,
        "winRate": 50.6585,
        "pickRate": 3.2495999999999996,
        "banRate": 7.135180000000001
      },
      {
        "key": "drmundo",
        "name": "祖安狂人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/DrMundo.png",
        "tier": 3,
        "rank": 21,
        "winRate": 50.6049,
        "pickRate": 3.11739,
        "banRate": 2.25856
      },
      {
        "key": "singed",
        "name": "炼金术士",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Singed.png",
        "tier": 3,
        "rank": 22,
        "winRate": 50.9395,
        "pickRate": 2.27756,
        "banRate": 0.702853
      },
      {
        "key": "olaf",
        "name": "狂战士",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Olaf.png",
        "tier": 3,
        "rank": 23,
        "winRate": 50.3012,
        "pickRate": 2.95468,
        "banRate": 3.75911
      },
      {
        "key": "yasuo",
        "name": "疾风剑豪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Yasuo.png",
        "tier": 3,
        "rank": 24,
        "winRate": 49.3351,
        "pickRate": 3.64854,
        "banRate": 22.8553
      },
      {
        "key": "kayle",
        "name": "正义天使",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Kayle.png",
        "tier": 3,
        "rank": 25,
        "winRate": 50.839,
        "pickRate": 2.20955,
        "banRate": 1.3183200000000002
      },
      {
        "key": "tryndamere",
        "name": "蛮族之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Tryndamere.png",
        "tier": 3,
        "rank": 26,
        "winRate": 50.07899999999999,
        "pickRate": 3.2195099999999996,
        "banRate": 2.8286100000000003
      },
      {
        "key": "zaahen",
        "name": "不落魔锋",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Zaahen.png",
        "tier": 3,
        "rank": 27,
        "winRate": 50.365899999999996,
        "pickRate": 2.66315,
        "banRate": 1.0783900000000002
      },
      {
        "key": "warwick",
        "name": "祖安怒兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Warwick.png",
        "tier": 3,
        "rank": 28,
        "winRate": 51.4752,
        "pickRate": 1.42903,
        "banRate": 1.55227
      },
      {
        "key": "illaoi",
        "name": "海兽祭司",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Illaoi.png",
        "tier": 3,
        "rank": 29,
        "winRate": 50.369200000000006,
        "pickRate": 2.46781,
        "banRate": 4.91884
      },
      {
        "key": "akali",
        "name": "离群之刺",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Akali.png",
        "tier": 3,
        "rank": 30,
        "winRate": 49.7654,
        "pickRate": 2.75404,
        "banRate": 16.575400000000002
      },
      {
        "key": "gwen",
        "name": "灵罗娃娃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Gwen.png",
        "tier": 4,
        "rank": 31,
        "winRate": 50.2131,
        "pickRate": 2.4354,
        "banRate": 3.2249100000000004
      },
      {
        "key": "sion",
        "name": "亡灵战神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Sion.png",
        "tier": 4,
        "rank": 32,
        "winRate": 49.8176,
        "pickRate": 2.72904,
        "banRate": 0.5058950000000001
      },
      {
        "key": "tahmkench",
        "name": "河流之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/TahmKench.png",
        "tier": 4,
        "rank": 33,
        "winRate": 50.19,
        "pickRate": 2.00722,
        "banRate": 2.16376
      },
      {
        "key": "gragas",
        "name": "酒桶",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Gragas.png",
        "tier": 4,
        "rank": 34,
        "winRate": 49.7068,
        "pickRate": 2.56548,
        "banRate": 0.699144
      },
      {
        "key": "jayce",
        "name": "未来守护者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Jayce.png",
        "tier": 4,
        "rank": 35,
        "winRate": 47.9683,
        "pickRate": 5.79792,
        "banRate": 7.1990799999999995
      },
      {
        "key": "gnar",
        "name": "迷失之牙",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Gnar.png",
        "tier": 4,
        "rank": 36,
        "winRate": 48.9482,
        "pickRate": 3.60553,
        "banRate": 1.34952
      },
      {
        "key": "riven",
        "name": "放逐之刃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Riven.png",
        "tier": 4,
        "rank": 37,
        "winRate": 49.808,
        "pickRate": 2.26167,
        "banRate": 1.53284
      },
      {
        "key": "kled",
        "name": "暴怒骑士",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Kled.png",
        "tier": 4,
        "rank": 38,
        "winRate": 50.334500000000006,
        "pickRate": 1.71018,
        "banRate": 0.8902220000000001
      },
      {
        "key": "yorick",
        "name": "牧魂人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Yorick.png",
        "tier": 4,
        "rank": 39,
        "winRate": 49.2641,
        "pickRate": 2.7782,
        "banRate": 5.54415
      },
      {
        "key": "volibear",
        "name": "不灭狂雷",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Volibear.png",
        "tier": 4,
        "rank": 40,
        "winRate": 48.2512,
        "pickRate": 4.42206,
        "banRate": 1.94486
      },
      {
        "key": "anivia",
        "name": "冰晶凤凰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Anivia.png",
        "tier": 4,
        "rank": 41,
        "winRate": 51.489,
        "pickRate": 0.7612340000000001,
        "banRate": 2.13594
      },
      {
        "key": "ambessa",
        "name": "铁血狼母",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Ambessa.png",
        "tier": 4,
        "rank": 42,
        "winRate": 48.5619,
        "pickRate": 3.48413,
        "banRate": 4.64497
      },
      {
        "key": "kennen",
        "name": "狂暴之心",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Kennen.png",
        "tier": 4,
        "rank": 43,
        "winRate": 49.5913,
        "pickRate": 2.02162,
        "banRate": 1.44373
      },
      {
        "key": "monkeyking",
        "name": "齐天大圣",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/MonkeyKing.png",
        "tier": 4,
        "rank": 44,
        "winRate": 50.6316,
        "pickRate": 1.0063600000000001,
        "banRate": 5.60799
      },
      {
        "key": "aurora",
        "name": "双界灵兔",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Aurora.png",
        "tier": 4,
        "rank": 45,
        "winRate": 51.4845,
        "pickRate": 0.606572,
        "banRate": 1.2302
      },
      {
        "key": "quinn",
        "name": "德玛西亚之翼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Quinn.png",
        "tier": 4,
        "rank": 46,
        "winRate": 50.944900000000004,
        "pickRate": 0.7959799999999999,
        "banRate": 0.7835129999999999
      },
      {
        "key": "lissandra",
        "name": "冰霜女巫",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Lissandra.png",
        "tier": 4,
        "rank": 47,
        "winRate": 51.352399999999996,
        "pickRate": 0.556148,
        "banRate": 3.63982
      },
      {
        "key": "heimerdinger",
        "name": "大发明家",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Heimerdinger.png",
        "tier": 4,
        "rank": 48,
        "winRate": 49.908,
        "pickRate": 1.26675,
        "banRate": 1.85366
      },
      {
        "key": "zac",
        "name": "生化魔人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Zac.png",
        "tier": 4,
        "rank": 49,
        "winRate": 51.361999999999995,
        "pickRate": 0.536656,
        "banRate": 1.00336
      },
      {
        "key": "sylas",
        "name": "解脱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Sylas.png",
        "tier": 4,
        "rank": 50,
        "winRate": 49.2133,
        "pickRate": 1.21187,
        "banRate": 18.2807
      },
      {
        "key": "poppy",
        "name": "圣锤之毅",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Poppy.png",
        "tier": 4,
        "rank": 51,
        "winRate": 50.1116,
        "pickRate": 0.949159,
        "banRate": 3.7188600000000003
      },
      {
        "key": "vladimir",
        "name": "猩红收割者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Vladimir.png",
        "tier": 4,
        "rank": 52,
        "winRate": 49.1647,
        "pickRate": 1.42035,
        "banRate": 6.24184
      },
      {
        "key": "ksante",
        "name": "纳祖芒荣耀",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/KSante.png",
        "tier": 4,
        "rank": 53,
        "winRate": 46.9998,
        "pickRate": 3.9263,
        "banRate": 2.485
      },
      {
        "key": "vayne",
        "name": "暗夜猎手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Vayne.png",
        "tier": 4,
        "rank": 54,
        "winRate": 48.8509,
        "pickRate": 1.40128,
        "banRate": 4.31466
      },
      {
        "key": "malzahar",
        "name": "虚空先知",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Malzahar.png",
        "tier": 4,
        "rank": 55,
        "winRate": 50.423399999999994,
        "pickRate": 0.550427,
        "banRate": 7.823720000000001
      },
      {
        "key": "trundle",
        "name": "巨魔之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Trundle.png",
        "tier": 5,
        "rank": 56,
        "winRate": 48.0821,
        "pickRate": 1.66251,
        "banRate": 0.392209
      },
      {
        "key": "swain",
        "name": "诺克萨斯统领",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Swain.png",
        "tier": 5,
        "rank": 57,
        "winRate": 49.4048,
        "pickRate": 0.605089,
        "banRate": 1.7526199999999998
      },
      {
        "key": "rumble",
        "name": "机械公敌",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Rumble.png",
        "tier": 5,
        "rank": 58,
        "winRate": 47.0681,
        "pickRate": 1.4849700000000001,
        "banRate": 0.6690050000000001
      },
      {
        "key": "masteryi",
        "name": "无极剑圣",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/MasterYi.png",
        "tier": 5,
        "rank": 59,
        "winRate": 48.1481,
        "pickRate": 0.5720379999999999,
        "banRate": 13.6259
      },
      {
        "key": "varus",
        "name": "惩戒之箭",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Varus.png",
        "tier": 5,
        "rank": 60,
        "winRate": 47.301,
        "pickRate": 1.0086899999999999,
        "banRate": 0.869609
      },
      {
        "key": "udyr",
        "name": "兽灵行者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Udyr.png",
        "tier": 5,
        "rank": 61,
        "winRate": 47.4341,
        "pickRate": 0.594495,
        "banRate": 0.9310050000000001
      },
      {
        "key": "ryze",
        "name": "符文法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Ryze.png",
        "tier": 5,
        "rank": 62,
        "winRate": 46.9131,
        "pickRate": 0.521613,
        "banRate": 0.369426
      },
      {
        "key": "corki",
        "name": "英勇投弹手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Corki.png",
        "tier": 5,
        "rank": 63,
        "winRate": 45.0704,
        "pickRate": 0.8423780000000001,
        "banRate": 0.345357
      }
    ],
    "jungle": [
      {
        "key": "monkeyking",
        "name": "齐天大圣",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/MonkeyKing.png",
        "tier": 0,
        "rank": 1,
        "winRate": 52.2777,
        "pickRate": 7.6049500000000005,
        "banRate": 5.82495
      },
      {
        "key": "rammus",
        "name": "披甲龙龟",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Rammus.png",
        "tier": 1,
        "rank": 2,
        "winRate": 53.3501,
        "pickRate": 1.92993,
        "banRate": 4.40322
      },
      {
        "key": "chogath",
        "name": "虚空恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Chogath.png",
        "tier": 1,
        "rank": 3,
        "winRate": 51.3266,
        "pickRate": 6.1436,
        "banRate": 7.17957
      },
      {
        "key": "lillia",
        "name": "含羞蓓蕾",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Lillia.png",
        "tier": 1,
        "rank": 4,
        "winRate": 51.1729,
        "pickRate": 5.44062,
        "banRate": 4.211390000000001
      },
      {
        "key": "masteryi",
        "name": "无极剑圣",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/MasterYi.png",
        "tier": 1,
        "rank": 5,
        "winRate": 50.6838,
        "pickRate": 6.40643,
        "banRate": 15.057300000000001
      },
      {
        "key": "talon",
        "name": "刀锋之影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Talon.png",
        "tier": 1,
        "rank": 6,
        "winRate": 50.791,
        "pickRate": 5.89741,
        "banRate": 10.2904
      },
      {
        "key": "shaco",
        "name": "恶魔小丑",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Shaco.png",
        "tier": 1,
        "rank": 7,
        "winRate": 51.099700000000006,
        "pickRate": 4.2322,
        "banRate": 16.8538
      },
      {
        "key": "leesin",
        "name": "盲僧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/LeeSin.png",
        "tier": 1,
        "rank": 8,
        "winRate": 49.0316,
        "pickRate": 13.3198,
        "banRate": 18.3172
      },
      {
        "key": "elise",
        "name": "蜘蛛女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Elise.png",
        "tier": 2,
        "rank": 9,
        "winRate": 51.1402,
        "pickRate": 3.5740800000000004,
        "banRate": 2.39044
      },
      {
        "key": "shyvana",
        "name": "龙血武姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Shyvana.png",
        "tier": 2,
        "rank": 10,
        "winRate": 50.7883,
        "pickRate": 4.114269999999999,
        "banRate": 5.23481
      },
      {
        "key": "ekko",
        "name": "时间刺客",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Ekko.png",
        "tier": 2,
        "rank": 11,
        "winRate": 50.6351,
        "pickRate": 4.34382,
        "banRate": 2.37541
      },
      {
        "key": "sylas",
        "name": "解脱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Sylas.png",
        "tier": 2,
        "rank": 12,
        "winRate": 49.4319,
        "pickRate": 6.91418,
        "banRate": 18.827099999999998
      },
      {
        "key": "kayn",
        "name": "影流之镰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Kayn.png",
        "tier": 2,
        "rank": 13,
        "winRate": 49.6747,
        "pickRate": 7.28273,
        "banRate": 4.83773
      },
      {
        "key": "warwick",
        "name": "祖安怒兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Warwick.png",
        "tier": 2,
        "rank": 14,
        "winRate": 51.25880000000001,
        "pickRate": 2.90269,
        "banRate": 1.5956299999999999
      },
      {
        "key": "zac",
        "name": "生化魔人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Zac.png",
        "tier": 2,
        "rank": 15,
        "winRate": 51.3335,
        "pickRate": 2.74011,
        "banRate": 1.10602
      },
      {
        "key": "sejuani",
        "name": "北地之怒",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Sejuani.png",
        "tier": 2,
        "rank": 16,
        "winRate": 51.54109999999999,
        "pickRate": 2.289,
        "banRate": 0.249797
      },
      {
        "key": "graves",
        "name": "法外狂徒",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Graves.png",
        "tier": 2,
        "rank": 17,
        "winRate": 49.250699999999995,
        "pickRate": 8.19336,
        "banRate": 10.524000000000001
      },
      {
        "key": "khazix",
        "name": "虚空掠夺者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Khazix.png",
        "tier": 2,
        "rank": 18,
        "winRate": 49.471900000000005,
        "pickRate": 7.3977200000000005,
        "banRate": 4.75982
      },
      {
        "key": "zyra",
        "name": "荆棘之兴",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Zyra.png",
        "tier": 2,
        "rank": 19,
        "winRate": 52.4554,
        "pickRate": 1.1578700000000002,
        "banRate": 2.30632
      },
      {
        "key": "reksai",
        "name": "虚空遁地兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/RekSai.png",
        "tier": 2,
        "rank": 20,
        "winRate": 52.046400000000006,
        "pickRate": 1.50768,
        "banRate": 0.633702
      },
      {
        "key": "briar",
        "name": "狂厄蔷薇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Briar.png",
        "tier": 2,
        "rank": 21,
        "winRate": 50.188900000000004,
        "pickRate": 4.12395,
        "banRate": 8.32488
      },
      {
        "key": "jarvaniv",
        "name": "德玛西亚皇子",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/JarvanIV.png",
        "tier": 2,
        "rank": 22,
        "winRate": 49.5946,
        "pickRate": 5.94753,
        "banRate": 1.12196
      },
      {
        "key": "belveth",
        "name": "虚空女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Belveth.png",
        "tier": 2,
        "rank": 23,
        "winRate": 51.0611,
        "pickRate": 2.4313700000000003,
        "banRate": 4.137090000000001
      },
      {
        "key": "nidalee",
        "name": "狂野女猎手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Nidalee.png",
        "tier": 2,
        "rank": 24,
        "winRate": 50.5855,
        "pickRate": 3.21943,
        "banRate": 2.4840999999999998
      },
      {
        "key": "viego",
        "name": "破败之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Viego.png",
        "tier": 2,
        "rank": 25,
        "winRate": 48.8551,
        "pickRate": 8.489049999999999,
        "banRate": 6.78373
      },
      {
        "key": "diana",
        "name": "皎月女神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Diana.png",
        "tier": 2,
        "rank": 26,
        "winRate": 50.1503,
        "pickRate": 3.99317,
        "banRate": 3.55971
      },
      {
        "key": "hecarim",
        "name": "战争之影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Hecarim.png",
        "tier": 2,
        "rank": 27,
        "winRate": 49.5217,
        "pickRate": 5.65817,
        "banRate": 7.3423
      },
      {
        "key": "evelynn",
        "name": "痛苦之拥",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Evelynn.png",
        "tier": 2,
        "rank": 28,
        "winRate": 51.063199999999995,
        "pickRate": 2.29764,
        "banRate": 2.1533900000000004
      },
      {
        "key": "qiyana",
        "name": "元素女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Qiyana.png",
        "tier": 2,
        "rank": 29,
        "winRate": 48.841499999999996,
        "pickRate": 7.48933,
        "banRate": 14.3729
      },
      {
        "key": "fiddlesticks",
        "name": "远古恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Fiddlesticks.png",
        "tier": 2,
        "rank": 30,
        "winRate": 51.0235,
        "pickRate": 2.08851,
        "banRate": 1.17151
      },
      {
        "key": "ivern",
        "name": "翠神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Ivern.png",
        "tier": 3,
        "rank": 31,
        "winRate": 51.5164,
        "pickRate": 1.04162,
        "banRate": 0.343734
      },
      {
        "key": "udyr",
        "name": "兽灵行者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Udyr.png",
        "tier": 3,
        "rank": 32,
        "winRate": 50.4155,
        "pickRate": 1.85011,
        "banRate": 0.973937
      },
      {
        "key": "skarner",
        "name": "上古领主",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Skarner.png",
        "tier": 3,
        "rank": 33,
        "winRate": 51.2224,
        "pickRate": 1.0767900000000001,
        "banRate": 0.23489600000000002
      },
      {
        "key": "gragas",
        "name": "酒桶",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Gragas.png",
        "tier": 3,
        "rank": 34,
        "winRate": 51.56420000000001,
        "pickRate": 0.780902,
        "banRate": 0.648413
      },
      {
        "key": "naafiri",
        "name": "百裂冥犬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Naafiri.png",
        "tier": 3,
        "rank": 35,
        "winRate": 49.1321,
        "pickRate": 2.91175,
        "banRate": 9.65789
      },
      {
        "key": "nocturne",
        "name": "永恒梦魇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Nocturne.png",
        "tier": 3,
        "rank": 36,
        "winRate": 48.692600000000006,
        "pickRate": 3.8095299999999996,
        "banRate": 9.15783
      },
      {
        "key": "xinzhao",
        "name": "德邦总管",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/XinZhao.png",
        "tier": 3,
        "rank": 37,
        "winRate": 49.6919,
        "pickRate": 2.0503899999999997,
        "banRate": 0.5333789999999999
      },
      {
        "key": "amumu",
        "name": "殇之木乃伊",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Amumu.png",
        "tier": 3,
        "rank": 38,
        "winRate": 49.7779,
        "pickRate": 1.80189,
        "banRate": 0.8783350000000001
      },
      {
        "key": "vi",
        "name": "皮城执法官",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Vi.png",
        "tier": 3,
        "rank": 39,
        "winRate": 48.43,
        "pickRate": 3.9301999999999997,
        "banRate": 1.3473000000000002
      },
      {
        "key": "quinn",
        "name": "德玛西亚之翼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Quinn.png",
        "tier": 3,
        "rank": 40,
        "winRate": 50.1743,
        "pickRate": 1.26844,
        "banRate": 0.7931229999999999
      },
      {
        "key": "kindred",
        "name": "永猎双子",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Kindred.png",
        "tier": 3,
        "rank": 41,
        "winRate": 48.6196,
        "pickRate": 3.1503499999999995,
        "banRate": 1.98954
      },
      {
        "key": "taliyah",
        "name": "岩雀",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Taliyah.png",
        "tier": 3,
        "rank": 42,
        "winRate": 50.783199999999994,
        "pickRate": 0.8335520000000001,
        "banRate": 0.327779
      },
      {
        "key": "rengar",
        "name": "傲之追猎者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Rengar.png",
        "tier": 3,
        "rank": 43,
        "winRate": 48.228,
        "pickRate": 3.64274,
        "banRate": 7.10003
      },
      {
        "key": "aatrox",
        "name": "暗裔剑魔",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Aatrox.png",
        "tier": 3,
        "rank": 44,
        "winRate": 50.3841,
        "pickRate": 0.877356,
        "banRate": 6.91683
      },
      {
        "key": "nunu",
        "name": "雪原双子",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Nunu.png",
        "tier": 3,
        "rank": 45,
        "winRate": 49.3056,
        "pickRate": 1.8195800000000002,
        "banRate": 0.45748300000000003
      },
      {
        "key": "fizz",
        "name": "潮汐海灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Fizz.png",
        "tier": 3,
        "rank": 46,
        "winRate": 50.6739,
        "pickRate": 0.703191,
        "banRate": 5.97594
      },
      {
        "key": "gwen",
        "name": "灵罗娃娃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Gwen.png",
        "tier": 3,
        "rank": 47,
        "winRate": 50.2546,
        "pickRate": 0.9097890000000001,
        "banRate": 3.1497499999999996
      },
      {
        "key": "darius",
        "name": "诺克萨斯之手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Darius.png",
        "tier": 3,
        "rank": 48,
        "winRate": 50.1668,
        "pickRate": 0.694346,
        "banRate": 11.2669
      },
      {
        "key": "zed",
        "name": "影流之主",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Zed.png",
        "tier": 4,
        "rank": 49,
        "winRate": 47.3432,
        "pickRate": 2.59606,
        "banRate": 23.4726
      },
      {
        "key": "karthus",
        "name": "死亡颂唱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Karthus.png",
        "tier": 4,
        "rank": 50,
        "winRate": 48.6709,
        "pickRate": 1.35478,
        "banRate": 0.85336
      },
      {
        "key": "volibear",
        "name": "不灭狂雷",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Volibear.png",
        "tier": 4,
        "rank": 51,
        "winRate": 48.8733,
        "pickRate": 1.11217,
        "banRate": 1.89059
      },
      {
        "key": "trundle",
        "name": "巨魔之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Trundle.png",
        "tier": 4,
        "rank": 52,
        "winRate": 49.7648,
        "pickRate": 0.671601,
        "banRate": 0.368098
      },
      {
        "key": "jayce",
        "name": "未来守护者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Jayce.png",
        "tier": 4,
        "rank": 53,
        "winRate": 47.651199999999996,
        "pickRate": 1.8111499999999998,
        "banRate": 7.080970000000001
      },
      {
        "key": "teemo",
        "name": "迅捷斥候",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Teemo.png",
        "tier": 4,
        "rank": 54,
        "winRate": 49.392399999999995,
        "pickRate": 0.5892569999999999,
        "banRate": 5.97817
      },
      {
        "key": "maokai",
        "name": "扭曲树精",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Maokai.png",
        "tier": 4,
        "rank": 55,
        "winRate": 49.6127,
        "pickRate": 0.5166,
        "banRate": 0.133877
      },
      {
        "key": "malphite",
        "name": "熔岩巨兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Malphite.png",
        "tier": 4,
        "rank": 56,
        "winRate": 48.5939,
        "pickRate": 0.696452,
        "banRate": 16.033
      },
      {
        "key": "jax",
        "name": "武器大师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Jax.png",
        "tier": 4,
        "rank": 57,
        "winRate": 48.084199999999996,
        "pickRate": 0.8904139999999999,
        "banRate": 9.71973
      },
      {
        "key": "pantheon",
        "name": "不屈之枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Pantheon.png",
        "tier": 4,
        "rank": 58,
        "winRate": 47.897,
        "pickRate": 0.891256,
        "banRate": 2.2974
      },
      {
        "key": "ambessa",
        "name": "铁血狼母",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Ambessa.png",
        "tier": 5,
        "rank": 59,
        "winRate": 46.3878,
        "pickRate": 0.664651,
        "banRate": 4.37309
      },
      {
        "key": "locke",
        "name": "灰烬驱魔人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Locke.png",
        "tier": 5,
        "rank": 60,
        "winRate": 44.5869,
        "pickRate": 0.7392029999999999,
        "banRate": 29.3244
      }
    ],
    "mid": [
      {
        "key": "ahri",
        "name": "九尾妖狐",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Ahri.png",
        "tier": 1,
        "rank": 1,
        "winRate": 51.2037,
        "pickRate": 9.102250000000002,
        "banRate": 2.85289
      },
      {
        "key": "yone",
        "name": "封魔剑魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Yone.png",
        "tier": 1,
        "rank": 2,
        "winRate": 50.6278,
        "pickRate": 8.43335,
        "banRate": 14.078299999999999
      },
      {
        "key": "fizz",
        "name": "潮汐海灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Fizz.png",
        "tier": 1,
        "rank": 3,
        "winRate": 51.668400000000005,
        "pickRate": 4.9771,
        "banRate": 6.71932
      },
      {
        "key": "ekko",
        "name": "时间刺客",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Ekko.png",
        "tier": 1,
        "rank": 4,
        "winRate": 51.6331,
        "pickRate": 4.69298,
        "banRate": 2.38192
      },
      {
        "key": "viktor",
        "name": "奥术先驱",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Viktor.png",
        "tier": 1,
        "rank": 5,
        "winRate": 50.0266,
        "pickRate": 9.04773,
        "banRate": 14.4486
      },
      {
        "key": "katarina",
        "name": "不祥之刃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Katarina.png",
        "tier": 1,
        "rank": 6,
        "winRate": 50.618300000000005,
        "pickRate": 6.74853,
        "banRate": 12.1847
      },
      {
        "key": "lissandra",
        "name": "冰霜女巫",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Lissandra.png",
        "tier": 1,
        "rank": 7,
        "winRate": 51.1243,
        "pickRate": 5.5296199999999995,
        "banRate": 4.04779
      },
      {
        "key": "twistedfate",
        "name": "卡牌大师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/TwistedFate.png",
        "tier": 1,
        "rank": 8,
        "winRate": 51.226499999999994,
        "pickRate": 5.2914200000000005,
        "banRate": 1.44126
      },
      {
        "key": "vex",
        "name": "愁云使者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Vex.png",
        "tier": 1,
        "rank": 9,
        "winRate": 52.3181,
        "pickRate": 3.06645,
        "banRate": 4.076960000000001
      },
      {
        "key": "locke",
        "name": "灰烬驱魔人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Locke.png",
        "tier": 1,
        "rank": 10,
        "winRate": 49.9295,
        "pickRate": 7.28428,
        "banRate": 30.7512
      },
      {
        "key": "yasuo",
        "name": "疾风剑豪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Yasuo.png",
        "tier": 1,
        "rank": 11,
        "winRate": 49.3821,
        "pickRate": 9.02655,
        "banRate": 22.970299999999998
      },
      {
        "key": "leblanc",
        "name": "诡术妖姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Leblanc.png",
        "tier": 1,
        "rank": 12,
        "winRate": 50.6283,
        "pickRate": 5.30631,
        "banRate": 17.8287
      },
      {
        "key": "syndra",
        "name": "暗黑元首",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Syndra.png",
        "tier": 1,
        "rank": 13,
        "winRate": 50.009899999999995,
        "pickRate": 7.419309999999999,
        "banRate": 8.33369
      },
      {
        "key": "lux",
        "name": "光辉女郎",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Lux.png",
        "tier": 1,
        "rank": 14,
        "winRate": 51.33180000000001,
        "pickRate": 3.8496200000000003,
        "banRate": 3.58999
      },
      {
        "key": "zed",
        "name": "影流之主",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Zed.png",
        "tier": 1,
        "rank": 15,
        "winRate": 49.4815,
        "pickRate": 7.88586,
        "banRate": 23.7945
      },
      {
        "key": "xerath",
        "name": "远古巫灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Xerath.png",
        "tier": 1,
        "rank": 16,
        "winRate": 50.7686,
        "pickRate": 4.35161,
        "banRate": 8.50603
      },
      {
        "key": "vladimir",
        "name": "猩红收割者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Vladimir.png",
        "tier": 1,
        "rank": 17,
        "winRate": 50.8532,
        "pickRate": 4.227270000000001,
        "banRate": 6.34292
      },
      {
        "key": "zoe",
        "name": "暮光星灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Zoe.png",
        "tier": 1,
        "rank": 18,
        "winRate": 51.65149999999999,
        "pickRate": 2.9075,
        "banRate": 3.74419
      },
      {
        "key": "hwei",
        "name": "异画师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Hwei.png",
        "tier": 2,
        "rank": 19,
        "winRate": 50.853,
        "pickRate": 3.72423,
        "banRate": 2.45204
      },
      {
        "key": "malzahar",
        "name": "虚空先知",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Malzahar.png",
        "tier": 2,
        "rank": 20,
        "winRate": 49.9563,
        "pickRate": 5.03728,
        "banRate": 8.670819999999999
      },
      {
        "key": "aurora",
        "name": "双界灵兔",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Aurora.png",
        "tier": 2,
        "rank": 21,
        "winRate": 50.9184,
        "pickRate": 2.7397500000000004,
        "banRate": 1.34045
      },
      {
        "key": "sylas",
        "name": "解脱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Sylas.png",
        "tier": 2,
        "rank": 22,
        "winRate": 48.2429,
        "pickRate": 7.2316400000000005,
        "banRate": 18.8169
      },
      {
        "key": "diana",
        "name": "皎月女神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Diana.png",
        "tier": 2,
        "rank": 23,
        "winRate": 50.2031,
        "pickRate": 3.4065600000000003,
        "banRate": 3.55433
      },
      {
        "key": "akali",
        "name": "离群之刺",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Akali.png",
        "tier": 2,
        "rank": 24,
        "winRate": 48.7469,
        "pickRate": 5.915030000000001,
        "banRate": 16.6923
      },
      {
        "key": "veigar",
        "name": "邪恶小法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Veigar.png",
        "tier": 2,
        "rank": 25,
        "winRate": 50.0937,
        "pickRate": 3.35791,
        "banRate": 1.03993
      },
      {
        "key": "pantheon",
        "name": "不屈之枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Pantheon.png",
        "tier": 2,
        "rank": 26,
        "winRate": 52.6251,
        "pickRate": 0.850695,
        "banRate": 2.309
      },
      {
        "key": "annie",
        "name": "黑暗之女",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Annie.png",
        "tier": 2,
        "rank": 27,
        "winRate": 51.0834,
        "pickRate": 1.7806499999999998,
        "banRate": 0.549755
      },
      {
        "key": "kassadin",
        "name": "虚空行者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Kassadin.png",
        "tier": 2,
        "rank": 28,
        "winRate": 49.9508,
        "pickRate": 2.98299,
        "banRate": 2.75868
      },
      {
        "key": "anivia",
        "name": "冰晶凤凰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Anivia.png",
        "tier": 2,
        "rank": 29,
        "winRate": 50.52720000000001,
        "pickRate": 2.1475999999999997,
        "banRate": 2.25068
      },
      {
        "key": "talon",
        "name": "刀锋之影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Talon.png",
        "tier": 2,
        "rank": 30,
        "winRate": 50.4755,
        "pickRate": 1.7198399999999998,
        "banRate": 10.119
      },
      {
        "key": "galio",
        "name": "正义巨像",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Galio.png",
        "tier": 2,
        "rank": 31,
        "winRate": 48.977599999999995,
        "pickRate": 3.95845,
        "banRate": 1.64716
      },
      {
        "key": "qiyana",
        "name": "元素女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Qiyana.png",
        "tier": 2,
        "rank": 32,
        "winRate": 49.2006,
        "pickRate": 2.8328599999999997,
        "banRate": 14.3231
      },
      {
        "key": "gwen",
        "name": "灵罗娃娃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Gwen.png",
        "tier": 2,
        "rank": 33,
        "winRate": 52.664699999999996,
        "pickRate": 0.566571,
        "banRate": 2.9807
      },
      {
        "key": "nasus",
        "name": "沙漠死神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Nasus.png",
        "tier": 2,
        "rank": 34,
        "winRate": 51.148,
        "pickRate": 0.986362,
        "banRate": 17.5228
      },
      {
        "key": "aurelionsol",
        "name": "铸星龙王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/AurelionSol.png",
        "tier": 3,
        "rank": 35,
        "winRate": 50.06699999999999,
        "pickRate": 1.7208899999999998,
        "banRate": 0.606872
      },
      {
        "key": "gragas",
        "name": "酒桶",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Gragas.png",
        "tier": 3,
        "rank": 36,
        "winRate": 52.2603,
        "pickRate": 0.5380539999999999,
        "banRate": 0.643734
      },
      {
        "key": "swain",
        "name": "诺克萨斯统领",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Swain.png",
        "tier": 3,
        "rank": 37,
        "winRate": 50.7803,
        "pickRate": 1.0211700000000001,
        "banRate": 1.8411199999999999
      },
      {
        "key": "malphite",
        "name": "熔岩巨兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Malphite.png",
        "tier": 3,
        "rank": 38,
        "winRate": 50.852799999999995,
        "pickRate": 0.7991130000000001,
        "banRate": 16.534499999999998
      },
      {
        "key": "irelia",
        "name": "刀锋舞者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Irelia.png",
        "tier": 3,
        "rank": 39,
        "winRate": 48.3182,
        "pickRate": 2.76785,
        "banRate": 13.0025
      },
      {
        "key": "akshan",
        "name": "影哨",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Akshan.png",
        "tier": 3,
        "rank": 40,
        "winRate": 48.8707,
        "pickRate": 2.22812,
        "banRate": 1.9935
      },
      {
        "key": "velkoz",
        "name": "虚空之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Velkoz.png",
        "tier": 3,
        "rank": 41,
        "winRate": 50.491600000000005,
        "pickRate": 0.8530019999999999,
        "banRate": 1.4078600000000001
      },
      {
        "key": "taliyah",
        "name": "岩雀",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Taliyah.png",
        "tier": 3,
        "rank": 42,
        "winRate": 48.716100000000004,
        "pickRate": 1.43719,
        "banRate": 0.337179
      },
      {
        "key": "orianna",
        "name": "发条魔灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Orianna.png",
        "tier": 3,
        "rank": 43,
        "winRate": 47.202,
        "pickRate": 2.97146,
        "banRate": 0.389596
      },
      {
        "key": "garen",
        "name": "德玛西亚之力",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Garen.png",
        "tier": 3,
        "rank": 44,
        "winRate": 50.543899999999994,
        "pickRate": 0.539731,
        "banRate": 4.12919
      },
      {
        "key": "kogmaw",
        "name": "深渊巨口",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/KogMaw.png",
        "tier": 3,
        "rank": 45,
        "winRate": 49.9859,
        "pickRate": 0.741239,
        "banRate": 0.534791
      },
      {
        "key": "ziggs",
        "name": "爆破鬼才",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Ziggs.png",
        "tier": 3,
        "rank": 46,
        "winRate": 49.8857,
        "pickRate": 0.6422680000000001,
        "banRate": 0.698722
      },
      {
        "key": "brand",
        "name": "复仇焰魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Brand.png",
        "tier": 4,
        "rank": 47,
        "winRate": 49.1382,
        "pickRate": 0.644784,
        "banRate": 2.4457
      },
      {
        "key": "azir",
        "name": "沙漠皇帝",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Azir.png",
        "tier": 4,
        "rank": 48,
        "winRate": 47.0193,
        "pickRate": 1.74815,
        "banRate": 0.26674200000000003
      },
      {
        "key": "ryze",
        "name": "符文法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Ryze.png",
        "tier": 4,
        "rank": 49,
        "winRate": 45.902,
        "pickRate": 2.15159,
        "banRate": 0.40453900000000004
      },
      {
        "key": "mel",
        "name": "流光镜影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Mel.png",
        "tier": 4,
        "rank": 50,
        "winRate": 45.6165,
        "pickRate": 2.20044,
        "banRate": 10.9478
      },
      {
        "key": "cassiopeia",
        "name": "魔蛇之拥",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Cassiopeia.png",
        "tier": 4,
        "rank": 51,
        "winRate": 47.0287,
        "pickRate": 1.10442,
        "banRate": 1.2889899999999999
      },
      {
        "key": "jayce",
        "name": "未来守护者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Jayce.png",
        "tier": 4,
        "rank": 52,
        "winRate": 47.546,
        "pickRate": 0.7519330000000001,
        "banRate": 7.00668
      },
      {
        "key": "kayle",
        "name": "正义天使",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Kayle.png",
        "tier": 4,
        "rank": 53,
        "winRate": 48.0252,
        "pickRate": 0.599911,
        "banRate": 1.23396
      },
      {
        "key": "naafiri",
        "name": "百裂冥犬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Naafiri.png",
        "tier": 4,
        "rank": 54,
        "winRate": 47.2641,
        "pickRate": 0.7089479999999999,
        "banRate": 9.29972
      },
      {
        "key": "smolder",
        "name": "炽炎雏龙",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Smolder.png",
        "tier": 5,
        "rank": 55,
        "winRate": 43.7802,
        "pickRate": 0.6944790000000001,
        "banRate": 1.686
      },
      {
        "key": "lucian",
        "name": "圣枪游侠",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Lucian.png",
        "tier": 5,
        "rank": 56,
        "winRate": 41.6866,
        "pickRate": 0.7907249999999999,
        "banRate": 2.56383
      }
    ],
    "adc": [
      {
        "key": "jinx",
        "name": "暴走萝莉",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Jinx.png",
        "tier": 0,
        "rank": 1,
        "winRate": 52.2234,
        "pickRate": 16.4024,
        "banRate": 8.68206
      },
      {
        "key": "tristana",
        "name": "麦林炮手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Tristana.png",
        "tier": 1,
        "rank": 2,
        "winRate": 51.2802,
        "pickRate": 10.6182,
        "banRate": 8.63428
      },
      {
        "key": "xayah",
        "name": "逆羽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Xayah.png",
        "tier": 1,
        "rank": 3,
        "winRate": 51.9063,
        "pickRate": 5.3823099999999995,
        "banRate": 0.944241
      },
      {
        "key": "jhin",
        "name": "戏命师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Jhin.png",
        "tier": 1,
        "rank": 4,
        "winRate": 49.7054,
        "pickRate": 17.2219,
        "banRate": 1.8621599999999998
      },
      {
        "key": "kaisa",
        "name": "虚空之女",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Kaisa.png",
        "tier": 1,
        "rank": 5,
        "winRate": 49.452400000000004,
        "pickRate": 18.6034,
        "banRate": 3.42385
      },
      {
        "key": "caitlyn",
        "name": "皮城女警",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Caitlyn.png",
        "tier": 1,
        "rank": 6,
        "winRate": 49.3473,
        "pickRate": 14.9224,
        "banRate": 22.3219
      },
      {
        "key": "yasuo",
        "name": "疾风剑豪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Yasuo.png",
        "tier": 1,
        "rank": 7,
        "winRate": 52.3123,
        "pickRate": 2.28397,
        "banRate": 22.6798
      },
      {
        "key": "aphelios",
        "name": "残月之肃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Aphelios.png",
        "tier": 2,
        "rank": 8,
        "winRate": 49.7182,
        "pickRate": 8.87087,
        "banRate": 3.81952
      },
      {
        "key": "twitch",
        "name": "瘟疫之源",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Twitch.png",
        "tier": 2,
        "rank": 9,
        "winRate": 50.54,
        "pickRate": 5.381480000000001,
        "banRate": 7.400950000000001
      },
      {
        "key": "viktor",
        "name": "奥术先驱",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Viktor.png",
        "tier": 2,
        "rank": 10,
        "winRate": 51.551899999999996,
        "pickRate": 2.59084,
        "banRate": 14.3956
      },
      {
        "key": "swain",
        "name": "诺克萨斯统领",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Swain.png",
        "tier": 2,
        "rank": 11,
        "winRate": 53.1298,
        "pickRate": 1.22813,
        "banRate": 1.8403200000000002
      },
      {
        "key": "kogmaw",
        "name": "深渊巨口",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/KogMaw.png",
        "tier": 2,
        "rank": 12,
        "winRate": 52.182399999999994,
        "pickRate": 2.13834,
        "banRate": 0.580063
      },
      {
        "key": "yunara",
        "name": "不破之誓",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Yunara.png",
        "tier": 2,
        "rank": 13,
        "winRate": 49.064600000000006,
        "pickRate": 11.1919,
        "banRate": 8.97542
      },
      {
        "key": "hwei",
        "name": "异画师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Hwei.png",
        "tier": 2,
        "rank": 14,
        "winRate": 53.2854,
        "pickRate": 0.986046,
        "banRate": 2.38171
      },
      {
        "key": "zeri",
        "name": "祖安花火",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Zeri.png",
        "tier": 3,
        "rank": 15,
        "winRate": 50.464200000000005,
        "pickRate": 4.48794,
        "banRate": 0.959669
      },
      {
        "key": "lucian",
        "name": "圣枪游侠",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Lucian.png",
        "tier": 3,
        "rank": 16,
        "winRate": 49.1213,
        "pickRate": 8.77212,
        "banRate": 2.70835
      },
      {
        "key": "veigar",
        "name": "邪恶小法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Veigar.png",
        "tier": 3,
        "rank": 17,
        "winRate": 52.6026,
        "pickRate": 1.1727100000000001,
        "banRate": 1.00745
      },
      {
        "key": "sivir",
        "name": "战争女神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Sivir.png",
        "tier": 3,
        "rank": 18,
        "winRate": 50.1888,
        "pickRate": 4.247730000000001,
        "banRate": 1.5318699999999998
      },
      {
        "key": "draven",
        "name": "荣耀行刑官",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Draven.png",
        "tier": 3,
        "rank": 19,
        "winRate": 49.8709,
        "pickRate": 4.35543,
        "banRate": 13.864899999999999
      },
      {
        "key": "smolder",
        "name": "炽炎雏龙",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Smolder.png",
        "tier": 3,
        "rank": 20,
        "winRate": 49.2386,
        "pickRate": 6.34794,
        "banRate": 1.80746
      },
      {
        "key": "ziggs",
        "name": "爆破鬼才",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Ziggs.png",
        "tier": 3,
        "rank": 21,
        "winRate": 51.59160000000001,
        "pickRate": 1.64272,
        "banRate": 0.75879
      },
      {
        "key": "katarina",
        "name": "不祥之刃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Katarina.png",
        "tier": 3,
        "rank": 22,
        "winRate": 52.127900000000004,
        "pickRate": 1.00355,
        "banRate": 11.686
      },
      {
        "key": "aurelionsol",
        "name": "铸星龙王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/AurelionSol.png",
        "tier": 3,
        "rank": 23,
        "winRate": 53.15879999999999,
        "pickRate": 0.6364609999999999,
        "banRate": 0.5641079999999999
      },
      {
        "key": "ashe",
        "name": "寒冰射手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Ashe.png",
        "tier": 3,
        "rank": 24,
        "winRate": 49.0142,
        "pickRate": 5.68502,
        "banRate": 1.5505
      },
      {
        "key": "missfortune",
        "name": "赏金猎人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/MissFortune.png",
        "tier": 3,
        "rank": 25,
        "winRate": 49.1197,
        "pickRate": 5.3369,
        "banRate": 0.55279
      },
      {
        "key": "samira",
        "name": "沙漠玫瑰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Samira.png",
        "tier": 3,
        "rank": 26,
        "winRate": 49.715900000000005,
        "pickRate": 3.6671,
        "banRate": 5.11649
      },
      {
        "key": "xerath",
        "name": "远古巫灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Xerath.png",
        "tier": 3,
        "rank": 27,
        "winRate": 52.1683,
        "pickRate": 0.8118780000000001,
        "banRate": 8.17762
      },
      {
        "key": "nilah",
        "name": "不羁之悦",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Nilah.png",
        "tier": 4,
        "rank": 28,
        "winRate": 51.1166,
        "pickRate": 1.09146,
        "banRate": 1.81166
      },
      {
        "key": "vladimir",
        "name": "猩红收割者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Vladimir.png",
        "tier": 4,
        "rank": 29,
        "winRate": 52.0393,
        "pickRate": 0.5516690000000001,
        "banRate": 5.8731100000000005
      },
      {
        "key": "vayne",
        "name": "暗夜猎手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Vayne.png",
        "tier": 4,
        "rank": 30,
        "winRate": 48.7652,
        "pickRate": 3.61897,
        "banRate": 4.41798
      },
      {
        "key": "syndra",
        "name": "暗黑元首",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Syndra.png",
        "tier": 4,
        "rank": 31,
        "winRate": 50.76389999999999,
        "pickRate": 1.02271,
        "banRate": 8.08657
      },
      {
        "key": "kalista",
        "name": "复仇之矛",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Kalista.png",
        "tier": 4,
        "rank": 32,
        "winRate": 48.5618,
        "pickRate": 3.5925100000000003,
        "banRate": 1.24264
      },
      {
        "key": "seraphine",
        "name": "星籁歌姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Seraphine.png",
        "tier": 4,
        "rank": 33,
        "winRate": 51.712199999999996,
        "pickRate": 0.541461,
        "banRate": 4.85276
      },
      {
        "key": "ezreal",
        "name": "探险家",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Ezreal.png",
        "tier": 4,
        "rank": 34,
        "winRate": 46.035900000000005,
        "pickRate": 11.212800000000001,
        "banRate": 3.96587
      },
      {
        "key": "karthus",
        "name": "死亡颂唱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Karthus.png",
        "tier": 4,
        "rank": 35,
        "winRate": 51.6092,
        "pickRate": 0.5372939999999999,
        "banRate": 0.761277
      },
      {
        "key": "corki",
        "name": "英勇投弹手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Corki.png",
        "tier": 4,
        "rank": 36,
        "winRate": 49.4292,
        "pickRate": 1.78834,
        "banRate": 0.375475
      },
      {
        "key": "brand",
        "name": "复仇焰魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Brand.png",
        "tier": 5,
        "rank": 37,
        "winRate": 50.1729,
        "pickRate": 0.542294,
        "banRate": 2.19864
      },
      {
        "key": "varus",
        "name": "惩戒之箭",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Varus.png",
        "tier": 5,
        "rank": 38,
        "winRate": 47.2954,
        "pickRate": 2.6575100000000003,
        "banRate": 0.8998330000000001
      },
      {
        "key": "mel",
        "name": "流光镜影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Mel.png",
        "tier": 5,
        "rank": 39,
        "winRate": 47.9133,
        "pickRate": 0.768753,
        "banRate": 10.5671
      }
    ],
    "support": [
      {
        "key": "thresh",
        "name": "魂锁典狱长",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Thresh.png",
        "tier": 1,
        "rank": 1,
        "winRate": 52.047200000000004,
        "pickRate": 15.443399999999999,
        "banRate": 12.726
      },
      {
        "key": "leona",
        "name": "曙光女神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Leona.png",
        "tier": 1,
        "rank": 2,
        "winRate": 51.8771,
        "pickRate": 7.71391,
        "banRate": 8.55537
      },
      {
        "key": "braum",
        "name": "弗雷尔卓德之心",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Braum.png",
        "tier": 1,
        "rank": 3,
        "winRate": 52.1207,
        "pickRate": 5.70066,
        "banRate": 6.37479
      },
      {
        "key": "blitzcrank",
        "name": "蒸汽机器人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Blitzcrank.png",
        "tier": 1,
        "rank": 4,
        "winRate": 51.5005,
        "pickRate": 7.21796,
        "banRate": 14.3628
      },
      {
        "key": "janna",
        "name": "风暴之怒",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Janna.png",
        "tier": 1,
        "rank": 5,
        "winRate": 51.725100000000005,
        "pickRate": 5.97488,
        "banRate": 1.3088600000000001
      },
      {
        "key": "nami",
        "name": "唤潮鲛姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Nami.png",
        "tier": 2,
        "rank": 6,
        "winRate": 50.6416,
        "pickRate": 8.64841,
        "banRate": 1.0930799999999998
      },
      {
        "key": "lulu",
        "name": "仙灵女巫",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Lulu.png",
        "tier": 2,
        "rank": 7,
        "winRate": 49.479600000000005,
        "pickRate": 12.958300000000001,
        "banRate": 14.9893
      },
      {
        "key": "nautilus",
        "name": "深海泰坦",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Nautilus.png",
        "tier": 2,
        "rank": 8,
        "winRate": 49.6432,
        "pickRate": 10.2882,
        "banRate": 14.795300000000001
      },
      {
        "key": "rell",
        "name": "镕铁少女",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Rell.png",
        "tier": 2,
        "rank": 9,
        "winRate": 51.714000000000006,
        "pickRate": 3.8596199999999996,
        "banRate": 1.28551
      },
      {
        "key": "alistar",
        "name": "牛头酋长",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Alistar.png",
        "tier": 2,
        "rank": 10,
        "winRate": 50.8255,
        "pickRate": 5.36433,
        "banRate": 1.8644999999999998
      },
      {
        "key": "senna",
        "name": "涤魂圣枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Senna.png",
        "tier": 2,
        "rank": 11,
        "winRate": 50.767700000000005,
        "pickRate": 5.434760000000001,
        "banRate": 1.28431
      },
      {
        "key": "milio",
        "name": "明烛",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Milio.png",
        "tier": 2,
        "rank": 12,
        "winRate": 50.227999999999994,
        "pickRate": 6.97383,
        "banRate": 4.46053
      },
      {
        "key": "seraphine",
        "name": "星籁歌姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Seraphine.png",
        "tier": 2,
        "rank": 13,
        "winRate": 50.2744,
        "pickRate": 6.339160000000001,
        "banRate": 5.38391
      },
      {
        "key": "rakan",
        "name": "幻翎",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Rakan.png",
        "tier": 2,
        "rank": 14,
        "winRate": 51.2306,
        "pickRate": 3.95395,
        "banRate": 0.371302
      },
      {
        "key": "sona",
        "name": "琴瑟仙女",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Sona.png",
        "tier": 3,
        "rank": 15,
        "winRate": 51.8333,
        "pickRate": 2.50856,
        "banRate": 0.21679099999999998
      },
      {
        "key": "soraka",
        "name": "众星之子",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Soraka.png",
        "tier": 3,
        "rank": 16,
        "winRate": 50.3066,
        "pickRate": 4.7337299999999995,
        "banRate": 2.1032100000000002
      },
      {
        "key": "zilean",
        "name": "时光守护者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Zilean.png",
        "tier": 3,
        "rank": 17,
        "winRate": 51.18319999999999,
        "pickRate": 2.96695,
        "banRate": 1.82468
      },
      {
        "key": "pyke",
        "name": "血港鬼影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Pyke.png",
        "tier": 3,
        "rank": 18,
        "winRate": 49.3892,
        "pickRate": 6.02674,
        "banRate": 25.0608
      },
      {
        "key": "taric",
        "name": "瓦洛兰之盾",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Taric.png",
        "tier": 3,
        "rank": 19,
        "winRate": 52.6812,
        "pickRate": 1.22174,
        "banRate": 0.197612
      },
      {
        "key": "tahmkench",
        "name": "河流之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/TahmKench.png",
        "tier": 3,
        "rank": 20,
        "winRate": 50.914300000000004,
        "pickRate": 2.6841899999999996,
        "banRate": 2.16505
      },
      {
        "key": "morgana",
        "name": "堕落天使",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Morgana.png",
        "tier": 3,
        "rank": 21,
        "winRate": 49.7971,
        "pickRate": 4.25933,
        "banRate": 16.846600000000002
      },
      {
        "key": "lux",
        "name": "光辉女郎",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Lux.png",
        "tier": 3,
        "rank": 22,
        "winRate": 49.0371,
        "pickRate": 6.493880000000001,
        "banRate": 3.60194
      },
      {
        "key": "karma",
        "name": "天启者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Karma.png",
        "tier": 3,
        "rank": 23,
        "winRate": 48.7319,
        "pickRate": 7.017569999999999,
        "banRate": 3.10277
      },
      {
        "key": "bard",
        "name": "星界游神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Bard.png",
        "tier": 4,
        "rank": 24,
        "winRate": 49.0283,
        "pickRate": 4.84235,
        "banRate": 2.14983
      },
      {
        "key": "maokai",
        "name": "扭曲树精",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Maokai.png",
        "tier": 4,
        "rank": 25,
        "winRate": 50.906099999999995,
        "pickRate": 1.55443,
        "banRate": 0.146986
      },
      {
        "key": "velkoz",
        "name": "虚空之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Velkoz.png",
        "tier": 4,
        "rank": 26,
        "winRate": 49.553999999999995,
        "pickRate": 2.65538,
        "banRate": 1.47621
      },
      {
        "key": "galio",
        "name": "正义巨像",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Galio.png",
        "tier": 4,
        "rank": 27,
        "winRate": 51.5953,
        "pickRate": 0.8627920000000001,
        "banRate": 1.54951
      },
      {
        "key": "elise",
        "name": "蜘蛛女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Elise.png",
        "tier": 4,
        "rank": 28,
        "winRate": 51.4096,
        "pickRate": 0.9310809999999999,
        "banRate": 2.3133399999999997
      },
      {
        "key": "xerath",
        "name": "远古巫灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Xerath.png",
        "tier": 4,
        "rank": 29,
        "winRate": 48.9924,
        "pickRate": 2.95458,
        "banRate": 8.46942
      },
      {
        "key": "zyra",
        "name": "荆棘之兴",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Zyra.png",
        "tier": 4,
        "rank": 30,
        "winRate": 49.5215,
        "pickRate": 2.43046,
        "banRate": 2.40125
      },
      {
        "key": "pantheon",
        "name": "不屈之枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Pantheon.png",
        "tier": 4,
        "rank": 31,
        "winRate": 48.7292,
        "pickRate": 3.4089099999999997,
        "banRate": 2.45541
      },
      {
        "key": "poppy",
        "name": "圣锤之毅",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Poppy.png",
        "tier": 4,
        "rank": 32,
        "winRate": 49.952000000000005,
        "pickRate": 1.7768,
        "banRate": 3.8047999999999997
      },
      {
        "key": "brand",
        "name": "复仇焰魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Brand.png",
        "tier": 4,
        "rank": 33,
        "winRate": 49.104,
        "pickRate": 2.34595,
        "banRate": 2.57951
      },
      {
        "key": "amumu",
        "name": "殇之木乃伊",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Amumu.png",
        "tier": 4,
        "rank": 34,
        "winRate": 51.5382,
        "pickRate": 0.6728620000000001,
        "banRate": 0.7976340000000001
      },
      {
        "key": "yuumi",
        "name": "魔法猫咪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Yuumi.png",
        "tier": 4,
        "rank": 35,
        "winRate": 47.1079,
        "pickRate": 5.7777,
        "banRate": 8.31518
      },
      {
        "key": "renata",
        "name": "炼金男爵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Renata.png",
        "tier": 4,
        "rank": 36,
        "winRate": 49.536,
        "pickRate": 1.6327500000000001,
        "banRate": 0.23892100000000002
      },
      {
        "key": "neeko",
        "name": "万花通灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Neeko.png",
        "tier": 4,
        "rank": 37,
        "winRate": 49.3234,
        "pickRate": 1.78214,
        "banRate": 0.753226
      },
      {
        "key": "swain",
        "name": "诺克萨斯统领",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Swain.png",
        "tier": 4,
        "rank": 38,
        "winRate": 47.6438,
        "pickRate": 2.83486,
        "banRate": 1.91179
      },
      {
        "key": "hwei",
        "name": "异画师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Hwei.png",
        "tier": 4,
        "rank": 39,
        "winRate": 50.3809,
        "pickRate": 0.644266,
        "banRate": 2.3123299999999998
      },
      {
        "key": "leblanc",
        "name": "诡术妖姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Leblanc.png",
        "tier": 4,
        "rank": 40,
        "winRate": 49.341499999999996,
        "pickRate": 0.874956,
        "banRate": 17.0637
      },
      {
        "key": "sylas",
        "name": "解脱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Sylas.png",
        "tier": 5,
        "rank": 41,
        "winRate": 47.284,
        "pickRate": 1.34359,
        "banRate": 18.2278
      },
      {
        "key": "fiddlesticks",
        "name": "远古恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Fiddlesticks.png",
        "tier": 5,
        "rank": 42,
        "winRate": 49.7054,
        "pickRate": 0.5070479999999999,
        "banRate": 1.01322
      },
      {
        "key": "zoe",
        "name": "暮光星灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Zoe.png",
        "tier": 5,
        "rank": 43,
        "winRate": 48.5449,
        "pickRate": 0.8506279999999999,
        "banRate": 3.6225199999999997
      },
      {
        "key": "shaco",
        "name": "恶魔小丑",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Shaco.png",
        "tier": 5,
        "rank": 44,
        "winRate": 46.9628,
        "pickRate": 1.21555,
        "banRate": 16.4525
      },
      {
        "key": "shen",
        "name": "暮光之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Shen.png",
        "tier": 5,
        "rank": 45,
        "winRate": 47.9424,
        "pickRate": 0.741579,
        "banRate": 0.627421
      },
      {
        "key": "camille",
        "name": "青钢影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Camille.png",
        "tier": 5,
        "rank": 46,
        "winRate": 46.041,
        "pickRate": 1.75994,
        "banRate": 2.73999
      },
      {
        "key": "teemo",
        "name": "迅捷斥候",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Teemo.png",
        "tier": 5,
        "rank": 47,
        "winRate": 48.2577,
        "pickRate": 0.5266810000000001,
        "banRate": 6.0951699999999995
      },
      {
        "key": "mel",
        "name": "流光镜影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Mel.png",
        "tier": 5,
        "rank": 48,
        "winRate": 44.437,
        "pickRate": 0.632956,
        "banRate": 10.3362
      },
      {
        "key": "ashe",
        "name": "寒冰射手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.20.1/champion/Ashe.png",
        "tier": 5,
        "rank": 49,
        "winRate": 43.833299999999994,
        "pickRate": 0.768254,
        "banRate": 1.44775
      }
    ]
  }
};
