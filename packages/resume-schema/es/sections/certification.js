import t from "../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { itemSchema as r, defaultItem as e } from "../shared/item.js";
import "../shared/id.js";
import { urlSchema as m, defaultUrl as i } from "../shared/url.js";
const u = r.extend({
  name: t.string(),
  issuer: t.string(),
  date: t.string(),
  summary: t.string(),
  url: m
}), c = {
  ...e,
  name: "",
  issuer: "",
  date: "",
  summary: "",
  url: i
};
export {
  u as certificationSchema,
  c as defaultCertification
};
