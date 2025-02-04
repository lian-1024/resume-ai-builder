import { defineComponent as o, createElementBlock as r, openBlock as s, normalizeClass as a, unref as t, renderSlot as c } from "vue";
import { cn as m } from "../../lib/utils.js";
const i = /* @__PURE__ */ o({
  __name: "SidebarMenu",
  props: {
    class: {}
  },
  setup(e) {
    const l = e;
    return (n, p) => (s(), r("ul", {
      "data-sidebar": "menu",
      class: a(t(m)("flex w-full min-w-0 flex-col gap-1", l.class))
    }, [
      c(n.$slots, "default")
    ], 2));
  }
});
export {
  i as default
};
//# sourceMappingURL=SidebarMenu.vue.js.map
