import type { ResumeData } from '../index'

export const sampleResume: ResumeData = {
  basics: {
    name: '张伟',
    headline: '创新的前端开发者',
    email: 'zhangwei@example.com',
    phone: '(010) 1234-5678',
    location: '北京市, 中国',
    url: {
      label: '',
      href: 'https://zhangwei.me/'
    },
    customFields: [],
    picture: {
      url: 'https://i.imgur.com/HgwyOuJ.jpg',
      size: 120
    }
  },
  sections: {
    summary: {
      name: '概述',
      columns: 1,
      separateLinks: true,
      visible: true,
      id: 'summary',
      content:
        '<p>具有5年经验的前端开发者，擅长构建影响力强和用户友好的网站和应用程序。专注于前端技术，热衷于现代网络标准和前沿开发技术。在从概念到部署的项目中有着成功的领导记录。</p>'
    },
    awards: {
      name: '奖项',
      columns: 1,
      separateLinks: true,
      visible: true,
      id: 'awards',
      items: []
    },
    certifications: {
      name: '证书',
      columns: 1,
      separateLinks: true,
      visible: true,
      id: 'certifications',
      items: [
        {
          id: 'spdhh9rrqi1gvj0yqnbqunlo',
          visible: true,
          name: '全栈网络开发',
          issuer: 'CodeAcademy',
          date: '2020',
          summary: '',
          url: {
            label: '',
            href: ''
          }
        },
        {
          id: 'n838rddyqv47zexn6cxauwqp',
          visible: true,
          name: 'AWS认证开发者',
          issuer: 'Amazon Web Services',
          date: '2019',
          summary: '',
          url: {
            label: '',
            href: ''
          }
        }
      ]
    },
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
          institution: '北京大学',
          studyType: '计算机科学学士',
          area: '北京, 中国',
          score: '',
          date: '2012年8月至2016年5月',
          summary: '',
          url: {
            label: '',
            href: ''
          }
        }
      ]
    },
    experience: {
      name: '工作经验',
      columns: 1,
      separateLinks: true,
      visible: true,
      id: 'experience',
      items: [
        {
          id: 'lhw25d7gf32wgdfpsktf6e0x',
          visible: true,
          company: '创新解决方案公司',
          position: '高级网络开发者',
          location: '北京市, 中国',
          date: '2019年1月至今',
          summary:
            '<ul><li><p>领导主要产品网站的重新设计，用户参与度提高了40%。</p></li><li><p>开发并实施了新的响应式框架，提高了跨设备兼容性。</p></li><li><p>指导四名初级开发者，培养了技术卓越的文化。</p></li></ul>',
          url: {
            label: '',
            href: 'https://creativesolutions.inc/'
          }
        },
        {
          id: 'r6543lil53ntrxmvel53gbtm',
          visible: true,
          company: '技术先锋',
          position: '网络开发者',
          location: '北京市, 中国',
          date: '2016年6月至2018年12月',
          summary:
            '<ul><li><p>与10人团队合作开发高质量的网络应用程序，使用React.js和Node.js。</p></li><li><p>管理第三方服务的集成，如Stripe支付和Twilio SMS服务。</p></li><li><p>优化应用程序性能，加载时间减少了30%。</p></li></ul>',
          url: {
            label: '',
            href: 'https://techadvancers.com/'
          }
        }
      ]
    },
    volunteer: {
      name: '志愿服务',
      columns: 1,
      separateLinks: true,
      visible: true,
      id: 'volunteer',
      items: []
    },
    interests: {
      name: '兴趣',
      columns: 1,
      separateLinks: true,
      visible: true,
      id: 'interests',
      items: []
    },
    languages: {
      name: '语言能力',
      columns: 1,
      separateLinks: true,
      visible: true,
      id: 'languages',
      items: []
    },
    profiles: {
      name: '社交资料',
      columns: 1,
      separateLinks: true,
      visible: true,
      id: 'profiles',
      items: [
        {
          id: 'cnbk5f0aeqvhx69ebk7hktwd',
          visible: true,
          network: 'LinkedIn',
          username: 'zhangwei',
          icon: 'linkedin',
          url: {
            label: '',
            href: 'https://linkedin.com/in/zhangwei'
          }
        },
        {
          id: 'ukl0uecvzkgm27mlye0wazlb',
          visible: true,
          network: 'GitHub',
          username: 'zhangwei',
          icon: 'github',
          url: {
            label: '',
            href: 'https://github.com/zhangwei'
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
          description: '项目负责人',
          date: '',
          summary: '<p>领导全栈电子商务平台的开发，提高了销售转化率25%。</p>',
          keywords: [],
          url: {
            label: '',
            href: ''
          }
        },
        {
          id: 'ncxgdjjky54gh59iz2t1xi1v',
          visible: true,
          name: '交互式仪表板',
          description: '前端开发者',
          date: '',
          summary:
            '<p>为SaaS应用创建了一个交云端分析仪表板，增强了客户的数据可视化。</p>',
          keywords: [],
          url: {
            label: '',
            href: ''
          }
        }
      ]
    },
    publications: {
      name: '出版物',
      columns: 1,
      separateLinks: true,
      visible: true,
      id: 'publications',
      items: []
    },
    references: {
      name: '推荐信',
      columns: 1,
      separateLinks: true,
      visible: false,
      id: 'references',
      items: [
        {
          id: 'f2sv5z0cce6ztjl87yuk8fak',
          visible: true,
          name: '应要求提供',
          description: '',
          summary: '',
          url: {
            label: '',
            href: ''
          }
        }
      ]
    },
    skills: {
      name: '技能',
      columns: 1,
      separateLinks: true,
      visible: true,
      id: 'skills',
      items: [
        {
          id: 'hn0keriukh6c0ojktl9gsgjm',
          visible: true,
          name: '网络技术',
          description: '高级',
          level: 0,
          keywords: ['HTML5', 'JavaScript', 'PHP', 'Python']
        },
        {
          id: 'r8c3y47vykausqrgmzwg5pur',
          visible: true,
          name: '网络框架',
          description: '中级',
          level: 0,
          keywords: ['React.js', 'Angular', 'Vue.js', 'Laravel', 'Django']
        },
        {
          id: 'b5l75aseexqv17quvqgh73fe',
          visible: true,
          name: '工具',
          description: '中级',
          level: 0,
          keywords: ['Webpack', 'Git', 'Jenkins', 'Docker', 'JIRA']
        }
      ]
    },
    custom: {}
  },
  // 简历主题数据
  metadata: {
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
