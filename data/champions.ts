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
  "updatedAt": "2026-09-10T07:02:13.658Z",
  "positions": {
    "top": [
      {
        "key": "nasus",
        "name": "沙漠死神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Nasus.png",
        "tier": 1,
        "rank": 1,
        "winRate": 51.12799999999999,
        "pickRate": 8.25344,
        "banRate": 45.3185
      },
      {
        "key": "malphite",
        "name": "熔岩巨兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Malphite.png",
        "tier": 1,
        "rank": 2,
        "winRate": 51.3752,
        "pickRate": 6.71958,
        "banRate": 15.0636
      },
      {
        "key": "garen",
        "name": "德玛西亚之力",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Garen.png",
        "tier": 1,
        "rank": 3,
        "winRate": 51.127100000000006,
        "pickRate": 7.051830000000001,
        "banRate": 5.13599
      },
      {
        "key": "gangplank",
        "name": "海洋之灾",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Gangplank.png",
        "tier": 2,
        "rank": 4,
        "winRate": 50.819199999999995,
        "pickRate": 5.46562,
        "banRate": 7.44353
      },
      {
        "key": "yone",
        "name": "封魔剑魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Yone.png",
        "tier": 2,
        "rank": 5,
        "winRate": 49.9147,
        "pickRate": 8.1205,
        "banRate": 9.53857
      },
      {
        "key": "teemo",
        "name": "迅捷斥候",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Teemo.png",
        "tier": 2,
        "rank": 6,
        "winRate": 51.2362,
        "pickRate": 4.13117,
        "banRate": 6.347650000000001
      },
      {
        "key": "ornn",
        "name": "山隐之焰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ornn.png",
        "tier": 2,
        "rank": 7,
        "winRate": 51.5995,
        "pickRate": 3.34876,
        "banRate": 0.45813800000000005
      },
      {
        "key": "sett",
        "name": "腕豪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sett.png",
        "tier": 2,
        "rank": 8,
        "winRate": 50.507000000000005,
        "pickRate": 5.60763,
        "banRate": 2.3424199999999997
      },
      {
        "key": "camille",
        "name": "青钢影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Camille.png",
        "tier": 2,
        "rank": 9,
        "winRate": 50.8555,
        "pickRate": 4.348529999999999,
        "banRate": 5.52599
      },
      {
        "key": "darius",
        "name": "诺克萨斯之手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Darius.png",
        "tier": 2,
        "rank": 10,
        "winRate": 49.8654,
        "pickRate": 7.1551100000000005,
        "banRate": 12.8617
      },
      {
        "key": "singed",
        "name": "炼金术士",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Singed.png",
        "tier": 2,
        "rank": 11,
        "winRate": 51.6923,
        "pickRate": 2.6155999999999997,
        "banRate": 0.891448
      },
      {
        "key": "shen",
        "name": "暮光之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Shen.png",
        "tier": 2,
        "rank": 12,
        "winRate": 51.1163,
        "pickRate": 3.5906800000000003,
        "banRate": 0.779208
      },
      {
        "key": "irelia",
        "name": "刀锋舞者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Irelia.png",
        "tier": 2,
        "rank": 13,
        "winRate": 50.312400000000004,
        "pickRate": 4.45856,
        "banRate": 12.8498
      },
      {
        "key": "renekton",
        "name": "荒漠屠夫",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Renekton.png",
        "tier": 3,
        "rank": 14,
        "winRate": 49.7842,
        "pickRate": 5.51997,
        "banRate": 3.79298
      },
      {
        "key": "jax",
        "name": "武器大师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Jax.png",
        "tier": 3,
        "rank": 15,
        "winRate": 49.396,
        "pickRate": 5.8957299999999995,
        "banRate": 10.017199999999999
      },
      {
        "key": "olaf",
        "name": "狂战士",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Olaf.png",
        "tier": 3,
        "rank": 16,
        "winRate": 50.47239999999999,
        "pickRate": 3.3143899999999995,
        "banRate": 3.6203899999999996
      },
      {
        "key": "aatrox",
        "name": "暗裔剑魔",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Aatrox.png",
        "tier": 3,
        "rank": 17,
        "winRate": 49.3762,
        "pickRate": 5.9032599999999995,
        "banRate": 7.0899
      },
      {
        "key": "chogath",
        "name": "虚空恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Chogath.png",
        "tier": 3,
        "rank": 18,
        "winRate": 50.5988,
        "pickRate": 2.9850499999999998,
        "banRate": 1.41719
      },
      {
        "key": "urgot",
        "name": "无畏战车",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Urgot.png",
        "tier": 3,
        "rank": 19,
        "winRate": 50.991699999999994,
        "pickRate": 2.41567,
        "banRate": 0.795154
      },
      {
        "key": "mordekaiser",
        "name": "铁铠冥魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Mordekaiser.png",
        "tier": 3,
        "rank": 20,
        "winRate": 49.5616,
        "pickRate": 5.0925199999999995,
        "banRate": 8.26901
      },
      {
        "key": "illaoi",
        "name": "海兽祭司",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Illaoi.png",
        "tier": 3,
        "rank": 21,
        "winRate": 50.7085,
        "pickRate": 2.72755,
        "banRate": 4.75881
      },
      {
        "key": "tryndamere",
        "name": "蛮族之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Tryndamere.png",
        "tier": 3,
        "rank": 22,
        "winRate": 50.3911,
        "pickRate": 3.17085,
        "banRate": 2.49444
      },
      {
        "key": "kayle",
        "name": "正义天使",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kayle.png",
        "tier": 3,
        "rank": 23,
        "winRate": 51.0035,
        "pickRate": 2.19377,
        "banRate": 1.37184
      },
      {
        "key": "warwick",
        "name": "祖安怒兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Warwick.png",
        "tier": 3,
        "rank": 24,
        "winRate": 51.7575,
        "pickRate": 1.3709,
        "banRate": 1.62344
      },
      {
        "key": "pantheon",
        "name": "不屈之枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Pantheon.png",
        "tier": 3,
        "rank": 25,
        "winRate": 50.431099999999994,
        "pickRate": 2.83103,
        "banRate": 2.41037
      },
      {
        "key": "kled",
        "name": "暴怒骑士",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kled.png",
        "tier": 3,
        "rank": 26,
        "winRate": 51.198600000000006,
        "pickRate": 1.7874700000000001,
        "banRate": 0.931279
      },
      {
        "key": "drmundo",
        "name": "祖安狂人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/DrMundo.png",
        "tier": 3,
        "rank": 27,
        "winRate": 49.8664,
        "pickRate": 3.6121399999999997,
        "banRate": 2.68269
      },
      {
        "key": "gwen",
        "name": "灵罗娃娃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Gwen.png",
        "tier": 4,
        "rank": 28,
        "winRate": 50.22370000000001,
        "pickRate": 2.77209,
        "banRate": 4.06462
      },
      {
        "key": "kennen",
        "name": "狂暴之心",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kennen.png",
        "tier": 4,
        "rank": 29,
        "winRate": 50.72560000000001,
        "pickRate": 2.06855,
        "banRate": 1.1956
      },
      {
        "key": "fiora",
        "name": "无双剑姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Fiora.png",
        "tier": 4,
        "rank": 30,
        "winRate": 49.680800000000005,
        "pickRate": 3.6020200000000004,
        "banRate": 4.49354
      },
      {
        "key": "quinn",
        "name": "德玛西亚之翼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Quinn.png",
        "tier": 4,
        "rank": 31,
        "winRate": 52.1504,
        "pickRate": 0.877726,
        "banRate": 0.928908
      },
      {
        "key": "yasuo",
        "name": "疾风剑豪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Yasuo.png",
        "tier": 4,
        "rank": 32,
        "winRate": 49.221900000000005,
        "pickRate": 3.4748,
        "banRate": 20.0212
      },
      {
        "key": "gragas",
        "name": "酒桶",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Gragas.png",
        "tier": 4,
        "rank": 33,
        "winRate": 50.191900000000004,
        "pickRate": 2.28053,
        "banRate": 0.633334
      },
      {
        "key": "ambessa",
        "name": "铁血狼母",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ambessa.png",
        "tier": 4,
        "rank": 34,
        "winRate": 49.0186,
        "pickRate": 4.02452,
        "banRate": 4.89018
      },
      {
        "key": "zaahen",
        "name": "不落魔锋",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zaahen.png",
        "tier": 4,
        "rank": 35,
        "winRate": 49.733,
        "pickRate": 2.60912,
        "banRate": 1.08705
      },
      {
        "key": "gnar",
        "name": "迷失之牙",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Gnar.png",
        "tier": 4,
        "rank": 36,
        "winRate": 48.9832,
        "pickRate": 3.595,
        "banRate": 1.15892
      },
      {
        "key": "yorick",
        "name": "牧魂人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Yorick.png",
        "tier": 4,
        "rank": 37,
        "winRate": 49.1435,
        "pickRate": 3.12215,
        "banRate": 5.9710600000000005
      },
      {
        "key": "akali",
        "name": "离群之刺",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Akali.png",
        "tier": 4,
        "rank": 38,
        "winRate": 49.1042,
        "pickRate": 2.59531,
        "banRate": 15.8672
      },
      {
        "key": "sion",
        "name": "亡灵战神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sion.png",
        "tier": 4,
        "rank": 39,
        "winRate": 49.2491,
        "pickRate": 2.83778,
        "banRate": 0.502707
      },
      {
        "key": "riven",
        "name": "放逐之刃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Riven.png",
        "tier": 4,
        "rank": 40,
        "winRate": 49.594300000000004,
        "pickRate": 2.25839,
        "banRate": 1.8001699999999998
      },
      {
        "key": "anivia",
        "name": "冰晶凤凰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Anivia.png",
        "tier": 4,
        "rank": 41,
        "winRate": 51.451800000000006,
        "pickRate": 0.748704,
        "banRate": 2.45832
      },
      {
        "key": "monkeyking",
        "name": "齐天大圣",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/MonkeyKing.png",
        "tier": 4,
        "rank": 42,
        "winRate": 50.740700000000004,
        "pickRate": 0.964133,
        "banRate": 3.16626
      },
      {
        "key": "jayce",
        "name": "未来守护者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Jayce.png",
        "tier": 4,
        "rank": 43,
        "winRate": 47.5781,
        "pickRate": 5.56717,
        "banRate": 5.982
      },
      {
        "key": "zac",
        "name": "生化魔人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zac.png",
        "tier": 4,
        "rank": 44,
        "winRate": 51.75189999999999,
        "pickRate": 0.521895,
        "banRate": 1.10788
      },
      {
        "key": "heimerdinger",
        "name": "大发明家",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Heimerdinger.png",
        "tier": 4,
        "rank": 45,
        "winRate": 50.2267,
        "pickRate": 1.23752,
        "banRate": 1.77877
      },
      {
        "key": "volibear",
        "name": "不灭狂雷",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Volibear.png",
        "tier": 4,
        "rank": 46,
        "winRate": 48.4585,
        "pickRate": 3.16669,
        "banRate": 1.20267
      },
      {
        "key": "tahmkench",
        "name": "河流之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/TahmKench.png",
        "tier": 4,
        "rank": 47,
        "winRate": 49.553999999999995,
        "pickRate": 1.6540599999999999,
        "banRate": 1.9375099999999998
      },
      {
        "key": "cassiopeia",
        "name": "魔蛇之拥",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Cassiopeia.png",
        "tier": 5,
        "rank": 48,
        "winRate": 51.047,
        "pickRate": 0.56969,
        "banRate": 1.87113
      },
      {
        "key": "trundle",
        "name": "巨魔之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Trundle.png",
        "tier": 5,
        "rank": 49,
        "winRate": 48.928399999999996,
        "pickRate": 1.81082,
        "banRate": 0.435961
      },
      {
        "key": "vladimir",
        "name": "猩红收割者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Vladimir.png",
        "tier": 5,
        "rank": 50,
        "winRate": 49.4081,
        "pickRate": 1.26628,
        "banRate": 5.75054
      },
      {
        "key": "poppy",
        "name": "圣锤之毅",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Poppy.png",
        "tier": 5,
        "rank": 51,
        "winRate": 49.877,
        "pickRate": 0.9731190000000001,
        "banRate": 4.73106
      },
      {
        "key": "ksante",
        "name": "纳祖芒荣耀",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/KSante.png",
        "tier": 5,
        "rank": 52,
        "winRate": 47.0157,
        "pickRate": 3.74544,
        "banRate": 2.4989399999999997
      },
      {
        "key": "rumble",
        "name": "机械公敌",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Rumble.png",
        "tier": 5,
        "rank": 53,
        "winRate": 48.427,
        "pickRate": 1.65147,
        "banRate": 0.69308
      },
      {
        "key": "swain",
        "name": "诺克萨斯统领",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Swain.png",
        "tier": 5,
        "rank": 54,
        "winRate": 49.9469,
        "pickRate": 0.554033,
        "banRate": 1.5786399999999998
      },
      {
        "key": "malzahar",
        "name": "虚空先知",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Malzahar.png",
        "tier": 5,
        "rank": 55,
        "winRate": 49.858599999999996,
        "pickRate": 0.513223,
        "banRate": 8.820540000000001
      },
      {
        "key": "vayne",
        "name": "暗夜猎手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Vayne.png",
        "tier": 5,
        "rank": 56,
        "winRate": 46.8694,
        "pickRate": 2.02809,
        "banRate": 7.1036
      },
      {
        "key": "ryze",
        "name": "符文法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ryze.png",
        "tier": 5,
        "rank": 57,
        "winRate": 48.5742,
        "pickRate": 0.7389330000000001,
        "banRate": 0.487604
      },
      {
        "key": "varus",
        "name": "惩戒之箭",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Varus.png",
        "tier": 5,
        "rank": 58,
        "winRate": 47.4037,
        "pickRate": 0.779115,
        "banRate": 0.6829609999999999
      },
      {
        "key": "udyr",
        "name": "兽灵行者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Udyr.png",
        "tier": 5,
        "rank": 59,
        "winRate": 47.700900000000004,
        "pickRate": 0.536767,
        "banRate": 1.06948
      }
    ],
    "jungle": [
      {
        "key": "monkeyking",
        "name": "齐天大圣",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/MonkeyKing.png",
        "tier": 1,
        "rank": 1,
        "winRate": 51.787000000000006,
        "pickRate": 6.16031,
        "banRate": 3.24054
      },
      {
        "key": "sylas",
        "name": "解脱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sylas.png",
        "tier": 1,
        "rank": 2,
        "winRate": 50.5342,
        "pickRate": 7.71251,
        "banRate": 17.5556
      },
      {
        "key": "talon",
        "name": "刀锋之影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Talon.png",
        "tier": 1,
        "rank": 3,
        "winRate": 50.9514,
        "pickRate": 6.31736,
        "banRate": 9.74597
      },
      {
        "key": "rammus",
        "name": "披甲龙龟",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Rammus.png",
        "tier": 1,
        "rank": 4,
        "winRate": 52.654999999999994,
        "pickRate": 2.02698,
        "banRate": 3.69013
      },
      {
        "key": "nocturne",
        "name": "永恒梦魇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Nocturne.png",
        "tier": 1,
        "rank": 5,
        "winRate": 50.84760000000001,
        "pickRate": 6.18422,
        "banRate": 13.119900000000001
      },
      {
        "key": "shyvana",
        "name": "龙血武姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Shyvana.png",
        "tier": 1,
        "rank": 6,
        "winRate": 51.021499999999996,
        "pickRate": 5.33899,
        "banRate": 5.29228
      },
      {
        "key": "leesin",
        "name": "盲僧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/LeeSin.png",
        "tier": 2,
        "rank": 7,
        "winRate": 49.2431,
        "pickRate": 13.509699999999999,
        "banRate": 16.9394
      },
      {
        "key": "briar",
        "name": "狂厄蔷薇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Briar.png",
        "tier": 2,
        "rank": 8,
        "winRate": 50.964,
        "pickRate": 4.60101,
        "banRate": 8.7788
      },
      {
        "key": "chogath",
        "name": "虚空恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Chogath.png",
        "tier": 2,
        "rank": 9,
        "winRate": 51.504099999999994,
        "pickRate": 3.1922699999999997,
        "banRate": 1.41235
      },
      {
        "key": "warwick",
        "name": "祖安怒兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Warwick.png",
        "tier": 2,
        "rank": 10,
        "winRate": 51.4424,
        "pickRate": 3.1344,
        "banRate": 1.64787
      },
      {
        "key": "kayn",
        "name": "影流之镰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kayn.png",
        "tier": 2,
        "rank": 11,
        "winRate": 50.0293,
        "pickRate": 6.909700000000001,
        "banRate": 5.2296700000000005
      },
      {
        "key": "shaco",
        "name": "恶魔小丑",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Shaco.png",
        "tier": 2,
        "rank": 12,
        "winRate": 50.521300000000004,
        "pickRate": 4.5227,
        "banRate": 16.8099
      },
      {
        "key": "graves",
        "name": "法外狂徒",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Graves.png",
        "tier": 2,
        "rank": 13,
        "winRate": 49.284,
        "pickRate": 10.188899999999999,
        "banRate": 14.5876
      },
      {
        "key": "fiddlesticks",
        "name": "远古恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Fiddlesticks.png",
        "tier": 2,
        "rank": 14,
        "winRate": 51.4827,
        "pickRate": 2.38999,
        "banRate": 1.3819299999999999
      },
      {
        "key": "evelynn",
        "name": "痛苦之拥",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Evelynn.png",
        "tier": 3,
        "rank": 15,
        "winRate": 51.41139999999999,
        "pickRate": 2.38528,
        "banRate": 2.02565
      },
      {
        "key": "udyr",
        "name": "兽灵行者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Udyr.png",
        "tier": 3,
        "rank": 16,
        "winRate": 51.384600000000006,
        "pickRate": 2.22321,
        "banRate": 1.10636
      },
      {
        "key": "lillia",
        "name": "含羞蓓蕾",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Lillia.png",
        "tier": 3,
        "rank": 17,
        "winRate": 50.808,
        "pickRate": 3.15913,
        "banRate": 1.85235
      },
      {
        "key": "nidalee",
        "name": "狂野女猎手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Nidalee.png",
        "tier": 3,
        "rank": 18,
        "winRate": 50.791,
        "pickRate": 3.12606,
        "banRate": 2.10345
      },
      {
        "key": "reksai",
        "name": "虚空遁地兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/RekSai.png",
        "tier": 3,
        "rank": 19,
        "winRate": 51.885099999999994,
        "pickRate": 1.48733,
        "banRate": 0.680094
      },
      {
        "key": "ekko",
        "name": "时间刺客",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ekko.png",
        "tier": 3,
        "rank": 20,
        "winRate": 50.287800000000004,
        "pickRate": 4.03866,
        "banRate": 1.55042
      },
      {
        "key": "ivern",
        "name": "翠神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ivern.png",
        "tier": 3,
        "rank": 21,
        "winRate": 52.04299999999999,
        "pickRate": 1.2761500000000001,
        "banRate": 0.405606
      },
      {
        "key": "sejuani",
        "name": "北地之怒",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sejuani.png",
        "tier": 3,
        "rank": 22,
        "winRate": 51.3098,
        "pickRate": 2.00385,
        "banRate": 0.18505
      },
      {
        "key": "zac",
        "name": "生化魔人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zac.png",
        "tier": 3,
        "rank": 23,
        "winRate": 50.6606,
        "pickRate": 3.0122,
        "banRate": 1.18024
      },
      {
        "key": "jarvaniv",
        "name": "德玛西亚皇子",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/JarvanIV.png",
        "tier": 3,
        "rank": 24,
        "winRate": 49.4766,
        "pickRate": 5.88515,
        "banRate": 1.21587
      },
      {
        "key": "belveth",
        "name": "虚空女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Belveth.png",
        "tier": 3,
        "rank": 25,
        "winRate": 50.3313,
        "pickRate": 3.22657,
        "banRate": 6.43715
      },
      {
        "key": "hecarim",
        "name": "战争之影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Hecarim.png",
        "tier": 3,
        "rank": 26,
        "winRate": 49.4537,
        "pickRate": 5.4172199999999995,
        "banRate": 6.352679999999999
      },
      {
        "key": "zyra",
        "name": "荆棘之兴",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zyra.png",
        "tier": 3,
        "rank": 27,
        "winRate": 51.48160000000001,
        "pickRate": 1.37463,
        "banRate": 2.33707
      },
      {
        "key": "khazix",
        "name": "虚空掠夺者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Khazix.png",
        "tier": 3,
        "rank": 28,
        "winRate": 49.3412,
        "pickRate": 5.55048,
        "banRate": 3.15461
      },
      {
        "key": "viego",
        "name": "破败之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Viego.png",
        "tier": 3,
        "rank": 29,
        "winRate": 48.3478,
        "pickRate": 8.81245,
        "banRate": 7.634779999999999
      },
      {
        "key": "nunu",
        "name": "雪原双子",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Nunu.png",
        "tier": 3,
        "rank": 30,
        "winRate": 50.6917,
        "pickRate": 1.9647499999999998,
        "banRate": 0.449469
      },
      {
        "key": "vi",
        "name": "皮城执法官",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Vi.png",
        "tier": 3,
        "rank": 31,
        "winRate": 49.1796,
        "pickRate": 5.18587,
        "banRate": 1.8746200000000002
      },
      {
        "key": "masteryi",
        "name": "无极剑圣",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/MasterYi.png",
        "tier": 3,
        "rank": 32,
        "winRate": 49.0685,
        "pickRate": 5.0523,
        "banRate": 11.3469
      },
      {
        "key": "naafiri",
        "name": "百裂冥犬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Naafiri.png",
        "tier": 3,
        "rank": 33,
        "winRate": 49.4214,
        "pickRate": 3.7790700000000004,
        "banRate": 13.4759
      },
      {
        "key": "elise",
        "name": "蜘蛛女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Elise.png",
        "tier": 4,
        "rank": 34,
        "winRate": 50.2757,
        "pickRate": 1.89256,
        "banRate": 1.00715
      },
      {
        "key": "amumu",
        "name": "殇之木乃伊",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Amumu.png",
        "tier": 4,
        "rank": 35,
        "winRate": 50.1748,
        "pickRate": 1.98306,
        "banRate": 0.882923
      },
      {
        "key": "qiyana",
        "name": "元素女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Qiyana.png",
        "tier": 4,
        "rank": 36,
        "winRate": 48.6301,
        "pickRate": 4.91632,
        "banRate": 6.64385
      },
      {
        "key": "taliyah",
        "name": "岩雀",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Taliyah.png",
        "tier": 4,
        "rank": 37,
        "winRate": 51.2208,
        "pickRate": 0.8883719999999999,
        "banRate": 0.355293
      },
      {
        "key": "trundle",
        "name": "巨魔之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Trundle.png",
        "tier": 4,
        "rank": 38,
        "winRate": 50.731,
        "pickRate": 1.04679,
        "banRate": 0.429835
      },
      {
        "key": "quinn",
        "name": "德玛西亚之翼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Quinn.png",
        "tier": 4,
        "rank": 39,
        "winRate": 50.202999999999996,
        "pickRate": 1.33332,
        "banRate": 0.9355600000000001
      },
      {
        "key": "skarner",
        "name": "上古领主",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Skarner.png",
        "tier": 4,
        "rank": 40,
        "winRate": 50.3892,
        "pickRate": 1.19052,
        "banRate": 0.244161
      },
      {
        "key": "aatrox",
        "name": "暗裔剑魔",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Aatrox.png",
        "tier": 4,
        "rank": 41,
        "winRate": 50.3151,
        "pickRate": 1.1247099999999999,
        "banRate": 6.96815
      },
      {
        "key": "diana",
        "name": "皎月女神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Diana.png",
        "tier": 4,
        "rank": 42,
        "winRate": 48.9247,
        "pickRate": 2.79218,
        "banRate": 3.1676200000000003
      },
      {
        "key": "darius",
        "name": "诺克萨斯之手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Darius.png",
        "tier": 4,
        "rank": 43,
        "winRate": 50.6868,
        "pickRate": 0.762591,
        "banRate": 12.5018
      },
      {
        "key": "gragas",
        "name": "酒桶",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Gragas.png",
        "tier": 4,
        "rank": 44,
        "winRate": 50.769,
        "pickRate": 0.7823729999999999,
        "banRate": 0.615165
      },
      {
        "key": "rengar",
        "name": "傲之追猎者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Rengar.png",
        "tier": 4,
        "rank": 45,
        "winRate": 48.3132,
        "pickRate": 3.7815300000000005,
        "banRate": 6.59208
      },
      {
        "key": "maokai",
        "name": "扭曲树精",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Maokai.png",
        "tier": 4,
        "rank": 46,
        "winRate": 51.0265,
        "pickRate": 0.660058,
        "banRate": 0.15945700000000002
      },
      {
        "key": "xinzhao",
        "name": "德邦总管",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/XinZhao.png",
        "tier": 4,
        "rank": 47,
        "winRate": 48.9523,
        "pickRate": 2.53669,
        "banRate": 0.642104
      },
      {
        "key": "kindred",
        "name": "永猎双子",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kindred.png",
        "tier": 4,
        "rank": 48,
        "winRate": 49.1433,
        "pickRate": 2.18403,
        "banRate": 1.62779
      },
      {
        "key": "gwen",
        "name": "灵罗娃娃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Gwen.png",
        "tier": 4,
        "rank": 49,
        "winRate": 50.0549,
        "pickRate": 1.06427,
        "banRate": 4.0275
      },
      {
        "key": "jax",
        "name": "武器大师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Jax.png",
        "tier": 4,
        "rank": 50,
        "winRate": 49.026399999999995,
        "pickRate": 1.78192,
        "banRate": 9.966890000000001
      },
      {
        "key": "karthus",
        "name": "死亡颂唱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Karthus.png",
        "tier": 4,
        "rank": 51,
        "winRate": 49.2906,
        "pickRate": 1.37775,
        "banRate": 0.8679370000000001
      },
      {
        "key": "fizz",
        "name": "潮汐海灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Fizz.png",
        "tier": 4,
        "rank": 52,
        "winRate": 49.842,
        "pickRate": 0.776298,
        "banRate": 6.95375
      },
      {
        "key": "zed",
        "name": "影流之主",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zed.png",
        "tier": 5,
        "rank": 53,
        "winRate": 47.2901,
        "pickRate": 2.63688,
        "banRate": 24.309
      },
      {
        "key": "jayce",
        "name": "未来守护者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Jayce.png",
        "tier": 5,
        "rank": 54,
        "winRate": 48.0841,
        "pickRate": 1.8353899999999999,
        "banRate": 5.937329999999999
      },
      {
        "key": "poppy",
        "name": "圣锤之毅",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Poppy.png",
        "tier": 5,
        "rank": 55,
        "winRate": 50.0192,
        "pickRate": 0.507836,
        "banRate": 4.62007
      },
      {
        "key": "malphite",
        "name": "熔岩巨兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Malphite.png",
        "tier": 5,
        "rank": 56,
        "winRate": 49.0835,
        "pickRate": 0.735059,
        "banRate": 14.635100000000001
      },
      {
        "key": "ambessa",
        "name": "铁血狼母",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ambessa.png",
        "tier": 5,
        "rank": 57,
        "winRate": 48.653800000000004,
        "pickRate": 0.966138,
        "banRate": 4.81349
      },
      {
        "key": "volibear",
        "name": "不灭狂雷",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Volibear.png",
        "tier": 5,
        "rank": 58,
        "winRate": 48.478300000000004,
        "pickRate": 1.05816,
        "banRate": 1.18001
      },
      {
        "key": "olaf",
        "name": "狂战士",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Olaf.png",
        "tier": 5,
        "rank": 59,
        "winRate": 49.5021,
        "pickRate": 0.520063,
        "banRate": 3.4507700000000003
      },
      {
        "key": "teemo",
        "name": "迅捷斥候",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Teemo.png",
        "tier": 5,
        "rank": 60,
        "winRate": 48.7301,
        "pickRate": 0.63019,
        "banRate": 6.0216199999999995
      },
      {
        "key": "pantheon",
        "name": "不屈之枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Pantheon.png",
        "tier": 5,
        "rank": 61,
        "winRate": 47.1637,
        "pickRate": 0.9439019999999999,
        "banRate": 2.34492
      },
      {
        "key": "locke",
        "name": "灰烬驱魔人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Locke.png",
        "tier": 5,
        "rank": 62,
        "winRate": 45.2238,
        "pickRate": 0.771703,
        "banRate": 31.699500000000004
      }
    ],
    "mid": [
      {
        "key": "ahri",
        "name": "九尾妖狐",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ahri.png",
        "tier": 1,
        "rank": 1,
        "winRate": 50.913799999999995,
        "pickRate": 9.422329999999999,
        "banRate": 3.09222
      },
      {
        "key": "viktor",
        "name": "奥术先驱",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Viktor.png",
        "tier": 1,
        "rank": 2,
        "winRate": 50.4112,
        "pickRate": 9.37394,
        "banRate": 16.1513
      },
      {
        "key": "fizz",
        "name": "潮汐海灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Fizz.png",
        "tier": 1,
        "rank": 3,
        "winRate": 51.346199999999996,
        "pickRate": 5.26113,
        "banRate": 7.3087100000000005
      },
      {
        "key": "syndra",
        "name": "暗黑元首",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Syndra.png",
        "tier": 1,
        "rank": 4,
        "winRate": 50.44689999999999,
        "pickRate": 8.51945,
        "banRate": 12.8008
      },
      {
        "key": "zed",
        "name": "影流之主",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zed.png",
        "tier": 1,
        "rank": 5,
        "winRate": 50.0784,
        "pickRate": 8.84691,
        "banRate": 24.4403
      },
      {
        "key": "twistedfate",
        "name": "卡牌大师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/TwistedFate.png",
        "tier": 1,
        "rank": 6,
        "winRate": 51.2776,
        "pickRate": 5.0157300000000005,
        "banRate": 1.05822
      },
      {
        "key": "katarina",
        "name": "不祥之刃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Katarina.png",
        "tier": 1,
        "rank": 7,
        "winRate": 50.412400000000005,
        "pickRate": 7.0791900000000005,
        "banRate": 11.953999999999999
      },
      {
        "key": "vex",
        "name": "愁云使者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Vex.png",
        "tier": 1,
        "rank": 8,
        "winRate": 51.922599999999996,
        "pickRate": 2.96102,
        "banRate": 3.63263
      },
      {
        "key": "lissandra",
        "name": "冰霜女巫",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Lissandra.png",
        "tier": 1,
        "rank": 9,
        "winRate": 50.8498,
        "pickRate": 5.53013,
        "banRate": 3.78089
      },
      {
        "key": "leblanc",
        "name": "诡术妖姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Leblanc.png",
        "tier": 1,
        "rank": 10,
        "winRate": 50.600199999999994,
        "pickRate": 5.5435,
        "banRate": 15.7142
      },
      {
        "key": "vladimir",
        "name": "猩红收割者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Vladimir.png",
        "tier": 1,
        "rank": 11,
        "winRate": 51.1575,
        "pickRate": 4.01978,
        "banRate": 5.82304
      },
      {
        "key": "nasus",
        "name": "沙漠死神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Nasus.png",
        "tier": 1,
        "rank": 12,
        "winRate": 51.2328,
        "pickRate": 2.11893,
        "banRate": 45.064
      },
      {
        "key": "hwei",
        "name": "异画师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Hwei.png",
        "tier": 1,
        "rank": 13,
        "winRate": 51.09629999999999,
        "pickRate": 4.0688,
        "banRate": 3.0317
      },
      {
        "key": "xerath",
        "name": "远古巫灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Xerath.png",
        "tier": 1,
        "rank": 14,
        "winRate": 50.784600000000005,
        "pickRate": 4.4117299999999995,
        "banRate": 12.3818
      },
      {
        "key": "locke",
        "name": "灰烬驱魔人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Locke.png",
        "tier": 1,
        "rank": 15,
        "winRate": 49.7657,
        "pickRate": 6.552860000000001,
        "banRate": 32.476699999999994
      },
      {
        "key": "lux",
        "name": "光辉女郎",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Lux.png",
        "tier": 1,
        "rank": 16,
        "winRate": 50.8281,
        "pickRate": 3.93854,
        "banRate": 3.46372
      },
      {
        "key": "yasuo",
        "name": "疾风剑豪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Yasuo.png",
        "tier": 2,
        "rank": 17,
        "winRate": 48.958800000000004,
        "pickRate": 8.75132,
        "banRate": 20.0763
      },
      {
        "key": "sylas",
        "name": "解脱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sylas.png",
        "tier": 2,
        "rank": 18,
        "winRate": 49.3001,
        "pickRate": 6.8672200000000005,
        "banRate": 17.552599999999998
      },
      {
        "key": "yone",
        "name": "封魔剑魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Yone.png",
        "tier": 2,
        "rank": 19,
        "winRate": 49.357,
        "pickRate": 7.20315,
        "banRate": 9.53816
      },
      {
        "key": "malzahar",
        "name": "虚空先知",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Malzahar.png",
        "tier": 2,
        "rank": 20,
        "winRate": 49.9658,
        "pickRate": 5.34346,
        "banRate": 9.31314
      },
      {
        "key": "diana",
        "name": "皎月女神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Diana.png",
        "tier": 2,
        "rank": 21,
        "winRate": 50.544999999999995,
        "pickRate": 3.0528,
        "banRate": 3.1691200000000004
      },
      {
        "key": "veigar",
        "name": "邪恶小法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Veigar.png",
        "tier": 2,
        "rank": 22,
        "winRate": 50.1066,
        "pickRate": 3.77353,
        "banRate": 1.82071
      },
      {
        "key": "zoe",
        "name": "暮光星灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zoe.png",
        "tier": 2,
        "rank": 23,
        "winRate": 50.475899999999996,
        "pickRate": 2.80977,
        "banRate": 3.3106700000000004
      },
      {
        "key": "qiyana",
        "name": "元素女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Qiyana.png",
        "tier": 2,
        "rank": 24,
        "winRate": 50.192499999999995,
        "pickRate": 3.04868,
        "banRate": 6.64096
      },
      {
        "key": "akali",
        "name": "离群之刺",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Akali.png",
        "tier": 2,
        "rank": 25,
        "winRate": 48.9855,
        "pickRate": 5.6921100000000004,
        "banRate": 15.9364
      },
      {
        "key": "ekko",
        "name": "时间刺客",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ekko.png",
        "tier": 2,
        "rank": 26,
        "winRate": 50.14999999999999,
        "pickRate": 3.1228100000000003,
        "banRate": 1.54687
      },
      {
        "key": "annie",
        "name": "黑暗之女",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Annie.png",
        "tier": 2,
        "rank": 27,
        "winRate": 50.8382,
        "pickRate": 1.80406,
        "banRate": 0.480417
      },
      {
        "key": "aurelionsol",
        "name": "铸星龙王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/AurelionSol.png",
        "tier": 2,
        "rank": 28,
        "winRate": 50.6995,
        "pickRate": 1.83928,
        "banRate": 0.6473180000000001
      },
      {
        "key": "galio",
        "name": "正义巨像",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Galio.png",
        "tier": 2,
        "rank": 29,
        "winRate": 49.4296,
        "pickRate": 3.8776699999999997,
        "banRate": 1.7550799999999998
      },
      {
        "key": "gwen",
        "name": "灵罗娃娃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Gwen.png",
        "tier": 2,
        "rank": 30,
        "winRate": 51.80010000000001,
        "pickRate": 0.820594,
        "banRate": 3.93948
      },
      {
        "key": "anivia",
        "name": "冰晶凤凰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Anivia.png",
        "tier": 2,
        "rank": 31,
        "winRate": 50.0445,
        "pickRate": 2.31387,
        "banRate": 2.53105
      },
      {
        "key": "kassadin",
        "name": "虚空行者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kassadin.png",
        "tier": 2,
        "rank": 32,
        "winRate": 49.719,
        "pickRate": 2.74551,
        "banRate": 2.31663
      },
      {
        "key": "akshan",
        "name": "影哨",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Akshan.png",
        "tier": 2,
        "rank": 33,
        "winRate": 50.002599999999994,
        "pickRate": 2.20542,
        "banRate": 2.06654
      },
      {
        "key": "irelia",
        "name": "刀锋舞者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Irelia.png",
        "tier": 3,
        "rank": 34,
        "winRate": 48.963,
        "pickRate": 2.8638,
        "banRate": 12.8276
      },
      {
        "key": "pantheon",
        "name": "不屈之枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Pantheon.png",
        "tier": 3,
        "rank": 35,
        "winRate": 51.1393,
        "pickRate": 0.781333,
        "banRate": 2.34586
      },
      {
        "key": "velkoz",
        "name": "虚空之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Velkoz.png",
        "tier": 3,
        "rank": 36,
        "winRate": 50.903200000000005,
        "pickRate": 0.893013,
        "banRate": 1.62239
      },
      {
        "key": "swain",
        "name": "诺克萨斯统领",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Swain.png",
        "tier": 3,
        "rank": 37,
        "winRate": 51.2704,
        "pickRate": 0.6440750000000001,
        "banRate": 1.6050200000000001
      },
      {
        "key": "aurora",
        "name": "双界灵兔",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Aurora.png",
        "tier": 3,
        "rank": 38,
        "winRate": 49.534,
        "pickRate": 1.91026,
        "banRate": 1.10554
      },
      {
        "key": "garen",
        "name": "德玛西亚之力",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Garen.png",
        "tier": 3,
        "rank": 39,
        "winRate": 51.33990000000001,
        "pickRate": 0.551209,
        "banRate": 4.92748
      },
      {
        "key": "malphite",
        "name": "熔岩巨兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Malphite.png",
        "tier": 3,
        "rank": 40,
        "winRate": 50.3885,
        "pickRate": 0.840419,
        "banRate": 14.7711
      },
      {
        "key": "talon",
        "name": "刀锋之影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Talon.png",
        "tier": 3,
        "rank": 41,
        "winRate": 49.3091,
        "pickRate": 1.7020199999999999,
        "banRate": 9.662410000000001
      },
      {
        "key": "riven",
        "name": "放逐之刃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Riven.png",
        "tier": 3,
        "rank": 42,
        "winRate": 51.29820000000001,
        "pickRate": 0.504523,
        "banRate": 1.74799
      },
      {
        "key": "kayle",
        "name": "正义天使",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kayle.png",
        "tier": 3,
        "rank": 43,
        "winRate": 51.174699999999994,
        "pickRate": 0.503007,
        "banRate": 1.3122099999999999
      },
      {
        "key": "cassiopeia",
        "name": "魔蛇之拥",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Cassiopeia.png",
        "tier": 3,
        "rank": 44,
        "winRate": 48.4441,
        "pickRate": 1.7788000000000002,
        "banRate": 1.92858
      },
      {
        "key": "taliyah",
        "name": "岩雀",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Taliyah.png",
        "tier": 4,
        "rank": 45,
        "winRate": 48.6161,
        "pickRate": 1.37351,
        "banRate": 0.362624
      },
      {
        "key": "chogath",
        "name": "虚空恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Chogath.png",
        "tier": 4,
        "rank": 46,
        "winRate": 49.929899999999996,
        "pickRate": 0.582035,
        "banRate": 1.37259
      },
      {
        "key": "ziggs",
        "name": "爆破鬼才",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ziggs.png",
        "tier": 4,
        "rank": 47,
        "winRate": 49.7653,
        "pickRate": 0.6376999999999999,
        "banRate": 1.48607
      },
      {
        "key": "ryze",
        "name": "符文法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ryze.png",
        "tier": 4,
        "rank": 48,
        "winRate": 46.758300000000006,
        "pickRate": 3.1387400000000003,
        "banRate": 0.50493
      },
      {
        "key": "orianna",
        "name": "发条魔灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Orianna.png",
        "tier": 4,
        "rank": 49,
        "winRate": 46.7555,
        "pickRate": 3.02943,
        "banRate": 0.39965900000000004
      },
      {
        "key": "brand",
        "name": "复仇焰魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Brand.png",
        "tier": 4,
        "rank": 50,
        "winRate": 49.2201,
        "pickRate": 0.652899,
        "banRate": 2.93268
      },
      {
        "key": "azir",
        "name": "沙漠皇帝",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Azir.png",
        "tier": 4,
        "rank": 51,
        "winRate": 47.5459,
        "pickRate": 1.76375,
        "banRate": 0.289389
      },
      {
        "key": "naafiri",
        "name": "百裂冥犬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Naafiri.png",
        "tier": 4,
        "rank": 52,
        "winRate": 48.4863,
        "pickRate": 0.835871,
        "banRate": 13.211300000000001
      },
      {
        "key": "sion",
        "name": "亡灵战神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sion.png",
        "tier": 4,
        "rank": 53,
        "winRate": 49.3693,
        "pickRate": 0.542346,
        "banRate": 0.48229700000000003
      },
      {
        "key": "gangplank",
        "name": "海洋之灾",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Gangplank.png",
        "tier": 4,
        "rank": 54,
        "winRate": 49.0242,
        "pickRate": 0.549732,
        "banRate": 7.249750000000001
      },
      {
        "key": "tristana",
        "name": "麦林炮手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Tristana.png",
        "tier": 4,
        "rank": 55,
        "winRate": 47.803000000000004,
        "pickRate": 0.967842,
        "banRate": 5.89626
      },
      {
        "key": "jayce",
        "name": "未来守护者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Jayce.png",
        "tier": 4,
        "rank": 56,
        "winRate": 47.4557,
        "pickRate": 0.8112650000000001,
        "banRate": 5.87902
      },
      {
        "key": "mel",
        "name": "流光镜影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Mel.png",
        "tier": 4,
        "rank": 57,
        "winRate": 45.2343,
        "pickRate": 2.03306,
        "banRate": 19.7212
      },
      {
        "key": "smolder",
        "name": "炽炎雏龙",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Smolder.png",
        "tier": 5,
        "rank": 58,
        "winRate": 43.789899999999996,
        "pickRate": 0.529868,
        "banRate": 1.46457
      }
    ],
    "adc": [
      {
        "key": "jinx",
        "name": "暴走萝莉",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Jinx.png",
        "tier": 0,
        "rank": 1,
        "winRate": 52.287499999999994,
        "pickRate": 17.3826,
        "banRate": 6.543400000000001
      },
      {
        "key": "tristana",
        "name": "麦林炮手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Tristana.png",
        "tier": 1,
        "rank": 2,
        "winRate": 51.471900000000005,
        "pickRate": 9.26902,
        "banRate": 6.019
      },
      {
        "key": "kaisa",
        "name": "虚空之女",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kaisa.png",
        "tier": 1,
        "rank": 3,
        "winRate": 49.356,
        "pickRate": 20.0109,
        "banRate": 4.934
      },
      {
        "key": "jhin",
        "name": "戏命师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Jhin.png",
        "tier": 1,
        "rank": 4,
        "winRate": 49.527100000000004,
        "pickRate": 16.3843,
        "banRate": 1.36871
      },
      {
        "key": "zeri",
        "name": "祖安花火",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zeri.png",
        "tier": 2,
        "rank": 5,
        "winRate": 51.644400000000005,
        "pickRate": 4.8932,
        "banRate": 0.823134
      },
      {
        "key": "xayah",
        "name": "逆羽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Xayah.png",
        "tier": 2,
        "rank": 6,
        "winRate": 51.5676,
        "pickRate": 4.60013,
        "banRate": 0.8038770000000001
      },
      {
        "key": "twitch",
        "name": "瘟疫之源",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Twitch.png",
        "tier": 2,
        "rank": 7,
        "winRate": 51.1274,
        "pickRate": 5.6184199999999995,
        "banRate": 6.788819999999999
      },
      {
        "key": "yunara",
        "name": "不破之誓",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Yunara.png",
        "tier": 2,
        "rank": 8,
        "winRate": 50.2497,
        "pickRate": 9.20837,
        "banRate": 1.8421
      },
      {
        "key": "caitlyn",
        "name": "皮城女警",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Caitlyn.png",
        "tier": 2,
        "rank": 9,
        "winRate": 48.9542,
        "pickRate": 15.1974,
        "banRate": 20.670099999999998
      },
      {
        "key": "viktor",
        "name": "奥术先驱",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Viktor.png",
        "tier": 2,
        "rank": 10,
        "winRate": 51.225699999999996,
        "pickRate": 3.3718,
        "banRate": 16.1332
      },
      {
        "key": "seraphine",
        "name": "星籁歌姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Seraphine.png",
        "tier": 2,
        "rank": 11,
        "winRate": 52.2917,
        "pickRate": 1.91929,
        "banRate": 10.1091
      },
      {
        "key": "yasuo",
        "name": "疾风剑豪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Yasuo.png",
        "tier": 2,
        "rank": 12,
        "winRate": 51.638,
        "pickRate": 2.39034,
        "banRate": 19.985500000000002
      },
      {
        "key": "ashe",
        "name": "寒冰射手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ashe.png",
        "tier": 2,
        "rank": 13,
        "winRate": 50.3039,
        "pickRate": 6.45731,
        "banRate": 1.7841200000000002
      },
      {
        "key": "kogmaw",
        "name": "深渊巨口",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/KogMaw.png",
        "tier": 2,
        "rank": 14,
        "winRate": 52.308600000000006,
        "pickRate": 1.8818899999999998,
        "banRate": 0.364235
      },
      {
        "key": "hwei",
        "name": "异画师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Hwei.png",
        "tier": 3,
        "rank": 15,
        "winRate": 52.5419,
        "pickRate": 1.33222,
        "banRate": 3.00051
      },
      {
        "key": "sivir",
        "name": "战争女神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sivir.png",
        "tier": 3,
        "rank": 16,
        "winRate": 50.3505,
        "pickRate": 4.33699,
        "banRate": 1.4978
      },
      {
        "key": "lux",
        "name": "光辉女郎",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Lux.png",
        "tier": 3,
        "rank": 17,
        "winRate": 52.7167,
        "pickRate": 0.994356,
        "banRate": 3.38764
      },
      {
        "key": "veigar",
        "name": "邪恶小法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Veigar.png",
        "tier": 3,
        "rank": 18,
        "winRate": 51.501200000000004,
        "pickRate": 1.9532299999999998,
        "banRate": 1.81101
      },
      {
        "key": "missfortune",
        "name": "赏金猎人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/MissFortune.png",
        "tier": 3,
        "rank": 19,
        "winRate": 49.3181,
        "pickRate": 5.79574,
        "banRate": 0.657609
      },
      {
        "key": "samira",
        "name": "沙漠玫瑰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Samira.png",
        "tier": 3,
        "rank": 20,
        "winRate": 49.966300000000004,
        "pickRate": 3.9363599999999996,
        "banRate": 5.09847
      },
      {
        "key": "lucian",
        "name": "圣枪游侠",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Lucian.png",
        "tier": 3,
        "rank": 21,
        "winRate": 48.5291,
        "pickRate": 8.44606,
        "banRate": 2.4751100000000004
      },
      {
        "key": "xerath",
        "name": "远古巫灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Xerath.png",
        "tier": 3,
        "rank": 22,
        "winRate": 51.3085,
        "pickRate": 1.5969,
        "banRate": 12.3267
      },
      {
        "key": "swain",
        "name": "诺克萨斯统领",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Swain.png",
        "tier": 3,
        "rank": 23,
        "winRate": 52.461999999999996,
        "pickRate": 0.8541679999999999,
        "banRate": 1.61151
      },
      {
        "key": "aphelios",
        "name": "残月之肃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Aphelios.png",
        "tier": 3,
        "rank": 24,
        "winRate": 49.317699999999995,
        "pickRate": 4.7712900000000005,
        "banRate": 1.40159
      },
      {
        "key": "karthus",
        "name": "死亡颂唱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Karthus.png",
        "tier": 3,
        "rank": 25,
        "winRate": 53.14149999999999,
        "pickRate": 0.5469339999999999,
        "banRate": 0.817354
      },
      {
        "key": "ziggs",
        "name": "爆破鬼才",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ziggs.png",
        "tier": 3,
        "rank": 26,
        "winRate": 50.7508,
        "pickRate": 2.05786,
        "banRate": 1.56359
      },
      {
        "key": "smolder",
        "name": "炽炎雏龙",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Smolder.png",
        "tier": 3,
        "rank": 27,
        "winRate": 49.6781,
        "pickRate": 3.5502,
        "banRate": 1.53453
      },
      {
        "key": "syndra",
        "name": "暗黑元首",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Syndra.png",
        "tier": 3,
        "rank": 28,
        "winRate": 50.2016,
        "pickRate": 2.2338400000000003,
        "banRate": 12.7607
      },
      {
        "key": "draven",
        "name": "荣耀行刑官",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Draven.png",
        "tier": 3,
        "rank": 29,
        "winRate": 49.5293,
        "pickRate": 3.5889200000000003,
        "banRate": 10.7644
      },
      {
        "key": "velkoz",
        "name": "虚空之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Velkoz.png",
        "tier": 3,
        "rank": 30,
        "winRate": 52.6686,
        "pickRate": 0.601308,
        "banRate": 1.5833599999999999
      },
      {
        "key": "katarina",
        "name": "不祥之刃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Katarina.png",
        "tier": 3,
        "rank": 31,
        "winRate": 51.5995,
        "pickRate": 0.9442910000000001,
        "banRate": 11.6648
      },
      {
        "key": "nilah",
        "name": "不羁之悦",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Nilah.png",
        "tier": 3,
        "rank": 32,
        "winRate": 51.5135,
        "pickRate": 1.10857,
        "banRate": 1.6291799999999999
      },
      {
        "key": "aurelionsol",
        "name": "铸星龙王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/AurelionSol.png",
        "tier": 3,
        "rank": 33,
        "winRate": 51.9099,
        "pickRate": 0.743458,
        "banRate": 0.632328
      },
      {
        "key": "kalista",
        "name": "复仇之矛",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kalista.png",
        "tier": 4,
        "rank": 34,
        "winRate": 49.0442,
        "pickRate": 3.01358,
        "banRate": 0.686229
      },
      {
        "key": "ezreal",
        "name": "探险家",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ezreal.png",
        "tier": 4,
        "rank": 35,
        "winRate": 46.0997,
        "pickRate": 12.5863,
        "banRate": 4.54948
      },
      {
        "key": "vladimir",
        "name": "猩红收割者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Vladimir.png",
        "tier": 4,
        "rank": 36,
        "winRate": 51.648300000000006,
        "pickRate": 0.62101,
        "banRate": 5.64855
      },
      {
        "key": "brand",
        "name": "复仇焰魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Brand.png",
        "tier": 4,
        "rank": 37,
        "winRate": 51.5102,
        "pickRate": 0.663763,
        "banRate": 2.8933299999999997
      },
      {
        "key": "corki",
        "name": "英勇投弹手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Corki.png",
        "tier": 4,
        "rank": 38,
        "winRate": 49.527300000000004,
        "pickRate": 1.78268,
        "banRate": 0.278135
      },
      {
        "key": "vayne",
        "name": "暗夜猎手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Vayne.png",
        "tier": 4,
        "rank": 39,
        "winRate": 47.6477,
        "pickRate": 3.46316,
        "banRate": 7.12916
      },
      {
        "key": "senna",
        "name": "涤魂圣枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Senna.png",
        "tier": 5,
        "rank": 40,
        "winRate": 50.18,
        "pickRate": 0.577065,
        "banRate": 1.83199
      },
      {
        "key": "varus",
        "name": "惩戒之箭",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Varus.png",
        "tier": 5,
        "rank": 41,
        "winRate": 47.3495,
        "pickRate": 2.7389,
        "banRate": 0.7101879999999999
      },
      {
        "key": "mel",
        "name": "流光镜影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Mel.png",
        "tier": 5,
        "rank": 42,
        "winRate": 46.3545,
        "pickRate": 1.57231,
        "banRate": 19.718
      }
    ],
    "support": [
      {
        "key": "thresh",
        "name": "魂锁典狱长",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Thresh.png",
        "tier": 0,
        "rank": 1,
        "winRate": 51.7282,
        "pickRate": 14.8782,
        "banRate": 11.5723
      },
      {
        "key": "leona",
        "name": "曙光女神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Leona.png",
        "tier": 1,
        "rank": 2,
        "winRate": 51.5914,
        "pickRate": 7.7801800000000005,
        "banRate": 8.30179
      },
      {
        "key": "lulu",
        "name": "仙灵女巫",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Lulu.png",
        "tier": 1,
        "rank": 3,
        "winRate": 50.3943,
        "pickRate": 11.41,
        "banRate": 9.0026
      },
      {
        "key": "seraphine",
        "name": "星籁歌姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Seraphine.png",
        "tier": 1,
        "rank": 4,
        "winRate": 50.8448,
        "pickRate": 8.753260000000001,
        "banRate": 10.1539
      },
      {
        "key": "braum",
        "name": "弗雷尔卓德之心",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Braum.png",
        "tier": 1,
        "rank": 5,
        "winRate": 52.06229999999999,
        "pickRate": 4.9108600000000004,
        "banRate": 4.96403
      },
      {
        "key": "blitzcrank",
        "name": "蒸汽机器人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Blitzcrank.png",
        "tier": 1,
        "rank": 6,
        "winRate": 51.3472,
        "pickRate": 6.40447,
        "banRate": 11.8598
      },
      {
        "key": "nami",
        "name": "唤潮鲛姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Nami.png",
        "tier": 1,
        "rank": 7,
        "winRate": 50.7072,
        "pickRate": 9.20683,
        "banRate": 1.1212099999999998
      },
      {
        "key": "nautilus",
        "name": "深海泰坦",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Nautilus.png",
        "tier": 1,
        "rank": 8,
        "winRate": 50.0092,
        "pickRate": 10.925,
        "banRate": 14.4375
      },
      {
        "key": "milio",
        "name": "明烛",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Milio.png",
        "tier": 1,
        "rank": 9,
        "winRate": 50.7621,
        "pickRate": 6.89466,
        "banRate": 4.33354
      },
      {
        "key": "senna",
        "name": "涤魂圣枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Senna.png",
        "tier": 1,
        "rank": 10,
        "winRate": 51.1696,
        "pickRate": 5.6364,
        "banRate": 1.8807999999999998
      },
      {
        "key": "rell",
        "name": "镕铁少女",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Rell.png",
        "tier": 1,
        "rank": 11,
        "winRate": 51.768499999999996,
        "pickRate": 3.88032,
        "banRate": 1.41567
      },
      {
        "key": "alistar",
        "name": "牛头酋长",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Alistar.png",
        "tier": 1,
        "rank": 12,
        "winRate": 51.2308,
        "pickRate": 4.95667,
        "banRate": 1.76858
      },
      {
        "key": "janna",
        "name": "风暴之怒",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Janna.png",
        "tier": 2,
        "rank": 13,
        "winRate": 51.532500000000006,
        "pickRate": 3.95767,
        "banRate": 0.844328
      },
      {
        "key": "soraka",
        "name": "众星之子",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Soraka.png",
        "tier": 2,
        "rank": 14,
        "winRate": 50.7196,
        "pickRate": 5.11377,
        "banRate": 2.14619
      },
      {
        "key": "zilean",
        "name": "时光守护者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zilean.png",
        "tier": 2,
        "rank": 15,
        "winRate": 51.45960000000001,
        "pickRate": 3.2821700000000003,
        "banRate": 1.89801
      },
      {
        "key": "sona",
        "name": "琴瑟仙女",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sona.png",
        "tier": 2,
        "rank": 16,
        "winRate": 51.2839,
        "pickRate": 2.97831,
        "banRate": 0.243712
      },
      {
        "key": "taric",
        "name": "瓦洛兰之盾",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Taric.png",
        "tier": 2,
        "rank": 17,
        "winRate": 52.7652,
        "pickRate": 1.38782,
        "banRate": 0.312568
      },
      {
        "key": "rakan",
        "name": "幻翎",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Rakan.png",
        "tier": 2,
        "rank": 18,
        "winRate": 50.878299999999996,
        "pickRate": 3.46393,
        "banRate": 0.321042
      },
      {
        "key": "morgana",
        "name": "堕落天使",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Morgana.png",
        "tier": 2,
        "rank": 19,
        "winRate": 49.9333,
        "pickRate": 4.41049,
        "banRate": 16.6857
      },
      {
        "key": "pyke",
        "name": "血港鬼影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Pyke.png",
        "tier": 2,
        "rank": 20,
        "winRate": 49.0937,
        "pickRate": 6.368169999999999,
        "banRate": 24.976599999999998
      },
      {
        "key": "lux",
        "name": "光辉女郎",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Lux.png",
        "tier": 2,
        "rank": 21,
        "winRate": 49.0287,
        "pickRate": 6.506209999999999,
        "banRate": 3.4693099999999997
      },
      {
        "key": "karma",
        "name": "天启者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Karma.png",
        "tier": 2,
        "rank": 22,
        "winRate": 48.826,
        "pickRate": 7.0149799999999995,
        "banRate": 3.10695
      },
      {
        "key": "bard",
        "name": "星界游神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Bard.png",
        "tier": 2,
        "rank": 23,
        "winRate": 49.2195,
        "pickRate": 5.06863,
        "banRate": 2.55496
      },
      {
        "key": "velkoz",
        "name": "虚空之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Velkoz.png",
        "tier": 2,
        "rank": 24,
        "winRate": 50.3551,
        "pickRate": 2.7451,
        "banRate": 1.67565
      },
      {
        "key": "poppy",
        "name": "圣锤之毅",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Poppy.png",
        "tier": 3,
        "rank": 25,
        "winRate": 50.67700000000001,
        "pickRate": 2.05768,
        "banRate": 4.7782
      },
      {
        "key": "zyra",
        "name": "荆棘之兴",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zyra.png",
        "tier": 3,
        "rank": 26,
        "winRate": 49.8095,
        "pickRate": 2.46468,
        "banRate": 2.3666300000000002
      },
      {
        "key": "maokai",
        "name": "扭曲树精",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Maokai.png",
        "tier": 3,
        "rank": 27,
        "winRate": 50.402499999999996,
        "pickRate": 1.6862700000000002,
        "banRate": 0.166644
      },
      {
        "key": "brand",
        "name": "复仇焰魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Brand.png",
        "tier": 3,
        "rank": 28,
        "winRate": 49.4948,
        "pickRate": 2.48394,
        "banRate": 3.02536
      },
      {
        "key": "yuumi",
        "name": "魔法猫咪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Yuumi.png",
        "tier": 3,
        "rank": 29,
        "winRate": 47.762,
        "pickRate": 5.29683,
        "banRate": 6.81572
      },
      {
        "key": "pantheon",
        "name": "不屈之枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Pantheon.png",
        "tier": 3,
        "rank": 30,
        "winRate": 48.2742,
        "pickRate": 3.66427,
        "banRate": 2.41419
      },
      {
        "key": "renata",
        "name": "炼金男爵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Renata.png",
        "tier": 3,
        "rank": 31,
        "winRate": 50.1973,
        "pickRate": 1.4503300000000001,
        "banRate": 0.20175200000000001
      },
      {
        "key": "galio",
        "name": "正义巨像",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Galio.png",
        "tier": 3,
        "rank": 32,
        "winRate": 50.7614,
        "pickRate": 0.992495,
        "banRate": 1.70668
      },
      {
        "key": "tahmkench",
        "name": "河流之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/TahmKench.png",
        "tier": 3,
        "rank": 33,
        "winRate": 49.2208,
        "pickRate": 2.15984,
        "banRate": 1.9449299999999998
      },
      {
        "key": "amumu",
        "name": "殇之木乃伊",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Amumu.png",
        "tier": 3,
        "rank": 34,
        "winRate": 51.827400000000004,
        "pickRate": 0.578742,
        "banRate": 0.827322
      },
      {
        "key": "xerath",
        "name": "远古巫灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Xerath.png",
        "tier": 3,
        "rank": 35,
        "winRate": 47.902,
        "pickRate": 2.9652499999999997,
        "banRate": 12.3655
      },
      {
        "key": "elise",
        "name": "蜘蛛女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Elise.png",
        "tier": 3,
        "rank": 36,
        "winRate": 51.0701,
        "pickRate": 0.647207,
        "banRate": 0.9770449999999999
      },
      {
        "key": "neeko",
        "name": "万花通灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Neeko.png",
        "tier": 3,
        "rank": 37,
        "winRate": 48.8324,
        "pickRate": 1.55301,
        "banRate": 0.568756
      },
      {
        "key": "swain",
        "name": "诺克萨斯统领",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Swain.png",
        "tier": 3,
        "rank": 38,
        "winRate": 47.695,
        "pickRate": 2.60564,
        "banRate": 1.67217
      },
      {
        "key": "shen",
        "name": "暮光之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Shen.png",
        "tier": 3,
        "rank": 39,
        "winRate": 49.079499999999996,
        "pickRate": 1.16392,
        "banRate": 0.765138
      },
      {
        "key": "hwei",
        "name": "异画师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Hwei.png",
        "tier": 3,
        "rank": 40,
        "winRate": 49.9463,
        "pickRate": 0.6618470000000001,
        "banRate": 2.9482399999999997
      },
      {
        "key": "leblanc",
        "name": "诡术妖姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Leblanc.png",
        "tier": 3,
        "rank": 41,
        "winRate": 49.113600000000005,
        "pickRate": 0.82139,
        "banRate": 15.2996
      },
      {
        "key": "sylas",
        "name": "解脱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sylas.png",
        "tier": 4,
        "rank": 42,
        "winRate": 47.4947,
        "pickRate": 1.36327,
        "banRate": 17.2592
      },
      {
        "key": "fiddlesticks",
        "name": "远古恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Fiddlesticks.png",
        "tier": 4,
        "rank": 43,
        "winRate": 49.6776,
        "pickRate": 0.514025,
        "banRate": 1.30338
      },
      {
        "key": "shaco",
        "name": "恶魔小丑",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Shaco.png",
        "tier": 4,
        "rank": 44,
        "winRate": 47.4691,
        "pickRate": 1.27697,
        "banRate": 16.610500000000002
      },
      {
        "key": "zoe",
        "name": "暮光星灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zoe.png",
        "tier": 4,
        "rank": 45,
        "winRate": 48.1297,
        "pickRate": 0.9346840000000001,
        "banRate": 3.2395899999999997
      },
      {
        "key": "camille",
        "name": "青钢影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Camille.png",
        "tier": 4,
        "rank": 46,
        "winRate": 46.1617,
        "pickRate": 2.42838,
        "banRate": 5.5167399999999995
      },
      {
        "key": "teemo",
        "name": "迅捷斥候",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Teemo.png",
        "tier": 4,
        "rank": 47,
        "winRate": 48.2794,
        "pickRate": 0.538964,
        "banRate": 6.01643
      },
      {
        "key": "veigar",
        "name": "邪恶小法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Veigar.png",
        "tier": 5,
        "rank": 48,
        "winRate": 44.7271,
        "pickRate": 0.64847,
        "banRate": 1.74525
      },
      {
        "key": "ashe",
        "name": "寒冰射手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ashe.png",
        "tier": 5,
        "rank": 49,
        "winRate": 43.8422,
        "pickRate": 0.7520169999999999,
        "banRate": 1.7275200000000002
      },
      {
        "key": "mel",
        "name": "流光镜影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Mel.png",
        "tier": 5,
        "rank": 50,
        "winRate": 42.7316,
        "pickRate": 0.7679590000000001,
        "banRate": 19.3268
      }
    ]
  }
};
