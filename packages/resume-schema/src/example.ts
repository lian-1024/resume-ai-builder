import type { ResumeData } from './index'

export const Example: ResumeData = {
    basics: {
      name: 'lianqq',
      headline: '创新的前端开发者',
      email: 'zhangwei@example.com',
      phone: '(010) 1234-5678',
      url: {
        label: '',
        href: 'https://github.com/lian-1024'
      },
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
          {
            id: 'yo3p200zo45c6cdqc6a2vtt3',
            visible: true,
            school: '北京大学',
            major: '计算机科学',
            degree: '学士',
            startDate: '2012年8月',
            endDate: '2016年5月',
            studyType:"全日制",
            summary: '主修课程： abababaab \n\n 获得奖项: ababa',
            url: {
              label: '',
              href: ''
            }
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
            id: 'yw843emozcth8s1ubi1ubvlf',
            visible: true,
            name: '电子商务平台',
            startDate:"2024-10-10",
            endDate:"2025-02-02",
            role:"前端开发工程师",
            city:"广州",
            summary: '1.领导全栈电子商务平台的开发，提高了销售转化率25%。\n\n 2.ababa',
            url: {
              label: '线上地址',
              href: 'https://github.com/lian-1024'
            }
          },
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
            id: 'hn0keriukh6c0ojktl9gsgjm',
            visible: true,
            name: '前端技术',
            summary: '- 精通HTML5、CSS3、JavaScript、TypeScript、Vue.js、React.js、Node.js、Webpack、Git、Jenkins、Docker、JIRA\n\n- 熟悉Vue3、React18、Vite、Webpack、Git、Jenkins、Docker、JIRA\n\n- 了解Vue2、React17、Webpack、Git、Jenkins、Docker、JIRA\n\n- 具备Vue2、React17、Webpack、Git、Jenkins、Docker、JIRA',
            level: 0,
          },
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
  