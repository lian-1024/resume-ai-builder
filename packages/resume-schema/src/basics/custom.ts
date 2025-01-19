import { z } from 'zod'

export const customFieldSchema = z.object({
  // 自定义字段的唯一标识符
  id: z.string().cuid2(),
  // 字段的图标
  icon: z.string(),
  // 字段的显示名称
  name: z.string(),
  // 字段的值
  value: z.string()
})

export type CustomField = z.infer<typeof customFieldSchema>
