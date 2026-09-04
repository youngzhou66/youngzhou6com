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
  "updatedAt": "2026-09-04T07:14:21.007Z",
  "positions": {
    "top": [
      {
        "key": "nasus",
        "name": "沙漠死神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Nasus.png",
        "tier": 1,
        "rank": 1,
        "winRate": 50.8996,
        "pickRate": 8.5891,
        "banRate": 46.8027
      },
      {
        "key": "malphite",
        "name": "熔岩巨兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Malphite.png",
        "tier": 1,
        "rank": 2,
        "winRate": 51.3238,
        "pickRate": 6.64752,
        "banRate": 15.026100000000001
      },
      {
        "key": "garen",
        "name": "德玛西亚之力",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Garen.png",
        "tier": 1,
        "rank": 3,
        "winRate": 51.12950000000001,
        "pickRate": 7.02488,
        "banRate": 5.16896
      },
      {
        "key": "yone",
        "name": "封魔剑魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Yone.png",
        "tier": 2,
        "rank": 4,
        "winRate": 50.008399999999995,
        "pickRate": 8.15418,
        "banRate": 9.39673
      },
      {
        "key": "gangplank",
        "name": "海洋之灾",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Gangplank.png",
        "tier": 2,
        "rank": 5,
        "winRate": 50.7963,
        "pickRate": 5.45611,
        "banRate": 7.2587600000000005
      },
      {
        "key": "teemo",
        "name": "迅捷斥候",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Teemo.png",
        "tier": 2,
        "rank": 6,
        "winRate": 51.203500000000005,
        "pickRate": 4.10463,
        "banRate": 6.36084
      },
      {
        "key": "ornn",
        "name": "山隐之焰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ornn.png",
        "tier": 2,
        "rank": 7,
        "winRate": 51.61559999999999,
        "pickRate": 3.277,
        "banRate": 0.447172
      },
      {
        "key": "sett",
        "name": "腕豪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sett.png",
        "tier": 2,
        "rank": 8,
        "winRate": 50.5678,
        "pickRate": 5.595619999999999,
        "banRate": 2.34601
      },
      {
        "key": "singed",
        "name": "炼金术士",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Singed.png",
        "tier": 2,
        "rank": 9,
        "winRate": 51.9083,
        "pickRate": 2.6295200000000003,
        "banRate": 0.881082
      },
      {
        "key": "camille",
        "name": "青钢影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Camille.png",
        "tier": 3,
        "rank": 10,
        "winRate": 50.8479,
        "pickRate": 4.28044,
        "banRate": 5.98248
      },
      {
        "key": "darius",
        "name": "诺克萨斯之手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Darius.png",
        "tier": 3,
        "rank": 11,
        "winRate": 49.811,
        "pickRate": 7.19295,
        "banRate": 12.851299999999998
      },
      {
        "key": "shen",
        "name": "暮光之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Shen.png",
        "tier": 3,
        "rank": 12,
        "winRate": 51.170300000000005,
        "pickRate": 3.6040799999999997,
        "banRate": 0.783077
      },
      {
        "key": "irelia",
        "name": "刀锋舞者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Irelia.png",
        "tier": 3,
        "rank": 13,
        "winRate": 50.4381,
        "pickRate": 4.48336,
        "banRate": 12.8772
      },
      {
        "key": "aatrox",
        "name": "暗裔剑魔",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Aatrox.png",
        "tier": 3,
        "rank": 14,
        "winRate": 49.659,
        "pickRate": 5.93116,
        "banRate": 7.1855199999999995
      },
      {
        "key": "renekton",
        "name": "荒漠屠夫",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Renekton.png",
        "tier": 3,
        "rank": 15,
        "winRate": 49.8051,
        "pickRate": 5.55517,
        "banRate": 3.7810799999999998
      },
      {
        "key": "olaf",
        "name": "狂战士",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Olaf.png",
        "tier": 3,
        "rank": 16,
        "winRate": 50.5816,
        "pickRate": 3.31556,
        "banRate": 3.50773
      },
      {
        "key": "jax",
        "name": "武器大师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Jax.png",
        "tier": 3,
        "rank": 17,
        "winRate": 49.4141,
        "pickRate": 5.91133,
        "banRate": 9.958400000000001
      },
      {
        "key": "illaoi",
        "name": "海兽祭司",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Illaoi.png",
        "tier": 3,
        "rank": 18,
        "winRate": 50.8856,
        "pickRate": 2.71355,
        "banRate": 4.67387
      },
      {
        "key": "urgot",
        "name": "无畏战车",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Urgot.png",
        "tier": 3,
        "rank": 19,
        "winRate": 50.98160000000001,
        "pickRate": 2.4481900000000003,
        "banRate": 0.783245
      },
      {
        "key": "kayle",
        "name": "正义天使",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kayle.png",
        "tier": 3,
        "rank": 20,
        "winRate": 51.1716,
        "pickRate": 2.17892,
        "banRate": 1.3646200000000002
      },
      {
        "key": "tryndamere",
        "name": "蛮族之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Tryndamere.png",
        "tier": 3,
        "rank": 21,
        "winRate": 50.4784,
        "pickRate": 3.16747,
        "banRate": 2.47457
      },
      {
        "key": "chogath",
        "name": "虚空恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Chogath.png",
        "tier": 3,
        "rank": 22,
        "winRate": 50.6032,
        "pickRate": 2.91661,
        "banRate": 0.9650610000000001
      },
      {
        "key": "mordekaiser",
        "name": "铁铠冥魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Mordekaiser.png",
        "tier": 3,
        "rank": 23,
        "winRate": 49.4631,
        "pickRate": 5.16635,
        "banRate": 8.37971
      },
      {
        "key": "kled",
        "name": "暴怒骑士",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kled.png",
        "tier": 3,
        "rank": 24,
        "winRate": 51.29860000000001,
        "pickRate": 1.80305,
        "banRate": 0.935719
      },
      {
        "key": "drmundo",
        "name": "祖安狂人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/DrMundo.png",
        "tier": 3,
        "rank": 25,
        "winRate": 50.0035,
        "pickRate": 3.69182,
        "banRate": 2.71665
      },
      {
        "key": "warwick",
        "name": "祖安怒兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Warwick.png",
        "tier": 3,
        "rank": 26,
        "winRate": 51.687799999999996,
        "pickRate": 1.35258,
        "banRate": 1.58693
      },
      {
        "key": "pantheon",
        "name": "不屈之枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Pantheon.png",
        "tier": 3,
        "rank": 27,
        "winRate": 50.3227,
        "pickRate": 2.79108,
        "banRate": 2.4017
      },
      {
        "key": "kennen",
        "name": "狂暴之心",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kennen.png",
        "tier": 3,
        "rank": 28,
        "winRate": 50.779799999999994,
        "pickRate": 2.09762,
        "banRate": 1.1613200000000001
      },
      {
        "key": "gwen",
        "name": "灵罗娃娃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Gwen.png",
        "tier": 4,
        "rank": 29,
        "winRate": 50.1108,
        "pickRate": 2.81638,
        "banRate": 4.13476
      },
      {
        "key": "fiora",
        "name": "无双剑姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Fiora.png",
        "tier": 4,
        "rank": 30,
        "winRate": 49.6263,
        "pickRate": 3.5769,
        "banRate": 4.48612
      },
      {
        "key": "yasuo",
        "name": "疾风剑豪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Yasuo.png",
        "tier": 4,
        "rank": 31,
        "winRate": 49.192,
        "pickRate": 3.51381,
        "banRate": 19.894000000000002
      },
      {
        "key": "quinn",
        "name": "德玛西亚之翼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Quinn.png",
        "tier": 4,
        "rank": 32,
        "winRate": 51.9788,
        "pickRate": 0.869395,
        "banRate": 0.925199
      },
      {
        "key": "gragas",
        "name": "酒桶",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Gragas.png",
        "tier": 4,
        "rank": 33,
        "winRate": 50.1606,
        "pickRate": 2.2271099999999997,
        "banRate": 0.622509
      },
      {
        "key": "gnar",
        "name": "迷失之牙",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Gnar.png",
        "tier": 4,
        "rank": 34,
        "winRate": 49.2992,
        "pickRate": 3.57768,
        "banRate": 1.15069
      },
      {
        "key": "ambessa",
        "name": "铁血狼母",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ambessa.png",
        "tier": 4,
        "rank": 35,
        "winRate": 48.951899999999995,
        "pickRate": 4.03036,
        "banRate": 4.87068
      },
      {
        "key": "yorick",
        "name": "牧魂人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Yorick.png",
        "tier": 4,
        "rank": 36,
        "winRate": 49.271,
        "pickRate": 3.15374,
        "banRate": 5.94847
      },
      {
        "key": "akali",
        "name": "离群之刺",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Akali.png",
        "tier": 4,
        "rank": 37,
        "winRate": 49.2069,
        "pickRate": 2.5749500000000003,
        "banRate": 15.7367
      },
      {
        "key": "zaahen",
        "name": "不落魔锋",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zaahen.png",
        "tier": 4,
        "rank": 38,
        "winRate": 49.4805,
        "pickRate": 2.58555,
        "banRate": 1.08517
      },
      {
        "key": "riven",
        "name": "放逐之刃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Riven.png",
        "tier": 4,
        "rank": 39,
        "winRate": 49.5635,
        "pickRate": 2.2945,
        "banRate": 1.84625
      },
      {
        "key": "zac",
        "name": "生化魔人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zac.png",
        "tier": 4,
        "rank": 40,
        "winRate": 51.96469999999999,
        "pickRate": 0.5230549999999999,
        "banRate": 1.10321
      },
      {
        "key": "sion",
        "name": "亡灵战神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sion.png",
        "tier": 4,
        "rank": 41,
        "winRate": 48.9797,
        "pickRate": 2.8368,
        "banRate": 0.504764
      },
      {
        "key": "jayce",
        "name": "未来守护者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Jayce.png",
        "tier": 4,
        "rank": 42,
        "winRate": 47.6075,
        "pickRate": 5.431649999999999,
        "banRate": 5.83732
      },
      {
        "key": "tahmkench",
        "name": "河流之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/TahmKench.png",
        "tier": 4,
        "rank": 43,
        "winRate": 49.693799999999996,
        "pickRate": 1.66731,
        "banRate": 1.95466
      },
      {
        "key": "heimerdinger",
        "name": "大发明家",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Heimerdinger.png",
        "tier": 4,
        "rank": 44,
        "winRate": 50.166900000000005,
        "pickRate": 1.26614,
        "banRate": 1.7810200000000003
      },
      {
        "key": "volibear",
        "name": "不灭狂雷",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Volibear.png",
        "tier": 4,
        "rank": 45,
        "winRate": 48.5791,
        "pickRate": 3.09423,
        "banRate": 1.1670500000000001
      },
      {
        "key": "anivia",
        "name": "冰晶凤凰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Anivia.png",
        "tier": 4,
        "rank": 46,
        "winRate": 50.9471,
        "pickRate": 0.7691680000000001,
        "banRate": 2.4261600000000003
      },
      {
        "key": "cassiopeia",
        "name": "魔蛇之拥",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Cassiopeia.png",
        "tier": 4,
        "rank": 47,
        "winRate": 51.380199999999995,
        "pickRate": 0.57964,
        "banRate": 1.77387
      },
      {
        "key": "monkeyking",
        "name": "齐天大圣",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/MonkeyKing.png",
        "tier": 4,
        "rank": 48,
        "winRate": 50.3242,
        "pickRate": 0.9629880000000001,
        "banRate": 3.0494
      },
      {
        "key": "vladimir",
        "name": "猩红收割者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Vladimir.png",
        "tier": 5,
        "rank": 49,
        "winRate": 49.3022,
        "pickRate": 1.2303,
        "banRate": 5.67835
      },
      {
        "key": "trundle",
        "name": "巨魔之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Trundle.png",
        "tier": 5,
        "rank": 50,
        "winRate": 48.7207,
        "pickRate": 1.81248,
        "banRate": 0.42659100000000005
      },
      {
        "key": "poppy",
        "name": "圣锤之毅",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Poppy.png",
        "tier": 5,
        "rank": 51,
        "winRate": 49.6316,
        "pickRate": 0.970923,
        "banRate": 4.77672
      },
      {
        "key": "ksante",
        "name": "纳祖芒荣耀",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/KSante.png",
        "tier": 5,
        "rank": 52,
        "winRate": 46.9915,
        "pickRate": 3.73898,
        "banRate": 2.50118
      },
      {
        "key": "rumble",
        "name": "机械公敌",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Rumble.png",
        "tier": 5,
        "rank": 53,
        "winRate": 48.2444,
        "pickRate": 1.6319299999999999,
        "banRate": 0.686825
      },
      {
        "key": "malzahar",
        "name": "虚空先知",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Malzahar.png",
        "tier": 5,
        "rank": 54,
        "winRate": 49.5719,
        "pickRate": 0.501331,
        "banRate": 8.58481
      },
      {
        "key": "swain",
        "name": "诺克萨斯统领",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Swain.png",
        "tier": 5,
        "rank": 55,
        "winRate": 49.478899999999996,
        "pickRate": 0.542892,
        "banRate": 1.5387899999999999
      },
      {
        "key": "vayne",
        "name": "暗夜猎手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Vayne.png",
        "tier": 5,
        "rank": 56,
        "winRate": 46.658,
        "pickRate": 2.10867,
        "banRate": 7.42075
      },
      {
        "key": "ryze",
        "name": "符文法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ryze.png",
        "tier": 5,
        "rank": 57,
        "winRate": 48.589,
        "pickRate": 0.751347,
        "banRate": 0.46916199999999997
      },
      {
        "key": "masteryi",
        "name": "无极剑圣",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/MasterYi.png",
        "tier": 5,
        "rank": 58,
        "winRate": 47.7791,
        "pickRate": 0.5110220000000001,
        "banRate": 10.291500000000001
      },
      {
        "key": "udyr",
        "name": "兽灵行者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Udyr.png",
        "tier": 5,
        "rank": 59,
        "winRate": 47.448,
        "pickRate": 0.525006,
        "banRate": 1.03973
      },
      {
        "key": "varus",
        "name": "惩戒之箭",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Varus.png",
        "tier": 5,
        "rank": 60,
        "winRate": 46.5458,
        "pickRate": 0.7032820000000001,
        "banRate": 0.6558470000000001
      }
    ],
    "jungle": [
      {
        "key": "monkeyking",
        "name": "齐天大圣",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/MonkeyKing.png",
        "tier": 1,
        "rank": 1,
        "winRate": 51.62179999999999,
        "pickRate": 6.143400000000001,
        "banRate": 3.16411
      },
      {
        "key": "sylas",
        "name": "解脱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sylas.png",
        "tier": 1,
        "rank": 2,
        "winRate": 50.5093,
        "pickRate": 7.68916,
        "banRate": 17.2451
      },
      {
        "key": "talon",
        "name": "刀锋之影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Talon.png",
        "tier": 1,
        "rank": 3,
        "winRate": 50.9908,
        "pickRate": 6.20449,
        "banRate": 9.36409
      },
      {
        "key": "rammus",
        "name": "披甲龙龟",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Rammus.png",
        "tier": 1,
        "rank": 4,
        "winRate": 52.69669999999999,
        "pickRate": 2.00538,
        "banRate": 3.5866299999999995
      },
      {
        "key": "shyvana",
        "name": "龙血武姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Shyvana.png",
        "tier": 1,
        "rank": 5,
        "winRate": 51.0562,
        "pickRate": 5.3859900000000005,
        "banRate": 5.14281
      },
      {
        "key": "nocturne",
        "name": "永恒梦魇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Nocturne.png",
        "tier": 1,
        "rank": 6,
        "winRate": 50.75730000000001,
        "pickRate": 6.1860800000000005,
        "banRate": 13.1236
      },
      {
        "key": "leesin",
        "name": "盲僧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/LeeSin.png",
        "tier": 1,
        "rank": 7,
        "winRate": 49.2544,
        "pickRate": 13.5972,
        "banRate": 16.7504
      },
      {
        "key": "briar",
        "name": "狂厄蔷薇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Briar.png",
        "tier": 1,
        "rank": 8,
        "winRate": 50.87779999999999,
        "pickRate": 4.59732,
        "banRate": 8.8151
      },
      {
        "key": "warwick",
        "name": "祖安怒兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Warwick.png",
        "tier": 1,
        "rank": 9,
        "winRate": 51.5201,
        "pickRate": 3.11361,
        "banRate": 1.6264
      },
      {
        "key": "kayn",
        "name": "影流之镰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kayn.png",
        "tier": 1,
        "rank": 10,
        "winRate": 50.1719,
        "pickRate": 6.96842,
        "banRate": 5.19593
      },
      {
        "key": "shaco",
        "name": "恶魔小丑",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Shaco.png",
        "tier": 1,
        "rank": 11,
        "winRate": 50.612500000000004,
        "pickRate": 4.52752,
        "banRate": 16.703599999999998
      },
      {
        "key": "graves",
        "name": "法外狂徒",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Graves.png",
        "tier": 2,
        "rank": 12,
        "winRate": 49.2257,
        "pickRate": 10.4032,
        "banRate": 14.9506
      },
      {
        "key": "chogath",
        "name": "虚空恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Chogath.png",
        "tier": 2,
        "rank": 13,
        "winRate": 51.6873,
        "pickRate": 2.22918,
        "banRate": 0.956927
      },
      {
        "key": "evelynn",
        "name": "痛苦之拥",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Evelynn.png",
        "tier": 2,
        "rank": 14,
        "winRate": 51.5521,
        "pickRate": 2.37756,
        "banRate": 2.00527
      },
      {
        "key": "fiddlesticks",
        "name": "远古恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Fiddlesticks.png",
        "tier": 2,
        "rank": 15,
        "winRate": 51.4082,
        "pickRate": 2.44162,
        "banRate": 1.38416
      },
      {
        "key": "reksai",
        "name": "虚空遁地兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/RekSai.png",
        "tier": 2,
        "rank": 16,
        "winRate": 52.066,
        "pickRate": 1.50954,
        "banRate": 0.684355
      },
      {
        "key": "zac",
        "name": "生化魔人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zac.png",
        "tier": 2,
        "rank": 17,
        "winRate": 50.91329999999999,
        "pickRate": 3.08248,
        "banRate": 1.21703
      },
      {
        "key": "nidalee",
        "name": "狂野女猎手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Nidalee.png",
        "tier": 2,
        "rank": 18,
        "winRate": 50.8589,
        "pickRate": 3.15371,
        "banRate": 2.03746
      },
      {
        "key": "udyr",
        "name": "兽灵行者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Udyr.png",
        "tier": 2,
        "rank": 19,
        "winRate": 51.3257,
        "pickRate": 2.1967,
        "banRate": 1.09715
      },
      {
        "key": "ivern",
        "name": "翠神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ivern.png",
        "tier": 2,
        "rank": 20,
        "winRate": 52.1215,
        "pickRate": 1.2752700000000001,
        "banRate": 0.40732199999999996
      },
      {
        "key": "ekko",
        "name": "时间刺客",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ekko.png",
        "tier": 2,
        "rank": 21,
        "winRate": 50.3128,
        "pickRate": 4.04549,
        "banRate": 1.52583
      },
      {
        "key": "lillia",
        "name": "含羞蓓蕾",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Lillia.png",
        "tier": 2,
        "rank": 22,
        "winRate": 50.6831,
        "pickRate": 3.22809,
        "banRate": 1.8507099999999999
      },
      {
        "key": "sejuani",
        "name": "北地之怒",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sejuani.png",
        "tier": 2,
        "rank": 23,
        "winRate": 51.2636,
        "pickRate": 1.9750299999999998,
        "banRate": 0.18662600000000001
      },
      {
        "key": "jarvaniv",
        "name": "德玛西亚皇子",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/JarvanIV.png",
        "tier": 2,
        "rank": 24,
        "winRate": 49.5086,
        "pickRate": 5.81441,
        "banRate": 1.22512
      },
      {
        "key": "zyra",
        "name": "荆棘之兴",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zyra.png",
        "tier": 2,
        "rank": 25,
        "winRate": 51.5956,
        "pickRate": 1.39815,
        "banRate": 2.29723
      },
      {
        "key": "belveth",
        "name": "虚空女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Belveth.png",
        "tier": 2,
        "rank": 26,
        "winRate": 50.2734,
        "pickRate": 3.18877,
        "banRate": 6.63117
      },
      {
        "key": "hecarim",
        "name": "战争之影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Hecarim.png",
        "tier": 2,
        "rank": 27,
        "winRate": 49.4125,
        "pickRate": 5.39083,
        "banRate": 6.37215
      },
      {
        "key": "khazix",
        "name": "虚空掠夺者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Khazix.png",
        "tier": 2,
        "rank": 28,
        "winRate": 49.2676,
        "pickRate": 5.66906,
        "banRate": 3.1938500000000003
      },
      {
        "key": "viego",
        "name": "破败之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Viego.png",
        "tier": 3,
        "rank": 29,
        "winRate": 48.2501,
        "pickRate": 9.00337,
        "banRate": 7.728540000000001
      },
      {
        "key": "nunu",
        "name": "雪原双子",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Nunu.png",
        "tier": 3,
        "rank": 30,
        "winRate": 50.686,
        "pickRate": 1.9625,
        "banRate": 0.440318
      },
      {
        "key": "naafiri",
        "name": "百裂冥犬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Naafiri.png",
        "tier": 3,
        "rank": 31,
        "winRate": 49.478100000000005,
        "pickRate": 3.85979,
        "banRate": 14.0015
      },
      {
        "key": "vi",
        "name": "皮城执法官",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Vi.png",
        "tier": 3,
        "rank": 32,
        "winRate": 49.0822,
        "pickRate": 5.23082,
        "banRate": 1.8945
      },
      {
        "key": "masteryi",
        "name": "无极剑圣",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/MasterYi.png",
        "tier": 3,
        "rank": 33,
        "winRate": 48.9539,
        "pickRate": 5.107749999999999,
        "banRate": 11.2859
      },
      {
        "key": "elise",
        "name": "蜘蛛女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Elise.png",
        "tier": 3,
        "rank": 34,
        "winRate": 50.354600000000005,
        "pickRate": 1.9031,
        "banRate": 0.987485
      },
      {
        "key": "qiyana",
        "name": "元素女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Qiyana.png",
        "tier": 3,
        "rank": 35,
        "winRate": 48.857800000000005,
        "pickRate": 4.6411,
        "banRate": 6.31119
      },
      {
        "key": "trundle",
        "name": "巨魔之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Trundle.png",
        "tier": 3,
        "rank": 36,
        "winRate": 51.017,
        "pickRate": 1.0570899999999999,
        "banRate": 0.416898
      },
      {
        "key": "amumu",
        "name": "殇之木乃伊",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Amumu.png",
        "tier": 3,
        "rank": 37,
        "winRate": 50.0273,
        "pickRate": 2.0131300000000003,
        "banRate": 0.896561
      },
      {
        "key": "skarner",
        "name": "上古领主",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Skarner.png",
        "tier": 4,
        "rank": 38,
        "winRate": 50.6029,
        "pickRate": 1.19424,
        "banRate": 0.24059799999999998
      },
      {
        "key": "quinn",
        "name": "德玛西亚之翼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Quinn.png",
        "tier": 4,
        "rank": 39,
        "winRate": 50.292,
        "pickRate": 1.40409,
        "banRate": 0.936294
      },
      {
        "key": "aatrox",
        "name": "暗裔剑魔",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Aatrox.png",
        "tier": 4,
        "rank": 40,
        "winRate": 50.3157,
        "pickRate": 1.1864299999999999,
        "banRate": 6.99597
      },
      {
        "key": "taliyah",
        "name": "岩雀",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Taliyah.png",
        "tier": 4,
        "rank": 41,
        "winRate": 50.88,
        "pickRate": 0.873127,
        "banRate": 0.342604
      },
      {
        "key": "diana",
        "name": "皎月女神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Diana.png",
        "tier": 4,
        "rank": 42,
        "winRate": 48.9574,
        "pickRate": 2.8705000000000003,
        "banRate": 3.2017200000000003
      },
      {
        "key": "gwen",
        "name": "灵罗娃娃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Gwen.png",
        "tier": 4,
        "rank": 43,
        "winRate": 50.403600000000004,
        "pickRate": 1.07982,
        "banRate": 4.07438
      },
      {
        "key": "xinzhao",
        "name": "德邦总管",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/XinZhao.png",
        "tier": 4,
        "rank": 44,
        "winRate": 49.0962,
        "pickRate": 2.60053,
        "banRate": 0.655543
      },
      {
        "key": "rengar",
        "name": "傲之追猎者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Rengar.png",
        "tier": 4,
        "rank": 45,
        "winRate": 48.4059,
        "pickRate": 3.8016099999999997,
        "banRate": 6.59911
      },
      {
        "key": "jax",
        "name": "武器大师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Jax.png",
        "tier": 4,
        "rank": 46,
        "winRate": 49.3664,
        "pickRate": 1.83433,
        "banRate": 9.87604
      },
      {
        "key": "kindred",
        "name": "永猎双子",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kindred.png",
        "tier": 4,
        "rank": 47,
        "winRate": 49.2672,
        "pickRate": 2.17655,
        "banRate": 1.65468
      },
      {
        "key": "gragas",
        "name": "酒桶",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Gragas.png",
        "tier": 4,
        "rank": 48,
        "winRate": 50.7027,
        "pickRate": 0.790218,
        "banRate": 0.594608
      },
      {
        "key": "maokai",
        "name": "扭曲树精",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Maokai.png",
        "tier": 4,
        "rank": 49,
        "winRate": 50.9475,
        "pickRate": 0.661077,
        "banRate": 0.160123
      },
      {
        "key": "darius",
        "name": "诺克萨斯之手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Darius.png",
        "tier": 4,
        "rank": 50,
        "winRate": 50.3529,
        "pickRate": 0.7867310000000001,
        "banRate": 12.2775
      },
      {
        "key": "fizz",
        "name": "潮汐海灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Fizz.png",
        "tier": 4,
        "rank": 51,
        "winRate": 50.1857,
        "pickRate": 0.799775,
        "banRate": 6.6924399999999995
      },
      {
        "key": "karthus",
        "name": "死亡颂唱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Karthus.png",
        "tier": 4,
        "rank": 52,
        "winRate": 49.4717,
        "pickRate": 1.36277,
        "banRate": 0.8486739999999999
      },
      {
        "key": "jayce",
        "name": "未来守护者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Jayce.png",
        "tier": 5,
        "rank": 53,
        "winRate": 48.3539,
        "pickRate": 1.8553799999999998,
        "banRate": 5.76886
      },
      {
        "key": "zed",
        "name": "影流之主",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zed.png",
        "tier": 5,
        "rank": 54,
        "winRate": 47.160000000000004,
        "pickRate": 2.63281,
        "banRate": 23.921999999999997
      },
      {
        "key": "malphite",
        "name": "熔岩巨兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Malphite.png",
        "tier": 5,
        "rank": 55,
        "winRate": 49.2048,
        "pickRate": 0.751153,
        "banRate": 14.3339
      },
      {
        "key": "poppy",
        "name": "圣锤之毅",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Poppy.png",
        "tier": 5,
        "rank": 56,
        "winRate": 49.7051,
        "pickRate": 0.5145649999999999,
        "banRate": 4.60213
      },
      {
        "key": "volibear",
        "name": "不灭狂雷",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Volibear.png",
        "tier": 5,
        "rank": 57,
        "winRate": 48.6066,
        "pickRate": 1.0751,
        "banRate": 1.13303
      },
      {
        "key": "ambessa",
        "name": "铁血狼母",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ambessa.png",
        "tier": 5,
        "rank": 58,
        "winRate": 48.6815,
        "pickRate": 0.9672069999999999,
        "banRate": 4.74746
      },
      {
        "key": "teemo",
        "name": "迅捷斥候",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Teemo.png",
        "tier": 5,
        "rank": 59,
        "winRate": 48.6723,
        "pickRate": 0.634667,
        "banRate": 5.85204
      },
      {
        "key": "pantheon",
        "name": "不屈之枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Pantheon.png",
        "tier": 5,
        "rank": 60,
        "winRate": 47.3047,
        "pickRate": 0.9283349999999999,
        "banRate": 2.29826
      },
      {
        "key": "locke",
        "name": "灰烬驱魔人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Locke.png",
        "tier": 5,
        "rank": 61,
        "winRate": 44.971,
        "pickRate": 0.77937,
        "banRate": 31.596200000000003
      }
    ],
    "mid": [
      {
        "key": "ahri",
        "name": "九尾妖狐",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ahri.png",
        "tier": 1,
        "rank": 1,
        "winRate": 50.9212,
        "pickRate": 9.474169999999999,
        "banRate": 3.11795
      },
      {
        "key": "viktor",
        "name": "奥术先驱",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Viktor.png",
        "tier": 1,
        "rank": 2,
        "winRate": 50.3332,
        "pickRate": 9.335,
        "banRate": 16.331899999999997
      },
      {
        "key": "syndra",
        "name": "暗黑元首",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Syndra.png",
        "tier": 1,
        "rank": 3,
        "winRate": 50.4472,
        "pickRate": 8.51131,
        "banRate": 12.804699999999999
      },
      {
        "key": "fizz",
        "name": "潮汐海灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Fizz.png",
        "tier": 1,
        "rank": 4,
        "winRate": 51.3122,
        "pickRate": 5.23685,
        "banRate": 7.2367799999999995
      },
      {
        "key": "zed",
        "name": "影流之主",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zed.png",
        "tier": 1,
        "rank": 5,
        "winRate": 50.0649,
        "pickRate": 8.88389,
        "banRate": 24.1372
      },
      {
        "key": "lissandra",
        "name": "冰霜女巫",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Lissandra.png",
        "tier": 1,
        "rank": 6,
        "winRate": 51.153099999999995,
        "pickRate": 5.576239999999999,
        "banRate": 3.82418
      },
      {
        "key": "twistedfate",
        "name": "卡牌大师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/TwistedFate.png",
        "tier": 1,
        "rank": 7,
        "winRate": 51.254,
        "pickRate": 4.9809399999999995,
        "banRate": 1.05813
      },
      {
        "key": "vex",
        "name": "愁云使者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Vex.png",
        "tier": 1,
        "rank": 8,
        "winRate": 52.072300000000006,
        "pickRate": 2.8773,
        "banRate": 3.5268
      },
      {
        "key": "katarina",
        "name": "不祥之刃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Katarina.png",
        "tier": 1,
        "rank": 9,
        "winRate": 50.396300000000004,
        "pickRate": 7.09973,
        "banRate": 12.022499999999999
      },
      {
        "key": "nasus",
        "name": "沙漠死神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Nasus.png",
        "tier": 1,
        "rank": 10,
        "winRate": 51.2628,
        "pickRate": 2.2562800000000003,
        "banRate": 46.386300000000006
      },
      {
        "key": "leblanc",
        "name": "诡术妖姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Leblanc.png",
        "tier": 1,
        "rank": 11,
        "winRate": 50.60360000000001,
        "pickRate": 5.63361,
        "banRate": 15.5407
      },
      {
        "key": "vladimir",
        "name": "猩红收割者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Vladimir.png",
        "tier": 1,
        "rank": 12,
        "winRate": 51.141000000000005,
        "pickRate": 3.98308,
        "banRate": 5.79652
      },
      {
        "key": "xerath",
        "name": "远古巫灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Xerath.png",
        "tier": 1,
        "rank": 13,
        "winRate": 50.733200000000004,
        "pickRate": 4.4313400000000005,
        "banRate": 12.8072
      },
      {
        "key": "hwei",
        "name": "异画师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Hwei.png",
        "tier": 1,
        "rank": 14,
        "winRate": 51.0491,
        "pickRate": 4.0554,
        "banRate": 3.05641
      },
      {
        "key": "locke",
        "name": "灰烬驱魔人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Locke.png",
        "tier": 1,
        "rank": 15,
        "winRate": 49.8061,
        "pickRate": 6.38259,
        "banRate": 32.8099
      },
      {
        "key": "lux",
        "name": "光辉女郎",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Lux.png",
        "tier": 2,
        "rank": 16,
        "winRate": 50.7271,
        "pickRate": 3.89206,
        "banRate": 3.3854599999999997
      },
      {
        "key": "yasuo",
        "name": "疾风剑豪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Yasuo.png",
        "tier": 2,
        "rank": 17,
        "winRate": 49.0191,
        "pickRate": 8.79623,
        "banRate": 19.9853
      },
      {
        "key": "sylas",
        "name": "解脱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sylas.png",
        "tier": 2,
        "rank": 18,
        "winRate": 49.3804,
        "pickRate": 6.8872,
        "banRate": 17.2402
      },
      {
        "key": "yone",
        "name": "封魔剑魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Yone.png",
        "tier": 2,
        "rank": 19,
        "winRate": 49.235,
        "pickRate": 7.225560000000001,
        "banRate": 9.39605
      },
      {
        "key": "malzahar",
        "name": "虚空先知",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Malzahar.png",
        "tier": 2,
        "rank": 20,
        "winRate": 49.674099999999996,
        "pickRate": 5.3799600000000005,
        "banRate": 9.3567
      },
      {
        "key": "veigar",
        "name": "邪恶小法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Veigar.png",
        "tier": 2,
        "rank": 21,
        "winRate": 50.1907,
        "pickRate": 3.78634,
        "banRate": 1.83631
      },
      {
        "key": "diana",
        "name": "皎月女神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Diana.png",
        "tier": 2,
        "rank": 22,
        "winRate": 50.53569999999999,
        "pickRate": 3.02628,
        "banRate": 3.20398
      },
      {
        "key": "akali",
        "name": "离群之刺",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Akali.png",
        "tier": 2,
        "rank": 23,
        "winRate": 49.0853,
        "pickRate": 5.57779,
        "banRate": 15.8506
      },
      {
        "key": "zoe",
        "name": "暮光星灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zoe.png",
        "tier": 2,
        "rank": 24,
        "winRate": 50.467099999999995,
        "pickRate": 2.73968,
        "banRate": 3.30792
      },
      {
        "key": "qiyana",
        "name": "元素女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Qiyana.png",
        "tier": 2,
        "rank": 25,
        "winRate": 50.1503,
        "pickRate": 3.1317999999999997,
        "banRate": 6.30639
      },
      {
        "key": "ekko",
        "name": "时间刺客",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ekko.png",
        "tier": 2,
        "rank": 26,
        "winRate": 50.2131,
        "pickRate": 3.08539,
        "banRate": 1.51994
      },
      {
        "key": "annie",
        "name": "黑暗之女",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Annie.png",
        "tier": 2,
        "rank": 27,
        "winRate": 50.9838,
        "pickRate": 1.76908,
        "banRate": 0.48106599999999994
      },
      {
        "key": "aurelionsol",
        "name": "铸星龙王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/AurelionSol.png",
        "tier": 2,
        "rank": 28,
        "winRate": 50.70869999999999,
        "pickRate": 1.8691900000000001,
        "banRate": 0.669548
      },
      {
        "key": "gwen",
        "name": "灵罗娃娃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Gwen.png",
        "tier": 2,
        "rank": 29,
        "winRate": 51.7354,
        "pickRate": 0.910068,
        "banRate": 3.95612
      },
      {
        "key": "anivia",
        "name": "冰晶凤凰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Anivia.png",
        "tier": 2,
        "rank": 30,
        "winRate": 50.2059,
        "pickRate": 2.30134,
        "banRate": 2.54285
      },
      {
        "key": "galio",
        "name": "正义巨像",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Galio.png",
        "tier": 2,
        "rank": 31,
        "winRate": 49.2477,
        "pickRate": 3.92848,
        "banRate": 1.77517
      },
      {
        "key": "kassadin",
        "name": "虚空行者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kassadin.png",
        "tier": 2,
        "rank": 32,
        "winRate": 49.7275,
        "pickRate": 2.7080900000000003,
        "banRate": 2.27004
      },
      {
        "key": "akshan",
        "name": "影哨",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Akshan.png",
        "tier": 2,
        "rank": 33,
        "winRate": 49.9826,
        "pickRate": 2.22199,
        "banRate": 2.07732
      },
      {
        "key": "irelia",
        "name": "刀锋舞者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Irelia.png",
        "tier": 3,
        "rank": 34,
        "winRate": 49.1417,
        "pickRate": 2.8425599999999998,
        "banRate": 12.8403
      },
      {
        "key": "pantheon",
        "name": "不屈之枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Pantheon.png",
        "tier": 3,
        "rank": 35,
        "winRate": 51.24229999999999,
        "pickRate": 0.7653519999999999,
        "banRate": 2.2969
      },
      {
        "key": "malphite",
        "name": "熔岩巨兽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Malphite.png",
        "tier": 3,
        "rank": 36,
        "winRate": 50.7912,
        "pickRate": 0.8513430000000001,
        "banRate": 14.560699999999999
      },
      {
        "key": "riven",
        "name": "放逐之刃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Riven.png",
        "tier": 3,
        "rank": 37,
        "winRate": 51.757299999999994,
        "pickRate": 0.5355460000000001,
        "banRate": 1.7682
      },
      {
        "key": "velkoz",
        "name": "虚空之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Velkoz.png",
        "tier": 3,
        "rank": 38,
        "winRate": 50.8786,
        "pickRate": 0.8951129999999999,
        "banRate": 1.5753199999999998
      },
      {
        "key": "swain",
        "name": "诺克萨斯统领",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Swain.png",
        "tier": 3,
        "rank": 39,
        "winRate": 51.3963,
        "pickRate": 0.644035,
        "banRate": 1.5791199999999999
      },
      {
        "key": "aurora",
        "name": "双界灵兔",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Aurora.png",
        "tier": 3,
        "rank": 40,
        "winRate": 49.6334,
        "pickRate": 1.9077400000000002,
        "banRate": 1.11609
      },
      {
        "key": "talon",
        "name": "刀锋之影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Talon.png",
        "tier": 3,
        "rank": 41,
        "winRate": 49.547999999999995,
        "pickRate": 1.73982,
        "banRate": 9.23065
      },
      {
        "key": "garen",
        "name": "德玛西亚之力",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Garen.png",
        "tier": 3,
        "rank": 42,
        "winRate": 51.3003,
        "pickRate": 0.552758,
        "banRate": 4.8441600000000005
      },
      {
        "key": "cassiopeia",
        "name": "魔蛇之拥",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Cassiopeia.png",
        "tier": 4,
        "rank": 43,
        "winRate": 48.4829,
        "pickRate": 1.7590299999999999,
        "banRate": 1.8590700000000002
      },
      {
        "key": "chogath",
        "name": "虚空恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Chogath.png",
        "tier": 4,
        "rank": 44,
        "winRate": 50.219899999999996,
        "pickRate": 0.556948,
        "banRate": 0.895378
      },
      {
        "key": "taliyah",
        "name": "岩雀",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Taliyah.png",
        "tier": 4,
        "rank": 45,
        "winRate": 48.5694,
        "pickRate": 1.39237,
        "banRate": 0.35413300000000003
      },
      {
        "key": "ziggs",
        "name": "爆破鬼才",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ziggs.png",
        "tier": 4,
        "rank": 46,
        "winRate": 49.464999999999996,
        "pickRate": 0.6325609999999999,
        "banRate": 1.56069
      },
      {
        "key": "gangplank",
        "name": "海洋之灾",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Gangplank.png",
        "tier": 4,
        "rank": 47,
        "winRate": 49.4432,
        "pickRate": 0.567261,
        "banRate": 6.945659999999999
      },
      {
        "key": "ryze",
        "name": "符文法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ryze.png",
        "tier": 4,
        "rank": 48,
        "winRate": 46.7076,
        "pickRate": 3.11104,
        "banRate": 0.496701
      },
      {
        "key": "orianna",
        "name": "发条魔灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Orianna.png",
        "tier": 4,
        "rank": 49,
        "winRate": 46.7019,
        "pickRate": 3.04516,
        "banRate": 0.39545099999999994
      },
      {
        "key": "brand",
        "name": "复仇焰魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Brand.png",
        "tier": 4,
        "rank": 50,
        "winRate": 49.1583,
        "pickRate": 0.662471,
        "banRate": 2.93457
      },
      {
        "key": "azir",
        "name": "沙漠皇帝",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Azir.png",
        "tier": 4,
        "rank": 51,
        "winRate": 47.56,
        "pickRate": 1.77933,
        "banRate": 0.290385
      },
      {
        "key": "tristana",
        "name": "麦林炮手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Tristana.png",
        "tier": 4,
        "rank": 52,
        "winRate": 48.0752,
        "pickRate": 0.9812329999999999,
        "banRate": 5.58747
      },
      {
        "key": "sion",
        "name": "亡灵战神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sion.png",
        "tier": 4,
        "rank": 53,
        "winRate": 48.9397,
        "pickRate": 0.54412,
        "banRate": 0.472589
      },
      {
        "key": "naafiri",
        "name": "百裂冥犬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Naafiri.png",
        "tier": 4,
        "rank": 54,
        "winRate": 47.919,
        "pickRate": 0.8472179999999999,
        "banRate": 13.5793
      },
      {
        "key": "jayce",
        "name": "未来守护者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Jayce.png",
        "tier": 5,
        "rank": 55,
        "winRate": 47.2713,
        "pickRate": 0.813827,
        "banRate": 5.67555
      },
      {
        "key": "mel",
        "name": "流光镜影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Mel.png",
        "tier": 5,
        "rank": 56,
        "winRate": 45.2911,
        "pickRate": 2.00069,
        "banRate": 20.330000000000002
      },
      {
        "key": "smolder",
        "name": "炽炎雏龙",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Smolder.png",
        "tier": 5,
        "rank": 57,
        "winRate": 43.9835,
        "pickRate": 0.529809,
        "banRate": 1.4703600000000001
      }
    ],
    "adc": [
      {
        "key": "jinx",
        "name": "暴走萝莉",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Jinx.png",
        "tier": 0,
        "rank": 1,
        "winRate": 52.233,
        "pickRate": 17.040399999999998,
        "banRate": 5.96967
      },
      {
        "key": "tristana",
        "name": "麦林炮手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Tristana.png",
        "tier": 1,
        "rank": 2,
        "winRate": 51.558099999999996,
        "pickRate": 9.33832,
        "banRate": 5.77551
      },
      {
        "key": "kaisa",
        "name": "虚空之女",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kaisa.png",
        "tier": 1,
        "rank": 3,
        "winRate": 49.3806,
        "pickRate": 20.2674,
        "banRate": 5.07243
      },
      {
        "key": "jhin",
        "name": "戏命师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Jhin.png",
        "tier": 2,
        "rank": 4,
        "winRate": 49.4783,
        "pickRate": 16.0577,
        "banRate": 1.31005
      },
      {
        "key": "zeri",
        "name": "祖安花火",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zeri.png",
        "tier": 2,
        "rank": 5,
        "winRate": 51.6262,
        "pickRate": 4.9043,
        "banRate": 0.781079
      },
      {
        "key": "xayah",
        "name": "逆羽",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Xayah.png",
        "tier": 2,
        "rank": 6,
        "winRate": 51.668000000000006,
        "pickRate": 4.620769999999999,
        "banRate": 0.799326
      },
      {
        "key": "twitch",
        "name": "瘟疫之源",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Twitch.png",
        "tier": 2,
        "rank": 7,
        "winRate": 51.0385,
        "pickRate": 5.67955,
        "banRate": 6.60343
      },
      {
        "key": "caitlyn",
        "name": "皮城女警",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Caitlyn.png",
        "tier": 2,
        "rank": 8,
        "winRate": 48.9482,
        "pickRate": 15.123000000000001,
        "banRate": 20.4929
      },
      {
        "key": "yunara",
        "name": "不破之誓",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Yunara.png",
        "tier": 2,
        "rank": 9,
        "winRate": 50.23800000000001,
        "pickRate": 8.710569999999999,
        "banRate": 1.61023
      },
      {
        "key": "viktor",
        "name": "奥术先驱",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Viktor.png",
        "tier": 2,
        "rank": 10,
        "winRate": 51.363400000000006,
        "pickRate": 3.5540700000000003,
        "banRate": 16.3018
      },
      {
        "key": "seraphine",
        "name": "星籁歌姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Seraphine.png",
        "tier": 2,
        "rank": 11,
        "winRate": 52.310199999999995,
        "pickRate": 2.05199,
        "banRate": 9.965010000000001
      },
      {
        "key": "ashe",
        "name": "寒冰射手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ashe.png",
        "tier": 2,
        "rank": 12,
        "winRate": 50.3339,
        "pickRate": 6.335050000000001,
        "banRate": 1.78192
      },
      {
        "key": "kogmaw",
        "name": "深渊巨口",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/KogMaw.png",
        "tier": 2,
        "rank": 13,
        "winRate": 52.4058,
        "pickRate": 1.8855899999999999,
        "banRate": 0.364789
      },
      {
        "key": "yasuo",
        "name": "疾风剑豪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Yasuo.png",
        "tier": 2,
        "rank": 14,
        "winRate": 51.422599999999996,
        "pickRate": 2.42861,
        "banRate": 19.834699999999998
      },
      {
        "key": "hwei",
        "name": "异画师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Hwei.png",
        "tier": 2,
        "rank": 15,
        "winRate": 52.8056,
        "pickRate": 1.37582,
        "banRate": 3.00642
      },
      {
        "key": "sivir",
        "name": "战争女神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sivir.png",
        "tier": 3,
        "rank": 16,
        "winRate": 50.531000000000006,
        "pickRate": 4.3012500000000005,
        "banRate": 1.4865599999999999
      },
      {
        "key": "veigar",
        "name": "邪恶小法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Veigar.png",
        "tier": 3,
        "rank": 17,
        "winRate": 51.6066,
        "pickRate": 2.0034300000000003,
        "banRate": 1.82023
      },
      {
        "key": "lux",
        "name": "光辉女郎",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Lux.png",
        "tier": 3,
        "rank": 18,
        "winRate": 52.7964,
        "pickRate": 0.9822249999999999,
        "banRate": 3.26255
      },
      {
        "key": "samira",
        "name": "沙漠玫瑰",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Samira.png",
        "tier": 3,
        "rank": 19,
        "winRate": 50.0874,
        "pickRate": 3.94166,
        "banRate": 5.09722
      },
      {
        "key": "missfortune",
        "name": "赏金猎人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/MissFortune.png",
        "tier": 3,
        "rank": 20,
        "winRate": 49.336600000000004,
        "pickRate": 5.7512,
        "banRate": 0.655343
      },
      {
        "key": "lucian",
        "name": "圣枪游侠",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Lucian.png",
        "tier": 3,
        "rank": 21,
        "winRate": 48.4942,
        "pickRate": 8.287700000000001,
        "banRate": 2.3754999999999997
      },
      {
        "key": "ziggs",
        "name": "爆破鬼才",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ziggs.png",
        "tier": 3,
        "rank": 22,
        "winRate": 51.013299999999994,
        "pickRate": 2.11253,
        "banRate": 1.68112
      },
      {
        "key": "swain",
        "name": "诺克萨斯统领",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Swain.png",
        "tier": 3,
        "rank": 23,
        "winRate": 52.5456,
        "pickRate": 0.8471569999999999,
        "banRate": 1.58756
      },
      {
        "key": "xerath",
        "name": "远古巫灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Xerath.png",
        "tier": 3,
        "rank": 24,
        "winRate": 51.0341,
        "pickRate": 1.66586,
        "banRate": 12.718499999999999
      },
      {
        "key": "smolder",
        "name": "炽炎雏龙",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Smolder.png",
        "tier": 3,
        "rank": 25,
        "winRate": 49.8834,
        "pickRate": 3.58252,
        "banRate": 1.58417
      },
      {
        "key": "syndra",
        "name": "暗黑元首",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Syndra.png",
        "tier": 3,
        "rank": 26,
        "winRate": 50.3492,
        "pickRate": 2.3475800000000002,
        "banRate": 12.7398
      },
      {
        "key": "aphelios",
        "name": "残月之肃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Aphelios.png",
        "tier": 3,
        "rank": 27,
        "winRate": 49.2122,
        "pickRate": 4.87119,
        "banRate": 1.443
      },
      {
        "key": "draven",
        "name": "荣耀行刑官",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Draven.png",
        "tier": 3,
        "rank": 28,
        "winRate": 49.4623,
        "pickRate": 3.61883,
        "banRate": 10.7086
      },
      {
        "key": "katarina",
        "name": "不祥之刃",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Katarina.png",
        "tier": 3,
        "rank": 29,
        "winRate": 51.6935,
        "pickRate": 0.9550460000000001,
        "banRate": 11.5616
      },
      {
        "key": "velkoz",
        "name": "虚空之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Velkoz.png",
        "tier": 3,
        "rank": 30,
        "winRate": 52.6775,
        "pickRate": 0.6064339999999999,
        "banRate": 1.5201799999999999
      },
      {
        "key": "karthus",
        "name": "死亡颂唱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Karthus.png",
        "tier": 3,
        "rank": 31,
        "winRate": 52.8694,
        "pickRate": 0.549204,
        "banRate": 0.776139
      },
      {
        "key": "aurelionsol",
        "name": "铸星龙王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/AurelionSol.png",
        "tier": 3,
        "rank": 32,
        "winRate": 52.1047,
        "pickRate": 0.7896719999999999,
        "banRate": 0.647745
      },
      {
        "key": "nilah",
        "name": "不羁之悦",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Nilah.png",
        "tier": 3,
        "rank": 33,
        "winRate": 51.3351,
        "pickRate": 1.12776,
        "banRate": 1.6297099999999998
      },
      {
        "key": "brand",
        "name": "复仇焰魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Brand.png",
        "tier": 4,
        "rank": 34,
        "winRate": 51.832699999999996,
        "pickRate": 0.701498,
        "banRate": 2.87021
      },
      {
        "key": "ezreal",
        "name": "探险家",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ezreal.png",
        "tier": 4,
        "rank": 35,
        "winRate": 46.199400000000004,
        "pickRate": 12.690499999999998,
        "banRate": 4.5387900000000005
      },
      {
        "key": "kalista",
        "name": "复仇之矛",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Kalista.png",
        "tier": 4,
        "rank": 36,
        "winRate": 49.253,
        "pickRate": 2.77173,
        "banRate": 0.615687
      },
      {
        "key": "vladimir",
        "name": "猩红收割者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Vladimir.png",
        "tier": 4,
        "rank": 37,
        "winRate": 51.475,
        "pickRate": 0.616387,
        "banRate": 5.51107
      },
      {
        "key": "corki",
        "name": "英勇投弹手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Corki.png",
        "tier": 4,
        "rank": 38,
        "winRate": 49.5112,
        "pickRate": 1.87315,
        "banRate": 0.292991
      },
      {
        "key": "vayne",
        "name": "暗夜猎手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Vayne.png",
        "tier": 4,
        "rank": 39,
        "winRate": 47.5488,
        "pickRate": 3.6478499999999996,
        "banRate": 7.46126
      },
      {
        "key": "senna",
        "name": "涤魂圣枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Senna.png",
        "tier": 5,
        "rank": 40,
        "winRate": 50.0355,
        "pickRate": 0.6281260000000001,
        "banRate": 1.87113
      },
      {
        "key": "varus",
        "name": "惩戒之箭",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Varus.png",
        "tier": 5,
        "rank": 41,
        "winRate": 47.1611,
        "pickRate": 2.63953,
        "banRate": 0.698768
      },
      {
        "key": "mel",
        "name": "流光镜影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Mel.png",
        "tier": 5,
        "rank": 42,
        "winRate": 46.2796,
        "pickRate": 1.60774,
        "banRate": 20.3224
      }
    ],
    "support": [
      {
        "key": "thresh",
        "name": "魂锁典狱长",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Thresh.png",
        "tier": 0,
        "rank": 1,
        "winRate": 51.6898,
        "pickRate": 14.9755,
        "banRate": 11.3942
      },
      {
        "key": "leona",
        "name": "曙光女神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Leona.png",
        "tier": 1,
        "rank": 2,
        "winRate": 51.3969,
        "pickRate": 7.786980000000001,
        "banRate": 8.30393
      },
      {
        "key": "seraphine",
        "name": "星籁歌姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Seraphine.png",
        "tier": 1,
        "rank": 3,
        "winRate": 50.9212,
        "pickRate": 8.86646,
        "banRate": 10.034
      },
      {
        "key": "lulu",
        "name": "仙灵女巫",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Lulu.png",
        "tier": 1,
        "rank": 4,
        "winRate": 50.4698,
        "pickRate": 11.0752,
        "banRate": 8.68493
      },
      {
        "key": "braum",
        "name": "弗雷尔卓德之心",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Braum.png",
        "tier": 1,
        "rank": 5,
        "winRate": 52.2096,
        "pickRate": 4.86498,
        "banRate": 4.89951
      },
      {
        "key": "nami",
        "name": "唤潮鲛姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Nami.png",
        "tier": 1,
        "rank": 6,
        "winRate": 50.70099999999999,
        "pickRate": 9.2056,
        "banRate": 1.14507
      },
      {
        "key": "blitzcrank",
        "name": "蒸汽机器人",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Blitzcrank.png",
        "tier": 1,
        "rank": 7,
        "winRate": 51.3469,
        "pickRate": 6.15389,
        "banRate": 11.6191
      },
      {
        "key": "nautilus",
        "name": "深海泰坦",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Nautilus.png",
        "tier": 1,
        "rank": 8,
        "winRate": 49.936,
        "pickRate": 10.8926,
        "banRate": 14.2155
      },
      {
        "key": "senna",
        "name": "涤魂圣枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Senna.png",
        "tier": 1,
        "rank": 9,
        "winRate": 51.3239,
        "pickRate": 5.66036,
        "banRate": 1.94953
      },
      {
        "key": "milio",
        "name": "明烛",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Milio.png",
        "tier": 1,
        "rank": 10,
        "winRate": 50.8925,
        "pickRate": 6.75358,
        "banRate": 4.25884
      },
      {
        "key": "alistar",
        "name": "牛头酋长",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Alistar.png",
        "tier": 1,
        "rank": 11,
        "winRate": 51.301300000000005,
        "pickRate": 4.9765,
        "banRate": 1.76269
      },
      {
        "key": "rell",
        "name": "镕铁少女",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Rell.png",
        "tier": 1,
        "rank": 12,
        "winRate": 51.746700000000004,
        "pickRate": 3.86672,
        "banRate": 1.42555
      },
      {
        "key": "janna",
        "name": "风暴之怒",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Janna.png",
        "tier": 1,
        "rank": 13,
        "winRate": 51.5687,
        "pickRate": 3.99467,
        "banRate": 0.847607
      },
      {
        "key": "soraka",
        "name": "众星之子",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Soraka.png",
        "tier": 2,
        "rank": 14,
        "winRate": 50.63609999999999,
        "pickRate": 5.19064,
        "banRate": 2.11604
      },
      {
        "key": "zilean",
        "name": "时光守护者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zilean.png",
        "tier": 2,
        "rank": 15,
        "winRate": 51.199099999999994,
        "pickRate": 3.3158600000000003,
        "banRate": 1.93201
      },
      {
        "key": "rakan",
        "name": "幻翎",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Rakan.png",
        "tier": 2,
        "rank": 16,
        "winRate": 51.0304,
        "pickRate": 3.5157300000000005,
        "banRate": 0.330332
      },
      {
        "key": "sona",
        "name": "琴瑟仙女",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sona.png",
        "tier": 2,
        "rank": 17,
        "winRate": 51.3224,
        "pickRate": 2.99674,
        "banRate": 0.238438
      },
      {
        "key": "morgana",
        "name": "堕落天使",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Morgana.png",
        "tier": 2,
        "rank": 18,
        "winRate": 50.0186,
        "pickRate": 4.40096,
        "banRate": 16.5164
      },
      {
        "key": "taric",
        "name": "瓦洛兰之盾",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Taric.png",
        "tier": 2,
        "rank": 19,
        "winRate": 52.3618,
        "pickRate": 1.41601,
        "banRate": 0.303557
      },
      {
        "key": "pyke",
        "name": "血港鬼影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Pyke.png",
        "tier": 2,
        "rank": 20,
        "winRate": 48.9228,
        "pickRate": 6.433809999999999,
        "banRate": 24.943
      },
      {
        "key": "velkoz",
        "name": "虚空之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Velkoz.png",
        "tier": 2,
        "rank": 21,
        "winRate": 50.782700000000006,
        "pickRate": 2.7595,
        "banRate": 1.65815
      },
      {
        "key": "karma",
        "name": "天启者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Karma.png",
        "tier": 2,
        "rank": 22,
        "winRate": 48.8112,
        "pickRate": 6.93951,
        "banRate": 3.06528
      },
      {
        "key": "lux",
        "name": "光辉女郎",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Lux.png",
        "tier": 2,
        "rank": 23,
        "winRate": 48.8647,
        "pickRate": 6.49101,
        "banRate": 3.3944099999999997
      },
      {
        "key": "bard",
        "name": "星界游神",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Bard.png",
        "tier": 2,
        "rank": 24,
        "winRate": 49.3353,
        "pickRate": 5.07559,
        "banRate": 2.61503
      },
      {
        "key": "poppy",
        "name": "圣锤之毅",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Poppy.png",
        "tier": 3,
        "rank": 25,
        "winRate": 50.635799999999996,
        "pickRate": 2.12047,
        "banRate": 4.85021
      },
      {
        "key": "zyra",
        "name": "荆棘之兴",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zyra.png",
        "tier": 3,
        "rank": 26,
        "winRate": 50.087,
        "pickRate": 2.4442399999999997,
        "banRate": 2.34462
      },
      {
        "key": "maokai",
        "name": "扭曲树精",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Maokai.png",
        "tier": 3,
        "rank": 27,
        "winRate": 50.556400000000004,
        "pickRate": 1.6937600000000002,
        "banRate": 0.171347
      },
      {
        "key": "brand",
        "name": "复仇焰魂",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Brand.png",
        "tier": 3,
        "rank": 28,
        "winRate": 49.5308,
        "pickRate": 2.5179300000000002,
        "banRate": 3.08059
      },
      {
        "key": "galio",
        "name": "正义巨像",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Galio.png",
        "tier": 3,
        "rank": 29,
        "winRate": 51.1776,
        "pickRate": 1.05042,
        "banRate": 1.6972500000000001
      },
      {
        "key": "yuumi",
        "name": "魔法猫咪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Yuumi.png",
        "tier": 3,
        "rank": 30,
        "winRate": 47.7155,
        "pickRate": 5.24981,
        "banRate": 6.62348
      },
      {
        "key": "renata",
        "name": "炼金男爵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Renata.png",
        "tier": 3,
        "rank": 31,
        "winRate": 50.4607,
        "pickRate": 1.3281100000000001,
        "banRate": 0.195459
      },
      {
        "key": "pantheon",
        "name": "不屈之枪",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Pantheon.png",
        "tier": 3,
        "rank": 32,
        "winRate": 48.2648,
        "pickRate": 3.7265399999999995,
        "banRate": 2.40803
      },
      {
        "key": "tahmkench",
        "name": "河流之王",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/TahmKench.png",
        "tier": 3,
        "rank": 33,
        "winRate": 49.4118,
        "pickRate": 2.1641299999999997,
        "banRate": 1.96614
      },
      {
        "key": "amumu",
        "name": "殇之木乃伊",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Amumu.png",
        "tier": 3,
        "rank": 34,
        "winRate": 51.9011,
        "pickRate": 0.56631,
        "banRate": 0.809122
      },
      {
        "key": "elise",
        "name": "蜘蛛女皇",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Elise.png",
        "tier": 3,
        "rank": 35,
        "winRate": 51.1402,
        "pickRate": 0.654336,
        "banRate": 0.941493
      },
      {
        "key": "xerath",
        "name": "远古巫灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Xerath.png",
        "tier": 3,
        "rank": 36,
        "winRate": 47.7786,
        "pickRate": 3.01395,
        "banRate": 12.7801
      },
      {
        "key": "swain",
        "name": "诺克萨斯统领",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Swain.png",
        "tier": 3,
        "rank": 37,
        "winRate": 47.6154,
        "pickRate": 2.5964,
        "banRate": 1.68442
      },
      {
        "key": "shen",
        "name": "暮光之眼",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Shen.png",
        "tier": 3,
        "rank": 38,
        "winRate": 48.9528,
        "pickRate": 1.2218200000000001,
        "banRate": 0.7605179999999999
      },
      {
        "key": "leblanc",
        "name": "诡术妖姬",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Leblanc.png",
        "tier": 3,
        "rank": 39,
        "winRate": 49.3889,
        "pickRate": 0.835362,
        "banRate": 14.901200000000001
      },
      {
        "key": "neeko",
        "name": "万花通灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Neeko.png",
        "tier": 3,
        "rank": 40,
        "winRate": 48.5163,
        "pickRate": 1.5196100000000001,
        "banRate": 0.550381
      },
      {
        "key": "hwei",
        "name": "异画师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Hwei.png",
        "tier": 4,
        "rank": 41,
        "winRate": 49.6319,
        "pickRate": 0.6756719999999999,
        "banRate": 2.92233
      },
      {
        "key": "sylas",
        "name": "解脱者",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Sylas.png",
        "tier": 4,
        "rank": 42,
        "winRate": 47.625099999999996,
        "pickRate": 1.3889099999999999,
        "banRate": 16.7621
      },
      {
        "key": "fiddlesticks",
        "name": "远古恐惧",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Fiddlesticks.png",
        "tier": 4,
        "rank": 43,
        "winRate": 49.510799999999996,
        "pickRate": 0.50839,
        "banRate": 1.26209
      },
      {
        "key": "shaco",
        "name": "恶魔小丑",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Shaco.png",
        "tier": 4,
        "rank": 44,
        "winRate": 47.292699999999996,
        "pickRate": 1.27399,
        "banRate": 16.3909
      },
      {
        "key": "camille",
        "name": "青钢影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Camille.png",
        "tier": 4,
        "rank": 45,
        "winRate": 45.9911,
        "pickRate": 2.54352,
        "banRate": 5.96731
      },
      {
        "key": "zoe",
        "name": "暮光星灵",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Zoe.png",
        "tier": 4,
        "rank": 46,
        "winRate": 47.8597,
        "pickRate": 0.923453,
        "banRate": 3.1992100000000003
      },
      {
        "key": "teemo",
        "name": "迅捷斥候",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Teemo.png",
        "tier": 4,
        "rank": 47,
        "winRate": 48.7823,
        "pickRate": 0.5401320000000001,
        "banRate": 5.862769999999999
      },
      {
        "key": "veigar",
        "name": "邪恶小法师",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Veigar.png",
        "tier": 5,
        "rank": 48,
        "winRate": 44.7096,
        "pickRate": 0.633393,
        "banRate": 1.7185800000000002
      },
      {
        "key": "ashe",
        "name": "寒冰射手",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Ashe.png",
        "tier": 5,
        "rank": 49,
        "winRate": 43.9544,
        "pickRate": 0.740464,
        "banRate": 1.69144
      },
      {
        "key": "mel",
        "name": "流光镜影",
        "imageUrl": "https://opgg-static.akamaized.net/meta/images/lol/16.17.1/champion/Mel.png",
        "tier": 5,
        "rank": 50,
        "winRate": 43.224000000000004,
        "pickRate": 0.7823500000000001,
        "banRate": 19.6985
      }
    ]
  }
};
