import { z as r } from "zod";
const e = r.object({
  label: r.string(),
  href: r.literal("").or(r.string().url())
}), t = {
  label: "",
  href: ""
};
export {
  t as defaultUrl,
  e as urlSchema
};
