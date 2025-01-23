import { z as e } from "zod";
import { itemSchema as t, defaultItem as i } from "../shared/item.js";
import "../shared/id.js";
import "../shared/url.js";
const l = t.extend({
  name: e.string(),
  description: e.string(),
  level: e.union([e.number().min(0).max(5).default(1), e.string()])
}), a = {
  ...i,
  name: "",
  description: "",
  level: 1
};
export {
  a as defaultSkill,
  l as skillSchema
};
