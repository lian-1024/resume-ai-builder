import { z as e } from "zod";
import { idSchema as i } from "./id.js";
const m = e.object({
  // 项目的唯一标识符
  id: i,
  // 是否显示该项目
  visible: e.boolean()
}), r = {
  id: "",
  visible: !0
};
export {
  r as defaultItem,
  m as itemSchema
};
