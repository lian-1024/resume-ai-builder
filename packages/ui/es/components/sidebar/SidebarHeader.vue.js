import { defineComponent as o, openBlock as s, createElementBlock as t, normalizeClass as l, unref as n, renderSlot as c } from "vue";
import { cn as p } from "../../lib/utils.js";
const i = /* @__PURE__ */ o({
  __name: "SidebarHeader",
  props: {
    class: {}
  },
  setup(e) {
    const r = e;
    return (a, d) => (s(), t("div", {
      "data-sidebar": "header",
      class: l(n(p)("flex flex-col gap-2 p-2", r.class))
    }, [
      c(a.$slots, "default")
    ], 2));
  }
});
export {
  i as default
};
//# sourceMappingURL=SidebarHeader.vue.js.map
