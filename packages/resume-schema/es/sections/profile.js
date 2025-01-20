import { z as e } from "zod";
import { itemSchema as r, defaultItem as o } from "../shared/item.js";
import "../shared/id.js";
import { urlSchema as t, defaultUrl as i } from "../shared/url.js";
const s = r.extend({
  network: e.string(),
  username: e.string(),
  icon: e.string().describe(
    'Slug for the icon from https://simpleicons.org. For example, "github", "linkedin", etc.'
  ).optional(),
  url: t
}), a = {
  ...o,
  network: "",
  username: "",
  icon: "",
  url: i
};
export {
  a as defaultProfile,
  s as profileSchema
};
