import { z as e } from "zod";
const t = ["Simple"], a = e.object({
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
  template: "Simple"
};
export {
  m as defaultResumeConfig,
  a as resumeConfigSchema
};
