import r from "../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { itemSchema as t, defaultItem as e } from "../shared/item.js";
import "../shared/id.js";
import { urlSchema as m, defaultUrl as o } from "../shared/url.js";
const d = t.extend({
  name: r.string(),
  description: r.string(),
  date: r.string(),
  summary: r.string(),
  keywords: r.array(r.string()).default([]),
  url: m
}), c = {
  ...e,
  name: "",
  description: "",
  date: "",
  summary: "",
  keywords: [],
  url: o
};
export {
  c as defaultProject,
  d as projectSchema
};
