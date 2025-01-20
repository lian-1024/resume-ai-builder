import { z as t } from "zod";
import { itemSchema as r, defaultItem as e } from "../shared/item.js";
import "../shared/id.js";
import { urlSchema as i, defaultUrl as a } from "../shared/url.js";
const u = r.extend({
  institution: t.string(),
  studyType: t.string(),
  area: t.string(),
  score: t.string(),
  date: t.string(),
  summary: t.string(),
  url: i
}), d = {
  ...e,
  id: "",
  institution: "",
  studyType: "",
  area: "",
  score: "",
  date: "",
  summary: "",
  url: a
};
export {
  d as defaultEducation,
  u as educationSchema
};
