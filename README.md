<div align="center">
  <strong>基于 TypeScript 和 Shadcn UI 构建的 Next.js 管理面板模板</strong><br />
  使用 Next.js 15、Tailwind CSS v4、App Router、TypeScript 和 Shadcn UI 构建的现代管理仪表板模板。
</div>

<br />

<div align="center">
  <a href="https://next-shadcn-admin-dashboard.vercel.app">查看演示</a>
</div>

<br />

<p align="center">
  <a href="https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Farhamkhnz%2Fnext-shadcn-admin-dashboard">
    <img src="https://vercel.com/button" alt="使用 Vercel 部署" />
  </a>
</p>

<br />

<div align="center">
  <img src="https://github.com/arhamkhnz/next-shadcn-admin-dashboard/blob/main/media/dashboard.png?version=5" alt="仪表板截图" width="75%">
</div>

## 项目愿景

目标是创建一个开源管理模板，包含多个示例屏幕、预构建的部分和精心设计的 UI 模式，所有这些都由清晰的架构和适当的项目设置支持。

它旨在作为 SaaS 平台、内部仪表板和管理面板的强大起点，内置对多租户、RBAC 和基于功能的扩展的支持。

## 概述

该项目使用 `Next.js 15 (App Router)`、`TypeScript`、`Tailwind CSS v4` 和 `Shadcn UI` 作为主要技术栈。  
它还包括用于验证的 `Zod`、用于代码检查和格式化的 `ESLint` 和 `Prettier`，以及用于预提交钩子的 `Husky`。  

这将支持 `React Hook Form`、`Zustand`、`TanStack Table` 和其他相关工具，并将在即将推出的屏幕中添加。基于角色的访问控制 (RBAC) 与配置驱动的 UI 和多租户 UI 支持也在功能路线图中计划。

当前版本使用 [Tweakcn Tangerine](https://tweakcn.com/) 主题进行 UI 设计。

> 寻找 **Next 14 + Tailwind CSS v3** 版本？  
> 查看 [`archive/next14-tailwindv3`](https://github.com/arhamkhnz/next-shadcn-admin-dashboard/tree/archive/next14-tailwindv3) 分支。  
> 该分支使用不同的颜色主题，不会积极维护，但我会尽量保持更新最新的更改和屏幕。

## 屏幕列表

✅ 已完成  
🚧 即将推出

### 仪表板
- ✅ 默认
- 🚧 客户关系管理
- 🚧 数据分析
- 🚧 电子商务
- 🚧 学院
- 🚧 物流

### 页面
- 🚧 邮件
- 🚧 聊天
- 🚧 日历
- 🚧 看板
- 🚧 发票
- 🚧 用户
- 🚧 角色
- ✅ 身份认证

## 同位置文件系统架构

项目遵循使用 App Router 的同位置优先文件结构。功能特定的页面与其组件并排存在，以保持关注点分离并减少交叉导入的复杂性。

```txt
src/
├── app/                      # Next.js App Router 入口
│   ├── (external)/           # 公共页面（如营销、反馈）
│
│   ├── (main)/               # 主应用程序布局
│   │   ├── dashboard/
│   │   │   ├── layout.tsx    # 仪表板路由的共享布局
│   │   │   ├── default/      # 默认概览仪表板
│   │   │   │   ├── components/
│   │   │   │   └── page.tsx
│   │   │   ├── ecommerce/
│   │   │   │   ├── components/
│   │   │   │   └── page.tsx
│   │   │   ├── email/
│   │   │   │   ├── components/
│   │   │   │   └── page.tsx
│   │   │   ├── users/
│   │   │   │   ├── components/
│   │   │   │   └── page.tsx
│   │   │   ├── profile/
│   │   │   │   ├── components/
│   │   │   │   └── page.tsx
│   ├── auth/                  # 身份认证部分
│   │   ├── layout.tsx  
│   │   ├── login/
│   │   │   ├── components/
│   │   │   └── page.tsx
│   │   ├── register/
│   │   │   ├── components/
│   │   │   └── page.tsx
│   │   ├── components/        # 共享身份认证组件（如按钮）
│
├── components/
│   ├── ui/                    # 可重用的 UI 原语（按钮、输入等）
│   ├── common/                # 跨多个区域使用的共享布局/全局组件
│
├── middleware.ts              # 处理身份认证/重定向的中间件
├── navigation/                # 侧边栏的导航配置
├── hooks/                     # 自定义 React 钩子
├── utils/                     # 工具/辅助函数
├── server/                    # 仅服务器函数和服务器操作
├── config/                    # 项目范围的配置（如主题、布局）
├── constants/                 # 静态值如角色、应用级枚举、路由、虚拟数据
```

如果您想深入了解这种架构模式，请查看 [这个仓库](https://github.com/arhamkhnz/next-colocation-template)。

## 开始使用

要在本地设置和运行此管理仪表板，请按照以下步骤操作：

1. **克隆仓库**
   ```bash
   git clone https://github.com/arhamkhnz/next-shadcn-admin-dashboard.git
   ```
   
2. **安装依赖**
   ```bash
    npm install
   ```
   > 在安装过程中，您可能会被提示使用 `--force` 或 `--legacy-peer-deps` 标志。  
   > 这是预期的且安全的——这是由于来自 Shadcn 注册表的依赖项引用了一个破坏性的库版本。

3. **启动开发服务器**
   ```bash
   npm run dev
   ```

运行后，应用程序将在 [http://localhost:3000](http://localhost:3000) 上可用

---

> [!重要]  
> 该项目经常更新。如果您正在从分叉或之前克隆的副本工作，请在同步之前检查最新更改。某些更新可能包含破坏性更改。

---

如果您想贡献或建议改进，请随时开启问题、功能请求或开始讨论。

**祝您构建愉快！**