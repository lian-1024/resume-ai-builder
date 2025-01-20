import r from "../../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { itemSchema as m } from "../shared/item.js";
import "../shared/id.js";
import { urlSchema as t } from "../shared/url.js";
const s = m.extend({
  name: r.string(),
  publisher: r.string(),
  date: r.string(),
  summary: r.string(),
  url: t
});
export {
  s as publicationSchema
};
//# sourceMappingURL=publication.js.map
