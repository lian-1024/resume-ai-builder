import { z } from 'zod'

import { defaultItem, itemSchema } from '../shared'

// Schema
export const skillSchema = itemSchema.extend({
  name: z.string(),
  summary: z.string(),
  level: z.union([z.number().min(0).max(5).default(1), z.string()]),
})

// Type
export type Skill = z.infer<typeof skillSchema>

// Defaults
export const defaultSkill: Skill = {
  ...defaultItem,
  name: '',
  summary: '',
  level: 1,
}
