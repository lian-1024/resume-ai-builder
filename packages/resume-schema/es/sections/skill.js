import { z as m } from "zod";
import { itemSchema as e, defaultItem as t } from "../shared/item.js";
import "../shared/id.js";
import "../shared/url.js";
const a = e.extend({
  name: m.string(),
  summary: m.string(),
  level: m.union([m.number().min(0).max(5).default(1), m.string()])
}), o = {
  ...t,
  name: "",
  summary: "",
  level: 1
};
export {
  o as defaultSkill,
  a as skillSchema
};
