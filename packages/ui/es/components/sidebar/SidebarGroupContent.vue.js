import { defineComponent as r, openBlock as n, createElementBlock as s, normalizeClass as a, unref as l, renderSlot as c } from "vue";
import { cn as p } from "../../lib/utils.js";
const f = /* @__PURE__ */ r({
  __name: "SidebarGroupContent",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, m) => (n(), s("div", {
      "data-sidebar": "group-content",
      class: a(l(p)("w-full text-sm", t.class))
    }, [
      c(o.$slots, "default")
    ], 2));
  }
});
export {
  f as default
};
//# sourceMappingURL=SidebarGroupContent.vue.js.map
