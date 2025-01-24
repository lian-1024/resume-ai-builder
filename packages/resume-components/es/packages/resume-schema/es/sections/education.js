import r from "../../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { itemSchema as t } from "../shared/item.js";
import "../shared/id.js";
import { urlSchema as e } from "../shared/url.js";
const a = t.extend({
  school: r.string(),
  // 学校
  major: r.string(),
  // 专业
  degree: r.string(),
  // 学历
  startDate: r.string(),
  // 开始时间
  endDate: r.string(),
  // 结束时间
  studyType: r.string(),
  // 学历类型
  summary: r.string(),
  // 在校经历
  url: e
});
export {
  a as educationSchema
};
//# sourceMappingURL=education.js.map
