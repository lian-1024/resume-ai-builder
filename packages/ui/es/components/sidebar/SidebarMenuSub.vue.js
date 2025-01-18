import { defineComponent as o, openBlock as l, createElementBlock as n, normalizeClass as s, unref as t, renderSlot as p } from "vue";
import { cn as c } from "../../lib/utils.js";
const u = /* @__PURE__ */ o({
  __name: "SidebarMenuSub",
  props: {
    class: {}
  },
  setup(e) {
    const r = e;
    return (a, d) => (l(), n("ul", {
      "data-sidebar": "menu-badge",
      class: s(t(c)(
        "mx-3.5 flex min-w-0 translate-x-px flex-col gap-1 border-l border-sidebar-border px-2.5 py-0.5",
        "group-data-[collapsible=icon]:hidden",
        r.class
      ))
    }, [
      p(a.$slots, "default")
    ], 2));
  }
});
export {
  u as default
};
//# sourceMappingURL=SidebarMenuSub.vue.js.map
