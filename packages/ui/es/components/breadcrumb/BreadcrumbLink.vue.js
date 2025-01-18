import { defineComponent as r, openBlock as t, createBlock as l, unref as a, normalizeClass as n, withCtx as i, renderSlot as c } from "vue";
import { cn as d } from "../../lib/utils.js";
import { Primitive as m } from "radix-vue";
const C = /* @__PURE__ */ r({
  __name: "BreadcrumbLink",
  props: {
    asChild: { type: Boolean },
    as: { default: "a" },
    class: {}
  },
  setup(e) {
    const o = e;
    return (s, p) => (t(), l(a(m), {
      as: s.as,
      "as-child": s.asChild,
      class: n(a(d)("transition-colors hover:text-foreground", o.class))
    }, {
      default: i(() => [
        c(s.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
});
export {
  C as default
};
//# sourceMappingURL=BreadcrumbLink.vue.js.map
