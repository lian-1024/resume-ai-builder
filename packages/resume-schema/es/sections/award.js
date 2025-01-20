import { z as r } from "zod";
import { itemSchema as t, defaultItem as a } from "../shared/item.js";
import "../shared/id.js";
import { urlSchema as e, defaultUrl as m } from "../shared/url.js";
const s = t.extend({
  title: r.string(),
  awarder: r.string(),
  date: r.string(),
  summary: r.string(),
  url: e
}), u = {
  ...a,
  title: "",
  awarder: "",
  date: "",
  summary: "",
  url: m
};
export {
  s as awardSchema,
  u as defaultAward
};
