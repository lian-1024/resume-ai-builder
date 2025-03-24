import type { ResumeData } from './index'

export const Example: ResumeData = {
  basics: {
    name: '小Q',
    headline: '前端开发工程师',
    email: 'lianqq@qq.com',
    phone: '12345678901',
    url: 'https://github.com/lian-1024',
    avatar: '',
    wechat: '18512345678',
    birthday: '2020-01-01',
  },
 
  sections: {
    intention: {
      name: '求职意向',
      status: '在校',
      position: '前端开发工程师',
      salary: '10000-20000',
      location: '广州',
    },
    education: {
      name: '教育经历',
      columns: 1,
      separateLinks: true,
      visible: true,
      id: 'education',
      items: [
        {
          school: "某双一流大学",
          major: "计算机科学与技术",
          degree: "本科",
          startDate: "2025-09-01",
          endDate: "2029-06-01",
          summary: `
          <ul>
            <li>专业成绩优异，GPA 3.8/4.0，专业排名前5%</li>
            <li>获得国家奖学金、优秀学生干部等多项荣誉称号</li>
            <li>担任班级学习委员，组织多次学术交流活动</li>
            <li>参与校ACM程序设计竞赛，获得省级二等奖</li>
            <li>参与学校创新创业项目，获得校级优秀项目奖</li>
          </ul>`,
          studyType: "全日制",
          id: "1"
        }
      ]
    },
    projects: {
      name: '项目经历',
      columns: 1,
      separateLinks: true,
      visible: true,
      id: 'projects',
      items: [
        {
          name: "智能AI简历构建器",
          startDate: "2025-01-01",
          endDate: "2025-03-01",
          summary: `
          <b>技术栈：</b>Vue3、Nuxt3、TypeScript、Vite、Tailwind CSS、Shadcn Vue、LangChain.js、Pnpm、Turborepo、Monorepo；
          <b>项目地址：</b>https://github.com/lian-1024/resume-ai-builder；
          <b>项目介绍：</b>「智能简历构建器」是一款基于 AI 的现代化 Web 应用，旨在帮助用户快速生成高质量、专业化的简历。项目采用 Vue 3 和 Nuxt 3 构建，结合 TypeScript 确保类型安全，借助 Vite 实现高效开发与构建流程，并通过 Tailwind CSS 和 Shadcn Vue 打造优雅且一致的 UI 风格。核心功能依托 LangChain.js 集成 AI 大模型，支持一键生成简历、内容智能优化及辅助撰写等特性，大幅提升用户体验与效率；
          <ul>
            <li><b>Monorepo 架构：</b>利用 Turborepo 和 Pnpm 搭建 Monorepo 架构，统一管理多子应用与共享组件库，提升代码复用性与维护效率；</li>
            <li><b>高复用组件库：</b>基于 Shadcn Vue 二次封装，设计并实现高复用 UI 组件体系，确保风格统一并加速开发迭代；</li>
            <li><b>AI模块：</b>通过 LangChain.js 调用智谱 API，设计并实现 resume-ai 库，提供 AI 助手、AI 优化和 AI 生成等功能，显著提高简历编写效率</li>
            <li><b>简历构建与预览：</b>设计并开发简历编辑器，采用 iframe 嵌入预览，利用 postMessage 实现数据实时同步，提升交互流畅性</li>
            <li><b>数据模型：</b>开发 resume-schema 库用于定义和验证简历数据结构，并基于 Zod 进行数据模式校验，确保简历数据的完整性和一致性，支持多种简历模板配置</li>
            <li><b>工具库：</b>构建 resume-utils 工具库，集成日期处理、剪贴板、打印导出简历操作等功能，优化开发与用户体验</li>
          </ul>
          `,
          role: "全栈开发",
          url: "https://github.com/lian-1024/resume-builder",
          id: "1"
        }
      ]
    },

    skills: {
      name: '专业技能',
      columns: 1,
      separateLinks: true,
      visible: true,
      id: 'skills',
      items: [
        {
          id: '1',
          name: '前端',
          summary: `
        <ul>
          <li>热衷于技术分享，定期编写和发布技术文章，在全网获得1000+关注，具有一定的社区影响力</li>
          <li>熟悉HTML5、CSS3、JavaScript，熟悉使用ES6新语法特性，实现复杂的响应式和交互式网页设计</li>
          <li>熟练使用Vue框架及其生态系统，拥有丰富的组件化开发经验，能够独立设计和实现高性能的前端应用。</li>
          <li>熟悉Vite和Webpack等现代前端构建工具，具备Monorepo项目管理经验，以及NPM包的发布流程经验</li>
          <li>熟悉使用Uniapp开发小程序，能够独立开发和调试小程序项目，满足基本的小程序开发需求</li>
          <li>熟悉Nuxt/Next等服务端渲染框架，具备基本的SSR项目开发能力</li>
          <li>了解React及其相关技术栈，具有实际的React项目开发经验，并使用Next.js进行服务端渲染开发个人博客</li>
          <li>了解Node.js/Java基本语法，熟悉流程，能够与后端开发者紧密合作，共同解决项目中的技术问题，确保前后端接口的高效对接和数据的顺畅传输</li>
          </ul>
          `,
          level: 1,
        }
      ]
    },
  },
  // 简历主题数据
  metadata: {
    sectionsOrder: ['basics', 'education', 'projects', 'skills'],
    template: 'simple',
    page: {
      margin: 14,
      format: 'a4'
    },
    theme: {
      background: '#ffffff',
      text: '#000000',
      primary: '#3b82f6'
    }
  }
}
