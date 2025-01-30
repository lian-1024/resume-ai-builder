import { z } from 'zod'

const templates = ['simple'] as const

export type TemplateKey = (typeof templates)[number]

// 定义主题相关配资

export const resumeConfigSchema = z.object({
  template: z.enum(templates).default('simple'), // 简历模版昵称
  page: z.object({
    // 页面设置
    margin: z.number().default(18), // 页边距
    format: z.enum(['a4', 'letter']).default('a4') // 页面格式
  }),
  theme: z.object({
    // 主题设置
    background: z.string().default('#ffffff'), // 背景颜色
    text: z.string().default('#000000'), // 文本颜色
    primary: z.string().default('#3b82f6') // 主题颜色
  })
})

// 从模式中推断出的类型
export type ResumeConfig = z.infer<typeof resumeConfigSchema>

// 默认值
export const defaultResumeConfig: ResumeConfig = {
  page: {
    format: 'a4',
    margin: 18
  },
  theme: {
    text: '#000000',
    primary: '#3b82f6',
    background: '#ffffff'
  },
  template: 'simple'
}
