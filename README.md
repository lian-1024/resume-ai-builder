# Resume AI Builder

## 项目介绍

一个基于 AI 的智能简历构建器，帮助用户快速创建专业的简历。项目采用现代化的技术栈和 monorepo 架构，提供简洁优雅的用户界面和丰富的简历模板。

## 技术栈

- **前端框架**: Vue 3 + TypeScript
- **构建工具**: Vite
- **包管理**: pnpm
- **Monorepo 工具**: Turborepo
- **UI 框架**: Tailwind CSS
- **开发工具**: ESLint, Prettier, Husky

## 项目结构

```
├── apps/                    # 应用程序
│   ├── resume-builder/      # 简历构建器主应用
│   └── resume-web/         # Web 端应用
├── packages/               # 共享包
│   ├── resume-components/  # 简历相关组件
│   ├── resume-schema/      # 简历数据模型
│   ├── shared-config/      # 共享配置
│   └── ui/                 # UI 组件库
```

## 快速开始

### 环境要求

- Node.js >= 16
- pnpm >= 8

### 安装依赖

```bash
pnpm install
```

### 开发

```bash
# 启动所有应用
pnpm dev

# 启动特定应用
pnpm dev --filter resume-web
```

### 构建

```bash
pnpm build
```

## 主要功能

- 多种专业简历模板
- 实时预览编辑
- AI 辅助内容生成
- 响应式设计
- 支持导出多种格式

## 项目结构说明

### apps/resume-builder

简历构建器的核心应用，提供简历编辑和预览功能。

### apps/resume-web

Web 端应用，提供用户界面和模板选择功能。

### packages/resume-components

可复用的简历相关组件，包括各种简历模板组件。

### packages/resume-schema

定义简历数据的结构和类型。

### packages/shared-config

共享的项目配置，包括 ESLint、Prettier、TypeScript 等配置。

### packages/ui

基础 UI 组件库。

## 开发指南

1. 遵循项目的代码规范和提交规范
2. 新功能开发请先创建 feature 分支
3. 提交代码前确保通过所有测试和 lint 检查

## 贡献指南

欢迎贡献代码和提出建议！请确保在提交 PR 前：

1. 代码符合项目规范
2. 添加必要的测试
3. 更新相关文档

## 许可证

MIT License