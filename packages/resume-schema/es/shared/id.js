import { createId as e } from "@paralleldrive/cuid2";
import { z as r } from "zod";
const i = r.string().default(e()).describe("每个 section 的唯一标识");
export {
  i as idSchema
};
