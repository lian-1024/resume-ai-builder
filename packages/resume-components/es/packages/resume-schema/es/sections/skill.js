import m from "../../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { itemSchema as i } from "../shared/item.js";
import "../shared/id.js";
import "../shared/url.js";
const o = i.extend({
  name: m.string(),
  description: m.string(),
  level: m.union([m.number().min(0).max(5).default(1), m.string()])
});
export {
  o as skillSchema
};
//# sourceMappingURL=skill.js.map
