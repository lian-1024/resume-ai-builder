import { defineComponent as a, createBlock as r, openBlock as n, unref as p, normalizeProps as s, guardReactiveProps as i, withCtx as l, renderSlot as u } from "vue";
import { NavigationMenuItem as m } from "radix-vue";
const _ = /* @__PURE__ */ a({
  __name: "NavigationMenuItem",
  props: {
    value: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (t, c) => (n(), r(p(m), s(i(o)), {
      default: l(() => [
        u(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  _ as default
};
//# sourceMappingURL=NavigationMenuItem.vue.js.map
