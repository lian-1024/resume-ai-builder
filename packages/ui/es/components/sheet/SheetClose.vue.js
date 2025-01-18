import { defineComponent as r, openBlock as a, createBlock as s, unref as n, normalizeProps as l, guardReactiveProps as p, withCtx as c, renderSlot as i } from "vue";
import { DialogClose as f } from "radix-vue";
const _ = /* @__PURE__ */ r({
  __name: "SheetClose",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (t, m) => (a(), s(n(f), l(p(o)), {
      default: c(() => [
        i(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  _ as default
};
//# sourceMappingURL=SheetClose.vue.js.map
