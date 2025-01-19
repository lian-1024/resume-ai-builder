import t from "../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { itemSchema as o, defaultItem as r } from "../shared/item.js";
import "../shared/id.js";
import { urlSchema as i, defaultUrl as n } from "../shared/url.js";
const s = o.extend({
  organization: t.string(),
  position: t.string(),
  location: t.string(),
  date: t.string(),
  summary: t.string(),
  url: i
}), u = {
  ...r,
  organization: "",
  position: "",
  location: "",
  date: "",
  summary: "",
  url: n
};
export {
  u as defaultVolunteer,
  s as volunteerSchema
};
