export const ACTION_MAP = {
    EDIT: 'edit',
    SAVE: 'save',
    DELETE: 'delete'
} as const

export type ActionType = typeof ACTION_MAP[keyof typeof ACTION_MAP]
