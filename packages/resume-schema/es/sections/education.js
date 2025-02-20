import t from "../node_modules/.pnpm/zod@3.24.2/node_modules/zod/lib/index.js";
import { itemSchema as e, defaultItem as r } from "../shared/item.js";
import "../shared/id.js";
const o = e.extend({
  school: t.string({ message: "请输入学校名称" }),
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
  summary: t.string()
  // 在校经历
}), i = {
  ...r,
  id: "",
  school: "",
  major: "",
  degree: "",
  startDate: "",
  endDate: "",
  studyType: "",
  summary: ""
};
export {
  i as defaultEducation,
  o as educationSchema
};
