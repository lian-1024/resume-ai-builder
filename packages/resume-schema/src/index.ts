import { z } from 'zod'

import { basicsSchema, defaultBasics } from './basics'
import { defaultResumeConfig, resumeConfigSchema } from './config'
import { defaultSections, sectionsSchema } from './sections'

// 定义整个简历数据
export const resumeDataSchema = z.object({
  basics: basicsSchema,
  sections: sectionsSchema,
  config: resumeConfigSchema
})

export type ResumeData = z.infer<typeof resumeDataSchema>

// 默认的简历数据
export const defaultResumeData: ResumeData = {
  basics: defaultBasics,
  sections: defaultSections,
  config: defaultResumeConfig
}

export * from './basics'
export * from './config'
export * from './example'
export * from './sections'
export * from './shared'

