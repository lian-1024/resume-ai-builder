import { z as t } from "zod";
import { itemSchema as r, defaultItem as e } from "../shared/item.js";
import "../shared/id.js";
import { urlSchema as o, defaultUrl as i } from "../shared/url.js";
const p = r.extend({
  company: t.string(),
  position: t.string(),
  location: t.string(),
  date: t.string(),
  summary: t.string(),
  url: o
}), s = {
  ...e,
  company: "",
  position: "",
  location: "",
  date: "",
  summary: "",
  url: i
};
export {
  s as defaultExperience,
  p as experienceSchema
};
