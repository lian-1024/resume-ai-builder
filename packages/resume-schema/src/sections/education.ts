import { z } from 'zod'

import {
  defaultItem,
  itemSchema,
} from '../shared'

// Schema
export const educationSchema = itemSchema.extend({
  school: z.string({message:'请输入学校名称'}), // 学校
  major: z.string(), // 专业
  degree: z.string(), // 学历
  startDate: z.string(), // 开始时间
  endDate: z.string(), // 结束时间
  studyType: z.string(), // 学历类型
  summary: z.string(), // 在校经历

})

// Type
export type Education = z.infer<typeof educationSchema>

// Defaults
export const defaultEducation: Education = {
  ...defaultItem,
  id: '',
  school: '',
  major: '',
  degree: '',
  startDate: '',
  endDate: '',
  studyType: '',
  summary: '',
}
