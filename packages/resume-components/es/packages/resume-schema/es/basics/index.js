import r from "../../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import "../shared/item.js";
import "../shared/id.js";
import { urlSchema as i } from "../shared/url.js";
import { customFieldSchema as t } from "./custom.js";
const n = r.object({
  name: r.string(),
  // 姓名字段，字符串类型
  headline: r.string(),
  // 标题字段，字符串类型
  email: r.literal("").or(r.string().email()),
  // 电子邮件字段，可以为空字符串或有效的电子邮件地址
  phone: r.string(),
  // 电话字段，字符串类型
  location: r.string(),
  // 位置字段，字符串类型
  url: i,
  // 网址字段，使用共享的 URL 模式
  customFields: r.array(t),
  picture: r.object({
    url: r.string(),
    // 图片的 URL，字符串类型
    size: r.number().default(64)
    // 图片大小，默认为 64
  })
});
export {
  n as basicsSchema
};
//# sourceMappingURL=index.js.map
