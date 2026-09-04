# LOL 智能分组

一个用于 LOL（英雄联盟）开黑分组的工具，支持 10 人智能平衡分组或真随机分组，可锁定位置，一键公平对战。

## 🌟 在线演示

[访问网站](https://youngzhou6.space)

## ✨ 特性

- 🎯 **智能平衡**：根据玩家 ELO 档次自动平衡两队实力
- 🔀 **真随机**：完全随机分组，看谁运气好
- 🔒 **位置锁定**：支持同时锁定多个位置，确保位置不跑偏
- 📊 **实时对比**：分组后显示双方 ELO 总分和分差
- 🎨 **精美界面**：动态光晕背景 + 流畅动画
- 📱 **响应式**：完美适配桌面、平板和手机
- ➕ **自定义玩家**：可添加临时玩家并设置档次

## 🛠️ 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | [Next.js 14](https://nextjs.org/) |
| 语言 | [TypeScript](https://www.typescriptlang.org/) |
| 样式 | [Tailwind CSS](https://tailwindcss.com/) |
| 动画 | [Framer Motion](https://www.framer.com/motion/) |
| 部署 | [Vercel](https://vercel.com/) |

## 📋 档次划分

| 档次 | ELO | 说明 |
|------|-----|------|
| 夯 | 210 | 职业级 |
| 顶级 | 170 | 大师/王者 |
| 人上人 | 130 | 钻石 |
| 拉完了 | 110 | 黄金/铂金 |
| NPC | 90 | 白银及以下 |

## 📁 项目结构

```
zf-project/
├── app/
│   ├── group/page.tsx    # 分组页面（核心功能）
│   ├── page.tsx          # 首页（自动跳转到 /group）
│   ├── layout.tsx        # 根布局
│   └── globals.css       # 全局样式（含动态背景动画）
├── data/
│   └── players.ts        # 玩家数据 + 档次配置
├── public/               # 静态资源
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## 🚀 快速开始

### 环境要求

- Node.js >= 18.0.0
- npm >= 9.0.0

### 安装依赖

```bash
npm install
```

### 本地开发

```bash
npm run dev
```

打开浏览器访问 [http://localhost:3000/group](http://localhost:3000/group)

### 构建生产版本

```bash
npm run build
```

### 代码检查

```bash
npm run lint
```

## 🎮 使用说明

1. **选择玩家**：点击玩家标签选择 10 位玩家
2. **锁定位置**（可选）：点击玩家卡片中的位置按钮锁定位置，支持多选
3. **选择模式**：
   - **智能平衡**：自动调整使两队 ELO 分差最小（默认 15% 阈值）
   - **真随机**：完全随机分组
4. **开始分组**：点击「⚔️ 开始分组」
5. **调整阈值**（智能平衡模式下）：拖动滑块调整 ELO 差值阈值

## ⚙️ 算法说明

点击页面上的「📖 算法原理」按钮查看详细说明。

## ➕ 添加玩家

### 方式一：页面添加

1. 点击「➕ 添加玩家」按钮
2. 输入玩家名称
3. 为每个位置选择档次
4. 点击「确认添加」

### 方式二：代码添加

编辑 `data/players.ts`，在 `PLAYERS` 数组中添加：

```typescript
{ name: '玩家名', positions: { top: 'npc', jungle: 'dingji', mid: 'renshangren', adc: 'lawanle', support: 'npc' } }
```

可用档次：`npc`、`lawanle`、`renshangren`、`dingji`、`hang`

## 🚀 部署

### Vercel（推荐）

项目已配置 Vercel，push 到 GitHub 后自动部署：

```bash
git add .
git commit -m "update"
git push origin master
```

### 本地部署

```bash
npm run build
# 产物在 out/ 目录，可部署到任意静态托管服务
```

---

## ❓ 常见问题

**Q: 分组失败怎么办？**
- 减少锁定的位置数量
- 更换部分玩家
- 切换到「真随机」模式
- 调高 ELO 差值阈值

**Q: 如何修改档次？**
- 编辑 `data/players.ts` 中的 `TIER_INFO`

**Q: 如何修改玩家数据？**
- 编辑 `data/players.ts` 中的 `PLAYERS` 数组

---

Made with ❤️ using Next.js & Tailwind CSS
