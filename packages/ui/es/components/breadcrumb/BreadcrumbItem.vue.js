import { defineComponent as s, createElementBlock as t, openBlock as o, normalizeClass as l, unref as a, renderSlot as c } from "vue";
import { cn as m } from "../../lib/utils.js";
const u = /* @__PURE__ */ s({
  __name: "BreadcrumbItem",
  props: {
    class: {}
  },
  setup(e) {
    const r = e;
    return (n, p) => (o(), t("li", {
      class: l(a(m)("inline-flex items-center gap-1.5", r.class))
    }, [
      c(n.$slots, "default")
    ], 2));
  }
});
export {
  u as default
};
//# sourceMappingURL=BreadcrumbItem.vue.js.map
