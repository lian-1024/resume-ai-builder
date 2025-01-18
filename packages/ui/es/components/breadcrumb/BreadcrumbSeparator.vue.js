import { defineComponent as s, openBlock as a, createElementBlock as n, normalizeClass as c, unref as e, renderSlot as l, createVNode as p } from "vue";
import { cn as m } from "../../lib/utils.js";
import i from "../../node_modules/.pnpm/@radix-icons_vue@1.0.0_vue@3.5.13_typescript@5.6.3_/node_modules/@radix-icons/vue/esm/ChevronRightIcon.js";
const B = /* @__PURE__ */ s({
  __name: "BreadcrumbSeparator",
  props: {
    class: {}
  },
  setup(r) {
    const o = r;
    return (t, d) => (a(), n("li", {
      role: "presentation",
      "aria-hidden": "true",
      class: c(e(m)("[&>svg]:size-3.5", o.class))
    }, [
      l(t.$slots, "default", {}, () => [
        p(e(i))
      ])
    ], 2));
  }
});
export {
  B as default
};
//# sourceMappingURL=BreadcrumbSeparator.vue.js.map
