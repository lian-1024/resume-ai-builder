import type { ResumeData } from './index'

export const Example: ResumeData = {
  basics: {
    name: '昵称',
    headline: '头衔',
    email: '邮箱',
    phone: '电话',
    url: '个人网站',
    customFields: [],
    picture: {
      url: '头像路径',
      size: 100
    },
    intention: {
      currentStatus: '当前状态',
      positionTitle: '职位',
      salary: '薪资',
      city: '城市'
    }
  },
  sections: {
    education: {
      name: '教育经历',
      columns: 1,
      separateLinks: true,
      visible: true,
      id: 'education',
      items: [
        {
          school: "学校",
          major: "专业",
          degree: "学历",
          startDate: "开始时间",
          endDate: "结束时间",
          summary: "学校简介",
          studyType: "学习方式",
          id: "1"
        }
      ]
    },
    projects: {
      name: '项目',
      columns: 1,
      separateLinks: true,
      visible: true,
      id: 'projects',
      items: [
        {
          name: "项目名称",
          startDate: "开始时间",
          endDate: "结束时间",
          summary: "项目简介",
          role: "角色",
          url: "项目链接",
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
          summary: "熟悉HTML5、CSS3、JS、ES6，具备良好的代码规范和代码优化能力",
          level: 1,
        }
      ]
    },
  },
  // 简历主题数据
  config: {
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
