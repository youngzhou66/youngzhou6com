/* eslint-disable */
// 本文件由 scripts/update-champions.mjs 自动生成，请勿手动编辑。
// 英雄数据来自 OP.GG（16.18 版本快照），可用 npm run update:champions 更新。

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
  "patch": "16.18",
  "updatedAt": "2026-09-16T02:42:12.925Z",
  "positions": {
    "top": [
      {
        "key": "nasus",
        "name": "沙漠死神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Nasus.png",
        "tier": 1,
        "rank": 1,
        "winRate": 51.3459,
        "pickRate": 7.09003,
        "banRate": 37.990899999999996
      },
      {
        "key": "malphite",
        "name": "熔岩巨兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Malphite.png",
        "tier": 1,
        "rank": 2,
        "winRate": 51.6032,
        "pickRate": 6.813149999999999,
        "banRate": 15.1568
      },
      {
        "key": "garen",
        "name": "德玛西亚之力",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Garen.png",
        "tier": 1,
        "rank": 3,
        "winRate": 50.73140000000001,
        "pickRate": 6.75823,
        "banRate": 4.86861
      },
      {
        "key": "yone",
        "name": "封魔剑魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Yone.png",
        "tier": 1,
        "rank": 4,
        "winRate": 50.039,
        "pickRate": 8.56094,
        "banRate": 10.6474
      },
      {
        "key": "gangplank",
        "name": "海洋之灾",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Gangplank.png",
        "tier": 1,
        "rank": 5,
        "winRate": 50.7763,
        "pickRate": 5.50824,
        "banRate": 7.9102500000000004
      },
      {
        "key": "teemo",
        "name": "迅捷斥候",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Teemo.png",
        "tier": 2,
        "rank": 6,
        "winRate": 51.0596,
        "pickRate": 4.151479999999999,
        "banRate": 6.28951
      },
      {
        "key": "ornn",
        "name": "山隐之焰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ornn.png",
        "tier": 2,
        "rank": 7,
        "winRate": 51.4308,
        "pickRate": 3.3865600000000002,
        "banRate": 0.46719
      },
      {
        "key": "darius",
        "name": "诺克萨斯之手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Darius.png",
        "tier": 2,
        "rank": 8,
        "winRate": 49.8774,
        "pickRate": 6.867769999999999,
        "banRate": 12.8967
      },
      {
        "key": "shen",
        "name": "暮光之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Shen.png",
        "tier": 2,
        "rank": 9,
        "winRate": 51.2325,
        "pickRate": 3.56098,
        "banRate": 0.72928
      },
      {
        "key": "singed",
        "name": "炼金术士",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Singed.png",
        "tier": 2,
        "rank": 10,
        "winRate": 51.8166,
        "pickRate": 2.38203,
        "banRate": 0.7932150000000001
      },
      {
        "key": "sett",
        "name": "腕豪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Sett.png",
        "tier": 2,
        "rank": 11,
        "winRate": 50.16310000000001,
        "pickRate": 5.50639,
        "banRate": 2.31345
      },
      {
        "key": "chogath",
        "name": "虚空恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Chogath.png",
        "tier": 2,
        "rank": 12,
        "winRate": 51.0163,
        "pickRate": 3.3436500000000002,
        "banRate": 2.92692
      },
      {
        "key": "jax",
        "name": "武器大师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Jax.png",
        "tier": 2,
        "rank": 13,
        "winRate": 49.8896,
        "pickRate": 5.76438,
        "banRate": 10.2455
      },
      {
        "key": "camille",
        "name": "青钢影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Camille.png",
        "tier": 2,
        "rank": 14,
        "winRate": 50.3589,
        "pickRate": 4.31933,
        "banRate": 4.0762100000000006
      },
      {
        "key": "irelia",
        "name": "刀锋舞者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Irelia.png",
        "tier": 2,
        "rank": 15,
        "winRate": 50.2114,
        "pickRate": 4.27272,
        "banRate": 12.4584
      },
      {
        "key": "renekton",
        "name": "荒漠屠夫",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Renekton.png",
        "tier": 2,
        "rank": 16,
        "winRate": 49.810500000000005,
        "pickRate": 5.552379999999999,
        "banRate": 3.87715
      },
      {
        "key": "kayle",
        "name": "正义天使",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Kayle.png",
        "tier": 2,
        "rank": 17,
        "winRate": 51.4652,
        "pickRate": 2.2981499999999997,
        "banRate": 1.3982299999999999
      },
      {
        "key": "aatrox",
        "name": "暗裔剑魔",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Aatrox.png",
        "tier": 2,
        "rank": 18,
        "winRate": 49.5352,
        "pickRate": 5.85307,
        "banRate": 6.92311
      },
      {
        "key": "kled",
        "name": "暴怒骑士",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Kled.png",
        "tier": 2,
        "rank": 19,
        "winRate": 51.7215,
        "pickRate": 1.7651400000000002,
        "banRate": 0.899888
      },
      {
        "key": "zaahen",
        "name": "不落魔锋",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Zaahen.png",
        "tier": 2,
        "rank": 20,
        "winRate": 50.4435,
        "pickRate": 3.3681799999999997,
        "banRate": 1.19761
      },
      {
        "key": "pantheon",
        "name": "不屈之枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Pantheon.png",
        "tier": 2,
        "rank": 21,
        "winRate": 50.6142,
        "pickRate": 2.94163,
        "banRate": 2.38603
      },
      {
        "key": "kennen",
        "name": "狂暴之心",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Kennen.png",
        "tier": 2,
        "rank": 22,
        "winRate": 51.3516,
        "pickRate": 2.0583400000000003,
        "banRate": 1.24172
      },
      {
        "key": "olaf",
        "name": "狂战士",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Olaf.png",
        "tier": 2,
        "rank": 23,
        "winRate": 50.4069,
        "pickRate": 3.1408899999999997,
        "banRate": 3.7116700000000002
      },
      {
        "key": "tryndamere",
        "name": "蛮族之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Tryndamere.png",
        "tier": 2,
        "rank": 24,
        "winRate": 50.41480000000001,
        "pickRate": 3.1308299999999996,
        "banRate": 2.58912
      },
      {
        "key": "warwick",
        "name": "祖安怒兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Warwick.png",
        "tier": 2,
        "rank": 25,
        "winRate": 51.863899999999994,
        "pickRate": 1.42102,
        "banRate": 1.6235
      },
      {
        "key": "gwen",
        "name": "灵罗娃娃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Gwen.png",
        "tier": 2,
        "rank": 26,
        "winRate": 50.621,
        "pickRate": 2.66968,
        "banRate": 3.64683
      },
      {
        "key": "urgot",
        "name": "无畏战车",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Urgot.png",
        "tier": 2,
        "rank": 27,
        "winRate": 50.818200000000004,
        "pickRate": 2.3965,
        "banRate": 0.7845899999999999
      },
      {
        "key": "drmundo",
        "name": "祖安狂人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/DrMundo.png",
        "tier": 2,
        "rank": 28,
        "winRate": 50.06080000000001,
        "pickRate": 3.2909800000000002,
        "banRate": 2.54188
      },
      {
        "key": "mordekaiser",
        "name": "铁铠冥魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Mordekaiser.png",
        "tier": 2,
        "rank": 29,
        "winRate": 49.2062,
        "pickRate": 4.84967,
        "banRate": 7.72807
      },
      {
        "key": "gragas",
        "name": "酒桶",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Gragas.png",
        "tier": 2,
        "rank": 30,
        "winRate": 50.477000000000004,
        "pickRate": 2.42104,
        "banRate": 0.721155
      },
      {
        "key": "illaoi",
        "name": "海兽祭司",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Illaoi.png",
        "tier": 3,
        "rank": 31,
        "winRate": 50.1742,
        "pickRate": 2.65233,
        "banRate": 4.97053
      },
      {
        "key": "yasuo",
        "name": "疾风剑豪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Yasuo.png",
        "tier": 3,
        "rank": 32,
        "winRate": 49.1022,
        "pickRate": 3.44179,
        "banRate": 20.883
      },
      {
        "key": "fiora",
        "name": "无双剑姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Fiora.png",
        "tier": 3,
        "rank": 33,
        "winRate": 49.4768,
        "pickRate": 3.63007,
        "banRate": 4.49183
      },
      {
        "key": "akali",
        "name": "离群之刺",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Akali.png",
        "tier": 3,
        "rank": 34,
        "winRate": 49.4955,
        "pickRate": 2.66588,
        "banRate": 16.1387
      },
      {
        "key": "anivia",
        "name": "冰晶凤凰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Anivia.png",
        "tier": 3,
        "rank": 35,
        "winRate": 52.057900000000004,
        "pickRate": 0.780731,
        "banRate": 2.32329
      },
      {
        "key": "gnar",
        "name": "迷失之牙",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Gnar.png",
        "tier": 3,
        "rank": 36,
        "winRate": 49.0925,
        "pickRate": 3.63109,
        "banRate": 1.19086
      },
      {
        "key": "ambessa",
        "name": "铁血狼母",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ambessa.png",
        "tier": 3,
        "rank": 37,
        "winRate": 48.838300000000004,
        "pickRate": 3.8528399999999996,
        "banRate": 4.93544
      },
      {
        "key": "quinn",
        "name": "德玛西亚之翼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Quinn.png",
        "tier": 3,
        "rank": 38,
        "winRate": 51.703500000000005,
        "pickRate": 0.8075260000000001,
        "banRate": 0.8003410000000001
      },
      {
        "key": "tahmkench",
        "name": "河流之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/TahmKench.png",
        "tier": 4,
        "rank": 39,
        "winRate": 50.0355,
        "pickRate": 1.73352,
        "banRate": 1.9341000000000002
      },
      {
        "key": "riven",
        "name": "放逐之刃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Riven.png",
        "tier": 4,
        "rank": 40,
        "winRate": 49.518499999999996,
        "pickRate": 2.26017,
        "banRate": 1.6605999999999999
      },
      {
        "key": "sion",
        "name": "亡灵战神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Sion.png",
        "tier": 4,
        "rank": 41,
        "winRate": 48.8097,
        "pickRate": 2.89789,
        "banRate": 0.498866
      },
      {
        "key": "yorick",
        "name": "牧魂人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Yorick.png",
        "tier": 4,
        "rank": 42,
        "winRate": 48.7003,
        "pickRate": 2.91073,
        "banRate": 5.77405
      },
      {
        "key": "jayce",
        "name": "未来守护者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Jayce.png",
        "tier": 4,
        "rank": 43,
        "winRate": 47.1208,
        "pickRate": 5.827920000000001,
        "banRate": 6.25076
      },
      {
        "key": "poppy",
        "name": "圣锤之毅",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Poppy.png",
        "tier": 4,
        "rank": 44,
        "winRate": 50.665400000000005,
        "pickRate": 0.948889,
        "banRate": 4.245419999999999
      },
      {
        "key": "volibear",
        "name": "不灭狂雷",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Volibear.png",
        "tier": 4,
        "rank": 45,
        "winRate": 48.3309,
        "pickRate": 3.08761,
        "banRate": 1.26567
      },
      {
        "key": "trundle",
        "name": "巨魔之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Trundle.png",
        "tier": 4,
        "rank": 46,
        "winRate": 49.2999,
        "pickRate": 1.8697499999999998,
        "banRate": 0.471584
      },
      {
        "key": "vladimir",
        "name": "猩红收割者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Vladimir.png",
        "tier": 4,
        "rank": 47,
        "winRate": 49.7211,
        "pickRate": 1.3616899999999998,
        "banRate": 5.7695799999999995
      },
      {
        "key": "monkeyking",
        "name": "齐天大圣",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/MonkeyKing.png",
        "tier": 4,
        "rank": 48,
        "winRate": 50.287800000000004,
        "pickRate": 0.9809190000000001,
        "banRate": 3.4402000000000004
      },
      {
        "key": "ksante",
        "name": "纳祖芒荣耀",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/KSante.png",
        "tier": 4,
        "rank": 49,
        "winRate": 47.4391,
        "pickRate": 3.9045799999999997,
        "banRate": 2.5878200000000002
      },
      {
        "key": "heimerdinger",
        "name": "大发明家",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Heimerdinger.png",
        "tier": 4,
        "rank": 50,
        "winRate": 49.6433,
        "pickRate": 1.20893,
        "banRate": 1.7487099999999998
      },
      {
        "key": "ryze",
        "name": "符文法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ryze.png",
        "tier": 5,
        "rank": 51,
        "winRate": 49.9084,
        "pickRate": 0.784119,
        "banRate": 0.49722500000000003
      },
      {
        "key": "swain",
        "name": "诺克萨斯统领",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Swain.png",
        "tier": 5,
        "rank": 52,
        "winRate": 49.9401,
        "pickRate": 0.599639,
        "banRate": 1.47586
      },
      {
        "key": "cassiopeia",
        "name": "魔蛇之拥",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Cassiopeia.png",
        "tier": 5,
        "rank": 53,
        "winRate": 49.830799999999996,
        "pickRate": 0.546153,
        "banRate": 1.70224
      },
      {
        "key": "rumble",
        "name": "机械公敌",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Rumble.png",
        "tier": 5,
        "rank": 54,
        "winRate": 47.6098,
        "pickRate": 1.75241,
        "banRate": 0.689396
      },
      {
        "key": "vayne",
        "name": "暗夜猎手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Vayne.png",
        "tier": 5,
        "rank": 55,
        "winRate": 46.7065,
        "pickRate": 1.82037,
        "banRate": 6.07691
      },
      {
        "key": "malzahar",
        "name": "虚空先知",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Malzahar.png",
        "tier": 5,
        "rank": 56,
        "winRate": 48.920700000000004,
        "pickRate": 0.537427,
        "banRate": 7.996010000000001
      },
      {
        "key": "masteryi",
        "name": "无极剑圣",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/MasterYi.png",
        "tier": 5,
        "rank": 57,
        "winRate": 48.8787,
        "pickRate": 0.517305,
        "banRate": 12.2404
      },
      {
        "key": "varus",
        "name": "惩戒之箭",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Varus.png",
        "tier": 5,
        "rank": 58,
        "winRate": 47.8442,
        "pickRate": 1.00956,
        "banRate": 0.767768
      },
      {
        "key": "udyr",
        "name": "兽灵行者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Udyr.png",
        "tier": 5,
        "rank": 59,
        "winRate": 47.5382,
        "pickRate": 0.5379400000000001,
        "banRate": 1.01443
      }
    ],
    "jungle": [
      {
        "key": "monkeyking",
        "name": "齐天大圣",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/MonkeyKing.png",
        "tier": 1,
        "rank": 1,
        "winRate": 51.9261,
        "pickRate": 5.9334,
        "banRate": 3.6046
      },
      {
        "key": "rammus",
        "name": "披甲龙龟",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Rammus.png",
        "tier": 1,
        "rank": 2,
        "winRate": 52.990899999999996,
        "pickRate": 2.0824700000000003,
        "banRate": 4.1755
      },
      {
        "key": "sylas",
        "name": "解脱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Sylas.png",
        "tier": 1,
        "rank": 3,
        "winRate": 50.452,
        "pickRate": 7.70673,
        "banRate": 18.540100000000002
      },
      {
        "key": "chogath",
        "name": "虚空恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Chogath.png",
        "tier": 2,
        "rank": 4,
        "winRate": 51.153800000000004,
        "pickRate": 5.1731300000000005,
        "banRate": 2.9304799999999998
      },
      {
        "key": "shyvana",
        "name": "龙血武姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Shyvana.png",
        "tier": 2,
        "rank": 5,
        "winRate": 51.0909,
        "pickRate": 5.25686,
        "banRate": 5.8458499999999995
      },
      {
        "key": "talon",
        "name": "刀锋之影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Talon.png",
        "tier": 2,
        "rank": 6,
        "winRate": 50.6236,
        "pickRate": 6.419460000000001,
        "banRate": 10.6695
      },
      {
        "key": "masteryi",
        "name": "无极剑圣",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/MasterYi.png",
        "tier": 2,
        "rank": 7,
        "winRate": 50.5429,
        "pickRate": 6.17235,
        "banRate": 14.102400000000001
      },
      {
        "key": "nocturne",
        "name": "永恒梦魇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Nocturne.png",
        "tier": 2,
        "rank": 8,
        "winRate": 50.571999999999996,
        "pickRate": 6.019159999999999,
        "banRate": 13.011000000000001
      },
      {
        "key": "briar",
        "name": "狂厄蔷薇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Briar.png",
        "tier": 2,
        "rank": 9,
        "winRate": 51.0364,
        "pickRate": 4.56036,
        "banRate": 8.81911
      },
      {
        "key": "ekko",
        "name": "时间刺客",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ekko.png",
        "tier": 2,
        "rank": 10,
        "winRate": 50.968599999999995,
        "pickRate": 4.7271,
        "banRate": 2.29263
      },
      {
        "key": "leesin",
        "name": "盲僧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/LeeSin.png",
        "tier": 2,
        "rank": 11,
        "winRate": 48.979099999999995,
        "pickRate": 13.6942,
        "banRate": 17.163800000000002
      },
      {
        "key": "viego",
        "name": "破败之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Viego.png",
        "tier": 2,
        "rank": 12,
        "winRate": 49.411500000000004,
        "pickRate": 9.934560000000001,
        "banRate": 8.47149
      },
      {
        "key": "kayn",
        "name": "影流之镰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Kayn.png",
        "tier": 2,
        "rank": 13,
        "winRate": 49.9761,
        "pickRate": 6.81181,
        "banRate": 5.11477
      },
      {
        "key": "warwick",
        "name": "祖安怒兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Warwick.png",
        "tier": 2,
        "rank": 14,
        "winRate": 51.2209,
        "pickRate": 2.99919,
        "banRate": 1.6632
      },
      {
        "key": "evelynn",
        "name": "痛苦之拥",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Evelynn.png",
        "tier": 3,
        "rank": 15,
        "winRate": 51.223,
        "pickRate": 2.3528000000000002,
        "banRate": 2.12652
      },
      {
        "key": "belveth",
        "name": "虚空女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Belveth.png",
        "tier": 3,
        "rank": 16,
        "winRate": 50.8335,
        "pickRate": 2.93889,
        "banRate": 5.75373
      },
      {
        "key": "nidalee",
        "name": "狂野女猎手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Nidalee.png",
        "tier": 3,
        "rank": 17,
        "winRate": 50.8058,
        "pickRate": 3.03372,
        "banRate": 2.24213
      },
      {
        "key": "sejuani",
        "name": "北地之怒",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Sejuani.png",
        "tier": 3,
        "rank": 18,
        "winRate": 51.2936,
        "pickRate": 2.1732299999999998,
        "banRate": 0.21924000000000002
      },
      {
        "key": "zac",
        "name": "生化魔人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Zac.png",
        "tier": 3,
        "rank": 19,
        "winRate": 50.81400000000001,
        "pickRate": 2.90915,
        "banRate": 1.11697
      },
      {
        "key": "fiddlesticks",
        "name": "远古恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Fiddlesticks.png",
        "tier": 3,
        "rank": 20,
        "winRate": 51.164500000000004,
        "pickRate": 2.31349,
        "banRate": 1.34182
      },
      {
        "key": "khazix",
        "name": "虚空掠夺者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Khazix.png",
        "tier": 3,
        "rank": 21,
        "winRate": 49.8364,
        "pickRate": 5.29332,
        "banRate": 3.06774
      },
      {
        "key": "graves",
        "name": "法外狂徒",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Graves.png",
        "tier": 3,
        "rank": 22,
        "winRate": 48.8258,
        "pickRate": 8.88716,
        "banRate": 13.2097
      },
      {
        "key": "jarvaniv",
        "name": "德玛西亚皇子",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/JarvanIV.png",
        "tier": 3,
        "rank": 23,
        "winRate": 49.4706,
        "pickRate": 6.18549,
        "banRate": 1.27351
      },
      {
        "key": "reksai",
        "name": "虚空遁地兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/RekSai.png",
        "tier": 3,
        "rank": 24,
        "winRate": 51.756800000000005,
        "pickRate": 1.44077,
        "banRate": 0.624116
      },
      {
        "key": "hecarim",
        "name": "战争之影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Hecarim.png",
        "tier": 3,
        "rank": 25,
        "winRate": 49.6189,
        "pickRate": 5.33172,
        "banRate": 6.693960000000001
      },
      {
        "key": "shaco",
        "name": "恶魔小丑",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Shaco.png",
        "tier": 3,
        "rank": 26,
        "winRate": 49.8068,
        "pickRate": 4.32283,
        "banRate": 16.8722
      },
      {
        "key": "lillia",
        "name": "含羞蓓蕾",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Lillia.png",
        "tier": 3,
        "rank": 27,
        "winRate": 50.4262,
        "pickRate": 2.97556,
        "banRate": 1.8978499999999998
      },
      {
        "key": "udyr",
        "name": "兽灵行者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Udyr.png",
        "tier": 3,
        "rank": 28,
        "winRate": 50.928200000000004,
        "pickRate": 2.1234200000000003,
        "banRate": 1.0849
      },
      {
        "key": "vi",
        "name": "皮城执法官",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Vi.png",
        "tier": 3,
        "rank": 29,
        "winRate": 49.2954,
        "pickRate": 4.98734,
        "banRate": 1.71
      },
      {
        "key": "nunu",
        "name": "雪原双子",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Nunu.png",
        "tier": 3,
        "rank": 30,
        "winRate": 50.7391,
        "pickRate": 1.95006,
        "banRate": 0.46582300000000004
      },
      {
        "key": "amumu",
        "name": "殇之木乃伊",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Amumu.png",
        "tier": 3,
        "rank": 31,
        "winRate": 50.7305,
        "pickRate": 1.9451699999999998,
        "banRate": 0.893669
      },
      {
        "key": "zyra",
        "name": "荆棘之兴",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Zyra.png",
        "tier": 3,
        "rank": 32,
        "winRate": 51.263400000000004,
        "pickRate": 1.2174,
        "banRate": 2.23926
      },
      {
        "key": "ivern",
        "name": "翠神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ivern.png",
        "tier": 3,
        "rank": 33,
        "winRate": 51.346000000000004,
        "pickRate": 1.13887,
        "banRate": 0.31986699999999996
      },
      {
        "key": "qiyana",
        "name": "元素女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Qiyana.png",
        "tier": 4,
        "rank": 34,
        "winRate": 48.5006,
        "pickRate": 5.709820000000001,
        "banRate": 8.18056
      },
      {
        "key": "naafiri",
        "name": "百裂冥犬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Naafiri.png",
        "tier": 4,
        "rank": 35,
        "winRate": 49.0713,
        "pickRate": 3.5423999999999998,
        "banRate": 12.194099999999999
      },
      {
        "key": "aatrox",
        "name": "暗裔剑魔",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Aatrox.png",
        "tier": 4,
        "rank": 36,
        "winRate": 50.7876,
        "pickRate": 1.0475,
        "banRate": 6.6800999999999995
      },
      {
        "key": "skarner",
        "name": "上古领主",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Skarner.png",
        "tier": 4,
        "rank": 37,
        "winRate": 50.7072,
        "pickRate": 1.16667,
        "banRate": 0.266036
      },
      {
        "key": "quinn",
        "name": "德玛西亚之翼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Quinn.png",
        "tier": 4,
        "rank": 38,
        "winRate": 50.4999,
        "pickRate": 1.18175,
        "banRate": 0.8149919999999999
      },
      {
        "key": "diana",
        "name": "皎月女神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Diana.png",
        "tier": 4,
        "rank": 39,
        "winRate": 49.0591,
        "pickRate": 2.7441400000000002,
        "banRate": 2.95262
      },
      {
        "key": "trundle",
        "name": "巨魔之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Trundle.png",
        "tier": 4,
        "rank": 40,
        "winRate": 50.609899999999996,
        "pickRate": 1.0270299999999999,
        "banRate": 0.45887
      },
      {
        "key": "darius",
        "name": "诺克萨斯之手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Darius.png",
        "tier": 4,
        "rank": 41,
        "winRate": 50.8417,
        "pickRate": 0.7502810000000001,
        "banRate": 12.1304
      },
      {
        "key": "elise",
        "name": "蜘蛛女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Elise.png",
        "tier": 4,
        "rank": 42,
        "winRate": 49.5758,
        "pickRate": 1.75297,
        "banRate": 0.992197
      },
      {
        "key": "kindred",
        "name": "永猎双子",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Kindred.png",
        "tier": 4,
        "rank": 43,
        "winRate": 49.2438,
        "pickRate": 2.13483,
        "banRate": 1.56329
      },
      {
        "key": "gragas",
        "name": "酒桶",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Gragas.png",
        "tier": 4,
        "rank": 44,
        "winRate": 50.6215,
        "pickRate": 0.778496,
        "banRate": 0.681158
      },
      {
        "key": "taliyah",
        "name": "岩雀",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Taliyah.png",
        "tier": 4,
        "rank": 45,
        "winRate": 50.42060000000001,
        "pickRate": 0.871899,
        "banRate": 0.351972
      },
      {
        "key": "xinzhao",
        "name": "德邦总管",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/XinZhao.png",
        "tier": 4,
        "rank": 46,
        "winRate": 48.7924,
        "pickRate": 2.2520700000000002,
        "banRate": 0.600279
      },
      {
        "key": "gwen",
        "name": "灵罗娃娃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Gwen.png",
        "tier": 4,
        "rank": 47,
        "winRate": 50.05929999999999,
        "pickRate": 0.94432,
        "banRate": 3.5713500000000002
      },
      {
        "key": "rengar",
        "name": "傲之追猎者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Rengar.png",
        "tier": 4,
        "rank": 48,
        "winRate": 47.917300000000004,
        "pickRate": 3.6557600000000003,
        "banRate": 6.80924
      },
      {
        "key": "zed",
        "name": "影流之主",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Zed.png",
        "tier": 4,
        "rank": 49,
        "winRate": 47.5612,
        "pickRate": 2.7753099999999997,
        "banRate": 24.693
      },
      {
        "key": "maokai",
        "name": "扭曲树精",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Maokai.png",
        "tier": 4,
        "rank": 50,
        "winRate": 50.3428,
        "pickRate": 0.594236,
        "banRate": 0.150676
      },
      {
        "key": "fizz",
        "name": "潮汐海灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Fizz.png",
        "tier": 4,
        "rank": 51,
        "winRate": 49.8277,
        "pickRate": 0.709335,
        "banRate": 6.37699
      },
      {
        "key": "karthus",
        "name": "死亡颂唱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Karthus.png",
        "tier": 5,
        "rank": 52,
        "winRate": 48.175000000000004,
        "pickRate": 1.37579,
        "banRate": 0.871984
      },
      {
        "key": "teemo",
        "name": "迅捷斥候",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Teemo.png",
        "tier": 5,
        "rank": 53,
        "winRate": 49.316900000000004,
        "pickRate": 0.611348,
        "banRate": 5.666729999999999
      },
      {
        "key": "jayce",
        "name": "未来守护者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Jayce.png",
        "tier": 5,
        "rank": 54,
        "winRate": 47.5603,
        "pickRate": 1.75765,
        "banRate": 6.14616
      },
      {
        "key": "jax",
        "name": "武器大师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Jax.png",
        "tier": 5,
        "rank": 55,
        "winRate": 47.6541,
        "pickRate": 1.5913199999999998,
        "banRate": 10.093499999999999
      },
      {
        "key": "volibear",
        "name": "不灭狂雷",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Volibear.png",
        "tier": 5,
        "rank": 56,
        "winRate": 48.5106,
        "pickRate": 0.875362,
        "banRate": 1.20221
      },
      {
        "key": "pantheon",
        "name": "不屈之枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Pantheon.png",
        "tier": 5,
        "rank": 57,
        "winRate": 47.6092,
        "pickRate": 0.886159,
        "banRate": 2.24892
      },
      {
        "key": "ambessa",
        "name": "铁血狼母",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ambessa.png",
        "tier": 5,
        "rank": 58,
        "winRate": 47.326299999999996,
        "pickRate": 0.9409580000000001,
        "banRate": 4.76651
      },
      {
        "key": "malphite",
        "name": "熔岩巨兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Malphite.png",
        "tier": 5,
        "rank": 59,
        "winRate": 47.3641,
        "pickRate": 0.7419290000000001,
        "banRate": 14.313799999999999
      },
      {
        "key": "locke",
        "name": "灰烬驱魔人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Locke.png",
        "tier": 5,
        "rank": 60,
        "winRate": 44.6613,
        "pickRate": 0.720233,
        "banRate": 29.6644
      }
    ],
    "mid": [
      {
        "key": "ahri",
        "name": "九尾妖狐",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ahri.png",
        "tier": 1,
        "rank": 1,
        "winRate": 51.2974,
        "pickRate": 9.229610000000001,
        "banRate": 3.1090400000000002
      },
      {
        "key": "xerath",
        "name": "远古巫灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Xerath.png",
        "tier": 1,
        "rank": 2,
        "winRate": 51.61,
        "pickRate": 4.44551,
        "banRate": 10.1471
      },
      {
        "key": "fizz",
        "name": "潮汐海灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Fizz.png",
        "tier": 1,
        "rank": 3,
        "winRate": 51.3899,
        "pickRate": 5.06176,
        "banRate": 7.09133
      },
      {
        "key": "katarina",
        "name": "不祥之刃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Katarina.png",
        "tier": 1,
        "rank": 4,
        "winRate": 50.7509,
        "pickRate": 6.77386,
        "banRate": 11.838700000000001
      },
      {
        "key": "viktor",
        "name": "奥术先驱",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Viktor.png",
        "tier": 1,
        "rank": 5,
        "winRate": 49.9463,
        "pickRate": 9.35205,
        "banRate": 15.270100000000001
      },
      {
        "key": "ekko",
        "name": "时间刺客",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ekko.png",
        "tier": 1,
        "rank": 6,
        "winRate": 51.7057,
        "pickRate": 4.01769,
        "banRate": 2.2845
      },
      {
        "key": "twistedfate",
        "name": "卡牌大师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/TwistedFate.png",
        "tier": 1,
        "rank": 7,
        "winRate": 51.291399999999996,
        "pickRate": 4.88978,
        "banRate": 1.1020999999999999
      },
      {
        "key": "zed",
        "name": "影流之主",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Zed.png",
        "tier": 1,
        "rank": 8,
        "winRate": 49.8071,
        "pickRate": 8.52453,
        "banRate": 25.052799999999998
      },
      {
        "key": "vex",
        "name": "愁云使者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Vex.png",
        "tier": 1,
        "rank": 9,
        "winRate": 51.968599999999995,
        "pickRate": 3.0787999999999998,
        "banRate": 3.7675
      },
      {
        "key": "yone",
        "name": "封魔剑魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Yone.png",
        "tier": 1,
        "rank": 10,
        "winRate": 50.0287,
        "pickRate": 7.61173,
        "banRate": 10.6512
      },
      {
        "key": "leblanc",
        "name": "诡术妖姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Leblanc.png",
        "tier": 1,
        "rank": 11,
        "winRate": 50.6062,
        "pickRate": 5.40095,
        "banRate": 16.0806
      },
      {
        "key": "lissandra",
        "name": "冰霜女巫",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Lissandra.png",
        "tier": 1,
        "rank": 12,
        "winRate": 50.6772,
        "pickRate": 5.599740000000001,
        "banRate": 3.8598500000000002
      },
      {
        "key": "yasuo",
        "name": "疾风剑豪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Yasuo.png",
        "tier": 1,
        "rank": 13,
        "winRate": 49.2167,
        "pickRate": 8.689910000000001,
        "banRate": 20.997799999999998
      },
      {
        "key": "vladimir",
        "name": "猩红收割者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Vladimir.png",
        "tier": 1,
        "rank": 14,
        "winRate": 50.939299999999996,
        "pickRate": 4.05323,
        "banRate": 5.86404
      },
      {
        "key": "syndra",
        "name": "暗黑元首",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Syndra.png",
        "tier": 1,
        "rank": 15,
        "winRate": 49.626799999999996,
        "pickRate": 7.7122399999999995,
        "banRate": 11.1401
      },
      {
        "key": "lux",
        "name": "光辉女郎",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Lux.png",
        "tier": 1,
        "rank": 16,
        "winRate": 50.915699999999994,
        "pickRate": 3.9691700000000005,
        "banRate": 3.46161
      },
      {
        "key": "hwei",
        "name": "异画师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Hwei.png",
        "tier": 2,
        "rank": 17,
        "winRate": 50.893699999999995,
        "pickRate": 3.90764,
        "banRate": 2.64418
      },
      {
        "key": "locke",
        "name": "灰烬驱魔人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Locke.png",
        "tier": 2,
        "rank": 18,
        "winRate": 49.3309,
        "pickRate": 6.85051,
        "banRate": 31.533099999999997
      },
      {
        "key": "nasus",
        "name": "沙漠死神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Nasus.png",
        "tier": 2,
        "rank": 19,
        "winRate": 50.6206,
        "pickRate": 2.47849,
        "banRate": 37.7062
      },
      {
        "key": "sylas",
        "name": "解脱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Sylas.png",
        "tier": 2,
        "rank": 20,
        "winRate": 48.9061,
        "pickRate": 6.87721,
        "banRate": 18.5427
      },
      {
        "key": "akali",
        "name": "离群之刺",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Akali.png",
        "tier": 2,
        "rank": 21,
        "winRate": 49.4198,
        "pickRate": 5.74857,
        "banRate": 16.253
      },
      {
        "key": "malzahar",
        "name": "虚空先知",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Malzahar.png",
        "tier": 2,
        "rank": 22,
        "winRate": 49.7132,
        "pickRate": 5.20369,
        "banRate": 8.92713
      },
      {
        "key": "veigar",
        "name": "邪恶小法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Veigar.png",
        "tier": 2,
        "rank": 23,
        "winRate": 50.4751,
        "pickRate": 3.56855,
        "banRate": 1.69019
      },
      {
        "key": "diana",
        "name": "皎月女神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Diana.png",
        "tier": 2,
        "rank": 24,
        "winRate": 50.5856,
        "pickRate": 3.0255,
        "banRate": 2.9563699999999997
      },
      {
        "key": "zoe",
        "name": "暮光星灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Zoe.png",
        "tier": 2,
        "rank": 25,
        "winRate": 50.5616,
        "pickRate": 2.81992,
        "banRate": 3.3149100000000002
      },
      {
        "key": "kassadin",
        "name": "虚空行者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Kassadin.png",
        "tier": 2,
        "rank": 26,
        "winRate": 50.025600000000004,
        "pickRate": 3.56734,
        "banRate": 3.42269
      },
      {
        "key": "qiyana",
        "name": "元素女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Qiyana.png",
        "tier": 2,
        "rank": 27,
        "winRate": 50.20719999999999,
        "pickRate": 2.86591,
        "banRate": 8.14362
      },
      {
        "key": "gwen",
        "name": "灵罗娃娃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Gwen.png",
        "tier": 2,
        "rank": 28,
        "winRate": 53.140699999999995,
        "pickRate": 0.6077199999999999,
        "banRate": 3.36169
      },
      {
        "key": "annie",
        "name": "黑暗之女",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Annie.png",
        "tier": 2,
        "rank": 29,
        "winRate": 51.1504,
        "pickRate": 1.86215,
        "banRate": 0.496685
      },
      {
        "key": "galio",
        "name": "正义巨像",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Galio.png",
        "tier": 2,
        "rank": 30,
        "winRate": 49.5832,
        "pickRate": 3.83668,
        "banRate": 1.69126
      },
      {
        "key": "pantheon",
        "name": "不屈之枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Pantheon.png",
        "tier": 2,
        "rank": 31,
        "winRate": 51.9385,
        "pickRate": 0.811782,
        "banRate": 2.25442
      },
      {
        "key": "aurora",
        "name": "双界灵兔",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Aurora.png",
        "tier": 2,
        "rank": 32,
        "winRate": 50.3315,
        "pickRate": 1.9904700000000002,
        "banRate": 1.0487
      },
      {
        "key": "velkoz",
        "name": "虚空之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Velkoz.png",
        "tier": 3,
        "rank": 33,
        "winRate": 51.6159,
        "pickRate": 0.867011,
        "banRate": 1.49662
      },
      {
        "key": "anivia",
        "name": "冰晶凤凰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Anivia.png",
        "tier": 3,
        "rank": 34,
        "winRate": 49.6881,
        "pickRate": 2.24631,
        "banRate": 2.46922
      },
      {
        "key": "aurelionsol",
        "name": "铸星龙王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/AurelionSol.png",
        "tier": 3,
        "rank": 35,
        "winRate": 49.9918,
        "pickRate": 1.86448,
        "banRate": 0.601095
      },
      {
        "key": "talon",
        "name": "刀锋之影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Talon.png",
        "tier": 3,
        "rank": 36,
        "winRate": 50.256299999999996,
        "pickRate": 1.3861999999999999,
        "banRate": 10.370899999999999
      },
      {
        "key": "akshan",
        "name": "影哨",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Akshan.png",
        "tier": 3,
        "rank": 37,
        "winRate": 49.6447,
        "pickRate": 2.12905,
        "banRate": 2.05261
      },
      {
        "key": "gragas",
        "name": "酒桶",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Gragas.png",
        "tier": 3,
        "rank": 38,
        "winRate": 52.0374,
        "pickRate": 0.5531,
        "banRate": 0.6736340000000001
      },
      {
        "key": "irelia",
        "name": "刀锋舞者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Irelia.png",
        "tier": 3,
        "rank": 39,
        "winRate": 48.6048,
        "pickRate": 2.7615399999999997,
        "banRate": 12.4194
      },
      {
        "key": "garen",
        "name": "德玛西亚之力",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Garen.png",
        "tier": 3,
        "rank": 40,
        "winRate": 51.0864,
        "pickRate": 0.556045,
        "banRate": 4.4745800000000004
      },
      {
        "key": "kayle",
        "name": "正义天使",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Kayle.png",
        "tier": 3,
        "rank": 41,
        "winRate": 50.8814,
        "pickRate": 0.598989,
        "banRate": 1.3039800000000001
      },
      {
        "key": "malphite",
        "name": "熔岩巨兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Malphite.png",
        "tier": 3,
        "rank": 42,
        "winRate": 49.8957,
        "pickRate": 0.778686,
        "banRate": 14.4937
      },
      {
        "key": "taliyah",
        "name": "岩雀",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Taliyah.png",
        "tier": 3,
        "rank": 43,
        "winRate": 49.0332,
        "pickRate": 1.39656,
        "banRate": 0.359823
      },
      {
        "key": "brand",
        "name": "复仇焰魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Brand.png",
        "tier": 4,
        "rank": 44,
        "winRate": 50.1719,
        "pickRate": 0.649751,
        "banRate": 2.68961
      },
      {
        "key": "ziggs",
        "name": "爆破鬼才",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ziggs.png",
        "tier": 4,
        "rank": 45,
        "winRate": 50.1663,
        "pickRate": 0.6409180000000001,
        "banRate": 1.0482200000000002
      },
      {
        "key": "cassiopeia",
        "name": "魔蛇之拥",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Cassiopeia.png",
        "tier": 4,
        "rank": 46,
        "winRate": 48.322500000000005,
        "pickRate": 1.53727,
        "banRate": 1.82095
      },
      {
        "key": "ryze",
        "name": "符文法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ryze.png",
        "tier": 4,
        "rank": 47,
        "winRate": 46.907399999999996,
        "pickRate": 3.24175,
        "banRate": 0.521979
      },
      {
        "key": "azir",
        "name": "沙漠皇帝",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Azir.png",
        "tier": 4,
        "rank": 48,
        "winRate": 47.7384,
        "pickRate": 1.82255,
        "banRate": 0.28486700000000004
      },
      {
        "key": "swain",
        "name": "诺克萨斯统领",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Swain.png",
        "tier": 4,
        "rank": 49,
        "winRate": 49.5652,
        "pickRate": 0.630461,
        "banRate": 1.47929
      },
      {
        "key": "naafiri",
        "name": "百裂冥犬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Naafiri.png",
        "tier": 4,
        "rank": 50,
        "winRate": 49.0063,
        "pickRate": 0.761122,
        "banRate": 11.7414
      },
      {
        "key": "orianna",
        "name": "发条魔灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Orianna.png",
        "tier": 4,
        "rank": 51,
        "winRate": 46.0698,
        "pickRate": 3.7145400000000004,
        "banRate": 0.415805
      },
      {
        "key": "gangplank",
        "name": "海洋之灾",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Gangplank.png",
        "tier": 4,
        "rank": 52,
        "winRate": 49.2347,
        "pickRate": 0.517364,
        "banRate": 7.284889999999999
      },
      {
        "key": "jayce",
        "name": "未来守护者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Jayce.png",
        "tier": 4,
        "rank": 53,
        "winRate": 48.2539,
        "pickRate": 0.7820360000000001,
        "banRate": 6.05438
      },
      {
        "key": "sion",
        "name": "亡灵战神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Sion.png",
        "tier": 4,
        "rank": 54,
        "winRate": 48.8772,
        "pickRate": 0.5199020000000001,
        "banRate": 0.450561
      },
      {
        "key": "tristana",
        "name": "麦林炮手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Tristana.png",
        "tier": 4,
        "rank": 55,
        "winRate": 47.2568,
        "pickRate": 1.11585,
        "banRate": 7.037350000000001
      },
      {
        "key": "mel",
        "name": "流光镜影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Mel.png",
        "tier": 5,
        "rank": 56,
        "winRate": 44.8819,
        "pickRate": 2.07585,
        "banRate": 17.121
      },
      {
        "key": "smolder",
        "name": "炽炎雏龙",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Smolder.png",
        "tier": 5,
        "rank": 57,
        "winRate": 43.6096,
        "pickRate": 0.5242680000000001,
        "banRate": 1.2652999999999999
      }
    ],
    "adc": [
      {
        "key": "jinx",
        "name": "暴走萝莉",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Jinx.png",
        "tier": 0,
        "rank": 1,
        "winRate": 52.3104,
        "pickRate": 17.5156,
        "banRate": 7.77513
      },
      {
        "key": "tristana",
        "name": "麦林炮手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Tristana.png",
        "tier": 1,
        "rank": 2,
        "winRate": 51.1174,
        "pickRate": 10.574,
        "banRate": 7.274500000000001
      },
      {
        "key": "kaisa",
        "name": "虚空之女",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Kaisa.png",
        "tier": 1,
        "rank": 3,
        "winRate": 49.6868,
        "pickRate": 18.846,
        "banRate": 4.39859
      },
      {
        "key": "xayah",
        "name": "逆羽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Xayah.png",
        "tier": 1,
        "rank": 4,
        "winRate": 51.9748,
        "pickRate": 4.88667,
        "banRate": 0.8572919999999999
      },
      {
        "key": "yunara",
        "name": "不破之誓",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Yunara.png",
        "tier": 1,
        "rank": 5,
        "winRate": 50.1878,
        "pickRate": 12.976799999999999,
        "banRate": 3.74933
      },
      {
        "key": "jhin",
        "name": "戏命师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Jhin.png",
        "tier": 1,
        "rank": 6,
        "winRate": 49.5248,
        "pickRate": 17.191799999999997,
        "banRate": 1.56615
      },
      {
        "key": "caitlyn",
        "name": "皮城女警",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Caitlyn.png",
        "tier": 2,
        "rank": 7,
        "winRate": 49.003600000000006,
        "pickRate": 14.9918,
        "banRate": 21.3333
      },
      {
        "key": "ashe",
        "name": "寒冰射手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ashe.png",
        "tier": 2,
        "rank": 8,
        "winRate": 50.643899999999995,
        "pickRate": 6.664580000000001,
        "banRate": 1.85039
      },
      {
        "key": "zeri",
        "name": "祖安花火",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Zeri.png",
        "tier": 2,
        "rank": 9,
        "winRate": 51.1788,
        "pickRate": 4.70425,
        "banRate": 0.870159
      },
      {
        "key": "twitch",
        "name": "瘟疫之源",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Twitch.png",
        "tier": 2,
        "rank": 10,
        "winRate": 50.817299999999996,
        "pickRate": 5.33039,
        "banRate": 7.02243
      },
      {
        "key": "viktor",
        "name": "奥术先驱",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Viktor.png",
        "tier": 2,
        "rank": 11,
        "winRate": 51.4564,
        "pickRate": 2.84616,
        "banRate": 15.2226
      },
      {
        "key": "yasuo",
        "name": "疾风剑豪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Yasuo.png",
        "tier": 2,
        "rank": 12,
        "winRate": 51.564699999999995,
        "pickRate": 2.28539,
        "banRate": 20.7531
      },
      {
        "key": "kogmaw",
        "name": "深渊巨口",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/KogMaw.png",
        "tier": 2,
        "rank": 13,
        "winRate": 52.17889999999999,
        "pickRate": 1.8306900000000002,
        "banRate": 0.38582099999999997
      },
      {
        "key": "sivir",
        "name": "战争女神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Sivir.png",
        "tier": 2,
        "rank": 14,
        "winRate": 50.5922,
        "pickRate": 4.3205599999999995,
        "banRate": 1.54123
      },
      {
        "key": "hwei",
        "name": "异画师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Hwei.png",
        "tier": 3,
        "rank": 15,
        "winRate": 52.41440000000001,
        "pickRate": 1.10351,
        "banRate": 2.55337
      },
      {
        "key": "aurelionsol",
        "name": "铸星龙王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/AurelionSol.png",
        "tier": 3,
        "rank": 16,
        "winRate": 53.12670000000001,
        "pickRate": 0.737755,
        "banRate": 0.571029
      },
      {
        "key": "lucian",
        "name": "圣枪游侠",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Lucian.png",
        "tier": 3,
        "rank": 17,
        "winRate": 48.78,
        "pickRate": 8.68585,
        "banRate": 2.72255
      },
      {
        "key": "katarina",
        "name": "不祥之刃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Katarina.png",
        "tier": 3,
        "rank": 18,
        "winRate": 52.224199999999996,
        "pickRate": 0.8967090000000001,
        "banRate": 11.1885
      },
      {
        "key": "swain",
        "name": "诺克萨斯统领",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Swain.png",
        "tier": 3,
        "rank": 19,
        "winRate": 52.4492,
        "pickRate": 0.878074,
        "banRate": 1.52148
      },
      {
        "key": "missfortune",
        "name": "赏金猎人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/MissFortune.png",
        "tier": 3,
        "rank": 20,
        "winRate": 49.107800000000005,
        "pickRate": 5.65072,
        "banRate": 0.6635
      },
      {
        "key": "aphelios",
        "name": "残月之肃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Aphelios.png",
        "tier": 3,
        "rank": 21,
        "winRate": 49.2724,
        "pickRate": 4.64482,
        "banRate": 1.37399
      },
      {
        "key": "lux",
        "name": "光辉女郎",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Lux.png",
        "tier": 3,
        "rank": 22,
        "winRate": 51.9132,
        "pickRate": 0.9187690000000001,
        "banRate": 3.26829
      },
      {
        "key": "samira",
        "name": "沙漠玫瑰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Samira.png",
        "tier": 3,
        "rank": 23,
        "winRate": 49.5001,
        "pickRate": 3.7885,
        "banRate": 5.05801
      },
      {
        "key": "veigar",
        "name": "邪恶小法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Veigar.png",
        "tier": 3,
        "rank": 24,
        "winRate": 50.85849999999999,
        "pickRate": 1.6954099999999999,
        "banRate": 1.6645699999999999
      },
      {
        "key": "karthus",
        "name": "死亡颂唱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Karthus.png",
        "tier": 3,
        "rank": 25,
        "winRate": 52.7108,
        "pickRate": 0.588975,
        "banRate": 0.7496400000000001
      },
      {
        "key": "velkoz",
        "name": "虚空之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Velkoz.png",
        "tier": 3,
        "rank": 26,
        "winRate": 52.7316,
        "pickRate": 0.5513020000000001,
        "banRate": 1.43597
      },
      {
        "key": "ziggs",
        "name": "爆破鬼才",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ziggs.png",
        "tier": 3,
        "rank": 27,
        "winRate": 50.6169,
        "pickRate": 1.83683,
        "banRate": 1.12946
      },
      {
        "key": "draven",
        "name": "荣耀行刑官",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Draven.png",
        "tier": 3,
        "rank": 28,
        "winRate": 49.3394,
        "pickRate": 3.5605499999999997,
        "banRate": 11.3338
      },
      {
        "key": "seraphine",
        "name": "星籁歌姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Seraphine.png",
        "tier": 3,
        "rank": 29,
        "winRate": 50.862300000000005,
        "pickRate": 1.27919,
        "banRate": 8.8685
      },
      {
        "key": "syndra",
        "name": "暗黑元首",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Syndra.png",
        "tier": 3,
        "rank": 30,
        "winRate": 50.03530000000001,
        "pickRate": 1.85456,
        "banRate": 11.0361
      },
      {
        "key": "xerath",
        "name": "远古巫灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Xerath.png",
        "tier": 3,
        "rank": 31,
        "winRate": 50.8319,
        "pickRate": 1.13826,
        "banRate": 9.920020000000001
      },
      {
        "key": "nilah",
        "name": "不羁之悦",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Nilah.png",
        "tier": 3,
        "rank": 32,
        "winRate": 50.9809,
        "pickRate": 1.09878,
        "banRate": 1.6448999999999998
      },
      {
        "key": "smolder",
        "name": "炽炎雏龙",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Smolder.png",
        "tier": 4,
        "rank": 33,
        "winRate": 48.8205,
        "pickRate": 3.45025,
        "banRate": 1.41402
      },
      {
        "key": "kalista",
        "name": "复仇之矛",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Kalista.png",
        "tier": 4,
        "rank": 34,
        "winRate": 48.647600000000004,
        "pickRate": 3.47825,
        "banRate": 0.9298219999999999
      },
      {
        "key": "brand",
        "name": "复仇焰魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Brand.png",
        "tier": 4,
        "rank": 35,
        "winRate": 51.6719,
        "pickRate": 0.578399,
        "banRate": 2.4712
      },
      {
        "key": "ezreal",
        "name": "探险家",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ezreal.png",
        "tier": 4,
        "rank": 36,
        "winRate": 46.0539,
        "pickRate": 11.6493,
        "banRate": 4.32686
      },
      {
        "key": "vayne",
        "name": "暗夜猎手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Vayne.png",
        "tier": 4,
        "rank": 37,
        "winRate": 47.9736,
        "pickRate": 3.17898,
        "banRate": 6.15392
      },
      {
        "key": "varus",
        "name": "惩戒之箭",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Varus.png",
        "tier": 4,
        "rank": 38,
        "winRate": 48.0939,
        "pickRate": 2.94881,
        "banRate": 0.809691
      },
      {
        "key": "vladimir",
        "name": "猩红收割者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Vladimir.png",
        "tier": 4,
        "rank": 39,
        "winRate": 50.6678,
        "pickRate": 0.610935,
        "banRate": 5.52291
      },
      {
        "key": "corki",
        "name": "英勇投弹手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Corki.png",
        "tier": 5,
        "rank": 40,
        "winRate": 47.4743,
        "pickRate": 1.61724,
        "banRate": 0.253853
      },
      {
        "key": "mel",
        "name": "流光镜影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Mel.png",
        "tier": 5,
        "rank": 41,
        "winRate": 45.7954,
        "pickRate": 1.45899,
        "banRate": 17.0186
      }
    ],
    "support": [
      {
        "key": "thresh",
        "name": "魂锁典狱长",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Thresh.png",
        "tier": 1,
        "rank": 1,
        "winRate": 51.70099999999999,
        "pickRate": 14.4667,
        "banRate": 11.769499999999999
      },
      {
        "key": "leona",
        "name": "曙光女神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Leona.png",
        "tier": 1,
        "rank": 2,
        "winRate": 51.6861,
        "pickRate": 7.8151,
        "banRate": 8.458169999999999
      },
      {
        "key": "braum",
        "name": "弗雷尔卓德之心",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Braum.png",
        "tier": 1,
        "rank": 3,
        "winRate": 52.44069999999999,
        "pickRate": 5.2278199999999995,
        "banRate": 5.39853
      },
      {
        "key": "lulu",
        "name": "仙灵女巫",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Lulu.png",
        "tier": 1,
        "rank": 4,
        "winRate": 50.423700000000004,
        "pickRate": 12.7659,
        "banRate": 10.6868
      },
      {
        "key": "nami",
        "name": "唤潮鲛姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Nami.png",
        "tier": 1,
        "rank": 5,
        "winRate": 50.930299999999995,
        "pickRate": 9.19193,
        "banRate": 1.12019
      },
      {
        "key": "blitzcrank",
        "name": "蒸汽机器人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Blitzcrank.png",
        "tier": 2,
        "rank": 6,
        "winRate": 51.2017,
        "pickRate": 6.8841600000000005,
        "banRate": 12.7853
      },
      {
        "key": "senna",
        "name": "涤魂圣枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Senna.png",
        "tier": 2,
        "rank": 7,
        "winRate": 51.5648,
        "pickRate": 5.6459,
        "banRate": 1.6638300000000001
      },
      {
        "key": "seraphine",
        "name": "星籁歌姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Seraphine.png",
        "tier": 2,
        "rank": 8,
        "winRate": 50.619099999999996,
        "pickRate": 7.87074,
        "banRate": 9.07615
      },
      {
        "key": "janna",
        "name": "风暴之怒",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Janna.png",
        "tier": 2,
        "rank": 9,
        "winRate": 51.478,
        "pickRate": 4.84107,
        "banRate": 0.9022540000000001
      },
      {
        "key": "rell",
        "name": "镕铁少女",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Rell.png",
        "tier": 2,
        "rank": 10,
        "winRate": 51.902899999999995,
        "pickRate": 3.88458,
        "banRate": 1.35776
      },
      {
        "key": "milio",
        "name": "明烛",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Milio.png",
        "tier": 2,
        "rank": 11,
        "winRate": 50.4937,
        "pickRate": 7.28287,
        "banRate": 4.51767
      },
      {
        "key": "alistar",
        "name": "牛头酋长",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Alistar.png",
        "tier": 2,
        "rank": 12,
        "winRate": 51.239900000000006,
        "pickRate": 5.06844,
        "banRate": 1.80934
      },
      {
        "key": "soraka",
        "name": "众星之子",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Soraka.png",
        "tier": 2,
        "rank": 13,
        "winRate": 50.766999999999996,
        "pickRate": 4.9563500000000005,
        "banRate": 2.27335
      },
      {
        "key": "nautilus",
        "name": "深海泰坦",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Nautilus.png",
        "tier": 2,
        "rank": 14,
        "winRate": 49.0618,
        "pickRate": 10.2339,
        "banRate": 14.849
      },
      {
        "key": "zilean",
        "name": "时光守护者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Zilean.png",
        "tier": 2,
        "rank": 15,
        "winRate": 51.1192,
        "pickRate": 3.12991,
        "banRate": 1.9883600000000001
      },
      {
        "key": "rakan",
        "name": "幻翎",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Rakan.png",
        "tier": 2,
        "rank": 16,
        "winRate": 50.850300000000004,
        "pickRate": 3.50771,
        "banRate": 0.339973
      },
      {
        "key": "sona",
        "name": "琴瑟仙女",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Sona.png",
        "tier": 2,
        "rank": 17,
        "winRate": 51.3196,
        "pickRate": 2.78323,
        "banRate": 0.268799
      },
      {
        "key": "morgana",
        "name": "堕落天使",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Morgana.png",
        "tier": 3,
        "rank": 18,
        "winRate": 49.6546,
        "pickRate": 4.45966,
        "banRate": 16.9159
      },
      {
        "key": "pyke",
        "name": "血港鬼影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Pyke.png",
        "tier": 3,
        "rank": 19,
        "winRate": 48.8491,
        "pickRate": 6.30207,
        "banRate": 24.970100000000002
      },
      {
        "key": "lux",
        "name": "光辉女郎",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Lux.png",
        "tier": 3,
        "rank": 20,
        "winRate": 48.9521,
        "pickRate": 6.513380000000001,
        "banRate": 3.4730200000000004
      },
      {
        "key": "karma",
        "name": "天启者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Karma.png",
        "tier": 3,
        "rank": 21,
        "winRate": 48.6621,
        "pickRate": 7.17696,
        "banRate": 3.2137899999999995
      },
      {
        "key": "velkoz",
        "name": "虚空之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Velkoz.png",
        "tier": 3,
        "rank": 22,
        "winRate": 50.5834,
        "pickRate": 2.7019499999999996,
        "banRate": 1.5972799999999998
      },
      {
        "key": "bard",
        "name": "星界游神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Bard.png",
        "tier": 3,
        "rank": 23,
        "winRate": 49.3176,
        "pickRate": 4.8087100000000005,
        "banRate": 2.28656
      },
      {
        "key": "taric",
        "name": "瓦洛兰之盾",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Taric.png",
        "tier": 3,
        "rank": 24,
        "winRate": 51.8689,
        "pickRate": 1.30101,
        "banRate": 0.23586800000000002
      },
      {
        "key": "poppy",
        "name": "圣锤之毅",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Poppy.png",
        "tier": 3,
        "rank": 25,
        "winRate": 50.748000000000005,
        "pickRate": 1.88702,
        "banRate": 4.30639
      },
      {
        "key": "yuumi",
        "name": "魔法猫咪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Yuumi.png",
        "tier": 3,
        "rank": 26,
        "winRate": 48.1914,
        "pickRate": 5.56822,
        "banRate": 7.42251
      },
      {
        "key": "renata",
        "name": "炼金男爵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Renata.png",
        "tier": 3,
        "rank": 27,
        "winRate": 50.474799999999995,
        "pickRate": 1.70353,
        "banRate": 0.231219
      },
      {
        "key": "maokai",
        "name": "扭曲树精",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Maokai.png",
        "tier": 3,
        "rank": 28,
        "winRate": 50.4962,
        "pickRate": 1.67138,
        "banRate": 0.16353299999999998
      },
      {
        "key": "zyra",
        "name": "荆棘之兴",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Zyra.png",
        "tier": 3,
        "rank": 29,
        "winRate": 49.47,
        "pickRate": 2.43933,
        "banRate": 2.30829
      },
      {
        "key": "tahmkench",
        "name": "河流之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/TahmKench.png",
        "tier": 3,
        "rank": 30,
        "winRate": 49.5549,
        "pickRate": 2.22226,
        "banRate": 1.9468599999999998
      },
      {
        "key": "xerath",
        "name": "远古巫灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Xerath.png",
        "tier": 3,
        "rank": 31,
        "winRate": 48.6168,
        "pickRate": 2.91593,
        "banRate": 10.113999999999999
      },
      {
        "key": "amumu",
        "name": "殇之木乃伊",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Amumu.png",
        "tier": 3,
        "rank": 32,
        "winRate": 51.8594,
        "pickRate": 0.603935,
        "banRate": 0.801606
      },
      {
        "key": "pantheon",
        "name": "不屈之枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Pantheon.png",
        "tier": 3,
        "rank": 33,
        "winRate": 48.1567,
        "pickRate": 3.51564,
        "banRate": 2.4004600000000003
      },
      {
        "key": "brand",
        "name": "复仇焰魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Brand.png",
        "tier": 3,
        "rank": 34,
        "winRate": 48.9244,
        "pickRate": 2.3802,
        "banRate": 2.85973
      },
      {
        "key": "swain",
        "name": "诺克萨斯统领",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Swain.png",
        "tier": 3,
        "rank": 35,
        "winRate": 48.2771,
        "pickRate": 2.65497,
        "banRate": 1.6282299999999998
      },
      {
        "key": "elise",
        "name": "蜘蛛女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Elise.png",
        "tier": 4,
        "rank": 36,
        "winRate": 50.5359,
        "pickRate": 0.634431,
        "banRate": 0.925489
      },
      {
        "key": "sylas",
        "name": "解脱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Sylas.png",
        "tier": 4,
        "rank": 37,
        "winRate": 48.4118,
        "pickRate": 1.30389,
        "banRate": 17.832
      },
      {
        "key": "galio",
        "name": "正义巨像",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Galio.png",
        "tier": 4,
        "rank": 38,
        "winRate": 49.8089,
        "pickRate": 0.8085439999999999,
        "banRate": 1.57022
      },
      {
        "key": "hwei",
        "name": "异画师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Hwei.png",
        "tier": 4,
        "rank": 39,
        "winRate": 49.9844,
        "pickRate": 0.659157,
        "banRate": 2.49104
      },
      {
        "key": "neeko",
        "name": "万花通灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Neeko.png",
        "tier": 4,
        "rank": 40,
        "winRate": 48.106,
        "pickRate": 1.55847,
        "banRate": 0.632568
      },
      {
        "key": "shen",
        "name": "暮光之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Shen.png",
        "tier": 4,
        "rank": 41,
        "winRate": 48.742200000000004,
        "pickRate": 1.07713,
        "banRate": 0.697053
      },
      {
        "key": "leblanc",
        "name": "诡术妖姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Leblanc.png",
        "tier": 4,
        "rank": 42,
        "winRate": 48.4888,
        "pickRate": 0.862426,
        "banRate": 15.271
      },
      {
        "key": "fiddlesticks",
        "name": "远古恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Fiddlesticks.png",
        "tier": 4,
        "rank": 43,
        "winRate": 49.8977,
        "pickRate": 0.5035890000000001,
        "banRate": 1.19673
      },
      {
        "key": "shaco",
        "name": "恶魔小丑",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Shaco.png",
        "tier": 4,
        "rank": 44,
        "winRate": 47.5777,
        "pickRate": 1.2589700000000001,
        "banRate": 16.464100000000002
      },
      {
        "key": "zoe",
        "name": "暮光星灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Zoe.png",
        "tier": 4,
        "rank": 45,
        "winRate": 48.0424,
        "pickRate": 0.9131149999999999,
        "banRate": 3.17742
      },
      {
        "key": "teemo",
        "name": "迅捷斥候",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Teemo.png",
        "tier": 4,
        "rank": 46,
        "winRate": 48.208800000000004,
        "pickRate": 0.540678,
        "banRate": 5.6403799999999995
      },
      {
        "key": "camille",
        "name": "青钢影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Camille.png",
        "tier": 4,
        "rank": 47,
        "winRate": 45.364599999999996,
        "pickRate": 2.12366,
        "banRate": 4.03048
      },
      {
        "key": "ashe",
        "name": "寒冰射手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ashe.png",
        "tier": 5,
        "rank": 48,
        "winRate": 44.3581,
        "pickRate": 0.742299,
        "banRate": 1.73143
      },
      {
        "key": "veigar",
        "name": "邪恶小法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Veigar.png",
        "tier": 5,
        "rank": 49,
        "winRate": 44.6488,
        "pickRate": 0.560253,
        "banRate": 1.51555
      },
      {
        "key": "mel",
        "name": "流光镜影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Mel.png",
        "tier": 5,
        "rank": 50,
        "winRate": 41.6715,
        "pickRate": 0.7075790000000001,
        "banRate": 16.278000000000002
      }
    ]
  }
};
