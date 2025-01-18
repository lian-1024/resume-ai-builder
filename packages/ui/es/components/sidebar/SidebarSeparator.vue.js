import { defineComponent as s, openBlock as t, createBlock as n, unref as r, normalizeClass as c, withCtx as l, renderSlot as p } from "vue";
import m from "../separator/Separator.vue.js";
import { cn as i } from "../../lib/utils.js";
const b = /* @__PURE__ */ s({
  __name: "SidebarSeparator",
  props: {
    class: {}
  },
  setup(a) {
    const e = a;
    return (o, d) => (t(), n(r(m), {
      "data-sidebar": "separator",
      class: c(r(i)("mx-2 w-auto bg-sidebar-border", e.class))
    }, {
      default: l(() => [
        p(o.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  b as default
};
//# sourceMappingURL=SidebarSeparator.vue.js.map
