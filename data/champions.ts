/* eslint-disable */
// 本文件由 scripts/update-champions.mjs 自动生成，请勿手动编辑。
// 英雄数据来自 OP.GG（16.17 版本快照），可用 npm run update:champions 更新。

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
  "patch": "16.17",
  "updatedAt": "2026-09-08T09:20:49.690Z",
  "positions": {
    "top": [
      {
        "key": "nasus",
        "name": "沙漠死神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Nasus.png",
        "tier": 1,
        "rank": 1,
        "winRate": 51.0787,
        "pickRate": 8.31883,
        "banRate": 45.6955
      },
      {
        "key": "malphite",
        "name": "熔岩巨兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Malphite.png",
        "tier": 1,
        "rank": 2,
        "winRate": 51.441199999999995,
        "pickRate": 6.6994,
        "banRate": 15.043000000000001
      },
      {
        "key": "garen",
        "name": "德玛西亚之力",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Garen.png",
        "tier": 1,
        "rank": 3,
        "winRate": 51.139199999999995,
        "pickRate": 7.053389999999999,
        "banRate": 5.15779
      },
      {
        "key": "gangplank",
        "name": "海洋之灾",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Gangplank.png",
        "tier": 2,
        "rank": 4,
        "winRate": 50.8501,
        "pickRate": 5.46925,
        "banRate": 7.40353
      },
      {
        "key": "yone",
        "name": "封魔剑魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Yone.png",
        "tier": 2,
        "rank": 5,
        "winRate": 49.9793,
        "pickRate": 8.11563,
        "banRate": 9.51934
      },
      {
        "key": "teemo",
        "name": "迅捷斥候",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Teemo.png",
        "tier": 2,
        "rank": 6,
        "winRate": 51.1908,
        "pickRate": 4.12472,
        "banRate": 6.3573
      },
      {
        "key": "ornn",
        "name": "山隐之焰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ornn.png",
        "tier": 2,
        "rank": 7,
        "winRate": 51.6494,
        "pickRate": 3.3345100000000003,
        "banRate": 0.45736400000000005
      },
      {
        "key": "sett",
        "name": "腕豪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sett.png",
        "tier": 2,
        "rank": 8,
        "winRate": 50.565599999999996,
        "pickRate": 5.6234,
        "banRate": 2.34375
      },
      {
        "key": "camille",
        "name": "青钢影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Camille.png",
        "tier": 2,
        "rank": 9,
        "winRate": 50.933099999999996,
        "pickRate": 4.32233,
        "banRate": 5.6267
      },
      {
        "key": "darius",
        "name": "诺克萨斯之手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Darius.png",
        "tier": 2,
        "rank": 10,
        "winRate": 49.8491,
        "pickRate": 7.17017,
        "banRate": 12.8839
      },
      {
        "key": "shen",
        "name": "暮光之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Shen.png",
        "tier": 2,
        "rank": 11,
        "winRate": 51.1858,
        "pickRate": 3.59481,
        "banRate": 0.779519
      },
      {
        "key": "singed",
        "name": "炼金术士",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Singed.png",
        "tier": 2,
        "rank": 12,
        "winRate": 51.67119999999999,
        "pickRate": 2.6172999999999997,
        "banRate": 0.889181
      },
      {
        "key": "irelia",
        "name": "刀锋舞者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Irelia.png",
        "tier": 2,
        "rank": 13,
        "winRate": 50.334199999999996,
        "pickRate": 4.46131,
        "banRate": 12.841099999999999
      },
      {
        "key": "renekton",
        "name": "荒漠屠夫",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Renekton.png",
        "tier": 3,
        "rank": 14,
        "winRate": 49.7346,
        "pickRate": 5.52652,
        "banRate": 3.7917600000000005
      },
      {
        "key": "aatrox",
        "name": "暗裔剑魔",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Aatrox.png",
        "tier": 3,
        "rank": 15,
        "winRate": 49.4257,
        "pickRate": 5.899220000000001,
        "banRate": 7.116649999999999
      },
      {
        "key": "jax",
        "name": "武器大师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Jax.png",
        "tier": 3,
        "rank": 16,
        "winRate": 49.3486,
        "pickRate": 5.89266,
        "banRate": 10.0214
      },
      {
        "key": "olaf",
        "name": "狂战士",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Olaf.png",
        "tier": 3,
        "rank": 17,
        "winRate": 50.4757,
        "pickRate": 3.32257,
        "banRate": 3.59766
      },
      {
        "key": "illaoi",
        "name": "海兽祭司",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Illaoi.png",
        "tier": 3,
        "rank": 18,
        "winRate": 50.753400000000006,
        "pickRate": 2.73596,
        "banRate": 4.75702
      },
      {
        "key": "mordekaiser",
        "name": "铁铠冥魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Mordekaiser.png",
        "tier": 3,
        "rank": 19,
        "winRate": 49.5434,
        "pickRate": 5.11792,
        "banRate": 8.32125
      },
      {
        "key": "urgot",
        "name": "无畏战车",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Urgot.png",
        "tier": 3,
        "rank": 20,
        "winRate": 50.936099999999996,
        "pickRate": 2.42866,
        "banRate": 0.791286
      },
      {
        "key": "kayle",
        "name": "正义天使",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kayle.png",
        "tier": 3,
        "rank": 21,
        "winRate": 51.0714,
        "pickRate": 2.20154,
        "banRate": 1.3671600000000002
      },
      {
        "key": "chogath",
        "name": "虚空恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Chogath.png",
        "tier": 3,
        "rank": 22,
        "winRate": 50.5024,
        "pickRate": 2.97602,
        "banRate": 1.29047
      },
      {
        "key": "tryndamere",
        "name": "蛮族之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Tryndamere.png",
        "tier": 3,
        "rank": 23,
        "winRate": 50.3891,
        "pickRate": 3.16812,
        "banRate": 2.48547
      },
      {
        "key": "kled",
        "name": "暴怒骑士",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kled.png",
        "tier": 3,
        "rank": 24,
        "winRate": 51.21360000000001,
        "pickRate": 1.79574,
        "banRate": 0.932773
      },
      {
        "key": "pantheon",
        "name": "不屈之枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Pantheon.png",
        "tier": 3,
        "rank": 25,
        "winRate": 50.3267,
        "pickRate": 2.83725,
        "banRate": 2.41098
      },
      {
        "key": "warwick",
        "name": "祖安怒兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Warwick.png",
        "tier": 3,
        "rank": 26,
        "winRate": 51.595800000000004,
        "pickRate": 1.36022,
        "banRate": 1.61777
      },
      {
        "key": "drmundo",
        "name": "祖安狂人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/DrMundo.png",
        "tier": 4,
        "rank": 27,
        "winRate": 49.811499999999995,
        "pickRate": 3.6296500000000003,
        "banRate": 2.70146
      },
      {
        "key": "gwen",
        "name": "灵罗娃娃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Gwen.png",
        "tier": 4,
        "rank": 28,
        "winRate": 50.2028,
        "pickRate": 2.78024,
        "banRate": 4.09601
      },
      {
        "key": "kennen",
        "name": "狂暴之心",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kennen.png",
        "tier": 4,
        "rank": 29,
        "winRate": 50.7224,
        "pickRate": 2.07895,
        "banRate": 1.1848400000000001
      },
      {
        "key": "fiora",
        "name": "无双剑姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Fiora.png",
        "tier": 4,
        "rank": 30,
        "winRate": 49.6648,
        "pickRate": 3.5998799999999997,
        "banRate": 4.4877199999999995
      },
      {
        "key": "yasuo",
        "name": "疾风剑豪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Yasuo.png",
        "tier": 4,
        "rank": 31,
        "winRate": 49.2258,
        "pickRate": 3.47843,
        "banRate": 20.0157
      },
      {
        "key": "quinn",
        "name": "德玛西亚之翼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Quinn.png",
        "tier": 4,
        "rank": 32,
        "winRate": 52.087,
        "pickRate": 0.874592,
        "banRate": 0.935211
      },
      {
        "key": "gragas",
        "name": "酒桶",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Gragas.png",
        "tier": 4,
        "rank": 33,
        "winRate": 50.2,
        "pickRate": 2.27346,
        "banRate": 0.634556
      },
      {
        "key": "ambessa",
        "name": "铁血狼母",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ambessa.png",
        "tier": 4,
        "rank": 34,
        "winRate": 48.952,
        "pickRate": 4.02776,
        "banRate": 4.8761600000000005
      },
      {
        "key": "gnar",
        "name": "迷失之牙",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Gnar.png",
        "tier": 4,
        "rank": 35,
        "winRate": 49.147999999999996,
        "pickRate": 3.59691,
        "banRate": 1.1596600000000001
      },
      {
        "key": "zaahen",
        "name": "不落魔锋",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zaahen.png",
        "tier": 4,
        "rank": 36,
        "winRate": 49.7108,
        "pickRate": 2.61499,
        "banRate": 1.09077
      },
      {
        "key": "yorick",
        "name": "牧魂人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Yorick.png",
        "tier": 4,
        "rank": 37,
        "winRate": 49.1528,
        "pickRate": 3.1349299999999998,
        "banRate": 5.9778199999999995
      },
      {
        "key": "akali",
        "name": "离群之刺",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Akali.png",
        "tier": 4,
        "rank": 38,
        "winRate": 49.2246,
        "pickRate": 2.59641,
        "banRate": 15.840399999999999
      },
      {
        "key": "sion",
        "name": "亡灵战神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sion.png",
        "tier": 4,
        "rank": 39,
        "winRate": 49.268699999999995,
        "pickRate": 2.84849,
        "banRate": 0.502602
      },
      {
        "key": "riven",
        "name": "放逐之刃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Riven.png",
        "tier": 4,
        "rank": 40,
        "winRate": 49.6197,
        "pickRate": 2.2648,
        "banRate": 1.81174
      },
      {
        "key": "anivia",
        "name": "冰晶凤凰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Anivia.png",
        "tier": 4,
        "rank": 41,
        "winRate": 51.3402,
        "pickRate": 0.753535,
        "banRate": 2.45057
      },
      {
        "key": "jayce",
        "name": "未来守护者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Jayce.png",
        "tier": 4,
        "rank": 42,
        "winRate": 47.5887,
        "pickRate": 5.50803,
        "banRate": 5.93642
      },
      {
        "key": "zac",
        "name": "生化魔人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zac.png",
        "tier": 4,
        "rank": 43,
        "winRate": 51.8251,
        "pickRate": 0.519815,
        "banRate": 1.11119
      },
      {
        "key": "monkeyking",
        "name": "齐天大圣",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/MonkeyKing.png",
        "tier": 4,
        "rank": 44,
        "winRate": 50.61750000000001,
        "pickRate": 0.9629469999999999,
        "banRate": 3.14706
      },
      {
        "key": "heimerdinger",
        "name": "大发明家",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Heimerdinger.png",
        "tier": 4,
        "rank": 45,
        "winRate": 50.1999,
        "pickRate": 1.24686,
        "banRate": 1.7794999999999999
      },
      {
        "key": "volibear",
        "name": "不灭狂雷",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Volibear.png",
        "tier": 4,
        "rank": 46,
        "winRate": 48.4822,
        "pickRate": 3.16414,
        "banRate": 1.20133
      },
      {
        "key": "tahmkench",
        "name": "河流之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/TahmKench.png",
        "tier": 4,
        "rank": 47,
        "winRate": 49.5338,
        "pickRate": 1.6553200000000001,
        "banRate": 1.93996
      },
      {
        "key": "cassiopeia",
        "name": "魔蛇之拥",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Cassiopeia.png",
        "tier": 5,
        "rank": 48,
        "winRate": 51.028099999999995,
        "pickRate": 0.569829,
        "banRate": 1.84494
      },
      {
        "key": "vladimir",
        "name": "猩红收割者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Vladimir.png",
        "tier": 5,
        "rank": 49,
        "winRate": 49.4519,
        "pickRate": 1.26032,
        "banRate": 5.75409
      },
      {
        "key": "trundle",
        "name": "巨魔之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Trundle.png",
        "tier": 5,
        "rank": 50,
        "winRate": 48.837399999999995,
        "pickRate": 1.8030899999999999,
        "banRate": 0.43678399999999995
      },
      {
        "key": "poppy",
        "name": "圣锤之毅",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Poppy.png",
        "tier": 5,
        "rank": 51,
        "winRate": 49.8253,
        "pickRate": 0.9757129999999999,
        "banRate": 4.73721
      },
      {
        "key": "ksante",
        "name": "纳祖芒荣耀",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/KSante.png",
        "tier": 5,
        "rank": 52,
        "winRate": 46.9929,
        "pickRate": 3.7327399999999997,
        "banRate": 2.49471
      },
      {
        "key": "rumble",
        "name": "机械公敌",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Rumble.png",
        "tier": 5,
        "rank": 53,
        "winRate": 48.3723,
        "pickRate": 1.6397599999999999,
        "banRate": 0.694768
      },
      {
        "key": "swain",
        "name": "诺克萨斯统领",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Swain.png",
        "tier": 5,
        "rank": 54,
        "winRate": 49.6903,
        "pickRate": 0.550593,
        "banRate": 1.5746799999999999
      },
      {
        "key": "malzahar",
        "name": "虚空先知",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Malzahar.png",
        "tier": 5,
        "rank": 55,
        "winRate": 49.6194,
        "pickRate": 0.511202,
        "banRate": 8.79337
      },
      {
        "key": "vayne",
        "name": "暗夜猎手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Vayne.png",
        "tier": 5,
        "rank": 56,
        "winRate": 46.8456,
        "pickRate": 2.04149,
        "banRate": 7.179589999999999
      },
      {
        "key": "ryze",
        "name": "符文法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ryze.png",
        "tier": 5,
        "rank": 57,
        "winRate": 48.6127,
        "pickRate": 0.742124,
        "banRate": 0.484009
      },
      {
        "key": "varus",
        "name": "惩戒之箭",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Varus.png",
        "tier": 5,
        "rank": 58,
        "winRate": 47.3321,
        "pickRate": 0.759524,
        "banRate": 0.677357
      },
      {
        "key": "udyr",
        "name": "兽灵行者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Udyr.png",
        "tier": 5,
        "rank": 59,
        "winRate": 47.5964,
        "pickRate": 0.532012,
        "banRate": 1.07525
      }
    ],
    "jungle": [
      {
        "key": "monkeyking",
        "name": "齐天大圣",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/MonkeyKing.png",
        "tier": 1,
        "rank": 1,
        "winRate": 51.8026,
        "pickRate": 6.16549,
        "banRate": 3.22719
      },
      {
        "key": "sylas",
        "name": "解脱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sylas.png",
        "tier": 1,
        "rank": 2,
        "winRate": 50.5645,
        "pickRate": 7.6866699999999994,
        "banRate": 17.4706
      },
      {
        "key": "rammus",
        "name": "披甲龙龟",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Rammus.png",
        "tier": 1,
        "rank": 3,
        "winRate": 52.7465,
        "pickRate": 2.02606,
        "banRate": 3.68129
      },
      {
        "key": "talon",
        "name": "刀锋之影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Talon.png",
        "tier": 1,
        "rank": 4,
        "winRate": 50.943099999999994,
        "pickRate": 6.28672,
        "banRate": 9.63789
      },
      {
        "key": "nocturne",
        "name": "永恒梦魇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Nocturne.png",
        "tier": 1,
        "rank": 5,
        "winRate": 50.7762,
        "pickRate": 6.18844,
        "banRate": 13.115099999999998
      },
      {
        "key": "shyvana",
        "name": "龙血武姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Shyvana.png",
        "tier": 1,
        "rank": 6,
        "winRate": 51.0374,
        "pickRate": 5.36613,
        "banRate": 5.27562
      },
      {
        "key": "leesin",
        "name": "盲僧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/LeeSin.png",
        "tier": 1,
        "rank": 7,
        "winRate": 49.284800000000004,
        "pickRate": 13.459,
        "banRate": 16.8517
      },
      {
        "key": "chogath",
        "name": "虚空恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Chogath.png",
        "tier": 1,
        "rank": 8,
        "winRate": 51.5926,
        "pickRate": 2.97772,
        "banRate": 1.28502
      },
      {
        "key": "briar",
        "name": "狂厄蔷薇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Briar.png",
        "tier": 1,
        "rank": 9,
        "winRate": 50.87429999999999,
        "pickRate": 4.61514,
        "banRate": 8.80067
      },
      {
        "key": "warwick",
        "name": "祖安怒兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Warwick.png",
        "tier": 1,
        "rank": 10,
        "winRate": 51.472899999999996,
        "pickRate": 3.1402600000000005,
        "banRate": 1.64497
      },
      {
        "key": "shaco",
        "name": "恶魔小丑",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Shaco.png",
        "tier": 2,
        "rank": 11,
        "winRate": 50.549,
        "pickRate": 4.5169500000000005,
        "banRate": 16.7853
      },
      {
        "key": "kayn",
        "name": "影流之镰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kayn.png",
        "tier": 2,
        "rank": 12,
        "winRate": 50.0166,
        "pickRate": 6.9281,
        "banRate": 5.24231
      },
      {
        "key": "graves",
        "name": "法外狂徒",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Graves.png",
        "tier": 2,
        "rank": 13,
        "winRate": 49.259100000000004,
        "pickRate": 10.2367,
        "banRate": 14.6431
      },
      {
        "key": "fiddlesticks",
        "name": "远古恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Fiddlesticks.png",
        "tier": 2,
        "rank": 14,
        "winRate": 51.5178,
        "pickRate": 2.40268,
        "banRate": 1.38917
      },
      {
        "key": "evelynn",
        "name": "痛苦之拥",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Evelynn.png",
        "tier": 2,
        "rank": 15,
        "winRate": 51.382799999999996,
        "pickRate": 2.38307,
        "banRate": 2.02639
      },
      {
        "key": "udyr",
        "name": "兽灵行者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Udyr.png",
        "tier": 2,
        "rank": 16,
        "winRate": 51.4452,
        "pickRate": 2.23529,
        "banRate": 1.11624
      },
      {
        "key": "lillia",
        "name": "含羞蓓蕾",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Lillia.png",
        "tier": 2,
        "rank": 17,
        "winRate": 50.7897,
        "pickRate": 3.17284,
        "banRate": 1.84906
      },
      {
        "key": "reksai",
        "name": "虚空遁地兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/RekSai.png",
        "tier": 2,
        "rank": 18,
        "winRate": 51.9192,
        "pickRate": 1.4887299999999999,
        "banRate": 0.680581
      },
      {
        "key": "nidalee",
        "name": "狂野女猎手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Nidalee.png",
        "tier": 2,
        "rank": 19,
        "winRate": 50.7216,
        "pickRate": 3.1327099999999994,
        "banRate": 2.0882
      },
      {
        "key": "zac",
        "name": "生化魔人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zac.png",
        "tier": 2,
        "rank": 20,
        "winRate": 50.7471,
        "pickRate": 3.04042,
        "banRate": 1.19102
      },
      {
        "key": "sejuani",
        "name": "北地之怒",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sejuani.png",
        "tier": 2,
        "rank": 21,
        "winRate": 51.3604,
        "pickRate": 2.0030200000000002,
        "banRate": 0.185896
      },
      {
        "key": "ekko",
        "name": "时间刺客",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ekko.png",
        "tier": 2,
        "rank": 22,
        "winRate": 50.2182,
        "pickRate": 4.056719999999999,
        "banRate": 1.55306
      },
      {
        "key": "ivern",
        "name": "翠神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ivern.png",
        "tier": 2,
        "rank": 23,
        "winRate": 51.9945,
        "pickRate": 1.2835400000000001,
        "banRate": 0.407497
      },
      {
        "key": "jarvaniv",
        "name": "德玛西亚皇子",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/JarvanIV.png",
        "tier": 2,
        "rank": 24,
        "winRate": 49.4929,
        "pickRate": 5.848310000000001,
        "banRate": 1.2215200000000002
      },
      {
        "key": "belveth",
        "name": "虚空女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Belveth.png",
        "tier": 2,
        "rank": 25,
        "winRate": 50.2818,
        "pickRate": 3.22612,
        "banRate": 6.46732
      },
      {
        "key": "hecarim",
        "name": "战争之影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Hecarim.png",
        "tier": 2,
        "rank": 26,
        "winRate": 49.4777,
        "pickRate": 5.395239999999999,
        "banRate": 6.35284
      },
      {
        "key": "khazix",
        "name": "虚空掠夺者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Khazix.png",
        "tier": 2,
        "rank": 27,
        "winRate": 49.4175,
        "pickRate": 5.59058,
        "banRate": 3.1614000000000004
      },
      {
        "key": "zyra",
        "name": "荆棘之兴",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zyra.png",
        "tier": 3,
        "rank": 28,
        "winRate": 51.302400000000006,
        "pickRate": 1.37258,
        "banRate": 2.3343
      },
      {
        "key": "nunu",
        "name": "雪原双子",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Nunu.png",
        "tier": 3,
        "rank": 29,
        "winRate": 50.763999999999996,
        "pickRate": 1.97057,
        "banRate": 0.447926
      },
      {
        "key": "viego",
        "name": "破败之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Viego.png",
        "tier": 3,
        "rank": 30,
        "winRate": 48.2862,
        "pickRate": 8.855920000000001,
        "banRate": 7.675559999999999
      },
      {
        "key": "vi",
        "name": "皮城执法官",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Vi.png",
        "tier": 3,
        "rank": 31,
        "winRate": 49.1348,
        "pickRate": 5.19049,
        "banRate": 1.87656
      },
      {
        "key": "naafiri",
        "name": "百裂冥犬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Naafiri.png",
        "tier": 3,
        "rank": 32,
        "winRate": 49.4965,
        "pickRate": 3.7832,
        "banRate": 13.5627
      },
      {
        "key": "masteryi",
        "name": "无极剑圣",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/MasterYi.png",
        "tier": 3,
        "rank": 33,
        "winRate": 49.0139,
        "pickRate": 5.073160000000001,
        "banRate": 11.3783
      },
      {
        "key": "elise",
        "name": "蜘蛛女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Elise.png",
        "tier": 3,
        "rank": 34,
        "winRate": 50.42680000000001,
        "pickRate": 1.89589,
        "banRate": 1.0023
      },
      {
        "key": "qiyana",
        "name": "元素女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Qiyana.png",
        "tier": 3,
        "rank": 35,
        "winRate": 48.7128,
        "pickRate": 4.83721,
        "banRate": 6.514290000000001
      },
      {
        "key": "amumu",
        "name": "殇之木乃伊",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Amumu.png",
        "tier": 3,
        "rank": 36,
        "winRate": 50.106300000000005,
        "pickRate": 1.99938,
        "banRate": 0.8868090000000001
      },
      {
        "key": "taliyah",
        "name": "岩雀",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Taliyah.png",
        "tier": 4,
        "rank": 37,
        "winRate": 51.195100000000004,
        "pickRate": 0.8804120000000001,
        "banRate": 0.352685
      },
      {
        "key": "trundle",
        "name": "巨魔之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Trundle.png",
        "tier": 4,
        "rank": 38,
        "winRate": 50.7032,
        "pickRate": 1.05822,
        "banRate": 0.429958
      },
      {
        "key": "quinn",
        "name": "德玛西亚之翼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Quinn.png",
        "tier": 4,
        "rank": 39,
        "winRate": 50.2887,
        "pickRate": 1.34511,
        "banRate": 0.9425720000000001
      },
      {
        "key": "aatrox",
        "name": "暗裔剑魔",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Aatrox.png",
        "tier": 4,
        "rank": 40,
        "winRate": 50.285500000000006,
        "pickRate": 1.13975,
        "banRate": 6.981800000000001
      },
      {
        "key": "diana",
        "name": "皎月女神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Diana.png",
        "tier": 4,
        "rank": 41,
        "winRate": 48.916,
        "pickRate": 2.8098899999999998,
        "banRate": 3.18622
      },
      {
        "key": "skarner",
        "name": "上古领主",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Skarner.png",
        "tier": 4,
        "rank": 42,
        "winRate": 50.2441,
        "pickRate": 1.19078,
        "banRate": 0.243049
      },
      {
        "key": "rengar",
        "name": "傲之追猎者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Rengar.png",
        "tier": 4,
        "rank": 43,
        "winRate": 48.3523,
        "pickRate": 3.7986,
        "banRate": 6.60504
      },
      {
        "key": "darius",
        "name": "诺克萨斯之手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Darius.png",
        "tier": 4,
        "rank": 44,
        "winRate": 50.5399,
        "pickRate": 0.7674259999999999,
        "banRate": 12.485
      },
      {
        "key": "xinzhao",
        "name": "德邦总管",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/XinZhao.png",
        "tier": 4,
        "rank": 45,
        "winRate": 48.9403,
        "pickRate": 2.5548499999999996,
        "banRate": 0.647718
      },
      {
        "key": "maokai",
        "name": "扭曲树精",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Maokai.png",
        "tier": 4,
        "rank": 46,
        "winRate": 50.9819,
        "pickRate": 0.658389,
        "banRate": 0.158833
      },
      {
        "key": "gragas",
        "name": "酒桶",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Gragas.png",
        "tier": 4,
        "rank": 47,
        "winRate": 50.680800000000005,
        "pickRate": 0.783957,
        "banRate": 0.614772
      },
      {
        "key": "kindred",
        "name": "永猎双子",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kindred.png",
        "tier": 4,
        "rank": 48,
        "winRate": 49.1038,
        "pickRate": 2.1762799999999998,
        "banRate": 1.62399
      },
      {
        "key": "jax",
        "name": "武器大师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Jax.png",
        "tier": 4,
        "rank": 49,
        "winRate": 49.1916,
        "pickRate": 1.7900200000000002,
        "banRate": 9.965309999999999
      },
      {
        "key": "gwen",
        "name": "灵罗娃娃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Gwen.png",
        "tier": 4,
        "rank": 50,
        "winRate": 50.050799999999995,
        "pickRate": 1.06829,
        "banRate": 4.0547699999999995
      },
      {
        "key": "karthus",
        "name": "死亡颂唱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Karthus.png",
        "tier": 5,
        "rank": 51,
        "winRate": 49.385400000000004,
        "pickRate": 1.36954,
        "banRate": 0.8640260000000001
      },
      {
        "key": "fizz",
        "name": "潮汐海灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Fizz.png",
        "tier": 5,
        "rank": 52,
        "winRate": 49.7533,
        "pickRate": 0.7827860000000001,
        "banRate": 6.92824
      },
      {
        "key": "zed",
        "name": "影流之主",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zed.png",
        "tier": 5,
        "rank": 53,
        "winRate": 47.2898,
        "pickRate": 2.62961,
        "banRate": 24.2558
      },
      {
        "key": "jayce",
        "name": "未来守护者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Jayce.png",
        "tier": 5,
        "rank": 54,
        "winRate": 48.1891,
        "pickRate": 1.83051,
        "banRate": 5.88846
      },
      {
        "key": "poppy",
        "name": "圣锤之毅",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Poppy.png",
        "tier": 5,
        "rank": 55,
        "winRate": 50.034,
        "pickRate": 0.510865,
        "banRate": 4.6156299999999995
      },
      {
        "key": "olaf",
        "name": "狂战士",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Olaf.png",
        "tier": 5,
        "rank": 56,
        "winRate": 49.8437,
        "pickRate": 0.513512,
        "banRate": 3.4114400000000002
      },
      {
        "key": "malphite",
        "name": "熔岩巨兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Malphite.png",
        "tier": 5,
        "rank": 57,
        "winRate": 48.9495,
        "pickRate": 0.7393529999999999,
        "banRate": 14.568
      },
      {
        "key": "ambessa",
        "name": "铁血狼母",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ambessa.png",
        "tier": 5,
        "rank": 58,
        "winRate": 48.7236,
        "pickRate": 0.965411,
        "banRate": 4.791659999999999
      },
      {
        "key": "volibear",
        "name": "不灭狂雷",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Volibear.png",
        "tier": 5,
        "rank": 59,
        "winRate": 48.5765,
        "pickRate": 1.06837,
        "banRate": 1.17695
      },
      {
        "key": "teemo",
        "name": "迅捷斥候",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Teemo.png",
        "tier": 5,
        "rank": 60,
        "winRate": 48.797200000000004,
        "pickRate": 0.638517,
        "banRate": 6.00103
      },
      {
        "key": "pantheon",
        "name": "不屈之枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Pantheon.png",
        "tier": 5,
        "rank": 61,
        "winRate": 47.0462,
        "pickRate": 0.9467110000000001,
        "banRate": 2.33968
      },
      {
        "key": "locke",
        "name": "灰烬驱魔人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Locke.png",
        "tier": 5,
        "rank": 62,
        "winRate": 45.2365,
        "pickRate": 0.7687710000000001,
        "banRate": 31.623600000000003
      }
    ],
    "mid": [
      {
        "key": "ahri",
        "name": "九尾妖狐",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ahri.png",
        "tier": 1,
        "rank": 1,
        "winRate": 50.8815,
        "pickRate": 9.449200000000001,
        "banRate": 3.10499
      },
      {
        "key": "viktor",
        "name": "奥术先驱",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Viktor.png",
        "tier": 1,
        "rank": 2,
        "winRate": 50.3366,
        "pickRate": 9.354949999999999,
        "banRate": 16.1839
      },
      {
        "key": "syndra",
        "name": "暗黑元首",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Syndra.png",
        "tier": 1,
        "rank": 3,
        "winRate": 50.5019,
        "pickRate": 8.52635,
        "banRate": 12.8229
      },
      {
        "key": "fizz",
        "name": "潮汐海灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Fizz.png",
        "tier": 1,
        "rank": 4,
        "winRate": 51.294799999999995,
        "pickRate": 5.25052,
        "banRate": 7.31348
      },
      {
        "key": "zed",
        "name": "影流之主",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zed.png",
        "tier": 1,
        "rank": 5,
        "winRate": 50.0837,
        "pickRate": 8.84505,
        "banRate": 24.402099999999997
      },
      {
        "key": "twistedfate",
        "name": "卡牌大师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/TwistedFate.png",
        "tier": 1,
        "rank": 6,
        "winRate": 51.297599999999996,
        "pickRate": 4.99211,
        "banRate": 1.05111
      },
      {
        "key": "lissandra",
        "name": "冰霜女巫",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Lissandra.png",
        "tier": 1,
        "rank": 7,
        "winRate": 50.9224,
        "pickRate": 5.53142,
        "banRate": 3.7836300000000005
      },
      {
        "key": "vex",
        "name": "愁云使者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Vex.png",
        "tier": 1,
        "rank": 8,
        "winRate": 51.962399999999995,
        "pickRate": 2.94226,
        "banRate": 3.60223
      },
      {
        "key": "katarina",
        "name": "不祥之刃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Katarina.png",
        "tier": 1,
        "rank": 9,
        "winRate": 50.3317,
        "pickRate": 7.09134,
        "banRate": 11.9746
      },
      {
        "key": "leblanc",
        "name": "诡术妖姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Leblanc.png",
        "tier": 1,
        "rank": 10,
        "winRate": 50.6089,
        "pickRate": 5.55918,
        "banRate": 15.6578
      },
      {
        "key": "vladimir",
        "name": "猩红收割者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Vladimir.png",
        "tier": 1,
        "rank": 11,
        "winRate": 51.2084,
        "pickRate": 4.00567,
        "banRate": 5.83446
      },
      {
        "key": "nasus",
        "name": "沙漠死神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Nasus.png",
        "tier": 1,
        "rank": 12,
        "winRate": 51.1642,
        "pickRate": 2.1487,
        "banRate": 45.4119
      },
      {
        "key": "xerath",
        "name": "远古巫灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Xerath.png",
        "tier": 1,
        "rank": 13,
        "winRate": 50.7949,
        "pickRate": 4.41347,
        "banRate": 12.446200000000001
      },
      {
        "key": "hwei",
        "name": "异画师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Hwei.png",
        "tier": 1,
        "rank": 14,
        "winRate": 51.0833,
        "pickRate": 4.06847,
        "banRate": 3.05309
      },
      {
        "key": "locke",
        "name": "灰烬驱魔人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Locke.png",
        "tier": 1,
        "rank": 15,
        "winRate": 49.7939,
        "pickRate": 6.4635,
        "banRate": 32.4844
      },
      {
        "key": "lux",
        "name": "光辉女郎",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Lux.png",
        "tier": 2,
        "rank": 16,
        "winRate": 50.727999999999994,
        "pickRate": 3.9507,
        "banRate": 3.4479500000000005
      },
      {
        "key": "yasuo",
        "name": "疾风剑豪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Yasuo.png",
        "tier": 2,
        "rank": 17,
        "winRate": 48.9633,
        "pickRate": 8.75136,
        "banRate": 20.077
      },
      {
        "key": "sylas",
        "name": "解脱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sylas.png",
        "tier": 2,
        "rank": 18,
        "winRate": 49.3236,
        "pickRate": 6.8521600000000005,
        "banRate": 17.467299999999998
      },
      {
        "key": "yone",
        "name": "封魔剑魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Yone.png",
        "tier": 2,
        "rank": 19,
        "winRate": 49.3267,
        "pickRate": 7.195690000000001,
        "banRate": 9.518880000000001
      },
      {
        "key": "malzahar",
        "name": "虚空先知",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Malzahar.png",
        "tier": 2,
        "rank": 20,
        "winRate": 49.9233,
        "pickRate": 5.36388,
        "banRate": 9.32939
      },
      {
        "key": "veigar",
        "name": "邪恶小法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Veigar.png",
        "tier": 2,
        "rank": 21,
        "winRate": 50.205200000000005,
        "pickRate": 3.79936,
        "banRate": 1.83293
      },
      {
        "key": "diana",
        "name": "皎月女神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Diana.png",
        "tier": 2,
        "rank": 22,
        "winRate": 50.51409999999999,
        "pickRate": 3.04582,
        "banRate": 3.1879699999999995
      },
      {
        "key": "qiyana",
        "name": "元素女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Qiyana.png",
        "tier": 3,
        "rank": 23,
        "winRate": 50.239599999999996,
        "pickRate": 3.0738499999999997,
        "banRate": 6.511069999999999
      },
      {
        "key": "zoe",
        "name": "暮光星灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zoe.png",
        "tier": 3,
        "rank": 24,
        "winRate": 50.3769,
        "pickRate": 2.80959,
        "banRate": 3.31073
      },
      {
        "key": "ekko",
        "name": "时间刺客",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ekko.png",
        "tier": 3,
        "rank": 25,
        "winRate": 50.161100000000005,
        "pickRate": 3.13219,
        "banRate": 1.5491
      },
      {
        "key": "akali",
        "name": "离群之刺",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Akali.png",
        "tier": 3,
        "rank": 26,
        "winRate": 48.979,
        "pickRate": 5.68245,
        "banRate": 15.9169
      },
      {
        "key": "annie",
        "name": "黑暗之女",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Annie.png",
        "tier": 3,
        "rank": 27,
        "winRate": 50.848400000000005,
        "pickRate": 1.80231,
        "banRate": 0.47889899999999996
      },
      {
        "key": "gwen",
        "name": "灵罗娃娃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Gwen.png",
        "tier": 3,
        "rank": 28,
        "winRate": 51.8822,
        "pickRate": 0.841122,
        "banRate": 3.9626200000000003
      },
      {
        "key": "aurelionsol",
        "name": "铸星龙王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/AurelionSol.png",
        "tier": 3,
        "rank": 29,
        "winRate": 50.647200000000005,
        "pickRate": 1.84368,
        "banRate": 0.651281
      },
      {
        "key": "galio",
        "name": "正义巨像",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Galio.png",
        "tier": 3,
        "rank": 30,
        "winRate": 49.3037,
        "pickRate": 3.8721699999999997,
        "banRate": 1.75501
      },
      {
        "key": "anivia",
        "name": "冰晶凤凰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Anivia.png",
        "tier": 3,
        "rank": 31,
        "winRate": 49.9766,
        "pickRate": 2.31641,
        "banRate": 2.53029
      },
      {
        "key": "kassadin",
        "name": "虚空行者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kassadin.png",
        "tier": 3,
        "rank": 32,
        "winRate": 49.711,
        "pickRate": 2.74275,
        "banRate": 2.3188299999999997
      },
      {
        "key": "akshan",
        "name": "影哨",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Akshan.png",
        "tier": 3,
        "rank": 33,
        "winRate": 49.932300000000005,
        "pickRate": 2.2083,
        "banRate": 2.07473
      },
      {
        "key": "pantheon",
        "name": "不屈之枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Pantheon.png",
        "tier": 4,
        "rank": 34,
        "winRate": 51.365,
        "pickRate": 0.7790090000000001,
        "banRate": 2.3393
      },
      {
        "key": "irelia",
        "name": "刀锋舞者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Irelia.png",
        "tier": 4,
        "rank": 35,
        "winRate": 48.9198,
        "pickRate": 2.86494,
        "banRate": 12.8163
      },
      {
        "key": "velkoz",
        "name": "虚空之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Velkoz.png",
        "tier": 4,
        "rank": 36,
        "winRate": 50.7777,
        "pickRate": 0.8938780000000001,
        "banRate": 1.61713
      },
      {
        "key": "malphite",
        "name": "熔岩巨兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Malphite.png",
        "tier": 4,
        "rank": 37,
        "winRate": 50.5735,
        "pickRate": 0.8421609999999999,
        "banRate": 14.724200000000002
      },
      {
        "key": "aurora",
        "name": "双界灵兔",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Aurora.png",
        "tier": 4,
        "rank": 38,
        "winRate": 49.499900000000004,
        "pickRate": 1.91406,
        "banRate": 1.11392
      },
      {
        "key": "garen",
        "name": "德玛西亚之力",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Garen.png",
        "tier": 4,
        "rank": 39,
        "winRate": 51.410900000000005,
        "pickRate": 0.552605,
        "banRate": 4.92885
      },
      {
        "key": "swain",
        "name": "诺克萨斯统领",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Swain.png",
        "tier": 4,
        "rank": 40,
        "winRate": 51.2056,
        "pickRate": 0.643132,
        "banRate": 1.60306
      },
      {
        "key": "talon",
        "name": "刀锋之影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Talon.png",
        "tier": 4,
        "rank": 41,
        "winRate": 49.3701,
        "pickRate": 1.71222,
        "banRate": 9.54649
      },
      {
        "key": "riven",
        "name": "放逐之刃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Riven.png",
        "tier": 4,
        "rank": 42,
        "winRate": 51.247,
        "pickRate": 0.5140549999999999,
        "banRate": 1.75569
      },
      {
        "key": "cassiopeia",
        "name": "魔蛇之拥",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Cassiopeia.png",
        "tier": 4,
        "rank": 43,
        "winRate": 48.4966,
        "pickRate": 1.7703900000000001,
        "banRate": 1.90794
      },
      {
        "key": "taliyah",
        "name": "岩雀",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Taliyah.png",
        "tier": 5,
        "rank": 44,
        "winRate": 48.6306,
        "pickRate": 1.37904,
        "banRate": 0.360824
      },
      {
        "key": "ziggs",
        "name": "爆破鬼才",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ziggs.png",
        "tier": 5,
        "rank": 45,
        "winRate": 49.850899999999996,
        "pickRate": 0.638973,
        "banRate": 1.50938
      },
      {
        "key": "chogath",
        "name": "虚空恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Chogath.png",
        "tier": 5,
        "rank": 46,
        "winRate": 49.9477,
        "pickRate": 0.579893,
        "banRate": 1.2422499999999999
      },
      {
        "key": "ryze",
        "name": "符文法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ryze.png",
        "tier": 5,
        "rank": 47,
        "winRate": 46.7842,
        "pickRate": 3.13358,
        "banRate": 0.503159
      },
      {
        "key": "orianna",
        "name": "发条魔灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Orianna.png",
        "tier": 5,
        "rank": 48,
        "winRate": 46.7453,
        "pickRate": 3.03629,
        "banRate": 0.399858
      },
      {
        "key": "brand",
        "name": "复仇焰魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Brand.png",
        "tier": 5,
        "rank": 49,
        "winRate": 49.188700000000004,
        "pickRate": 0.6540039999999999,
        "banRate": 2.9428099999999997
      },
      {
        "key": "azir",
        "name": "沙漠皇帝",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Azir.png",
        "tier": 5,
        "rank": 50,
        "winRate": 47.5753,
        "pickRate": 1.7685300000000002,
        "banRate": 0.290005
      },
      {
        "key": "naafiri",
        "name": "百裂冥犬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Naafiri.png",
        "tier": 5,
        "rank": 51,
        "winRate": 48.444500000000005,
        "pickRate": 0.8367899999999999,
        "banRate": 13.2691
      },
      {
        "key": "sion",
        "name": "亡灵战神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sion.png",
        "tier": 5,
        "rank": 52,
        "winRate": 49.343599999999995,
        "pickRate": 0.544418,
        "banRate": 0.480037
      },
      {
        "key": "gangplank",
        "name": "海洋之灾",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Gangplank.png",
        "tier": 5,
        "rank": 53,
        "winRate": 49.1817,
        "pickRate": 0.553168,
        "banRate": 7.18853
      },
      {
        "key": "tristana",
        "name": "麦林炮手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Tristana.png",
        "tier": 5,
        "rank": 54,
        "winRate": 47.936499999999995,
        "pickRate": 0.966647,
        "banRate": 5.82872
      },
      {
        "key": "jayce",
        "name": "未来守护者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Jayce.png",
        "tier": 5,
        "rank": 55,
        "winRate": 47.348099999999995,
        "pickRate": 0.807683,
        "banRate": 5.82247
      },
      {
        "key": "mel",
        "name": "流光镜影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Mel.png",
        "tier": 5,
        "rank": 56,
        "winRate": 45.225,
        "pickRate": 2.0291900000000003,
        "banRate": 19.8683
      },
      {
        "key": "smolder",
        "name": "炽炎雏龙",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Smolder.png",
        "tier": 5,
        "rank": 57,
        "winRate": 43.9905,
        "pickRate": 0.527959,
        "banRate": 1.47426
      }
    ],
    "adc": [
      {
        "key": "jinx",
        "name": "暴走萝莉",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Jinx.png",
        "tier": 0,
        "rank": 1,
        "winRate": 52.3119,
        "pickRate": 17.3264,
        "banRate": 6.424449999999999
      },
      {
        "key": "tristana",
        "name": "麦林炮手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Tristana.png",
        "tier": 1,
        "rank": 2,
        "winRate": 51.420500000000004,
        "pickRate": 9.27891,
        "banRate": 5.96418
      },
      {
        "key": "kaisa",
        "name": "虚空之女",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kaisa.png",
        "tier": 1,
        "rank": 3,
        "winRate": 49.3417,
        "pickRate": 20.055400000000002,
        "banRate": 4.96093
      },
      {
        "key": "jhin",
        "name": "戏命师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Jhin.png",
        "tier": 1,
        "rank": 4,
        "winRate": 49.5463,
        "pickRate": 16.2894,
        "banRate": 1.3559999999999999
      },
      {
        "key": "zeri",
        "name": "祖安花火",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zeri.png",
        "tier": 2,
        "rank": 5,
        "winRate": 51.6255,
        "pickRate": 4.90096,
        "banRate": 0.810666
      },
      {
        "key": "twitch",
        "name": "瘟疫之源",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Twitch.png",
        "tier": 2,
        "rank": 6,
        "winRate": 51.19010000000001,
        "pickRate": 5.63651,
        "banRate": 6.752320000000001
      },
      {
        "key": "xayah",
        "name": "逆羽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Xayah.png",
        "tier": 2,
        "rank": 7,
        "winRate": 51.600699999999996,
        "pickRate": 4.6046,
        "banRate": 0.8083109999999999
      },
      {
        "key": "caitlyn",
        "name": "皮城女警",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Caitlyn.png",
        "tier": 2,
        "rank": 8,
        "winRate": 48.9938,
        "pickRate": 15.201799999999999,
        "banRate": 20.6466
      },
      {
        "key": "yunara",
        "name": "不破之誓",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Yunara.png",
        "tier": 2,
        "rank": 9,
        "winRate": 50.193299999999994,
        "pickRate": 9.092310000000001,
        "banRate": 1.78793
      },
      {
        "key": "seraphine",
        "name": "星籁歌姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Seraphine.png",
        "tier": 2,
        "rank": 10,
        "winRate": 52.3728,
        "pickRate": 1.95157,
        "banRate": 10.1316
      },
      {
        "key": "viktor",
        "name": "奥术先驱",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Viktor.png",
        "tier": 2,
        "rank": 11,
        "winRate": 51.21679999999999,
        "pickRate": 3.4160999999999997,
        "banRate": 16.1637
      },
      {
        "key": "ashe",
        "name": "寒冰射手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ashe.png",
        "tier": 2,
        "rank": 12,
        "winRate": 50.3664,
        "pickRate": 6.44164,
        "banRate": 1.7959699999999998
      },
      {
        "key": "yasuo",
        "name": "疾风剑豪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Yasuo.png",
        "tier": 2,
        "rank": 13,
        "winRate": 51.6594,
        "pickRate": 2.3940099999999997,
        "banRate": 19.9759
      },
      {
        "key": "kogmaw",
        "name": "深渊巨口",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/KogMaw.png",
        "tier": 2,
        "rank": 14,
        "winRate": 52.3608,
        "pickRate": 1.8879,
        "banRate": 0.36486999999999997
      },
      {
        "key": "hwei",
        "name": "异画师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Hwei.png",
        "tier": 3,
        "rank": 15,
        "winRate": 52.453399999999995,
        "pickRate": 1.34131,
        "banRate": 3.01853
      },
      {
        "key": "sivir",
        "name": "战争女神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sivir.png",
        "tier": 3,
        "rank": 16,
        "winRate": 50.3338,
        "pickRate": 4.315440000000001,
        "banRate": 1.4932400000000001
      },
      {
        "key": "veigar",
        "name": "邪恶小法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Veigar.png",
        "tier": 3,
        "rank": 17,
        "winRate": 51.5899,
        "pickRate": 1.97412,
        "banRate": 1.82212
      },
      {
        "key": "lux",
        "name": "光辉女郎",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Lux.png",
        "tier": 3,
        "rank": 18,
        "winRate": 52.733,
        "pickRate": 0.99465,
        "banRate": 3.36408
      },
      {
        "key": "samira",
        "name": "沙漠玫瑰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Samira.png",
        "tier": 3,
        "rank": 19,
        "winRate": 50.032,
        "pickRate": 3.94957,
        "banRate": 5.09856
      },
      {
        "key": "xerath",
        "name": "远古巫灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Xerath.png",
        "tier": 3,
        "rank": 20,
        "winRate": 51.3486,
        "pickRate": 1.60714,
        "banRate": 12.3858
      },
      {
        "key": "missfortune",
        "name": "赏金猎人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/MissFortune.png",
        "tier": 3,
        "rank": 21,
        "winRate": 49.2731,
        "pickRate": 5.792619999999999,
        "banRate": 0.658099
      },
      {
        "key": "lucian",
        "name": "圣枪游侠",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Lucian.png",
        "tier": 3,
        "rank": 22,
        "winRate": 48.5113,
        "pickRate": 8.41147,
        "banRate": 2.45508
      },
      {
        "key": "swain",
        "name": "诺克萨斯统领",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Swain.png",
        "tier": 3,
        "rank": 23,
        "winRate": 52.5635,
        "pickRate": 0.851356,
        "banRate": 1.6108600000000002
      },
      {
        "key": "ziggs",
        "name": "爆破鬼才",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ziggs.png",
        "tier": 3,
        "rank": 24,
        "winRate": 50.8335,
        "pickRate": 2.06785,
        "banRate": 1.59483
      },
      {
        "key": "aphelios",
        "name": "残月之肃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Aphelios.png",
        "tier": 3,
        "rank": 25,
        "winRate": 49.2953,
        "pickRate": 4.77932,
        "banRate": 1.40926
      },
      {
        "key": "karthus",
        "name": "死亡颂唱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Karthus.png",
        "tier": 3,
        "rank": 26,
        "winRate": 53.1508,
        "pickRate": 0.551135,
        "banRate": 0.808997
      },
      {
        "key": "smolder",
        "name": "炽炎雏龙",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Smolder.png",
        "tier": 3,
        "rank": 27,
        "winRate": 49.7446,
        "pickRate": 3.55901,
        "banRate": 1.5515599999999998
      },
      {
        "key": "draven",
        "name": "荣耀行刑官",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Draven.png",
        "tier": 3,
        "rank": 28,
        "winRate": 49.5209,
        "pickRate": 3.6069400000000003,
        "banRate": 10.7509
      },
      {
        "key": "syndra",
        "name": "暗黑元首",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Syndra.png",
        "tier": 3,
        "rank": 29,
        "winRate": 50.1178,
        "pickRate": 2.25633,
        "banRate": 12.778500000000001
      },
      {
        "key": "velkoz",
        "name": "虚空之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Velkoz.png",
        "tier": 3,
        "rank": 30,
        "winRate": 52.6841,
        "pickRate": 0.601429,
        "banRate": 1.57459
      },
      {
        "key": "katarina",
        "name": "不祥之刃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Katarina.png",
        "tier": 3,
        "rank": 31,
        "winRate": 51.4509,
        "pickRate": 0.9486,
        "banRate": 11.6557
      },
      {
        "key": "nilah",
        "name": "不羁之悦",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Nilah.png",
        "tier": 3,
        "rank": 32,
        "winRate": 51.4169,
        "pickRate": 1.11059,
        "banRate": 1.6244600000000002
      },
      {
        "key": "aurelionsol",
        "name": "铸星龙王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/AurelionSol.png",
        "tier": 3,
        "rank": 33,
        "winRate": 51.9419,
        "pickRate": 0.746309,
        "banRate": 0.6349600000000001
      },
      {
        "key": "kalista",
        "name": "复仇之矛",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kalista.png",
        "tier": 4,
        "rank": 34,
        "winRate": 49.0583,
        "pickRate": 2.9618700000000002,
        "banRate": 0.664595
      },
      {
        "key": "brand",
        "name": "复仇焰魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Brand.png",
        "tier": 4,
        "rank": 35,
        "winRate": 51.6618,
        "pickRate": 0.670846,
        "banRate": 2.89919
      },
      {
        "key": "ezreal",
        "name": "探险家",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ezreal.png",
        "tier": 4,
        "rank": 36,
        "winRate": 46.091,
        "pickRate": 12.6035,
        "banRate": 4.54612
      },
      {
        "key": "vladimir",
        "name": "猩红收割者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Vladimir.png",
        "tier": 4,
        "rank": 37,
        "winRate": 51.5485,
        "pickRate": 0.6188370000000001,
        "banRate": 5.64003
      },
      {
        "key": "corki",
        "name": "英勇投弹手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Corki.png",
        "tier": 4,
        "rank": 38,
        "winRate": 49.574200000000005,
        "pickRate": 1.7975100000000002,
        "banRate": 0.280349
      },
      {
        "key": "vayne",
        "name": "暗夜猎手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Vayne.png",
        "tier": 4,
        "rank": 39,
        "winRate": 47.5726,
        "pickRate": 3.50619,
        "banRate": 7.2071700000000005
      },
      {
        "key": "senna",
        "name": "涤魂圣枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Senna.png",
        "tier": 5,
        "rank": 40,
        "winRate": 50.123799999999996,
        "pickRate": 0.5887800000000001,
        "banRate": 1.8485
      },
      {
        "key": "varus",
        "name": "惩戒之箭",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Varus.png",
        "tier": 5,
        "rank": 41,
        "winRate": 47.2863,
        "pickRate": 2.71207,
        "banRate": 0.7073740000000001
      },
      {
        "key": "mel",
        "name": "流光镜影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Mel.png",
        "tier": 5,
        "rank": 42,
        "winRate": 46.3827,
        "pickRate": 1.57112,
        "banRate": 19.8655
      }
    ],
    "support": [
      {
        "key": "thresh",
        "name": "魂锁典狱长",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Thresh.png",
        "tier": 0,
        "rank": 1,
        "winRate": 51.729,
        "pickRate": 14.9001,
        "banRate": 11.5272
      },
      {
        "key": "leona",
        "name": "曙光女神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Leona.png",
        "tier": 1,
        "rank": 2,
        "winRate": 51.585899999999995,
        "pickRate": 7.77891,
        "banRate": 8.30882
      },
      {
        "key": "lulu",
        "name": "仙灵女巫",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Lulu.png",
        "tier": 1,
        "rank": 3,
        "winRate": 50.42569999999999,
        "pickRate": 11.335,
        "banRate": 8.90807
      },
      {
        "key": "seraphine",
        "name": "星籁歌姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Seraphine.png",
        "tier": 1,
        "rank": 4,
        "winRate": 50.8947,
        "pickRate": 8.79938,
        "banRate": 10.1811
      },
      {
        "key": "braum",
        "name": "弗雷尔卓德之心",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Braum.png",
        "tier": 1,
        "rank": 5,
        "winRate": 52.073899999999995,
        "pickRate": 4.90742,
        "banRate": 4.94881
      },
      {
        "key": "blitzcrank",
        "name": "蒸汽机器人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Blitzcrank.png",
        "tier": 1,
        "rank": 6,
        "winRate": 51.359500000000004,
        "pickRate": 6.352180000000001,
        "banRate": 11.8025
      },
      {
        "key": "nami",
        "name": "唤潮鲛姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Nami.png",
        "tier": 1,
        "rank": 7,
        "winRate": 50.687099999999994,
        "pickRate": 9.246369999999999,
        "banRate": 1.12822
      },
      {
        "key": "nautilus",
        "name": "深海泰坦",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Nautilus.png",
        "tier": 1,
        "rank": 8,
        "winRate": 49.9805,
        "pickRate": 10.9179,
        "banRate": 14.376700000000001
      },
      {
        "key": "milio",
        "name": "明烛",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Milio.png",
        "tier": 1,
        "rank": 9,
        "winRate": 50.75150000000001,
        "pickRate": 6.86532,
        "banRate": 4.31905
      },
      {
        "key": "senna",
        "name": "涤魂圣枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Senna.png",
        "tier": 1,
        "rank": 10,
        "winRate": 51.138099999999994,
        "pickRate": 5.6420900000000005,
        "banRate": 1.9025899999999998
      },
      {
        "key": "alistar",
        "name": "牛头酋长",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Alistar.png",
        "tier": 1,
        "rank": 11,
        "winRate": 51.2748,
        "pickRate": 4.94916,
        "banRate": 1.7651
      },
      {
        "key": "rell",
        "name": "镕铁少女",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Rell.png",
        "tier": 1,
        "rank": 12,
        "winRate": 51.77460000000001,
        "pickRate": 3.8663700000000003,
        "banRate": 1.41686
      },
      {
        "key": "janna",
        "name": "风暴之怒",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Janna.png",
        "tier": 1,
        "rank": 13,
        "winRate": 51.6128,
        "pickRate": 3.97342,
        "banRate": 0.8459110000000001
      },
      {
        "key": "soraka",
        "name": "众星之子",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Soraka.png",
        "tier": 2,
        "rank": 14,
        "winRate": 50.6845,
        "pickRate": 5.14642,
        "banRate": 2.14977
      },
      {
        "key": "zilean",
        "name": "时光守护者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zilean.png",
        "tier": 2,
        "rank": 15,
        "winRate": 51.439800000000005,
        "pickRate": 3.2976400000000003,
        "banRate": 1.9028300000000002
      },
      {
        "key": "sona",
        "name": "琴瑟仙女",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sona.png",
        "tier": 2,
        "rank": 16,
        "winRate": 51.3369,
        "pickRate": 2.99539,
        "banRate": 0.24322800000000003
      },
      {
        "key": "rakan",
        "name": "幻翎",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Rakan.png",
        "tier": 2,
        "rank": 17,
        "winRate": 50.9219,
        "pickRate": 3.4637599999999997,
        "banRate": 0.321969
      },
      {
        "key": "taric",
        "name": "瓦洛兰之盾",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Taric.png",
        "tier": 2,
        "rank": 18,
        "winRate": 52.599399999999996,
        "pickRate": 1.3967399999999999,
        "banRate": 0.314482
      },
      {
        "key": "morgana",
        "name": "堕落天使",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Morgana.png",
        "tier": 2,
        "rank": 19,
        "winRate": 49.992,
        "pickRate": 4.4253800000000005,
        "banRate": 16.636
      },
      {
        "key": "pyke",
        "name": "血港鬼影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Pyke.png",
        "tier": 2,
        "rank": 20,
        "winRate": 49.018499999999996,
        "pickRate": 6.37659,
        "banRate": 24.988
      },
      {
        "key": "karma",
        "name": "天启者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Karma.png",
        "tier": 2,
        "rank": 21,
        "winRate": 48.876799999999996,
        "pickRate": 7.00949,
        "banRate": 3.09738
      },
      {
        "key": "lux",
        "name": "光辉女郎",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Lux.png",
        "tier": 2,
        "rank": 22,
        "winRate": 48.9574,
        "pickRate": 6.498379999999999,
        "banRate": 3.45417
      },
      {
        "key": "velkoz",
        "name": "虚空之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Velkoz.png",
        "tier": 2,
        "rank": 23,
        "winRate": 50.526199999999996,
        "pickRate": 2.7582,
        "banRate": 1.67591
      },
      {
        "key": "bard",
        "name": "星界游神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Bard.png",
        "tier": 2,
        "rank": 24,
        "winRate": 49.1863,
        "pickRate": 5.06496,
        "banRate": 2.55573
      },
      {
        "key": "poppy",
        "name": "圣锤之毅",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Poppy.png",
        "tier": 3,
        "rank": 25,
        "winRate": 50.7359,
        "pickRate": 2.0648199999999997,
        "banRate": 4.78974
      },
      {
        "key": "zyra",
        "name": "荆棘之兴",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zyra.png",
        "tier": 3,
        "rank": 26,
        "winRate": 49.9178,
        "pickRate": 2.46105,
        "banRate": 2.36707
      },
      {
        "key": "maokai",
        "name": "扭曲树精",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Maokai.png",
        "tier": 3,
        "rank": 27,
        "winRate": 50.511300000000006,
        "pickRate": 1.68583,
        "banRate": 0.16659400000000002
      },
      {
        "key": "brand",
        "name": "复仇焰魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Brand.png",
        "tier": 3,
        "rank": 28,
        "winRate": 49.5848,
        "pickRate": 2.48432,
        "banRate": 3.04608
      },
      {
        "key": "yuumi",
        "name": "魔法猫咪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Yuumi.png",
        "tier": 3,
        "rank": 29,
        "winRate": 47.782799999999995,
        "pickRate": 5.27863,
        "banRate": 6.74858
      },
      {
        "key": "pantheon",
        "name": "不屈之枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Pantheon.png",
        "tier": 3,
        "rank": 30,
        "winRate": 48.2465,
        "pickRate": 3.6632100000000003,
        "banRate": 2.4152400000000003
      },
      {
        "key": "galio",
        "name": "正义巨像",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Galio.png",
        "tier": 3,
        "rank": 31,
        "winRate": 50.800599999999996,
        "pickRate": 1.00257,
        "banRate": 1.70192
      },
      {
        "key": "tahmkench",
        "name": "河流之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/TahmKench.png",
        "tier": 3,
        "rank": 32,
        "winRate": 49.2347,
        "pickRate": 2.16101,
        "banRate": 1.9482300000000001
      },
      {
        "key": "renata",
        "name": "炼金男爵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Renata.png",
        "tier": 3,
        "rank": 33,
        "winRate": 50.1158,
        "pickRate": 1.42374,
        "banRate": 0.20085200000000003
      },
      {
        "key": "amumu",
        "name": "殇之木乃伊",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Amumu.png",
        "tier": 3,
        "rank": 34,
        "winRate": 51.80590000000001,
        "pickRate": 0.577219,
        "banRate": 0.8259610000000001
      },
      {
        "key": "xerath",
        "name": "远古巫灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Xerath.png",
        "tier": 3,
        "rank": 35,
        "winRate": 47.8475,
        "pickRate": 2.96786,
        "banRate": 12.428
      },
      {
        "key": "elise",
        "name": "蜘蛛女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Elise.png",
        "tier": 3,
        "rank": 36,
        "winRate": 51.078,
        "pickRate": 0.646667,
        "banRate": 0.96936
      },
      {
        "key": "swain",
        "name": "诺克萨斯统领",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Swain.png",
        "tier": 3,
        "rank": 37,
        "winRate": 47.747299999999996,
        "pickRate": 2.59964,
        "banRate": 1.67689
      },
      {
        "key": "neeko",
        "name": "万花通灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Neeko.png",
        "tier": 3,
        "rank": 38,
        "winRate": 48.7044,
        "pickRate": 1.53616,
        "banRate": 0.561485
      },
      {
        "key": "shen",
        "name": "暮光之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Shen.png",
        "tier": 3,
        "rank": 39,
        "winRate": 49.061,
        "pickRate": 1.17564,
        "banRate": 0.763841
      },
      {
        "key": "hwei",
        "name": "异画师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Hwei.png",
        "tier": 3,
        "rank": 40,
        "winRate": 49.9469,
        "pickRate": 0.6620159999999999,
        "banRate": 2.96081
      },
      {
        "key": "leblanc",
        "name": "诡术妖姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Leblanc.png",
        "tier": 3,
        "rank": 41,
        "winRate": 49.1168,
        "pickRate": 0.8241780000000001,
        "banRate": 15.2003
      },
      {
        "key": "sylas",
        "name": "解脱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sylas.png",
        "tier": 4,
        "rank": 42,
        "winRate": 47.4146,
        "pickRate": 1.35755,
        "banRate": 17.142
      },
      {
        "key": "shaco",
        "name": "恶魔小丑",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Shaco.png",
        "tier": 4,
        "rank": 43,
        "winRate": 47.4282,
        "pickRate": 1.27407,
        "banRate": 16.5669
      },
      {
        "key": "fiddlesticks",
        "name": "远古恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Fiddlesticks.png",
        "tier": 4,
        "rank": 44,
        "winRate": 49.5056,
        "pickRate": 0.511554,
        "banRate": 1.30358
      },
      {
        "key": "camille",
        "name": "青钢影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Camille.png",
        "tier": 4,
        "rank": 45,
        "winRate": 46.057500000000005,
        "pickRate": 2.44091,
        "banRate": 5.6164
      },
      {
        "key": "zoe",
        "name": "暮光星灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zoe.png",
        "tier": 4,
        "rank": 46,
        "winRate": 48.046499999999995,
        "pickRate": 0.9343529999999999,
        "banRate": 3.2338
      },
      {
        "key": "teemo",
        "name": "迅捷斥候",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Teemo.png",
        "tier": 4,
        "rank": 47,
        "winRate": 48.513099999999994,
        "pickRate": 0.538339,
        "banRate": 5.9919899999999995
      },
      {
        "key": "veigar",
        "name": "邪恶小法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Veigar.png",
        "tier": 5,
        "rank": 48,
        "winRate": 44.599,
        "pickRate": 0.651461,
        "banRate": 1.7501099999999998
      },
      {
        "key": "ashe",
        "name": "寒冰射手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ashe.png",
        "tier": 5,
        "rank": 49,
        "winRate": 43.819599999999994,
        "pickRate": 0.750068,
        "banRate": 1.733
      },
      {
        "key": "mel",
        "name": "流光镜影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Mel.png",
        "tier": 5,
        "rank": 50,
        "winRate": 42.623,
        "pickRate": 0.767617,
        "banRate": 19.4297
      }
    ]
  }
};
