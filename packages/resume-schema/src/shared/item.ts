import { z } from "zod";

import { idSchema } from "./id";

// 每个 section 的 basic schema
export const itemSchema = z.object({
  // 项目的唯一标识符
  id: idSchema,
  // 是否显示该项目
  visible: z.boolean(),
});

// Type
export type Item = z.infer<typeof itemSchema>;

// Defaults
export const defaultItem: Item = {
  id: "",
  visible: true,
};
