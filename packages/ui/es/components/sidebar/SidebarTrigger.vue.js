import { defineComponent as a, createBlock as i, openBlock as n, unref as e, normalizeClass as c, withCtx as l, createVNode as m, createElementVNode as p } from "vue";
import "../button/index.js";
import { cn as d } from "../../lib/utils.js";
import { useSidebar as f } from "./utils.js";
import { Icon as g } from "../../node_modules/.pnpm/@iconify_vue@4.3.0_vue@3.5.13_typescript@5.6.3_/node_modules/@iconify/vue/dist/iconify.js";
import u from "../button/Button.vue.js";
const w = /* @__PURE__ */ a({
  __name: "SidebarTrigger",
  props: {
    class: {}
  },
  setup(o) {
    const t = o, { toggleSidebar: s } = f();
    return (_, r) => (n(), i(e(u), {
      "data-sidebar": "trigger",
      variant: "ghost",
      size: "icon",
      class: c(e(d)("h-7 w-7", t.class)),
      onClick: e(s)
    }, {
      default: l(() => [
        m(e(g), { icon: "lucide:panel-right" }),
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
