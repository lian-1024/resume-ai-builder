import { z as e } from "zod";
import { itemSchema as t, defaultItem as n } from "../shared/item.js";
import "../shared/id.js";
import "../shared/url.js";
const o = t.extend({
  name: e.string(),
  description: e.string(),
  level: e.union([e.number().min(0).max(5).default(1), e.string()])
}), l = {
  ...n,
  name: "",
  description: "",
  level: 1
};
export {
  l as defaultLanguage,
  o as languageSchema
};
