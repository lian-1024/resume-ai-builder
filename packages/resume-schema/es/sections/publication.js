import { z as t } from "zod";
import { itemSchema as r, defaultItem as m } from "../shared/item.js";
import "../shared/id.js";
import { urlSchema as e, defaultUrl as i } from "../shared/url.js";
const n = r.extend({
  name: t.string(),
  publisher: t.string(),
  date: t.string(),
  summary: t.string(),
  url: e
}), s = {
  ...m,
  name: "",
  publisher: "",
  date: "",
  summary: "",
  url: i
};
export {
  s as defaultPublication,
  n as publicationSchema
};
