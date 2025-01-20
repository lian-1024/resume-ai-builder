import m from "../../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { itemSchema as e } from "../shared/item.js";
import "../shared/id.js";
import "../shared/url.js";
const o = e.extend({
  name: m.string(),
  description: m.string(),
  level: m.union([m.number().min(0).max(5).default(1), m.string()])
});
export {
  o as languageSchema
};
//# sourceMappingURL=language.js.map
