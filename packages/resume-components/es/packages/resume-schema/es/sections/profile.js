import r from "../../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { itemSchema as e } from "../shared/item.js";
import "../shared/id.js";
import { urlSchema as o } from "../shared/url.js";
const s = e.extend({
  network: r.string(),
  username: r.string(),
  icon: r.string().describe(
    'Slug for the icon from https://simpleicons.org. For example, "github", "linkedin", etc.'
  ).optional(),
  url: o
});
export {
  s as profileSchema
};
//# sourceMappingURL=profile.js.map
