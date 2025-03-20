export const pageSizeMap = {
    a4: {
        width: 210,
        height: 297,
    }

} as const;


export type PageSize = keyof typeof pageSizeMap