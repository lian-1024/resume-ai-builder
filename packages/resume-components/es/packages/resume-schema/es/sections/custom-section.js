import r from "../../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { itemSchema as t } from "../shared/item.js";
import "../shared/id.js";
import { urlSchema as i } from "../shared/url.js";
t.extend({
  name: r.string(),
  description: r.string(),
  date: r.string(),
  location: r.string(),
  summary: r.string(),
  keywords: r.array(r.string()).default([]),
  url: i
});
//# sourceMappingURL=custom-section.js.map
