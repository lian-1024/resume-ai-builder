import { defineComponent as t, openBlock as p, createBlock as a, unref as n, normalizeProps as s, guardReactiveProps as i, withCtx as l, renderSlot as c } from "vue";
import { TooltipTrigger as f } from "radix-vue";
const _ = /* @__PURE__ */ t({
  __name: "TooltipTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (r, m) => (p(), a(n(f), s(i(o)), {
      default: l(() => [
        c(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  _ as default
};
//# sourceMappingURL=TooltipTrigger.vue.js.map
