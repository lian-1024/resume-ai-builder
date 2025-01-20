import { z as t } from "zod";
import { itemSchema as e, defaultItem as r } from "../shared/item.js";
import "../shared/id.js";
import "../shared/url.js";
const i = e.extend({
  name: t.string(),
  keywords: t.array(t.string()).default([])
}), s = {
  ...r,
  name: "",
  keywords: []
};
export {
  s as defaultInterest,
  i as interestSchema
};
