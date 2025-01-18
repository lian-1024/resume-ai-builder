import { z } from 'zod'

import {
  basicSectionSchema,
  defaultBasicSection,
  defaultUrl,
  urlSchema
} from '../shared'

// Schema
export const awardSchema = basicSectionSchema.extend({
  title: z.string(),
  awarder: z.string(),
  date: z.string(),
  summary: z.string(),
  url: urlSchema
})

// Type
export type Award = z.infer<typeof awardSchema>

// Defaults
export const defaultAward: Award = {
  ...defaultBasicSection,
  title: '',
  awarder: '',
  date: '',
  summary: '',
  url: defaultUrl
}
