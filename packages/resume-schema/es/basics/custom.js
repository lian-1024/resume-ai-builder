import i from "../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
const n = i.object({
  // 自定义字段的唯一标识符
  id: i.string().cuid2(),
  // 字段的图标
  icon: i.string(),
  // 字段的显示名称
  name: i.string(),
  // 字段的值
  value: i.string()
});
export {
  n as customFieldSchema
};
