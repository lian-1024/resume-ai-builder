import { z as e } from "zod";
import { itemSchema as r, defaultItem as m } from "../shared/item.js";
import "../shared/id.js";
import { urlSchema as t, defaultUrl as i } from "../shared/url.js";
const s = r.extend({
  name: e.string(),
  description: e.string(),
  summary: e.string(),
  url: t
}), f = {
  ...m,
  name: "",
  description: "",
  summary: "",
  url: i
};
export {
  f as defaultReference,
  s as referenceSchema
};
