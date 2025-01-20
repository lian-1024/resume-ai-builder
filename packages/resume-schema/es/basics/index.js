import { z as e } from "zod";
import "../shared/item.js";
import "../shared/id.js";
import { urlSchema as r, defaultUrl as i } from "../shared/url.js";
import { customFieldSchema as t } from "./custom.js";
const n = e.object({
  name: e.string(),
  // 姓名字段，字符串类型
  headline: e.string(),
  // 标题字段，字符串类型
  email: e.literal("").or(e.string().email()),
  // 电子邮件字段，可以为空字符串或有效的电子邮件地址
  phone: e.string(),
  // 电话字段，字符串类型
  location: e.string(),
  // 位置字段，字符串类型
  url: r,
  // 网址字段，使用共享的 URL 模式
  customFields: e.array(t),
  picture: e.object({
    url: e.string(),
    // 图片的 URL，字符串类型
    size: e.number().default(64)
    // 图片大小，默认为 64
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
  location: "",
  // 默认位置为空字符串
  url: i,
  // 默认网址使用共享的默认 URL
  customFields: [],
  picture: {
    url: ""
    // 默认图片 URL 为空字符串
    // size: 64 // 默认图片大小为 64
  }
};
export {
  n as basicsSchema,
  c as defaultBasics
};
