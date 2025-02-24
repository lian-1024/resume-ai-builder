export const RichTextTypeMap = {
  CONTENT: 'content',
  PROJECT: 'project',
  EDUCATION: 'education',
  SKILL: 'skill'
} as const

export type RichTextType = (typeof RichTextTypeMap)[keyof typeof RichTextTypeMap]