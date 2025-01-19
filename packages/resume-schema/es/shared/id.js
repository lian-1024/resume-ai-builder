import { c as r } from "../_virtual/index.js";
import t from "../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
const c = t.string().default(r.createId()).describe("每个 section 的唯一标识");
export {
  c as idSchema
};
