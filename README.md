# 部署到 GitHub Pages 指南

## 项目简介

这是一个使用 Next.js 14 构建的个人作品集网站，支持中英文国际化切换，展示个人工作经历和 AI Coding 实践项目。

**技术栈：** Next.js 14 + TypeScript + Tailwind CSS + Framer Motion

---

## 快速开始

### 本地开发
```bash
npm install
npm run dev
```
打开 [http://localhost:3000](http://localhost:3000) 预览。

---

## 一、部署到 GitHub Pages

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

---

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

## 二、绑定自定义域名 youngzhou6.space

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
| CNAME   | www     | youngzhou66.github.io | 说明你的 GitHub 用户名 |

> **注意：** 将 `youngzhou66.github.io` 替换为你实际的 GitHub Pages 地址。

### 3. 在 GitHub 仓库中启用自定义域名

- 进入仓库 **Settings → Pages**
- 在 **Custom domain** 中输入 `youngzhou6.space`
- 点击 **Save**
- 勾选 **Enforce HTTPS**

### 4. 等待 DNS 生效

通常 10-30 分钟生效，最长不超过 24 小时。生效后访问 `https://youngzhou6.space` 即可看到你的网站。

---

## 项目结构

```
├── app/                    # Next.js App Router
├── components/             # React 组件
│   ├── i18n/              # 国际化组件
│   ├── Hero.tsx           # 首页 Hero 区域
│   ├── About.tsx          # 关于我（工作经历 + 技能）
│   ├── Portfolio.tsx      # 项目作品集
│   ├── Navigation.tsx     # 导航栏
│   └── Footer.tsx         # 页脚
├── lib/i18n/              # 国际化翻译文件
├── public/                # 静态资源
│   └── CNAME              # 自定义域名配置
├── .github/workflows/     # GitHub Actions 工作流
└── next.config.js         # Next.js 配置（已配置静态导出）
```

---

## 关键配置说明

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

### 国际化
项目使用自定义 React Context 实现中英文切换，无需服务端渲染，完全兼容静态导出。翻译文件位于 `lib/i18n/translations.ts`。

---

## 常见问题

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
