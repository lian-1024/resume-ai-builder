import { defineComponent as n, openBlock as o, createElementBlock as s, normalizeClass as a, unref as l, renderSlot as m } from "vue";
import { cn as c } from "../../lib/utils.js";
const d = /* @__PURE__ */ n({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(e) {
    const r = e;
    return (t, i) => (o(), s("li", {
      "data-sidebar": "menu-item",
      class: a(l(c)("group/menu-item relative", r.class))
    }, [
      m(t.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
//# sourceMappingURL=SidebarMenuItem.vue.js.map
