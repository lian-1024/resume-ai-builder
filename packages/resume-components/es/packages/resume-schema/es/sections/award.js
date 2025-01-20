import r from "../../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { itemSchema as t } from "../shared/item.js";
import "../shared/id.js";
import { urlSchema as m } from "../shared/url.js";
const o = t.extend({
  title: r.string(),
  awarder: r.string(),
  date: r.string(),
  summary: r.string(),
  url: m
});
export {
  o as awardSchema
};
//# sourceMappingURL=award.js.map
