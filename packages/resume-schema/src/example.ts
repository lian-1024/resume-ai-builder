import type { ResumeData } from './index'

export const Example: ResumeData = {
    basics: {
      name: 'lianqq',
      headline: '创新的前端开发者',
      email: 'zhangwei@example.com',
      phone: '(010) 1234-5678',
      url:  'https://github.com/lian-1024',
      customFields: [],
      picture: {
        url: 'https://avatars.githubusercontent.com/u/93166482?s=48&v=4',
        size: 100
      },
      intention: {
        currentStatus: '在职',
        positionTitle: '前端开发工程师',
        salary: '10000-20000元/月',
        city: '北京'
      }
    },
    sections: {
      education: {
        name: '教育背景',
        columns: 1,
        separateLinks: true,
        visible: true,
        id: 'education',
        items: [
          
        ]
      },
      projects: {
        name: '项目',
        columns: 1,
        separateLinks: true,
        visible: true,
        id: 'projects',
        items: [
       
        ]
      },
  
      skills: {
        name: '专业技能',
        columns: 1,
        separateLinks: true,
        visible: true,
        id: 'skills',
        items: [
         
        ]
      },
      // custom: {}
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
  