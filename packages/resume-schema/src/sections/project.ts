import { z } from 'zod'

// 导入共享的 schema 定义和默认值
import { defaultItem,  itemSchema } from '../shared'

// 项目经历的数据验证 Schema
export const projectSchema = itemSchema.extend({
  // 项目名称
  name: z.string(),
  startDate: z.string(), // 项目开始时间
  endDate: z.string(), // 项目结束时间
  role:z.string(),// 担任角色
  city:z.string(), // 所在城市
  summary: z.string(), // 项目详情
  // 项目相关链接（如 GitHub 仓库、在线演示地址等）
  url: z.literal('').or(z.string().url())
})

// 从 Schema 中推导出 TypeScript 类型定义
export type Project = z.infer<typeof projectSchema>

// 项目字段的默认值
export const defaultProject: Project = {
  ...defaultItem,
  name: '',
  startDate:"",
  endDate:"",
  role:"",
  city:"",
  summary: '',
  url: ''
}
