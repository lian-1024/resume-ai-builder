
export const ContentTypeMap = {
    Education: 'education',
    Project: 'project', 
    Skill: 'skill'
} as const

export type ContentType = (typeof ContentTypeMap)[keyof typeof ContentTypeMap]
