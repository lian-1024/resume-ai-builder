import { defineComponent as o, openBlock as r, createBlock as i, unref as s, normalizeClass as n, withCtx as l, renderSlot as m } from "vue";
import { cn as p } from "../../lib/utils.js";
import { Primitive as c } from "radix-vue";
import { buttonVariants as f } from "./index.js";
const z = /* @__PURE__ */ o({
  __name: "Button",
  props: {
    variant: {},
    size: {},
    class: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const e = t;
    return (a, u) => (r(), i(s(c), {
      as: a.as,
      "as-child": a.asChild,
      class: n(s(p)(s(f)({ variant: a.variant, size: a.size }), e.class))
    }, {
      default: l(() => [
        m(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
});
export {
  z as default
};
//# sourceMappingURL=Button.vue.js.map
