import t from "../node_modules/.pnpm/zod@3.24.2/node_modules/zod/lib/index.js";
import { itemSchema as r, defaultItem as e } from "../shared/item.js";
import "../shared/id.js";
const n = r.extend({
  // 项目名称
  name: t.string(),
  startDate: t.string(),
  // 项目开始时间
  endDate: t.string(),
  // 项目结束时间
  role: t.string(),
  // 担任角色
  city: t.string(),
  // 所在城市
  summary: t.string(),
  // 项目详情
  // 项目相关链接（如 GitHub 仓库、在线演示地址等）
  url: t.literal("").or(t.string().url())
}), o = {
  ...e,
  name: "",
  startDate: "",
  endDate: "",
  role: "",
  city: "",
  summary: "",
  url: ""
};
export {
  o as defaultProject,
  n as projectSchema
};
