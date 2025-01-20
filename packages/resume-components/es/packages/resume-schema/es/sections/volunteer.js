import r from "../../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { itemSchema as t } from "../shared/item.js";
import "../shared/id.js";
import { urlSchema as o } from "../shared/url.js";
const a = t.extend({
  organization: r.string(),
  position: r.string(),
  location: r.string(),
  date: r.string(),
  summary: r.string(),
  url: o
});
export {
  a as volunteerSchema
};
//# sourceMappingURL=volunteer.js.map
