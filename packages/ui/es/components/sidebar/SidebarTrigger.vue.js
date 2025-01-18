import { defineComponent as a, openBlock as i, createBlock as n, unref as e, normalizeClass as c, withCtx as l, createVNode as m, createElementVNode as p } from "vue";
import "../button/index.js";
import { cn as f } from "../../lib/utils.js";
import { PanelLeft as d } from "lucide-vue-next";
import { useSidebar as g } from "./utils.js";
import u from "../button/Button.vue.js";
const w = /* @__PURE__ */ a({
  __name: "SidebarTrigger",
  props: {
    class: {}
  },
  setup(o) {
    const t = o, { toggleSidebar: s } = g();
    return (_, r) => (i(), n(e(u), {
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      class: c(e(f)("h-7 w-7", t.class)),
      onClick: e(s)
    }, {
      default: l(() => [
        m(e(d)),
        r[0] || (r[0] = p("span", { class: "sr-only" }, "Toggle Sidebar", -1))
      ]),
      _: 1
    }, 8, ["class", "onClick"]));
  }
});
export {
  w as default
};
//# sourceMappingURL=SidebarTrigger.vue.js.map
