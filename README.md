# 超级个体 - 全自动盈利矩阵

一个基于 React + Vite + Tailwind CSS 构建的现代化网站。

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:5173 查看网站

### 构建生产版本

```bash
npm run build
```

构建完成后，文件会输出到 `dist` 目录。

### 预览生产构建

```bash
npm run preview
```

## 📦 部署

### 方式一：Vercel（推荐）

1. 将代码推送到 GitHub
2. 访问 [Vercel](https://vercel.com)
3. 导入你的 GitHub 仓库
4. Vercel 会自动检测 Vite 项目并完成部署

### 方式二：Netlify

1. 将代码推送到 GitHub
2. 访问 [Netlify](https://netlify.com)
3. 导入你的 GitHub 仓库
4. 构建命令：`npm run build`
5. 发布目录：`dist`

### 方式三：GitHub Pages

1. 安装 gh-pages：`npm install --save-dev gh-pages`
2. 在 `package.json` 中添加：
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
3. 运行：`npm run deploy`

### 方式四：传统服务器

1. 运行 `npm run build`
2. 将 `dist` 目录中的文件上传到你的服务器
3. 配置服务器支持 SPA（单页应用）路由

## 🛠️ 技术栈

- **React 18** - UI 框架
- **Vite** - 构建工具
- **Tailwind CSS** - 样式框架
- **Lucide React** - 图标库

## 📝 项目结构

```
.
├── index.html          # HTML 入口
├── main.jsx            # React 入口
├── index.jsx           # 主应用组件
├── index.css           # 全局样式
├── vite.config.js      # Vite 配置
├── tailwind.config.js  # Tailwind 配置
└── package.json        # 项目配置
```
