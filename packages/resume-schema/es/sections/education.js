import { z as t } from "zod";
import { itemSchema as r, defaultItem as e } from "../shared/item.js";
import "../shared/id.js";
import { urlSchema as a, defaultUrl as m } from "../shared/url.js";
const d = r.extend({
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
  url: a
}), u = {
  ...e,
  id: "",
  school: "",
  major: "",
  degree: "",
  startDate: "",
  endDate: "",
  studyType: "",
  summary: "",
  url: m
};
export {
  u as defaultEducation,
  d as educationSchema
};
