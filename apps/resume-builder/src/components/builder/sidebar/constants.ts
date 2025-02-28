export const EditorIdMap = {
    BASICS: 'basics-editor',
    EDUCATION: 'education-editor',
    SKILL: 'skill-editor',
    PROJECT: 'project-editor'
} as const
  
export type EditorIdValueType = (typeof EditorIdMap)[keyof typeof EditorIdMap]
export type EditorIdKeysType = keyof typeof EditorIdMap
