import { defineComponent as s, openBlock as t, createElementBlock as a, normalizeClass as l, unref as n, renderSlot as c } from "vue";
import { cn as p } from "../../lib/utils.js";
const i = /* @__PURE__ */ s({
  __name: "SidebarFooter",
  props: {
    class: {}
  },
  setup(e) {
    const o = e;
    return (r, f) => (t(), a("div", {
      "data-sidebar": "footer",
      class: l(n(p)("flex flex-col gap-2 p-2", o.class))
    }, [
      c(r.$slots, "default")
    ], 2));
  }
});
export {
  i as default
};
//# sourceMappingURL=SidebarFooter.vue.js.map
