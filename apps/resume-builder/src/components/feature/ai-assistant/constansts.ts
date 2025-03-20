export const MessageRole = {
    ASSISTANT:"assistant",
    HUMAN:'human'
} as const

// 获取 MessageRole 对象的值的类型
export type MessageRoleType = typeof MessageRole[keyof typeof MessageRole]