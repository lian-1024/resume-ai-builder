import { defineComponent as o, createElementBlock as n, openBlock as t, normalizeClass as s, unref as l, renderSlot as c } from "vue";
import { cn as p } from "../../lib/utils.js";
const i = /* @__PURE__ */ o({
  __name: "BreadcrumbPage",
  props: {
    class: {}
  },
  setup(e) {
    const r = e;
    return (a, m) => (t(), n("span", {
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
