import { z } from 'zod'

import {
  defaultItem,
  itemSchema,
  defaultUrl,
  urlSchema
} from '../shared'

// Schema
export const experienceSchema = itemSchema.extend({
  company: z.string(),
  position: z.string(),
  location: z.string(),
  date: z.string(),
  summary: z.string(),
  url: urlSchema
})

// Type
export type Experience = z.infer<typeof experienceSchema>

// Defaults
export const defaultExperience: Experience = {
  ...defaultItem,
  company: '',
  position: '',
  location: '',
  date: '',
  summary: '',
  url: defaultUrl
}
