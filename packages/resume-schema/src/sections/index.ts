import { z } from 'zod'

import { educationSchema } from './education'

import { projectSchema } from './project'

import { skillSchema } from './skill' 

// 定义基础部分的模式
export const sectionSchema = z.object({
  name: z.string(),
  columns: z.number().max(5).default(1),
  separateLinks: z.boolean().default(true),
  visible: z.boolean().default(true)
})

// 扩展基础模式以包括自定义部分的ID和项目数组
// export const customSchema = sectionSchema.extend({
//   id: idSchema,
//   items: z.array(customSectionSchema)
// })

// 定义所有部分的模式，为每种类型指定详细信息
export const sectionsSchema = z.object({
  education: sectionSchema.extend({
    id: z.literal('education'),
    items: z.array(educationSchema)
  }),
  projects: sectionSchema.extend({
    id: z.literal('projects'),
    items: z.array(projectSchema)
  }),
  skills: sectionSchema.extend({
    id: z.literal('skills'),
    items: z.array(skillSchema)
  }),
  // custom: z.record(z.string(), customSchema)
})

// 类型定义，用于部分和部分集合
export type Section = z.infer<typeof sectionSchema>
export type Sections = z.infer<typeof sectionsSchema>

// 定义部分的可能键，包括自定义部分
export type SectionKey = 'basics' | keyof Sections | `custom.${string}`

// 自定义部分组的类型定义
// export type CustomSectionGroup = z.infer<typeof customSchema>

// 单个部分的默认值
export const defaultSection: Section = {
  name: '',
  columns: 1,
  separateLinks: true,
  visible: true
}

// 默认的 sections
// items 是内容项,例如项目经历有很多个项目,每个项目都是一个 item,包含在这个items中
export const defaultSections: Sections = {
  education: {
    ...defaultSection,
    id: 'education',
    name: 'Education',
    items: []
  },
  projects: { ...defaultSection, id: 'projects', name: 'Projects', items: [] },
  skills: { ...defaultSection, id: 'skills', name: 'Skills', items: [] },
 

  // custom: {}
}

// 重新导出所有部分模式以供外部使用
export * from './education'
export * from './project'
export * from './skill'


