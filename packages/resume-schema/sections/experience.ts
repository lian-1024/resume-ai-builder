import { z } from 'zod'

import {
  basicSectionSchema,
  defaultBasicSection,
  defaultUrl,
  urlSchema
} from '../shared'

// Schema
export const experienceSchema = basicSectionSchema.extend({
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
  ...defaultBasicSection,
  company: '',
  position: '',
  location: '',
  date: '',
  summary: '',
  url: defaultUrl
}
