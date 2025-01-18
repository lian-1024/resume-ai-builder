import { z } from 'zod'

import {
  basicSectionSchema,
  defaultBasicSection,
  defaultUrl,
  urlSchema
} from '../shared'

// Schema
export const certificationSchema = basicSectionSchema.extend({
  name: z.string(),
  issuer: z.string(),
  date: z.string(),
  summary: z.string(),
  url: urlSchema
})

// Type
export type Certification = z.infer<typeof certificationSchema>

// Defaults
export const defaultCertification: Certification = {
  ...defaultBasicSection,
  name: '',
  issuer: '',
  date: '',
  summary: '',
  url: defaultUrl
}
