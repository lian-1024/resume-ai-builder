import r from "../../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { itemSchema as t } from "../shared/item.js";
import "../shared/id.js";
import "../shared/url.js";
const a = t.extend({
  name: r.string(),
  keywords: r.array(r.string()).default([])
});
export {
  a as interestSchema
};
//# sourceMappingURL=interest.js.map
