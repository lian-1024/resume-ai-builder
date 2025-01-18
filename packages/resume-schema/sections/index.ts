import { z } from 'zod'

import { idSchema } from '../shared'
import { awardSchema } from './award'
import { certificationSchema } from './certification'
import { customSectionSchema } from './custom-section'
import { educationSchema } from './education'
import { experienceSchema } from './experience'
import { interestSchema } from './interest'
import { languageSchema } from './language'
import { profileSchema } from './profile'
import { projectSchema } from './project'
import { publicationSchema } from './publication'
import { referenceSchema } from './reference'
import { skillSchema } from './skill'
import { volunteerSchema } from './volunteer'

// 定义基础部分的模式
export const sectionSchema = z.object({
  name: z.string(),
  columns: z.number().max(5).default(1),
  separateLinks: z.boolean().default(true),
  visible: z.boolean().default(true)
})

// 扩展基础模式以包括自定义部分的ID和项目数组
export const customSchema = sectionSchema.extend({
  id: idSchema,
  items: z.array(customSectionSchema)
})

// 定义所有部分的模式，为每种类型指定详细信息
export const sectionsSchema = z.object({
  summary: sectionSchema.extend({
    id: z.literal('summary'),
    content: z.string().default('')
  }),
  awards: sectionSchema.extend({
    id: z.literal('awards'),
    items: z.array(awardSchema)
  }),
  certifications: sectionSchema.extend({
    id: z.literal('certifications'),
    items: z.array(certificationSchema)
  }),
  education: sectionSchema.extend({
    id: z.literal('education'),
    items: z.array(educationSchema)
  }),
  experience: sectionSchema.extend({
    id: z.literal('experience'),
    items: z.array(experienceSchema)
  }),
  volunteer: sectionSchema.extend({
    id: z.literal('volunteer'),
    items: z.array(volunteerSchema)
  }),
  interests: sectionSchema.extend({
    id: z.literal('interests'),
    items: z.array(interestSchema)
  }),
  languages: sectionSchema.extend({
    id: z.literal('languages'),
    items: z.array(languageSchema)
  }),
  profiles: sectionSchema.extend({
    id: z.literal('profiles'),
    items: z.array(profileSchema)
  }),
  projects: sectionSchema.extend({
    id: z.literal('projects'),
    items: z.array(projectSchema)
  }),
  publications: sectionSchema.extend({
    id: z.literal('publications'),
    items: z.array(publicationSchema)
  }),
  references: sectionSchema.extend({
    id: z.literal('references'),
    items: z.array(referenceSchema)
  }),
  skills: sectionSchema.extend({
    id: z.literal('skills'),
    items: z.array(skillSchema)
  }),
  custom: z.record(z.string(), customSchema)
})

// 类型定义，用于部分和部分集合
export type Section = z.infer<typeof sectionSchema>
export type Sections = z.infer<typeof sectionsSchema>

// 定义部分的可能键，包括自定义部分
export type SectionKey = 'basics' | keyof Sections | `custom.${string}`

// 自定义部分组的类型定义
export type CustomSectionGroup = z.infer<typeof customSchema>

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
  summary: { ...defaultSection, id: 'summary', name: 'Summary', content: '' },
  awards: { ...defaultSection, id: 'awards', name: 'Awards', items: [] },
  certifications: {
    ...defaultSection,
    id: 'certifications',
    name: 'Certifications',
    items: []
  },
  education: {
    ...defaultSection,
    id: 'education',
    name: 'Education',
    items: []
  },
  experience: {
    ...defaultSection,
    id: 'experience',
    name: 'Experience',
    items: []
  },
  volunteer: {
    ...defaultSection,
    id: 'volunteer',
    name: 'Volunteering',
    items: []
  },
  interests: {
    ...defaultSection,
    id: 'interests',
    name: 'Interests',
    items: []
  },
  languages: {
    ...defaultSection,
    id: 'languages',
    name: 'Languages',
    items: []
  },
  profiles: { ...defaultSection, id: 'profiles', name: 'Profiles', items: [] },
  projects: { ...defaultSection, id: 'projects', name: 'Projects', items: [] },
  publications: {
    ...defaultSection,
    id: 'publications',
    name: 'Publications',
    items: []
  },
  references: {
    ...defaultSection,
    id: 'references',
    name: 'References',
    items: []
  },
  skills: { ...defaultSection, id: 'skills', name: 'Skills', items: [] },
  custom: {}
}

// 重新导出所有部分模式以供外部使用
export * from './award'
export * from './certification'
export * from './custom-section'
export * from './education'
export * from './experience'
export * from './interest'
export * from './language'
export * from './profile'
export * from './project'
export * from './publication'
export * from './reference'
export * from './skill'
export * from './volunteer'
