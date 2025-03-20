import { createId } from '@paralleldrive/cuid2'
import { z } from 'zod'

// 唯一标识
export const idSchema = z
  .string()
  .default(createId())
  .describe('每个 section 的唯一标识')
