import { defineComponent as l, openBlock as s, createElementBlock as a, normalizeClass as t, unref as n, renderSlot as c } from "vue";
import { cn as p } from "../../lib/utils.js";
const u = /* @__PURE__ */ l({
  __name: "SidebarGroup",
  props: {
    class: {}
  },
  setup(e) {
    const r = e;
    return (o, f) => (s(), a("div", {
      "data-sidebar": "group",
      class: t(n(p)("relative flex w-full min-w-0 flex-col p-2", r.class))
    }, [
      c(o.$slots, "default")
    ], 2));
  }
});
export {
  u as default
};
//# sourceMappingURL=SidebarGroup.vue.js.map
