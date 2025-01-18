import { defineComponent as o, openBlock as n, createElementBlock as t, normalizeClass as s, unref as l, renderSlot as c } from "vue";
import { cn as p } from "../../lib/utils.js";
const i = /* @__PURE__ */ o({
  __name: "BreadcrumbPage",
  props: {
    class: {}
  },
  setup(e) {
    const r = e;
    return (a, m) => (n(), t("span", {
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      class: s(l(p)("font-normal text-foreground", r.class))
    }, [
      c(a.$slots, "default")
    ], 2));
  }
});
export {
  i as default
};
//# sourceMappingURL=BreadcrumbPage.vue.js.map
