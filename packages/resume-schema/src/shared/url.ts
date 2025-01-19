import { z } from 'zod'

// 链接

export const urlSchema = z.object({
  label: z.string(),
  href: z.literal('').or(z.string().url())
})

export type URL = z.infer<typeof urlSchema>

export const defaultUrl: URL = {
  label: '',
  href: ''
}
