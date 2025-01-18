import { defineComponent as t, openBlock as a, createBlock as n, unref as p, normalizeProps as s, guardReactiveProps as i, withCtx as l, renderSlot as c } from "vue";
import { DialogTrigger as f } from "radix-vue";
const g = /* @__PURE__ */ t({
  __name: "SheetTrigger",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const r = e;
    return (o, m) => (a(), n(p(f), s(i(r)), {
      default: l(() => [
        c(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  g as default
};
//# sourceMappingURL=SheetTrigger.vue.js.map
