import r from "../../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
const t = r.object({
  label: r.string(),
  href: r.literal("").or(r.string().url())
});
export {
  t as urlSchema
};
//# sourceMappingURL=url.js.map
