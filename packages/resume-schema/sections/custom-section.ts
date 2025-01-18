import { z } from 'zod'

import {
  basicSectionSchema,
  defaultBasicSection,
  defaultUrl,
  urlSchema
} from '../shared'

// Schema
export const customSectionSchema = basicSectionSchema.extend({
  name: z.string(),
  description: z.string(),
  date: z.string(),
  location: z.string(),
  summary: z.string(),
  keywords: z.array(z.string()).default([]),
  url: urlSchema
})

// Type
export type CustomSection = z.infer<typeof customSectionSchema>

// Defaults
export const defaultCustomSection: CustomSection = {
  ...defaultBasicSection,
  name: '',
  description: '',
  date: '',
  location: '',
  summary: '',
  keywords: [],
  url: defaultUrl
}
