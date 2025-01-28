import r from "../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
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
