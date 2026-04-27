# zhou feng - AI Coding 实践个人网站

一个现代化、有设计感的个人作品集网站，支持中英文切换，用于展示 AI 辅助编程实践项目和技术能力。

## 🌟 在线演示

[访问网站](https://youngzhou6.space)

## ✨ 特性

- 🎨 **现代设计**：简约而不失质感的设计风格
- 🌐 **国际化支持**：中英文无缝切换，自动检测浏览器语言
- 🚀 **快速性能**：基于 Next.js 14，支持静态生成
- 📱 **完全响应式**：完美适配桌面、平板和手机
- 🎭 **流畅动画**：使用 Framer Motion 实现丝滑的交互动画
- ⚡ **SEO 优化**：内置元数据配置，有利于搜索引擎收录
- 🔧 **易于定制**：清晰的项目结构，方便修改内容

## 🛠️ 技术栈

| 类别 | 技术 |
|------|------|
| 框架 | [Next.js 14](https://nextjs.org/) |
| 语言 | [TypeScript](https://www.typescriptlang.org/) |
| 样式 | [Tailwind CSS](https://tailwindcss.com/) |
| 动画 | [Framer Motion](https://www.framer.com/motion/) |
| 国际化 | 自研 i18n 方案（Context API + localStorage） |
| 部署 | [GitHub Pages](https://pages.github.com/) |

## 📁 项目结构

```
portfolio-site/
├── app/                      # Next.js App Router
│   ├── globals.css          # 全局样式配置
│   ├── layout.tsx           # 根布局组件
│   └── page.tsx             # 主页组件
├── components/              # 可复用组件
│   ├── i18n/
│   │   └── LanguageSwitcher.tsx  # 语言切换组件
│   ├── Navigation.tsx       # 导航栏
│   ├── Hero.tsx             # Hero 区域
│   ├── About.tsx            # 关于我区域（工作经历+技能）
│   ├── Portfolio.tsx        # 项目展示区域
│   └── Footer.tsx           # 页脚
├── lib/i18n/                # 国际化模块
│   ├── translations.ts      # 翻译文件（中英文）
│   └── LanguageContext.tsx  # 语言上下文 Provider
├── public/                  # 静态资源
│   └── CNAME                # 自定义域名配置
├── .github/workflows/       # GitHub Actions 工作流
│   └── deploy.yml           # 自动部署配置
├── package.json             # 项目配置和依赖
├── tailwind.config.js       # Tailwind 配置
├── tsconfig.json            # TypeScript 配置
└── next.config.js           # Next.js 配置（静态导出）
```

## 🌐 国际化 (i18n)

### 功能特性

- ✅ **自动语言检测**：根据浏览器语言自动选择中文或英文
- ✅ **手动切换**：导航栏右上角提供中英文切换按钮
- ✅ **语言记忆**：使用 localStorage 记住用户选择，刷新页面后保持
- ✅ **全站翻译**：所有文本内容都支持中英文切换

### 翻译文件位置

所有翻译内容都在 `lib/i18n/translations.ts` 中维护：

```typescript
export const translations = {
  zh: { /* 中文翻译 */ },
  en: { /* 英文翻译 */ },
};
```

### 如何添加新的翻译

1. 在 `translations.ts` 的 `zh` 和 `en` 对象中添加对应的翻译
2. 在组件中使用 `useLanguage()` hook 获取翻译函数
3. 使用 `t('sectionName')` 获取对应部分的翻译

```typescript
const { t } = useLanguage();
const nav = t('nav');
// nav.home, nav.about, nav.portfolio
```

## 📋 页面模块

### 1. 导航栏 (Navigation)
- 固定顶部导航，滚动时自动添加背景模糊效果
- 移动端汉堡菜单
- 平滑滚动到各个区域
- 语言切换按钮

### 2. Hero 区域
- 大标题渐变文字效果
- 个人简介和行动按钮
- 滚动指示动画

### 3. 关于我 (About)
- 个人介绍和描述
- 统计数据展示（年限、公司数、项目数）
- 技能栈网格展示
- 工作经历时间线（华为、豪森智源、江南造船）

### 4. 项目展示 (Portfolio)
- 分类筛选功能（MindCluster、调度器、MES/MOM）
- 卡片悬停效果
- 可展开的项目详情
- 项目标签展示

### 5. 页脚 (Footer)
- 社交媒体链接（GitHub、GitCode、LinkedIn）
- 快速导航链接
- 版权信息

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

打开浏览器访问 [http://localhost:3000](http://localhost:3000)

### 构建生产版本

```bash
npm run build
```

### 代码检查

```bash
npm run lint
```

---

## 📦 部署到 GitHub Pages

项目已配置为静态导出，支持自动部署到 GitHub Pages 并绑定自定义域名 `youngzhou6.space`。

### 方式一：GitHub Actions 自动部署（推荐）

项目已内置 GitHub Actions 工作流文件 (`.github/workflows/deploy.yml`)，只需将代码推送到 GitHub 即可自动部署。

#### 步骤：

1. **创建 GitHub 仓库**
   - 在 GitHub 上新建一个仓库，例如 `youngzhou66/portfolio`
   - 将本地代码推送上去：
   ```bash
   git init
   git add .
   git commit -m "initial commit"
   git branch -M main
   git remote add origin https://github.com/youngzhou66/portfolio.git
   git push -u origin main
   ```

2. **启用 GitHub Pages**
   - 进入仓库 **Settings → Pages**
   - 在 **Source** 中选择 **GitHub Actions**（不是 "Deploy from a branch"）
   - 保存后，GitHub Actions 会自动运行构建和部署

3. **等待部署完成**
   - 进入仓库的 **Actions** 标签页，查看部署进度
   - 部署成功后，访问 `https://youngzhou66.github.io/portfolio` 即可看到网站

### 方式二：手动部署到 gh-pages 分支

```bash
# 1. 构建静态文件
npm run build

# 2. 安装 gh-pages 工具
npm install --save-dev gh-pages

# 3. 部署到 gh-pages 分支
npx gh-pages -d out
```

---

## 🌍 绑定自定义域名 youngzhou6.space

### 1. 确认 CNAME 文件已存在

项目 `public/CNAME` 文件中已包含：
```
youngzhou6.space
```

### 2. 配置阿里云 DNS 解析

登录 [阿里云域名控制台](https://dc.console.aliyun.com/)，为 `youngzhou6.space` 添加以下解析记录：

| 记录类型 | 主机记录 | 记录值              | 说明       |
|---------|---------|---------------------|------------|
| A       | @       | 185.199.108.153     | GitHub Pages |
| A       | @       | 185.199.109.153     | GitHub Pages |
| A       | @       | 185.199.110.153     | GitHub Pages |
| A       | @       | 185.199.111.153     | GitHub Pages |
| CNAME   | www     | youngzhou66.github.io | 你的 GitHub 用户名 |

> **注意：** 将 `youngzhou66.github.io` 替换为你实际的 GitHub Pages 地址。

### 3. 在 GitHub 仓库中启用自定义域名

- 进入仓库 **Settings → Pages**
- 在 **Custom domain** 中输入 `youngzhou6.space`
- 点击 **Save**
- 勾选 **Enforce HTTPS**

### 4. 等待 DNS 生效

通常 10-30 分钟生效，最长不超过 24 小时。生效后访问 `https://youngzhou6.space` 即可看到你的网站。

---

## 🎨 自定义指南

### 修改个人信息

编辑 `lib/i18n/translations.ts` 中的翻译内容：

- `hero` - 修改首页标题和描述
- `about` - 修改个人介绍、技能和经历
- `portfolio` - 修改项目展示内容
- `footer` - 修改页脚信息

### 添加项目

编辑 `lib/i18n/translations.ts` 中的 `portfolio.projects` 数组：

```typescript
projects: [
  {
    id: 1,
    title: { zh: '项目名称', en: 'Project Name' },
    subtitle: { zh: '副标题', en: 'Subtitle' },
    description: { zh: '项目描述', en: 'Description' },
    category: '分类',
    image: '图片URL',
    tags: ['标签1', '标签2'],
    link: '项目链接',
    details: { zh: ['详情1', '详情2'], en: ['Detail 1', 'Detail 2'] },
  },
];
```

### 修改配色方案

编辑 `tailwind.config.js` 中的 `theme.extend.colors`：

```javascript
colors: {
  primary: '#1a1a1a',    // 主色
  secondary: '#666666',  // 次要色
  accent: '#ff6b6b',     // 强调色
  background: '#fafafa', // 背景色
},
```

### 添加社交媒体链接

编辑 `components/Footer.tsx` 中的 `socialLinks` 数组：

```typescript
const socialLinks = [
  { name: 'GitHub', url: 'https://github.com/yourusername', icon: '...' },
];
```

---

## ⚙️ 关键配置说明

### next.config.js

```js
const nextConfig = {
  output: 'export',        // 静态导出，用于 GitHub Pages
  images: {
    unoptimized: true,     // 禁用图片优化（静态导出不支持）
  },
  basePath: '',            // 如果部署在子路径，需修改此项
}
```

### 国际化实现

项目使用自定义 React Context 实现中英文切换，无需服务端渲染，完全兼容静态导出。翻译文件位于 `lib/i18n/translations.ts`。

---

## 📝 注意事项

### 关于 npm vulnerabilities

安装依赖后可能会看到一些 vulnerabilities 警告，这些主要来自开发依赖（如 eslint、glob 等），**不影响生产环境**。

**解决方案：**

1. **忽略（推荐）**：开发依赖的漏洞不影响网站运行
2. **升级 Node.js**：升级到 v20+ 可以解决部分兼容性问题
3. **运行修复命令**：`npm audit fix`（但可能有破坏性）

### 图片优化

- 建议使用 WebP 格式以获得更好的性能
- 图片尺寸建议为 800x600 像素
- 可以使用 Unsplash 等免费图库作为占位图片

### SEO 优化

- 修改 `app/layout.tsx` 中的 `metadata`
- 添加 `favicon` 到 `public/` 目录
- 考虑添加 `robots.txt` 和 `sitemap.xml`

---

## ❓ 常见问题

**Q: GitHub Pages 显示 404？**
- 确认代码已推送到 `main` 分支
- 检查 GitHub Actions 是否运行成功
- 确认 `public/CNAME` 文件存在且内容正确

**Q: 自定义域名不生效？**
- 检查阿里云 DNS 记录是否正确添加
- 使用 `ping youngzhou6.space` 检查 DNS 是否解析到 GitHub Pages IP
- 等待 DNS 缓存刷新（最长 24 小时）

**Q: 如何更新内容？**
- 直接修改对应组件文件（如 `components/About.tsx`）
- 修改翻译文本请编辑 `lib/i18n/translations.ts`
- 推送代码后 GitHub Actions 会自动重新部署

---

## 📄 许可证

MIT License - 自由使用、修改和分发。

## 🤝 联系

如有问题或建议，请创建 Issue 或 Pull Request。

---

Made with ❤️ using Next.js & Tailwind CSS
