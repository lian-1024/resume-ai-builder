import t from "../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { itemSchema as r, defaultItem as e } from "../shared/item.js";
import "../shared/id.js";
import { urlSchema as o, defaultUrl as m } from "../shared/url.js";
const c = r.extend({
  name: t.string(),
  description: t.string(),
  date: t.string(),
  location: t.string(),
  summary: t.string(),
  keywords: t.array(t.string()).default([]),
  url: o
}), d = {
  ...e,
  name: "",
  description: "",
  date: "",
  location: "",
  summary: "",
  keywords: [],
  url: m
};
export {
  c as customSectionSchema,
  d as defaultCustomSection
};
