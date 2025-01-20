import r from "../../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { itemSchema as m } from "../shared/item.js";
import "../shared/id.js";
import { urlSchema as t } from "../shared/url.js";
const o = m.extend({
  name: r.string(),
  issuer: r.string(),
  date: r.string(),
  summary: r.string(),
  url: t
});
export {
  o as certificationSchema
};
//# sourceMappingURL=certification.js.map
