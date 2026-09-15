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
  "updatedAt": "2026-09-15T03:11:10.514Z",
  "positions": {
    "top": [
      {
        "key": "nasus",
        "name": "沙漠死神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Nasus.png",
        "tier": 1,
        "rank": 1,
        "winRate": 51.4392,
        "pickRate": 7.16228,
        "banRate": 38.234899999999996
      },
      {
        "key": "malphite",
        "name": "熔岩巨兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Malphite.png",
        "tier": 1,
        "rank": 2,
        "winRate": 51.7149,
        "pickRate": 6.77418,
        "banRate": 15.1001
      },
      {
        "key": "yone",
        "name": "封魔剑魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Yone.png",
        "tier": 1,
        "rank": 3,
        "winRate": 50.191900000000004,
        "pickRate": 8.55243,
        "banRate": 10.614600000000001
      },
      {
        "key": "garen",
        "name": "德玛西亚之力",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Garen.png",
        "tier": 1,
        "rank": 4,
        "winRate": 50.763000000000005,
        "pickRate": 6.74259,
        "banRate": 4.85006
      },
      {
        "key": "gangplank",
        "name": "海洋之灾",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Gangplank.png",
        "tier": 1,
        "rank": 5,
        "winRate": 50.6829,
        "pickRate": 5.52664,
        "banRate": 7.958610000000001
      },
      {
        "key": "ornn",
        "name": "山隐之焰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ornn.png",
        "tier": 2,
        "rank": 6,
        "winRate": 51.5039,
        "pickRate": 3.37603,
        "banRate": 0.464124
      },
      {
        "key": "darius",
        "name": "诺克萨斯之手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Darius.png",
        "tier": 2,
        "rank": 7,
        "winRate": 49.8114,
        "pickRate": 6.91064,
        "banRate": 12.851099999999999
      },
      {
        "key": "teemo",
        "name": "迅捷斥候",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Teemo.png",
        "tier": 2,
        "rank": 8,
        "winRate": 50.8636,
        "pickRate": 4.12113,
        "banRate": 6.30311
      },
      {
        "key": "shen",
        "name": "暮光之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Shen.png",
        "tier": 2,
        "rank": 9,
        "winRate": 51.1639,
        "pickRate": 3.57002,
        "banRate": 0.736757
      },
      {
        "key": "jax",
        "name": "武器大师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Jax.png",
        "tier": 2,
        "rank": 10,
        "winRate": 50.00320000000001,
        "pickRate": 5.77853,
        "banRate": 10.2196
      },
      {
        "key": "sett",
        "name": "腕豪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Sett.png",
        "tier": 2,
        "rank": 11,
        "winRate": 50.0424,
        "pickRate": 5.50574,
        "banRate": 2.2976099999999997
      },
      {
        "key": "chogath",
        "name": "虚空恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Chogath.png",
        "tier": 2,
        "rank": 12,
        "winRate": 50.956999999999994,
        "pickRate": 3.30128,
        "banRate": 2.85163
      },
      {
        "key": "camille",
        "name": "青钢影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Camille.png",
        "tier": 2,
        "rank": 13,
        "winRate": 50.3212,
        "pickRate": 4.32459,
        "banRate": 4.11812
      },
      {
        "key": "singed",
        "name": "炼金术士",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Singed.png",
        "tier": 2,
        "rank": 14,
        "winRate": 51.5181,
        "pickRate": 2.39698,
        "banRate": 0.7895869999999999
      },
      {
        "key": "irelia",
        "name": "刀锋舞者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Irelia.png",
        "tier": 2,
        "rank": 15,
        "winRate": 50.172399999999996,
        "pickRate": 4.279100000000001,
        "banRate": 12.5533
      },
      {
        "key": "renekton",
        "name": "荒漠屠夫",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Renekton.png",
        "tier": 2,
        "rank": 16,
        "winRate": 49.7861,
        "pickRate": 5.57409,
        "banRate": 3.8716500000000003
      },
      {
        "key": "aatrox",
        "name": "暗裔剑魔",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Aatrox.png",
        "tier": 2,
        "rank": 17,
        "winRate": 49.6117,
        "pickRate": 5.8727,
        "banRate": 6.89476
      },
      {
        "key": "kayle",
        "name": "正义天使",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Kayle.png",
        "tier": 2,
        "rank": 18,
        "winRate": 51.426700000000004,
        "pickRate": 2.29629,
        "banRate": 1.38577
      },
      {
        "key": "kennen",
        "name": "狂暴之心",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Kennen.png",
        "tier": 2,
        "rank": 19,
        "winRate": 51.5557,
        "pickRate": 2.0506699999999998,
        "banRate": 1.24337
      },
      {
        "key": "kled",
        "name": "暴怒骑士",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Kled.png",
        "tier": 2,
        "rank": 20,
        "winRate": 51.8516,
        "pickRate": 1.73952,
        "banRate": 0.893891
      },
      {
        "key": "pantheon",
        "name": "不屈之枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Pantheon.png",
        "tier": 3,
        "rank": 21,
        "winRate": 50.646,
        "pickRate": 2.93998,
        "banRate": 2.38081
      },
      {
        "key": "olaf",
        "name": "狂战士",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Olaf.png",
        "tier": 3,
        "rank": 22,
        "winRate": 50.47279999999999,
        "pickRate": 3.14638,
        "banRate": 3.73551
      },
      {
        "key": "zaahen",
        "name": "不落魔锋",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Zaahen.png",
        "tier": 3,
        "rank": 23,
        "winRate": 50.3582,
        "pickRate": 3.3808199999999995,
        "banRate": 1.19224
      },
      {
        "key": "urgot",
        "name": "无畏战车",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Urgot.png",
        "tier": 3,
        "rank": 24,
        "winRate": 50.8132,
        "pickRate": 2.40361,
        "banRate": 0.782396
      },
      {
        "key": "tryndamere",
        "name": "蛮族之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Tryndamere.png",
        "tier": 3,
        "rank": 25,
        "winRate": 50.2934,
        "pickRate": 3.10065,
        "banRate": 2.56984
      },
      {
        "key": "warwick",
        "name": "祖安怒兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Warwick.png",
        "tier": 3,
        "rank": 26,
        "winRate": 51.7435,
        "pickRate": 1.42075,
        "banRate": 1.62015
      },
      {
        "key": "gwen",
        "name": "灵罗娃娃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Gwen.png",
        "tier": 3,
        "rank": 27,
        "winRate": 50.5273,
        "pickRate": 2.6576,
        "banRate": 3.62682
      },
      {
        "key": "illaoi",
        "name": "海兽祭司",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Illaoi.png",
        "tier": 3,
        "rank": 28,
        "winRate": 50.4135,
        "pickRate": 2.66067,
        "banRate": 4.94945
      },
      {
        "key": "mordekaiser",
        "name": "铁铠冥魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Mordekaiser.png",
        "tier": 3,
        "rank": 29,
        "winRate": 49.1772,
        "pickRate": 4.84841,
        "banRate": 7.72765
      },
      {
        "key": "drmundo",
        "name": "祖安狂人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/DrMundo.png",
        "tier": 3,
        "rank": 30,
        "winRate": 49.8857,
        "pickRate": 3.28026,
        "banRate": 2.54378
      },
      {
        "key": "gragas",
        "name": "酒桶",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Gragas.png",
        "tier": 3,
        "rank": 31,
        "winRate": 50.471999999999994,
        "pickRate": 2.40939,
        "banRate": 0.719408
      },
      {
        "key": "fiora",
        "name": "无双剑姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Fiora.png",
        "tier": 3,
        "rank": 32,
        "winRate": 49.6022,
        "pickRate": 3.6006299999999998,
        "banRate": 4.4851
      },
      {
        "key": "yasuo",
        "name": "疾风剑豪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Yasuo.png",
        "tier": 3,
        "rank": 33,
        "winRate": 49.1446,
        "pickRate": 3.4563,
        "banRate": 20.8241
      },
      {
        "key": "anivia",
        "name": "冰晶凤凰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Anivia.png",
        "tier": 4,
        "rank": 34,
        "winRate": 52.2424,
        "pickRate": 0.764775,
        "banRate": 2.3216799999999997
      },
      {
        "key": "akali",
        "name": "离群之刺",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Akali.png",
        "tier": 4,
        "rank": 35,
        "winRate": 49.464000000000006,
        "pickRate": 2.6603000000000003,
        "banRate": 16.124
      },
      {
        "key": "gnar",
        "name": "迷失之牙",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Gnar.png",
        "tier": 4,
        "rank": 36,
        "winRate": 49.160199999999996,
        "pickRate": 3.6157500000000002,
        "banRate": 1.19286
      },
      {
        "key": "ambessa",
        "name": "铁血狼母",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ambessa.png",
        "tier": 4,
        "rank": 37,
        "winRate": 48.844100000000005,
        "pickRate": 3.87649,
        "banRate": 4.92539
      },
      {
        "key": "quinn",
        "name": "德玛西亚之翼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Quinn.png",
        "tier": 4,
        "rank": 38,
        "winRate": 51.688199999999995,
        "pickRate": 0.7901,
        "banRate": 0.7954350000000001
      },
      {
        "key": "tahmkench",
        "name": "河流之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/TahmKench.png",
        "tier": 4,
        "rank": 39,
        "winRate": 50.0815,
        "pickRate": 1.7337399999999998,
        "banRate": 1.9271900000000002
      },
      {
        "key": "riven",
        "name": "放逐之刃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Riven.png",
        "tier": 4,
        "rank": 40,
        "winRate": 49.4894,
        "pickRate": 2.2629799999999998,
        "banRate": 1.66035
      },
      {
        "key": "sion",
        "name": "亡灵战神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Sion.png",
        "tier": 4,
        "rank": 41,
        "winRate": 48.897800000000004,
        "pickRate": 2.8887099999999997,
        "banRate": 0.49892000000000003
      },
      {
        "key": "yorick",
        "name": "牧魂人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Yorick.png",
        "tier": 4,
        "rank": 42,
        "winRate": 48.634100000000004,
        "pickRate": 2.92965,
        "banRate": 5.81737
      },
      {
        "key": "jayce",
        "name": "未来守护者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Jayce.png",
        "tier": 4,
        "rank": 43,
        "winRate": 47.0601,
        "pickRate": 5.86459,
        "banRate": 6.28416
      },
      {
        "key": "poppy",
        "name": "圣锤之毅",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Poppy.png",
        "tier": 4,
        "rank": 44,
        "winRate": 50.619499999999995,
        "pickRate": 0.9524960000000001,
        "banRate": 4.28376
      },
      {
        "key": "vladimir",
        "name": "猩红收割者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Vladimir.png",
        "tier": 4,
        "rank": 45,
        "winRate": 49.8508,
        "pickRate": 1.3592899999999999,
        "banRate": 5.74932
      },
      {
        "key": "volibear",
        "name": "不灭狂雷",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Volibear.png",
        "tier": 4,
        "rank": 46,
        "winRate": 48.3139,
        "pickRate": 3.10963,
        "banRate": 1.26541
      },
      {
        "key": "trundle",
        "name": "巨魔之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Trundle.png",
        "tier": 4,
        "rank": 47,
        "winRate": 49.3078,
        "pickRate": 1.8649200000000001,
        "banRate": 0.46627300000000005
      },
      {
        "key": "monkeyking",
        "name": "齐天大圣",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/MonkeyKing.png",
        "tier": 4,
        "rank": 48,
        "winRate": 50.29749999999999,
        "pickRate": 0.991589,
        "banRate": 3.41784
      },
      {
        "key": "ksante",
        "name": "纳祖芒荣耀",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/KSante.png",
        "tier": 4,
        "rank": 49,
        "winRate": 47.4728,
        "pickRate": 3.91829,
        "banRate": 2.59961
      },
      {
        "key": "heimerdinger",
        "name": "大发明家",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Heimerdinger.png",
        "tier": 4,
        "rank": 50,
        "winRate": 49.7187,
        "pickRate": 1.20193,
        "banRate": 1.7634699999999999
      },
      {
        "key": "ryze",
        "name": "符文法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ryze.png",
        "tier": 5,
        "rank": 51,
        "winRate": 49.849900000000005,
        "pickRate": 0.778298,
        "banRate": 0.503841
      },
      {
        "key": "swain",
        "name": "诺克萨斯统领",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Swain.png",
        "tier": 5,
        "rank": 52,
        "winRate": 50.02029999999999,
        "pickRate": 0.606313,
        "banRate": 1.48007
      },
      {
        "key": "rumble",
        "name": "机械公敌",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Rumble.png",
        "tier": 5,
        "rank": 53,
        "winRate": 47.491499999999995,
        "pickRate": 1.76177,
        "banRate": 0.691082
      },
      {
        "key": "cassiopeia",
        "name": "魔蛇之拥",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Cassiopeia.png",
        "tier": 5,
        "rank": 54,
        "winRate": 49.4309,
        "pickRate": 0.550869,
        "banRate": 1.72963
      },
      {
        "key": "masteryi",
        "name": "无极剑圣",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/MasterYi.png",
        "tier": 5,
        "rank": 55,
        "winRate": 49.2451,
        "pickRate": 0.513006,
        "banRate": 12.1863
      },
      {
        "key": "vayne",
        "name": "暗夜猎手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Vayne.png",
        "tier": 5,
        "rank": 56,
        "winRate": 46.7637,
        "pickRate": 1.82521,
        "banRate": 6.15677
      },
      {
        "key": "varus",
        "name": "惩戒之箭",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Varus.png",
        "tier": 5,
        "rank": 57,
        "winRate": 47.989,
        "pickRate": 0.9842129999999999,
        "banRate": 0.769979
      },
      {
        "key": "malzahar",
        "name": "虚空先知",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Malzahar.png",
        "tier": 5,
        "rank": 58,
        "winRate": 48.7693,
        "pickRate": 0.534396,
        "banRate": 7.9694899999999995
      },
      {
        "key": "udyr",
        "name": "兽灵行者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Udyr.png",
        "tier": 5,
        "rank": 59,
        "winRate": 47.7643,
        "pickRate": 0.5361170000000001,
        "banRate": 1.00918
      }
    ],
    "jungle": [
      {
        "key": "monkeyking",
        "name": "齐天大圣",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/MonkeyKing.png",
        "tier": 1,
        "rank": 1,
        "winRate": 51.8772,
        "pickRate": 5.9067,
        "banRate": 3.57836
      },
      {
        "key": "rammus",
        "name": "披甲龙龟",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Rammus.png",
        "tier": 1,
        "rank": 2,
        "winRate": 53.193400000000004,
        "pickRate": 2.0741300000000003,
        "banRate": 4.15259
      },
      {
        "key": "sylas",
        "name": "解脱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Sylas.png",
        "tier": 1,
        "rank": 3,
        "winRate": 50.491200000000006,
        "pickRate": 7.710160000000001,
        "banRate": 18.5695
      },
      {
        "key": "shyvana",
        "name": "龙血武姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Shyvana.png",
        "tier": 2,
        "rank": 4,
        "winRate": 51.1898,
        "pickRate": 5.25424,
        "banRate": 5.77803
      },
      {
        "key": "chogath",
        "name": "虚空恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Chogath.png",
        "tier": 2,
        "rank": 5,
        "winRate": 51.0995,
        "pickRate": 5.114330000000001,
        "banRate": 2.8547800000000003
      },
      {
        "key": "masteryi",
        "name": "无极剑圣",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/MasterYi.png",
        "tier": 2,
        "rank": 6,
        "winRate": 50.612100000000005,
        "pickRate": 6.177980000000001,
        "banRate": 14.072999999999999
      },
      {
        "key": "nocturne",
        "name": "永恒梦魇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Nocturne.png",
        "tier": 2,
        "rank": 7,
        "winRate": 50.644,
        "pickRate": 6.01392,
        "banRate": 13.011700000000001
      },
      {
        "key": "talon",
        "name": "刀锋之影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Talon.png",
        "tier": 2,
        "rank": 8,
        "winRate": 50.500699999999995,
        "pickRate": 6.4317,
        "banRate": 10.610999999999999
      },
      {
        "key": "briar",
        "name": "狂厄蔷薇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Briar.png",
        "tier": 2,
        "rank": 9,
        "winRate": 51.05309999999999,
        "pickRate": 4.5403,
        "banRate": 8.74466
      },
      {
        "key": "ekko",
        "name": "时间刺客",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ekko.png",
        "tier": 2,
        "rank": 10,
        "winRate": 50.87629999999999,
        "pickRate": 4.75339,
        "banRate": 2.26878
      },
      {
        "key": "leesin",
        "name": "盲僧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/LeeSin.png",
        "tier": 2,
        "rank": 11,
        "winRate": 48.9866,
        "pickRate": 13.6793,
        "banRate": 17.3214
      },
      {
        "key": "kayn",
        "name": "影流之镰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Kayn.png",
        "tier": 2,
        "rank": 12,
        "winRate": 50.078,
        "pickRate": 6.8019,
        "banRate": 5.11226
      },
      {
        "key": "viego",
        "name": "破败之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Viego.png",
        "tier": 2,
        "rank": 13,
        "winRate": 49.3826,
        "pickRate": 10.007299999999999,
        "banRate": 8.46941
      },
      {
        "key": "warwick",
        "name": "祖安怒兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Warwick.png",
        "tier": 3,
        "rank": 14,
        "winRate": 51.126099999999994,
        "pickRate": 2.98421,
        "banRate": 1.6571700000000003
      },
      {
        "key": "nidalee",
        "name": "狂野女猎手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Nidalee.png",
        "tier": 3,
        "rank": 15,
        "winRate": 50.9256,
        "pickRate": 3.06399,
        "banRate": 2.2360700000000002
      },
      {
        "key": "sejuani",
        "name": "北地之怒",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Sejuani.png",
        "tier": 3,
        "rank": 16,
        "winRate": 51.377399999999994,
        "pickRate": 2.1652500000000003,
        "banRate": 0.216752
      },
      {
        "key": "zac",
        "name": "生化魔人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Zac.png",
        "tier": 3,
        "rank": 17,
        "winRate": 50.8018,
        "pickRate": 2.91346,
        "banRate": 1.12192
      },
      {
        "key": "graves",
        "name": "法外狂徒",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Graves.png",
        "tier": 3,
        "rank": 18,
        "winRate": 48.8868,
        "pickRate": 8.88689,
        "banRate": 13.2691
      },
      {
        "key": "fiddlesticks",
        "name": "远古恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Fiddlesticks.png",
        "tier": 3,
        "rank": 19,
        "winRate": 51.115500000000004,
        "pickRate": 2.30735,
        "banRate": 1.32588
      },
      {
        "key": "jarvaniv",
        "name": "德玛西亚皇子",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/JarvanIV.png",
        "tier": 3,
        "rank": 20,
        "winRate": 49.5562,
        "pickRate": 6.184810000000001,
        "banRate": 1.2615100000000001
      },
      {
        "key": "khazix",
        "name": "虚空掠夺者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Khazix.png",
        "tier": 3,
        "rank": 21,
        "winRate": 49.7397,
        "pickRate": 5.294370000000001,
        "banRate": 3.0598899999999998
      },
      {
        "key": "evelynn",
        "name": "痛苦之拥",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Evelynn.png",
        "tier": 3,
        "rank": 22,
        "winRate": 50.96039999999999,
        "pickRate": 2.36871,
        "banRate": 2.12384
      },
      {
        "key": "reksai",
        "name": "虚空遁地兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/RekSai.png",
        "tier": 3,
        "rank": 23,
        "winRate": 51.7053,
        "pickRate": 1.45204,
        "banRate": 0.628107
      },
      {
        "key": "belveth",
        "name": "虚空女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Belveth.png",
        "tier": 3,
        "rank": 24,
        "winRate": 50.564299999999996,
        "pickRate": 2.96165,
        "banRate": 5.7442899999999995
      },
      {
        "key": "shaco",
        "name": "恶魔小丑",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Shaco.png",
        "tier": 3,
        "rank": 25,
        "winRate": 49.7943,
        "pickRate": 4.32781,
        "banRate": 16.9039
      },
      {
        "key": "lillia",
        "name": "含羞蓓蕾",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Lillia.png",
        "tier": 3,
        "rank": 26,
        "winRate": 50.548899999999996,
        "pickRate": 2.9442,
        "banRate": 1.9004
      },
      {
        "key": "hecarim",
        "name": "战争之影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Hecarim.png",
        "tier": 3,
        "rank": 27,
        "winRate": 49.438500000000005,
        "pickRate": 5.3002199999999995,
        "banRate": 6.64129
      },
      {
        "key": "udyr",
        "name": "兽灵行者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Udyr.png",
        "tier": 3,
        "rank": 28,
        "winRate": 50.80519999999999,
        "pickRate": 2.13609,
        "banRate": 1.08359
      },
      {
        "key": "vi",
        "name": "皮城执法官",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Vi.png",
        "tier": 3,
        "rank": 29,
        "winRate": 49.3157,
        "pickRate": 5.01809,
        "banRate": 1.73986
      },
      {
        "key": "nunu",
        "name": "雪原双子",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Nunu.png",
        "tier": 3,
        "rank": 30,
        "winRate": 50.748599999999996,
        "pickRate": 1.95532,
        "banRate": 0.47237700000000005
      },
      {
        "key": "qiyana",
        "name": "元素女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Qiyana.png",
        "tier": 4,
        "rank": 31,
        "winRate": 48.6357,
        "pickRate": 5.65933,
        "banRate": 8.079799999999999
      },
      {
        "key": "ivern",
        "name": "翠神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ivern.png",
        "tier": 4,
        "rank": 32,
        "winRate": 51.176,
        "pickRate": 1.14099,
        "banRate": 0.320616
      },
      {
        "key": "naafiri",
        "name": "百裂冥犬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Naafiri.png",
        "tier": 4,
        "rank": 33,
        "winRate": 49.274699999999996,
        "pickRate": 3.53177,
        "banRate": 12.2416
      },
      {
        "key": "zyra",
        "name": "荆棘之兴",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Zyra.png",
        "tier": 4,
        "rank": 34,
        "winRate": 50.9794,
        "pickRate": 1.22052,
        "banRate": 2.24647
      },
      {
        "key": "aatrox",
        "name": "暗裔剑魔",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Aatrox.png",
        "tier": 4,
        "rank": 35,
        "winRate": 51.090199999999996,
        "pickRate": 1.0517,
        "banRate": 6.64307
      },
      {
        "key": "amumu",
        "name": "殇之木乃伊",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Amumu.png",
        "tier": 4,
        "rank": 36,
        "winRate": 50.1446,
        "pickRate": 1.9406799999999997,
        "banRate": 0.8918519999999999
      },
      {
        "key": "trundle",
        "name": "巨魔之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Trundle.png",
        "tier": 4,
        "rank": 37,
        "winRate": 50.9454,
        "pickRate": 1.03218,
        "banRate": 0.45352600000000004
      },
      {
        "key": "skarner",
        "name": "上古领主",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Skarner.png",
        "tier": 4,
        "rank": 38,
        "winRate": 50.6988,
        "pickRate": 1.16087,
        "banRate": 0.26239
      },
      {
        "key": "diana",
        "name": "皎月女神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Diana.png",
        "tier": 4,
        "rank": 39,
        "winRate": 49.1192,
        "pickRate": 2.75575,
        "banRate": 2.93917
      },
      {
        "key": "darius",
        "name": "诺克萨斯之手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Darius.png",
        "tier": 4,
        "rank": 40,
        "winRate": 50.909099999999995,
        "pickRate": 0.751389,
        "banRate": 12.0867
      },
      {
        "key": "quinn",
        "name": "德玛西亚之翼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Quinn.png",
        "tier": 4,
        "rank": 41,
        "winRate": 50.429100000000005,
        "pickRate": 1.1796600000000002,
        "banRate": 0.811808
      },
      {
        "key": "elise",
        "name": "蜘蛛女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Elise.png",
        "tier": 4,
        "rank": 42,
        "winRate": 49.6124,
        "pickRate": 1.7466099999999998,
        "banRate": 0.9985249999999999
      },
      {
        "key": "kindred",
        "name": "永猎双子",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Kindred.png",
        "tier": 4,
        "rank": 43,
        "winRate": 49.1856,
        "pickRate": 2.14195,
        "banRate": 1.56537
      },
      {
        "key": "gragas",
        "name": "酒桶",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Gragas.png",
        "tier": 4,
        "rank": 44,
        "winRate": 50.688100000000006,
        "pickRate": 0.779933,
        "banRate": 0.683281
      },
      {
        "key": "xinzhao",
        "name": "德邦总管",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/XinZhao.png",
        "tier": 4,
        "rank": 45,
        "winRate": 48.9211,
        "pickRate": 2.25551,
        "banRate": 0.6136510000000001
      },
      {
        "key": "rengar",
        "name": "傲之追猎者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Rengar.png",
        "tier": 4,
        "rank": 46,
        "winRate": 48.0512,
        "pickRate": 3.64278,
        "banRate": 6.7740800000000005
      },
      {
        "key": "taliyah",
        "name": "岩雀",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Taliyah.png",
        "tier": 4,
        "rank": 47,
        "winRate": 50.173500000000004,
        "pickRate": 0.878613,
        "banRate": 0.351493
      },
      {
        "key": "gwen",
        "name": "灵罗娃娃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Gwen.png",
        "tier": 4,
        "rank": 48,
        "winRate": 49.9225,
        "pickRate": 0.9441160000000001,
        "banRate": 3.54758
      },
      {
        "key": "zed",
        "name": "影流之主",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Zed.png",
        "tier": 4,
        "rank": 49,
        "winRate": 47.586099999999995,
        "pickRate": 2.78941,
        "banRate": 24.725
      },
      {
        "key": "maokai",
        "name": "扭曲树精",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Maokai.png",
        "tier": 5,
        "rank": 50,
        "winRate": 50.12370000000001,
        "pickRate": 0.591597,
        "banRate": 0.15216400000000002
      },
      {
        "key": "fizz",
        "name": "潮汐海灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Fizz.png",
        "tier": 5,
        "rank": 51,
        "winRate": 49.506,
        "pickRate": 0.703696,
        "banRate": 6.374739999999999
      },
      {
        "key": "karthus",
        "name": "死亡颂唱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Karthus.png",
        "tier": 5,
        "rank": 52,
        "winRate": 48.417,
        "pickRate": 1.38312,
        "banRate": 0.8769570000000001
      },
      {
        "key": "teemo",
        "name": "迅捷斥候",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Teemo.png",
        "tier": 5,
        "rank": 53,
        "winRate": 49.3384,
        "pickRate": 0.60843,
        "banRate": 5.66706
      },
      {
        "key": "volibear",
        "name": "不灭狂雷",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Volibear.png",
        "tier": 5,
        "rank": 54,
        "winRate": 48.788199999999996,
        "pickRate": 0.8858100000000001,
        "banRate": 1.2029
      },
      {
        "key": "jayce",
        "name": "未来守护者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Jayce.png",
        "tier": 5,
        "rank": 55,
        "winRate": 47.4692,
        "pickRate": 1.73991,
        "banRate": 6.1838
      },
      {
        "key": "jax",
        "name": "武器大师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Jax.png",
        "tier": 5,
        "rank": 56,
        "winRate": 47.5222,
        "pickRate": 1.59499,
        "banRate": 10.0692
      },
      {
        "key": "ambessa",
        "name": "铁血狼母",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ambessa.png",
        "tier": 5,
        "rank": 57,
        "winRate": 47.4249,
        "pickRate": 0.9544840000000001,
        "banRate": 4.7603
      },
      {
        "key": "malphite",
        "name": "熔岩巨兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Malphite.png",
        "tier": 5,
        "rank": 58,
        "winRate": 47.3953,
        "pickRate": 0.739923,
        "banRate": 14.2405
      },
      {
        "key": "pantheon",
        "name": "不屈之枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Pantheon.png",
        "tier": 5,
        "rank": 59,
        "winRate": 47.2256,
        "pickRate": 0.890323,
        "banRate": 2.24346
      },
      {
        "key": "locke",
        "name": "灰烬驱魔人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Locke.png",
        "tier": 5,
        "rank": 60,
        "winRate": 44.3942,
        "pickRate": 0.7289450000000001,
        "banRate": 29.8388
      }
    ],
    "mid": [
      {
        "key": "ahri",
        "name": "九尾妖狐",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ahri.png",
        "tier": 1,
        "rank": 1,
        "winRate": 51.3309,
        "pickRate": 9.25826,
        "banRate": 3.10789
      },
      {
        "key": "xerath",
        "name": "远古巫灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Xerath.png",
        "tier": 1,
        "rank": 2,
        "winRate": 51.7362,
        "pickRate": 4.4292,
        "banRate": 10.218399999999999
      },
      {
        "key": "fizz",
        "name": "潮汐海灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Fizz.png",
        "tier": 1,
        "rank": 3,
        "winRate": 51.433099999999996,
        "pickRate": 5.04365,
        "banRate": 7.0803
      },
      {
        "key": "ekko",
        "name": "时间刺客",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ekko.png",
        "tier": 1,
        "rank": 4,
        "winRate": 51.8314,
        "pickRate": 3.9765599999999997,
        "banRate": 2.2608900000000003
      },
      {
        "key": "vex",
        "name": "愁云使者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Vex.png",
        "tier": 1,
        "rank": 5,
        "winRate": 52.234,
        "pickRate": 3.08029,
        "banRate": 3.7635500000000004
      },
      {
        "key": "katarina",
        "name": "不祥之刃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Katarina.png",
        "tier": 1,
        "rank": 6,
        "winRate": 50.6221,
        "pickRate": 6.75255,
        "banRate": 11.801599999999999
      },
      {
        "key": "viktor",
        "name": "奥术先驱",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Viktor.png",
        "tier": 1,
        "rank": 7,
        "winRate": 49.8674,
        "pickRate": 9.34981,
        "banRate": 15.3451
      },
      {
        "key": "twistedfate",
        "name": "卡牌大师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/TwistedFate.png",
        "tier": 1,
        "rank": 8,
        "winRate": 51.318299999999994,
        "pickRate": 4.88317,
        "banRate": 1.10837
      },
      {
        "key": "lissandra",
        "name": "冰霜女巫",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Lissandra.png",
        "tier": 1,
        "rank": 9,
        "winRate": 50.981500000000004,
        "pickRate": 5.55573,
        "banRate": 3.8284899999999995
      },
      {
        "key": "zed",
        "name": "影流之主",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Zed.png",
        "tier": 1,
        "rank": 10,
        "winRate": 49.7585,
        "pickRate": 8.50703,
        "banRate": 25.0668
      },
      {
        "key": "yone",
        "name": "封魔剑魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Yone.png",
        "tier": 1,
        "rank": 11,
        "winRate": 50.020900000000005,
        "pickRate": 7.57769,
        "banRate": 10.617
      },
      {
        "key": "leblanc",
        "name": "诡术妖姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Leblanc.png",
        "tier": 1,
        "rank": 12,
        "winRate": 50.4968,
        "pickRate": 5.39574,
        "banRate": 16.1067
      },
      {
        "key": "syndra",
        "name": "暗黑元首",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Syndra.png",
        "tier": 1,
        "rank": 13,
        "winRate": 49.807,
        "pickRate": 7.749599999999999,
        "banRate": 11.158800000000001
      },
      {
        "key": "lux",
        "name": "光辉女郎",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Lux.png",
        "tier": 1,
        "rank": 14,
        "winRate": 51.074299999999994,
        "pickRate": 3.96076,
        "banRate": 3.4525300000000003
      },
      {
        "key": "yasuo",
        "name": "疾风剑豪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Yasuo.png",
        "tier": 2,
        "rank": 15,
        "winRate": 49.0819,
        "pickRate": 8.70703,
        "banRate": 20.9454
      },
      {
        "key": "locke",
        "name": "灰烬驱魔人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Locke.png",
        "tier": 2,
        "rank": 16,
        "winRate": 49.4441,
        "pickRate": 6.867439999999999,
        "banRate": 31.613799999999998
      },
      {
        "key": "vladimir",
        "name": "猩红收割者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Vladimir.png",
        "tier": 2,
        "rank": 17,
        "winRate": 50.6887,
        "pickRate": 4.04246,
        "banRate": 5.84438
      },
      {
        "key": "hwei",
        "name": "异画师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Hwei.png",
        "tier": 2,
        "rank": 18,
        "winRate": 50.733399999999996,
        "pickRate": 3.92076,
        "banRate": 2.64953
      },
      {
        "key": "akali",
        "name": "离群之刺",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Akali.png",
        "tier": 2,
        "rank": 19,
        "winRate": 49.5373,
        "pickRate": 5.755,
        "banRate": 16.2384
      },
      {
        "key": "sylas",
        "name": "解脱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Sylas.png",
        "tier": 2,
        "rank": 20,
        "winRate": 48.9653,
        "pickRate": 6.85017,
        "banRate": 18.5738
      },
      {
        "key": "nasus",
        "name": "沙漠死神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Nasus.png",
        "tier": 2,
        "rank": 21,
        "winRate": 50.37740000000001,
        "pickRate": 2.51252,
        "banRate": 37.9251
      },
      {
        "key": "veigar",
        "name": "邪恶小法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Veigar.png",
        "tier": 2,
        "rank": 22,
        "winRate": 50.4178,
        "pickRate": 3.5642899999999997,
        "banRate": 1.6770899999999997
      },
      {
        "key": "malzahar",
        "name": "虚空先知",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Malzahar.png",
        "tier": 2,
        "rank": 23,
        "winRate": 49.6168,
        "pickRate": 5.2032799999999995,
        "banRate": 8.89066
      },
      {
        "key": "diana",
        "name": "皎月女神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Diana.png",
        "tier": 2,
        "rank": 24,
        "winRate": 50.4919,
        "pickRate": 3.04017,
        "banRate": 2.9420800000000003
      },
      {
        "key": "zoe",
        "name": "暮光星灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Zoe.png",
        "tier": 2,
        "rank": 25,
        "winRate": 50.5989,
        "pickRate": 2.80139,
        "banRate": 3.30177
      },
      {
        "key": "gwen",
        "name": "灵罗娃娃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Gwen.png",
        "tier": 2,
        "rank": 26,
        "winRate": 53.186299999999996,
        "pickRate": 0.595244,
        "banRate": 3.32118
      },
      {
        "key": "qiyana",
        "name": "元素女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Qiyana.png",
        "tier": 2,
        "rank": 27,
        "winRate": 50.1892,
        "pickRate": 2.85914,
        "banRate": 8.04322
      },
      {
        "key": "kassadin",
        "name": "虚空行者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Kassadin.png",
        "tier": 2,
        "rank": 28,
        "winRate": 49.8538,
        "pickRate": 3.61779,
        "banRate": 3.4490399999999997
      },
      {
        "key": "annie",
        "name": "黑暗之女",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Annie.png",
        "tier": 2,
        "rank": 29,
        "winRate": 50.9281,
        "pickRate": 1.8536899999999998,
        "banRate": 0.49639300000000003
      },
      {
        "key": "galio",
        "name": "正义巨像",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Galio.png",
        "tier": 2,
        "rank": 30,
        "winRate": 49.4674,
        "pickRate": 3.82374,
        "banRate": 1.69892
      },
      {
        "key": "pantheon",
        "name": "不屈之枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Pantheon.png",
        "tier": 2,
        "rank": 31,
        "winRate": 51.99399999999999,
        "pickRate": 0.8139620000000001,
        "banRate": 2.2485600000000003
      },
      {
        "key": "aurora",
        "name": "双界灵兔",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Aurora.png",
        "tier": 3,
        "rank": 32,
        "winRate": 50.2483,
        "pickRate": 1.9833,
        "banRate": 1.0548899999999999
      },
      {
        "key": "anivia",
        "name": "冰晶凤凰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Anivia.png",
        "tier": 3,
        "rank": 33,
        "winRate": 49.7224,
        "pickRate": 2.2558700000000003,
        "banRate": 2.47694
      },
      {
        "key": "velkoz",
        "name": "虚空之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Velkoz.png",
        "tier": 3,
        "rank": 34,
        "winRate": 51.4928,
        "pickRate": 0.8551770000000001,
        "banRate": 1.50799
      },
      {
        "key": "akshan",
        "name": "影哨",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Akshan.png",
        "tier": 3,
        "rank": 35,
        "winRate": 49.693,
        "pickRate": 2.13879,
        "banRate": 2.03167
      },
      {
        "key": "gragas",
        "name": "酒桶",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Gragas.png",
        "tier": 3,
        "rank": 36,
        "winRate": 52.1855,
        "pickRate": 0.547951,
        "banRate": 0.674282
      },
      {
        "key": "aurelionsol",
        "name": "铸星龙王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/AurelionSol.png",
        "tier": 3,
        "rank": 37,
        "winRate": 49.850100000000005,
        "pickRate": 1.865,
        "banRate": 0.598377
      },
      {
        "key": "talon",
        "name": "刀锋之影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Talon.png",
        "tier": 3,
        "rank": 38,
        "winRate": 50.108399999999996,
        "pickRate": 1.40143,
        "banRate": 10.3027
      },
      {
        "key": "garen",
        "name": "德玛西亚之力",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Garen.png",
        "tier": 3,
        "rank": 39,
        "winRate": 51.663000000000004,
        "pickRate": 0.5556099999999999,
        "banRate": 4.4498299999999995
      },
      {
        "key": "irelia",
        "name": "刀锋舞者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Irelia.png",
        "tier": 3,
        "rank": 40,
        "winRate": 48.4591,
        "pickRate": 2.77732,
        "banRate": 12.512
      },
      {
        "key": "malphite",
        "name": "熔岩巨兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Malphite.png",
        "tier": 3,
        "rank": 41,
        "winRate": 49.9685,
        "pickRate": 0.771046,
        "banRate": 14.4255
      },
      {
        "key": "brand",
        "name": "复仇焰魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Brand.png",
        "tier": 3,
        "rank": 42,
        "winRate": 50.568400000000004,
        "pickRate": 0.641687,
        "banRate": 2.68498
      },
      {
        "key": "taliyah",
        "name": "岩雀",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Taliyah.png",
        "tier": 3,
        "rank": 43,
        "winRate": 49.1746,
        "pickRate": 1.39194,
        "banRate": 0.356731
      },
      {
        "key": "kayle",
        "name": "正义天使",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Kayle.png",
        "tier": 3,
        "rank": 44,
        "winRate": 50.6599,
        "pickRate": 0.59877,
        "banRate": 1.294
      },
      {
        "key": "cassiopeia",
        "name": "魔蛇之拥",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Cassiopeia.png",
        "tier": 4,
        "rank": 45,
        "winRate": 48.629099999999994,
        "pickRate": 1.56081,
        "banRate": 1.8428
      },
      {
        "key": "ziggs",
        "name": "爆破鬼才",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ziggs.png",
        "tier": 4,
        "rank": 46,
        "winRate": 50.056900000000006,
        "pickRate": 0.640471,
        "banRate": 1.0600999999999998
      },
      {
        "key": "ryze",
        "name": "符文法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ryze.png",
        "tier": 4,
        "rank": 47,
        "winRate": 46.9165,
        "pickRate": 3.2311699999999997,
        "banRate": 0.530103
      },
      {
        "key": "azir",
        "name": "沙漠皇帝",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Azir.png",
        "tier": 4,
        "rank": 48,
        "winRate": 47.92,
        "pickRate": 1.81783,
        "banRate": 0.282291
      },
      {
        "key": "naafiri",
        "name": "百裂冥犬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Naafiri.png",
        "tier": 4,
        "rank": 49,
        "winRate": 49.2821,
        "pickRate": 0.762049,
        "banRate": 11.801300000000001
      },
      {
        "key": "swain",
        "name": "诺克萨斯统领",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Swain.png",
        "tier": 4,
        "rank": 50,
        "winRate": 49.6591,
        "pickRate": 0.64193,
        "banRate": 1.48267
      },
      {
        "key": "orianna",
        "name": "发条魔灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Orianna.png",
        "tier": 4,
        "rank": 51,
        "winRate": 45.9698,
        "pickRate": 3.73012,
        "banRate": 0.42319799999999996
      },
      {
        "key": "jayce",
        "name": "未来守护者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Jayce.png",
        "tier": 4,
        "rank": 52,
        "winRate": 48.352000000000004,
        "pickRate": 0.7819879999999999,
        "banRate": 6.08578
      },
      {
        "key": "tristana",
        "name": "麦林炮手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Tristana.png",
        "tier": 4,
        "rank": 53,
        "winRate": 47.6092,
        "pickRate": 1.11876,
        "banRate": 6.97254
      },
      {
        "key": "gangplank",
        "name": "海洋之灾",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Gangplank.png",
        "tier": 4,
        "rank": 54,
        "winRate": 48.9724,
        "pickRate": 0.520596,
        "banRate": 7.318040000000001
      },
      {
        "key": "sion",
        "name": "亡灵战神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Sion.png",
        "tier": 4,
        "rank": 55,
        "winRate": 49.053999999999995,
        "pickRate": 0.520474,
        "banRate": 0.451512
      },
      {
        "key": "mel",
        "name": "流光镜影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Mel.png",
        "tier": 5,
        "rank": 56,
        "winRate": 45.1054,
        "pickRate": 2.09272,
        "banRate": 17.1875
      },
      {
        "key": "smolder",
        "name": "炽炎雏龙",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Smolder.png",
        "tier": 5,
        "rank": 57,
        "winRate": 43.8303,
        "pickRate": 0.530079,
        "banRate": 1.26427
      }
    ],
    "adc": [
      {
        "key": "jinx",
        "name": "暴走萝莉",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Jinx.png",
        "tier": 0,
        "rank": 1,
        "winRate": 52.3035,
        "pickRate": 17.497799999999998,
        "banRate": 7.72829
      },
      {
        "key": "tristana",
        "name": "麦林炮手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Tristana.png",
        "tier": 1,
        "rank": 2,
        "winRate": 51.127500000000005,
        "pickRate": 10.524899999999999,
        "banRate": 7.21365
      },
      {
        "key": "kaisa",
        "name": "虚空之女",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Kaisa.png",
        "tier": 1,
        "rank": 3,
        "winRate": 49.6608,
        "pickRate": 18.9961,
        "banRate": 4.4567000000000005
      },
      {
        "key": "yunara",
        "name": "不破之誓",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Yunara.png",
        "tier": 1,
        "rank": 4,
        "winRate": 50.229,
        "pickRate": 12.828000000000001,
        "banRate": 3.6317399999999997
      },
      {
        "key": "xayah",
        "name": "逆羽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Xayah.png",
        "tier": 1,
        "rank": 5,
        "winRate": 51.9772,
        "pickRate": 4.85755,
        "banRate": 0.860645
      },
      {
        "key": "jhin",
        "name": "戏命师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Jhin.png",
        "tier": 1,
        "rank": 6,
        "winRate": 49.4649,
        "pickRate": 17.2499,
        "banRate": 1.56109
      },
      {
        "key": "caitlyn",
        "name": "皮城女警",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Caitlyn.png",
        "tier": 2,
        "rank": 7,
        "winRate": 48.9657,
        "pickRate": 14.9731,
        "banRate": 21.3056
      },
      {
        "key": "ashe",
        "name": "寒冰射手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ashe.png",
        "tier": 2,
        "rank": 8,
        "winRate": 50.6718,
        "pickRate": 6.66336,
        "banRate": 1.8653099999999998
      },
      {
        "key": "twitch",
        "name": "瘟疫之源",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Twitch.png",
        "tier": 2,
        "rank": 9,
        "winRate": 50.807100000000005,
        "pickRate": 5.29241,
        "banRate": 6.976730000000001
      },
      {
        "key": "viktor",
        "name": "奥术先驱",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Viktor.png",
        "tier": 2,
        "rank": 10,
        "winRate": 51.5509,
        "pickRate": 2.8553100000000002,
        "banRate": 15.298
      },
      {
        "key": "zeri",
        "name": "祖安花火",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Zeri.png",
        "tier": 2,
        "rank": 11,
        "winRate": 51.0578,
        "pickRate": 4.659549999999999,
        "banRate": 0.864479
      },
      {
        "key": "yasuo",
        "name": "疾风剑豪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Yasuo.png",
        "tier": 2,
        "rank": 12,
        "winRate": 51.547200000000004,
        "pickRate": 2.29279,
        "banRate": 20.6982
      },
      {
        "key": "kogmaw",
        "name": "深渊巨口",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/KogMaw.png",
        "tier": 2,
        "rank": 13,
        "winRate": 52.417899999999996,
        "pickRate": 1.8189600000000001,
        "banRate": 0.380112
      },
      {
        "key": "sivir",
        "name": "战争女神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Sivir.png",
        "tier": 3,
        "rank": 14,
        "winRate": 50.4616,
        "pickRate": 4.35187,
        "banRate": 1.54721
      },
      {
        "key": "lucian",
        "name": "圣枪游侠",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Lucian.png",
        "tier": 3,
        "rank": 15,
        "winRate": 48.7749,
        "pickRate": 8.6767,
        "banRate": 2.74625
      },
      {
        "key": "aurelionsol",
        "name": "铸星龙王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/AurelionSol.png",
        "tier": 3,
        "rank": 16,
        "winRate": 52.8743,
        "pickRate": 0.73253,
        "banRate": 0.568806
      },
      {
        "key": "hwei",
        "name": "异画师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Hwei.png",
        "tier": 3,
        "rank": 17,
        "winRate": 52.051199999999994,
        "pickRate": 1.11177,
        "banRate": 2.55404
      },
      {
        "key": "missfortune",
        "name": "赏金猎人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/MissFortune.png",
        "tier": 3,
        "rank": 18,
        "winRate": 49.223099999999995,
        "pickRate": 5.66127,
        "banRate": 0.668605
      },
      {
        "key": "velkoz",
        "name": "虚空之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Velkoz.png",
        "tier": 3,
        "rank": 19,
        "winRate": 53.1264,
        "pickRate": 0.555763,
        "banRate": 1.4409800000000001
      },
      {
        "key": "karthus",
        "name": "死亡颂唱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Karthus.png",
        "tier": 3,
        "rank": 20,
        "winRate": 53.0492,
        "pickRate": 0.591599,
        "banRate": 0.762641
      },
      {
        "key": "lux",
        "name": "光辉女郎",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Lux.png",
        "tier": 3,
        "rank": 21,
        "winRate": 52.074299999999994,
        "pickRate": 0.9219679999999999,
        "banRate": 3.26274
      },
      {
        "key": "katarina",
        "name": "不祥之刃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Katarina.png",
        "tier": 3,
        "rank": 22,
        "winRate": 51.891600000000004,
        "pickRate": 0.899404,
        "banRate": 11.182300000000001
      },
      {
        "key": "veigar",
        "name": "邪恶小法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Veigar.png",
        "tier": 3,
        "rank": 23,
        "winRate": 50.9889,
        "pickRate": 1.7021600000000001,
        "banRate": 1.65311
      },
      {
        "key": "swain",
        "name": "诺克萨斯统领",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Swain.png",
        "tier": 3,
        "rank": 24,
        "winRate": 52.108200000000004,
        "pickRate": 0.869963,
        "banRate": 1.52822
      },
      {
        "key": "aphelios",
        "name": "残月之肃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Aphelios.png",
        "tier": 3,
        "rank": 25,
        "winRate": 49.1856,
        "pickRate": 4.64459,
        "banRate": 1.36897
      },
      {
        "key": "samira",
        "name": "沙漠玫瑰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Samira.png",
        "tier": 3,
        "rank": 26,
        "winRate": 49.452600000000004,
        "pickRate": 3.7911599999999996,
        "banRate": 5.04231
      },
      {
        "key": "draven",
        "name": "荣耀行刑官",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Draven.png",
        "tier": 3,
        "rank": 27,
        "winRate": 49.501400000000004,
        "pickRate": 3.5453699999999997,
        "banRate": 11.310099999999998
      },
      {
        "key": "nilah",
        "name": "不羁之悦",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Nilah.png",
        "tier": 3,
        "rank": 28,
        "winRate": 51.489700000000006,
        "pickRate": 1.09343,
        "banRate": 1.65205
      },
      {
        "key": "ziggs",
        "name": "爆破鬼才",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ziggs.png",
        "tier": 3,
        "rank": 29,
        "winRate": 50.5062,
        "pickRate": 1.83525,
        "banRate": 1.14283
      },
      {
        "key": "seraphine",
        "name": "星籁歌姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Seraphine.png",
        "tier": 3,
        "rank": 30,
        "winRate": 50.7055,
        "pickRate": 1.29119,
        "banRate": 8.84832
      },
      {
        "key": "xerath",
        "name": "远古巫灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Xerath.png",
        "tier": 3,
        "rank": 31,
        "winRate": 50.8684,
        "pickRate": 1.16015,
        "banRate": 9.98935
      },
      {
        "key": "syndra",
        "name": "暗黑元首",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Syndra.png",
        "tier": 3,
        "rank": 32,
        "winRate": 50.019400000000005,
        "pickRate": 1.8639599999999998,
        "banRate": 11.0649
      },
      {
        "key": "smolder",
        "name": "炽炎雏龙",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Smolder.png",
        "tier": 4,
        "rank": 33,
        "winRate": 48.9432,
        "pickRate": 3.4479999999999995,
        "banRate": 1.41574
      },
      {
        "key": "kalista",
        "name": "复仇之矛",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Kalista.png",
        "tier": 4,
        "rank": 34,
        "winRate": 48.8413,
        "pickRate": 3.4574100000000003,
        "banRate": 0.9278329999999999
      },
      {
        "key": "brand",
        "name": "复仇焰魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Brand.png",
        "tier": 4,
        "rank": 35,
        "winRate": 51.826499999999996,
        "pickRate": 0.5813429999999999,
        "banRate": 2.48226
      },
      {
        "key": "ezreal",
        "name": "探险家",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ezreal.png",
        "tier": 4,
        "rank": 36,
        "winRate": 46.1513,
        "pickRate": 11.7065,
        "banRate": 4.37889
      },
      {
        "key": "vladimir",
        "name": "猩红收割者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Vladimir.png",
        "tier": 4,
        "rank": 37,
        "winRate": 50.871599999999994,
        "pickRate": 0.602217,
        "banRate": 5.50377
      },
      {
        "key": "varus",
        "name": "惩戒之箭",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Varus.png",
        "tier": 4,
        "rank": 38,
        "winRate": 48.025099999999995,
        "pickRate": 2.9662,
        "banRate": 0.814433
      },
      {
        "key": "vayne",
        "name": "暗夜猎手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Vayne.png",
        "tier": 4,
        "rank": 39,
        "winRate": 47.7791,
        "pickRate": 3.18098,
        "banRate": 6.231260000000001
      },
      {
        "key": "corki",
        "name": "英勇投弹手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Corki.png",
        "tier": 5,
        "rank": 40,
        "winRate": 47.6034,
        "pickRate": 1.61613,
        "banRate": 0.25289100000000003
      },
      {
        "key": "mel",
        "name": "流光镜影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Mel.png",
        "tier": 5,
        "rank": 41,
        "winRate": 45.7636,
        "pickRate": 1.45541,
        "banRate": 17.0626
      }
    ],
    "support": [
      {
        "key": "thresh",
        "name": "魂锁典狱长",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Thresh.png",
        "tier": 1,
        "rank": 1,
        "winRate": 51.854299999999995,
        "pickRate": 14.435,
        "banRate": 11.7769
      },
      {
        "key": "braum",
        "name": "弗雷尔卓德之心",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Braum.png",
        "tier": 1,
        "rank": 2,
        "winRate": 52.6307,
        "pickRate": 5.20467,
        "banRate": 5.3621
      },
      {
        "key": "leona",
        "name": "曙光女神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Leona.png",
        "tier": 1,
        "rank": 3,
        "winRate": 51.644999999999996,
        "pickRate": 7.82859,
        "banRate": 8.47143
      },
      {
        "key": "lulu",
        "name": "仙灵女巫",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Lulu.png",
        "tier": 1,
        "rank": 4,
        "winRate": 50.349900000000005,
        "pickRate": 12.7611,
        "banRate": 10.6273
      },
      {
        "key": "nami",
        "name": "唤潮鲛姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Nami.png",
        "tier": 2,
        "rank": 5,
        "winRate": 50.8747,
        "pickRate": 9.180760000000001,
        "banRate": 1.1133199999999999
      },
      {
        "key": "blitzcrank",
        "name": "蒸汽机器人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Blitzcrank.png",
        "tier": 2,
        "rank": 6,
        "winRate": 51.209199999999996,
        "pickRate": 6.91604,
        "banRate": 12.815399999999999
      },
      {
        "key": "seraphine",
        "name": "星籁歌姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Seraphine.png",
        "tier": 2,
        "rank": 7,
        "winRate": 50.694300000000005,
        "pickRate": 7.87953,
        "banRate": 9.06028
      },
      {
        "key": "senna",
        "name": "涤魂圣枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Senna.png",
        "tier": 2,
        "rank": 8,
        "winRate": 51.456100000000006,
        "pickRate": 5.6420699999999995,
        "banRate": 1.66265
      },
      {
        "key": "rell",
        "name": "镕铁少女",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Rell.png",
        "tier": 2,
        "rank": 9,
        "winRate": 51.94499999999999,
        "pickRate": 3.9129400000000003,
        "banRate": 1.35583
      },
      {
        "key": "milio",
        "name": "明烛",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Milio.png",
        "tier": 2,
        "rank": 10,
        "winRate": 50.5696,
        "pickRate": 7.25427,
        "banRate": 4.50475
      },
      {
        "key": "alistar",
        "name": "牛头酋长",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Alistar.png",
        "tier": 2,
        "rank": 11,
        "winRate": 51.2509,
        "pickRate": 5.0586199999999995,
        "banRate": 1.78877
      },
      {
        "key": "janna",
        "name": "风暴之怒",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Janna.png",
        "tier": 2,
        "rank": 12,
        "winRate": 51.33560000000001,
        "pickRate": 4.81648,
        "banRate": 0.898433
      },
      {
        "key": "nautilus",
        "name": "深海泰坦",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Nautilus.png",
        "tier": 2,
        "rank": 13,
        "winRate": 49.1312,
        "pickRate": 10.265,
        "banRate": 14.875
      },
      {
        "key": "soraka",
        "name": "众星之子",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Soraka.png",
        "tier": 2,
        "rank": 14,
        "winRate": 50.5001,
        "pickRate": 4.95747,
        "banRate": 2.2775299999999996
      },
      {
        "key": "sona",
        "name": "琴瑟仙女",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Sona.png",
        "tier": 2,
        "rank": 15,
        "winRate": 51.558099999999996,
        "pickRate": 2.75109,
        "banRate": 0.26916599999999996
      },
      {
        "key": "zilean",
        "name": "时光守护者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Zilean.png",
        "tier": 2,
        "rank": 16,
        "winRate": 51.0952,
        "pickRate": 3.15359,
        "banRate": 1.98529
      },
      {
        "key": "rakan",
        "name": "幻翎",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Rakan.png",
        "tier": 3,
        "rank": 17,
        "winRate": 50.692400000000006,
        "pickRate": 3.48281,
        "banRate": 0.34628
      },
      {
        "key": "morgana",
        "name": "堕落天使",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Morgana.png",
        "tier": 3,
        "rank": 18,
        "winRate": 49.794,
        "pickRate": 4.49145,
        "banRate": 16.864
      },
      {
        "key": "pyke",
        "name": "血港鬼影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Pyke.png",
        "tier": 3,
        "rank": 19,
        "winRate": 48.9041,
        "pickRate": 6.26943,
        "banRate": 24.9566
      },
      {
        "key": "lux",
        "name": "光辉女郎",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Lux.png",
        "tier": 3,
        "rank": 20,
        "winRate": 49.0222,
        "pickRate": 6.50972,
        "banRate": 3.46447
      },
      {
        "key": "karma",
        "name": "天启者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Karma.png",
        "tier": 3,
        "rank": 21,
        "winRate": 48.6276,
        "pickRate": 7.19012,
        "banRate": 3.2429300000000003
      },
      {
        "key": "velkoz",
        "name": "虚空之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Velkoz.png",
        "tier": 3,
        "rank": 22,
        "winRate": 50.6235,
        "pickRate": 2.70052,
        "banRate": 1.60357
      },
      {
        "key": "bard",
        "name": "星界游神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Bard.png",
        "tier": 3,
        "rank": 23,
        "winRate": 49.2641,
        "pickRate": 4.80217,
        "banRate": 2.28772
      },
      {
        "key": "taric",
        "name": "瓦洛兰之盾",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Taric.png",
        "tier": 3,
        "rank": 24,
        "winRate": 51.6384,
        "pickRate": 1.30999,
        "banRate": 0.239375
      },
      {
        "key": "poppy",
        "name": "圣锤之毅",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Poppy.png",
        "tier": 3,
        "rank": 25,
        "winRate": 50.732299999999995,
        "pickRate": 1.8950399999999998,
        "banRate": 4.34304
      },
      {
        "key": "maokai",
        "name": "扭曲树精",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Maokai.png",
        "tier": 3,
        "rank": 26,
        "winRate": 50.8171,
        "pickRate": 1.6756,
        "banRate": 0.164801
      },
      {
        "key": "yuumi",
        "name": "魔法猫咪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Yuumi.png",
        "tier": 3,
        "rank": 27,
        "winRate": 48.1772,
        "pickRate": 5.55239,
        "banRate": 7.40404
      },
      {
        "key": "renata",
        "name": "炼金男爵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Renata.png",
        "tier": 3,
        "rank": 28,
        "winRate": 50.5048,
        "pickRate": 1.7103799999999998,
        "banRate": 0.229437
      },
      {
        "key": "xerath",
        "name": "远古巫灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Xerath.png",
        "tier": 3,
        "rank": 29,
        "winRate": 48.8133,
        "pickRate": 2.91034,
        "banRate": 10.1873
      },
      {
        "key": "zyra",
        "name": "荆棘之兴",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Zyra.png",
        "tier": 3,
        "rank": 30,
        "winRate": 49.242200000000004,
        "pickRate": 2.44987,
        "banRate": 2.3103599999999997
      },
      {
        "key": "tahmkench",
        "name": "河流之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/TahmKench.png",
        "tier": 3,
        "rank": 31,
        "winRate": 49.3651,
        "pickRate": 2.22463,
        "banRate": 1.9384100000000002
      },
      {
        "key": "brand",
        "name": "复仇焰魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Brand.png",
        "tier": 3,
        "rank": 32,
        "winRate": 49.025400000000005,
        "pickRate": 2.37944,
        "banRate": 2.8603199999999998
      },
      {
        "key": "pantheon",
        "name": "不屈之枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Pantheon.png",
        "tier": 3,
        "rank": 33,
        "winRate": 48.0556,
        "pickRate": 3.52093,
        "banRate": 2.39628
      },
      {
        "key": "amumu",
        "name": "殇之木乃伊",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Amumu.png",
        "tier": 3,
        "rank": 34,
        "winRate": 51.6533,
        "pickRate": 0.600595,
        "banRate": 0.794544
      },
      {
        "key": "swain",
        "name": "诺克萨斯统领",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Swain.png",
        "tier": 3,
        "rank": 35,
        "winRate": 48.469,
        "pickRate": 2.66278,
        "banRate": 1.62721
      },
      {
        "key": "elise",
        "name": "蜘蛛女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Elise.png",
        "tier": 4,
        "rank": 36,
        "winRate": 50.53680000000001,
        "pickRate": 0.631927,
        "banRate": 0.9300430000000001
      },
      {
        "key": "galio",
        "name": "正义巨像",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Galio.png",
        "tier": 4,
        "rank": 37,
        "winRate": 49.809599999999996,
        "pickRate": 0.8097979999999999,
        "banRate": 1.58335
      },
      {
        "key": "sylas",
        "name": "解脱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Sylas.png",
        "tier": 4,
        "rank": 38,
        "winRate": 48.317,
        "pickRate": 1.2935800000000002,
        "banRate": 17.8432
      },
      {
        "key": "neeko",
        "name": "万花通灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Neeko.png",
        "tier": 4,
        "rank": 39,
        "winRate": 48.4557,
        "pickRate": 1.54953,
        "banRate": 0.638436
      },
      {
        "key": "hwei",
        "name": "异画师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Hwei.png",
        "tier": 4,
        "rank": 40,
        "winRate": 49.8698,
        "pickRate": 0.663134,
        "banRate": 2.49779
      },
      {
        "key": "shen",
        "name": "暮光之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Shen.png",
        "tier": 4,
        "rank": 41,
        "winRate": 48.6852,
        "pickRate": 1.09301,
        "banRate": 0.7052700000000001
      },
      {
        "key": "shaco",
        "name": "恶魔小丑",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Shaco.png",
        "tier": 4,
        "rank": 42,
        "winRate": 47.8125,
        "pickRate": 1.26028,
        "banRate": 16.506899999999998
      },
      {
        "key": "leblanc",
        "name": "诡术妖姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Leblanc.png",
        "tier": 4,
        "rank": 43,
        "winRate": 48.5112,
        "pickRate": 0.8658000000000001,
        "banRate": 15.290000000000001
      },
      {
        "key": "fiddlesticks",
        "name": "远古恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Fiddlesticks.png",
        "tier": 4,
        "rank": 44,
        "winRate": 49.7931,
        "pickRate": 0.506849,
        "banRate": 1.17972
      },
      {
        "key": "zoe",
        "name": "暮光星灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Zoe.png",
        "tier": 4,
        "rank": 45,
        "winRate": 47.751,
        "pickRate": 0.8994749999999999,
        "banRate": 3.1536399999999998
      },
      {
        "key": "teemo",
        "name": "迅捷斥候",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Teemo.png",
        "tier": 4,
        "rank": 46,
        "winRate": 48.1712,
        "pickRate": 0.536206,
        "banRate": 5.6758500000000005
      },
      {
        "key": "camille",
        "name": "青钢影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Camille.png",
        "tier": 4,
        "rank": 47,
        "winRate": 45.364399999999996,
        "pickRate": 2.15272,
        "banRate": 4.06799
      },
      {
        "key": "ashe",
        "name": "寒冰射手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Ashe.png",
        "tier": 5,
        "rank": 48,
        "winRate": 44.2269,
        "pickRate": 0.7371449999999999,
        "banRate": 1.7450899999999998
      },
      {
        "key": "veigar",
        "name": "邪恶小法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Veigar.png",
        "tier": 5,
        "rank": 49,
        "winRate": 44.2198,
        "pickRate": 0.5612459999999999,
        "banRate": 1.50337
      },
      {
        "key": "mel",
        "name": "流光镜影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.18.1/champion/Mel.png",
        "tier": 5,
        "rank": 50,
        "winRate": 41.5275,
        "pickRate": 0.7090209999999999,
        "banRate": 16.3885
      }
    ]
  }
};
