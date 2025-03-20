import { z } from 'zod'; // 引入 zod 库

import { customFieldSchema } from './custom'

// 定义基本信息的模式
export const basicsSchema = z.object({
  name: z.string(), // 姓名字段，字符串类型
  headline: z.string(), // 标题字段，字符串类型
  email: z.literal('').or(z.string().email()), // 电子邮件字段，可以为空字符串或有效的电子邮件地址
  phone: z.string(), // 电话字段，字符串类型
  url: z.literal('').or(z.string().url()),
  customFields: z.array(customFieldSchema),
  picture: z.object({
    url: z.string(), // 图片的 URL，字符串类型
    size: z.number().default(64) // 图片大小，默认为 64
  }),
  intention:z.object({ // 意向字段
    currentStatus:z.string(), // 当前状态
    positionTitle:z.string(), // 职位标题
    salary:z.string(), // 薪资
    city:z.string(), // 城市
  })
})

// 从模式中推断出的类型
export type Basics = z.infer<typeof basicsSchema>

// 基本信息的默认值
export const defaultBasics: Basics = {
  name: '', // 默认姓名为空字符串
  headline: '', // 默认标题为空字符串
  email: '', // 默认电子邮件为空字符串
  phone: '', // 默认电话为空字符串
  url: '', // 默认网址使用共享的默认 URL
  customFields: [],
  picture: {
    url: '', // 默认图片 URL 为空字符串
    size: 64 // 默认图片大小为 64
  },
  intention: {
    currentStatus: '',
    positionTitle: '',
    salary: '',
    city: ''
  }
}

