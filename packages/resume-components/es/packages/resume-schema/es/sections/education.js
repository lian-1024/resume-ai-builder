import t from "../../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { itemSchema as r } from "../shared/item.js";
import "../shared/id.js";
import { urlSchema as i } from "../shared/url.js";
const a = r.extend({
  institution: t.string(),
  studyType: t.string(),
  area: t.string(),
  score: t.string(),
  date: t.string(),
  summary: t.string(),
  url: i
});
export {
  a as educationSchema
};
//# sourceMappingURL=education.js.map
