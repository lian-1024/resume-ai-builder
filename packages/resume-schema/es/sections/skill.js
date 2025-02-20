import m from "../node_modules/.pnpm/zod@3.24.2/node_modules/zod/lib/index.js";
import { itemSchema as e, defaultItem as t } from "../shared/item.js";
import "../shared/id.js";
const l = e.extend({
  name: m.string(),
  summary: m.string(),
  level: m.union([m.number().min(0).max(5).default(1), m.string()])
}), a = {
  ...t,
  name: "",
  summary: "",
  level: 1
};
export {
  a as defaultSkill,
  l as skillSchema
};
