import { defineComponent as r, createElementBlock as o, openBlock as s, normalizeClass as a, unref as l, renderSlot as m } from "vue";
import { cn as c } from "../../lib/utils.js";
const d = /* @__PURE__ */ r({
  __name: "SidebarMenuItem",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, i) => (s(), o("li", {
      "data-sidebar": "menu-item",
      class: a(l(c)("group/menu-item relative list-none", t.class))
    }, [
      m(n.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
//# sourceMappingURL=SidebarMenuItem.vue.js.map
