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
| 部署 | [Cloudflare Workers](https://workers.cloudflare.com/) |

## 📋 档次划分

| 档次 | ELO | 说明 |
|------|-----|------|
| 夯爆了 | 220 | 大师及以上 |
| 夯 | 210 | 钻1钻2 |
| 顶级 | 170 | 钻石 |
| 人上人 | 130 | 翡翠 |
| NPC | 90 | 白金 |
| 拉完了 | 50 | 黄金 |
| 人机 | 40 | 骇人鲸 |

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

可用档次：`hangbaole`、`hang`、`dingji`、`renshangren`、`npc`、`lawanle`、`renji`

## 🚀 部署

### Cloudflare Workers + 阿里云域名

项目部署在 Cloudflare Workers，绑定阿里云自定义域名 `youngzhou6.space`，国内可正常访问。

#### 部署步骤：

1. **本地构建**
```bash
npm run build
```

2. **在 Cloudflare Workers 后台上传 out/ 目录**
   - 进入 Cloudflare → Workers & Pages → 你的 Worker
   - 上传 `out/` 目录下的所有文件

3. **绑定域名**
   - Worker → Settings → Domains → 添加 `youngzhou6.space`
   - Cloudflare 会自动配置 DNS 记录

4. **阿里云 DNS 设置**
   - 将 DNS 服务器改为 Cloudflare 提供的：
     ```
     emely.ns.cloudflare.com
     rory.ns.cloudflare.com
     ```
   - Cloudflare 接管 DNS 管理

#### 自动部署（可选）

已配置 GitHub Actions，push 到 master 后 Vercel 自动部署，可作为备用方案。

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
