import r from "../../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { itemSchema as t } from "../shared/item.js";
import "../shared/id.js";
import { urlSchema as m } from "../shared/url.js";
const o = t.extend({
  // 项目名称
  name: r.string(),
  startDate: r.string(),
  // 项目开始时间
  endDate: r.string(),
  // 项目结束时间
  role: r.string(),
  // 担任角色
  city: r.string(),
  // 所在城市
  summary: r.string(),
  // 项目详情
  // 项目相关链接（如 GitHub 仓库、在线演示地址等）
  url: m
});
export {
  o as projectSchema
};
//# sourceMappingURL=project.js.map
