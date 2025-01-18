import { z } from 'zod'

import { idSchema } from './id'

// 每个 section 的 basic schema
export const basicSectionSchema = z.object({
  // 唯一标识
  id: idSchema,
  // 是否显示
  visible: z.boolean()
})

export type BasicSection = z.infer<typeof basicSectionSchema>

// Defaults
export const defaultBasicSection: BasicSection = {
  id: '',
  visible: true
}
