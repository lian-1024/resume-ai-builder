import { defineComponent as n, createElementBlock as s, openBlock as a, normalizeClass as c, unref as e, renderSlot as l, createVNode as p } from "vue";
import { cn as i } from "../../lib/utils.js";
import { ChevronRightIcon as m } from "@radix-icons/vue";
const h = /* @__PURE__ */ n({
  __name: "BreadcrumbSeparator",
  props: {
    class: {}
  },
  setup(r) {
    const o = r;
    return (t, d) => (a(), s("li", {
      role: "presentation",
      "aria-hidden": "true",
      class: c(e(i)("[&>svg]:size-3.5", o.class))
    }, [
      l(t.$slots, "default", {}, () => [
        p(e(m))
      ])
    ], 2));
  }
});
export {
  h as default
};
//# sourceMappingURL=BreadcrumbSeparator.vue.js.map
