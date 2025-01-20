import r from "../../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { itemSchema as t } from "../shared/item.js";
import "../shared/id.js";
import "../shared/url.js";
const o = t.extend({
  name: r.string(),
  description: r.string(),
  level: r.union([r.number().min(0).max(5).default(1), r.string()]),
  keywords: r.array(r.string()).default([])
});
export {
  o as skillSchema
};
//# sourceMappingURL=skill.js.map
