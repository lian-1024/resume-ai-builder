import e from "../../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
const t = ["Simple"], f = e.object({
  template: e.enum(t).default("Simple"),
  // 简历模版昵称
  page: e.object({
    // 页面设置
    margin: e.number().default(18),
    // 页边距
    format: e.enum(["a4", "letter"]).default("a4")
    // 页面格式
  }),
  theme: e.object({
    // 主题设置
    background: e.string().default("#ffffff"),
    // 背景颜色
    text: e.string().default("#000000"),
    // 文本颜色
    primary: e.string().default("#3b82f6")
    // 主题颜色
  })
});
export {
  f as resumeConfigSchema
};
//# sourceMappingURL=index.js.map
