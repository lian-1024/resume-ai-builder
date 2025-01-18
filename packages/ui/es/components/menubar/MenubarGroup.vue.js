import { defineComponent as t, openBlock as a, createBlock as n, unref as p, normalizeProps as s, guardReactiveProps as u, withCtx as l, renderSlot as c } from "vue";
import { MenubarGroup as f } from "radix-vue";
const _ = /* @__PURE__ */ t({
  __name: "MenubarGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (r, i) => (a(), n(p(f), s(u(o)), {
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
//# sourceMappingURL=MenubarGroup.vue.js.map
