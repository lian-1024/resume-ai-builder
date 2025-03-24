import { z } from 'zod'

import { basicsSchema, defaultBasics } from './basics'
import { defaultResumeMetadata, resumeMetadataSchema } from './metadata'
import { defaultSections, sectionsSchema } from './sections'
import { intentionSchema, defaultIntention } from './sections/intention'
// 定义整个简历数据
export const resumeDataSchema = z.object({
  basics: basicsSchema,
  intention: intentionSchema,
  sections: sectionsSchema,
  metadata: resumeMetadataSchema
})

export type ResumeData = z.infer<typeof resumeDataSchema>

// 默认的简历数据
export const defaultResumeData: ResumeData = {
  basics: defaultBasics,
  intention: defaultIntention,
  sections: defaultSections,
  metadata: defaultResumeMetadata
}

export * from './basics'
export * from './metadata'
export * from './example'
export * from './sections'
export * from './shared'
