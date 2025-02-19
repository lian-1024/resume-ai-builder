// 页面尺寸 map
export const pageSizeMap = {
  a4: {
    width: 210,
    height: 297,
  },
} as const;

export type PageSize = keyof typeof pageSizeMap;

// 毫米转像素比例
export const MM_TO_PX = 3.78;
