import { defineComponent as r, createBlock as t, openBlock as l, unref as n, normalizeProps as s, guardReactiveProps as p, withCtx as c, renderSlot as d } from "vue";
import { AvatarFallback as f } from "radix-vue";
const _ = /* @__PURE__ */ r({
  __name: "AvatarFallback",
  props: {
    delayMs: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const a = e;
    return (o, i) => (l(), t(n(f), s(p(a)), {
      default: c(() => [
        d(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  _ as default
};
//# sourceMappingURL=AvatarFallback.vue.js.map
