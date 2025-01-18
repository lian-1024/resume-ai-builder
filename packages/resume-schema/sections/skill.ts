import { z } from 'zod'

import { basicSectionSchema, defaultBasicSection } from '../shared'

// Schema
export const skillSchema = basicSectionSchema.extend({
  name: z.string(),
  description: z.string(),
  level: z.union([z.number().min(0).max(5).default(1), z.string()]),
  keywords: z.array(z.string()).default([])
})

// Type
export type Skill = z.infer<typeof skillSchema>

// Defaults
export const defaultSkill: Skill = {
  ...defaultBasicSection,
  name: '',
  description: '',
  level: 1,
  keywords: []
}
