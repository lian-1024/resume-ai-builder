import { z as e } from "zod";
import { itemSchema as t, defaultItem as r } from "../shared/item.js";
import "../shared/id.js";
import "../shared/url.js";
const l = t.extend({
  name: e.string(),
  description: e.string(),
  level: e.union([e.number().min(0).max(5).default(1), e.string()]),
  keywords: e.array(e.string()).default([])
}), a = {
  ...r,
  name: "",
  description: "",
  level: 1,
  keywords: []
};
export {
  a as defaultSkill,
  l as skillSchema
};
