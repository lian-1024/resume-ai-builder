import { defineComponent as t, createBlock as a, openBlock as l, unref as p, normalizeProps as s, guardReactiveProps as n, withCtx as i, renderSlot as c } from "vue";
import { CollapsibleTrigger as f } from "radix-vue";
const _ = /* @__PURE__ */ t({
  __name: "CollapsibleTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (r, m) => (l(), a(p(f), s(n(o)), {
      default: i(() => [
        c(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  _ as default
};
//# sourceMappingURL=CollapsibleTrigger.vue.js.map
