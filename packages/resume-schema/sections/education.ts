import { z } from 'zod'

import {
  basicSectionSchema,
  defaultBasicSection,
  defaultUrl,
  urlSchema
} from '../shared'

// Schema
export const educationSchema = basicSectionSchema.extend({
  institution: z.string(),
  studyType: z.string(),
  area: z.string(),
  score: z.string(),
  date: z.string(),
  summary: z.string(),
  url: urlSchema
})

// Type
export type Education = z.infer<typeof educationSchema>

// Defaults
export const defaultEducation: Education = {
  ...defaultBasicSection,
  id: '',
  institution: '',
  studyType: '',
  area: '',
  score: '',
  date: '',
  summary: '',
  url: defaultUrl
}
