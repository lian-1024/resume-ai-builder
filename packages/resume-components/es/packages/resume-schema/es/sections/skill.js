import m from "../../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { itemSchema as r } from "../shared/item.js";
import "../shared/id.js";
import "../shared/url.js";
const a = r.extend({
  name: m.string(),
  summary: m.string(),
  level: m.union([m.number().min(0).max(5).default(1), m.string()])
});
export {
  a as skillSchema
};
//# sourceMappingURL=skill.js.map
