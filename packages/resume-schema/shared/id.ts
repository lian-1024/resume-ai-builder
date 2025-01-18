import { z } from 'zod'

// 唯一标识
export const idSchema = z
  .string()
  .default(useId())
  .describe('每个 section 的唯一标识')
