import { defineComponent as n, openBlock as a, createBlock as t, unref as s, normalizeClass as i, withCtx as c, renderSlot as l } from "vue";
import f from "../input/Input.vue.js";
import { cn as p } from "../../lib/utils.js";
const b = /* @__PURE__ */ n({
  __name: "SidebarInput",
  props: {
    class: {}
  },
  setup(e) {
    const r = e;
    return (o, u) => (a(), t(s(f), {
      "data-sidebar": "input",
      class: i(s(p)(
        "h-8 w-full bg-background shadow-none focus-visible:ring-2 focus-visible:ring-sidebar-ring",
        r.class
      ))
    }, {
      default: c(() => [
        l(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  b as default
};
//# sourceMappingURL=SidebarInput.vue.js.map
