import o from "../../../../node_modules/.pnpm/zod@3.24.1/node_modules/zod/lib/index.js";
import { idSchema as i } from "./id.js";
const t = o.object({
  // 项目的唯一标识符
  id: i,
  // 是否显示该项目
  visible: o.boolean()
});
export {
  t as itemSchema
};
//# sourceMappingURL=item.js.map
