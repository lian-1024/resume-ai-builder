import { defineComponent as s, openBlock as o, createElementBlock as a, normalizeClass as n, unref as l, renderSlot as c } from "vue";
import { cn as m } from "../../lib/utils.js";
const d = /* @__PURE__ */ s({
  __name: "BreadcrumbList",
  props: {
    class: {}
  },
  setup(e) {
    const r = e;
    return (t, p) => (o(), a("ol", {
      class: n(l(m)("flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5", r.class))
    }, [
      c(t.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
//# sourceMappingURL=BreadcrumbList.vue.js.map
