import t from "../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
const e = ["simple"], f = t.object({
  template: t.enum(e).default("simple"),
  // 简历模版昵称
  page: t.object({
    // 页面设置
    margin: t.number().default(18),
    // 页边距
    format: t.enum(["a4", "letter"]).default("a4")
    // 页面格式
  }),
  theme: t.object({
    // 主题设置
    background: t.string().default("#ffffff"),
    // 背景颜色
    text: t.string().default("#000000"),
    // 文本颜色
    primary: t.string().default("#3b82f6")
    // 主题颜色
  })
}), m = {
  page: {
    format: "a4",
    margin: 18
  },
  theme: {
    text: "#000000",
    primary: "#3b82f6",
    background: "#ffffff"
  },
  template: "simple"
};
export {
  m as defaultMetadata,
  f as metadataSchema
};
