import r from "../../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { itemSchema as m } from "../shared/item.js";
import "../shared/id.js";
import { urlSchema as e } from "../shared/url.js";
const a = m.extend({
  name: r.string(),
  description: r.string(),
  summary: r.string(),
  url: e
});
export {
  a as referenceSchema
};
//# sourceMappingURL=reference.js.map
