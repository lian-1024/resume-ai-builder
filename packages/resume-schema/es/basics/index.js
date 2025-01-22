import { z as t } from "zod";
import "../shared/item.js";
import "../shared/id.js";
import { urlSchema as i, defaultUrl as r } from "../shared/url.js";
import { customFieldSchema as e } from "./custom.js";
const m = t.object({
  name: t.string(),
  // 姓名字段，字符串类型
  headline: t.string(),
  // 标题字段，字符串类型
  email: t.literal("").or(t.string().email()),
  // 电子邮件字段，可以为空字符串或有效的电子邮件地址
  phone: t.string(),
  // 电话字段，字符串类型
  url: i,
  // 网址字段，使用共享的 URL 模式
  customFields: t.array(e),
  picture: t.object({
    url: t.string(),
    // 图片的 URL，字符串类型
    size: t.number().default(64)
    // 图片大小，默认为 64
  }),
  intention: t.object({
    // 意向字段
    currentStatus: t.string(),
    // 当前状态
    positionTitle: t.string(),
    // 职位标题
    salary: t.string(),
    // 薪资
    city: t.string()
    // 城市
  })
}), c = {
  name: "",
  // 默认姓名为空字符串
  headline: "",
  // 默认标题为空字符串
  email: "",
  // 默认电子邮件为空字符串
  phone: "",
  // 默认电话为空字符串
  url: r,
  // 默认网址使用共享的默认 URL
  customFields: [],
  picture: {
    url: "",
    // 默认图片 URL 为空字符串
    size: 64
    // 默认图片大小为 64
  },
  intention: {
    currentStatus: "",
    positionTitle: "",
    salary: "",
    city: ""
  }
};
export {
  m as basicsSchema,
  c as defaultBasics
};
