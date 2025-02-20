import t from "../node_modules/.pnpm/zod@3.24.2/node_modules/zod/lib/index.js";
import { itemSchema as r, defaultItem as e } from "../shared/item.js";
import "../shared/id.js";
const i = r.extend({
  school: t.string(),
  // 学校
  major: t.string(),
  // 专业
  degree: t.string(),
  // 学历
  startDate: t.string(),
  // 开始时间
  endDate: t.string(),
  // 结束时间
  studyType: t.string(),
  // 学历类型
  summary: t.string(),
  // 在校经历
  url: t.literal("").or(t.string().url())
}), m = {
  ...e,
  id: "",
  school: "",
  major: "",
  degree: "",
  startDate: "",
  endDate: "",
  studyType: "",
  summary: "",
  url: ""
};
export {
  m as defaultEducation,
  i as educationSchema
};
