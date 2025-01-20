import r from "../../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { itemSchema as t } from "../shared/item.js";
import "../shared/id.js";
import { urlSchema as m } from "../shared/url.js";
const s = t.extend({
  name: r.string(),
  description: r.string(),
  date: r.string(),
  summary: r.string(),
  keywords: r.array(r.string()).default([]),
  url: m
});
export {
  s as projectSchema
};
//# sourceMappingURL=project.js.map
