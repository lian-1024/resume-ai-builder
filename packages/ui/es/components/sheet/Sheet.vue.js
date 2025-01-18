import { defineComponent as n, openBlock as a, createBlock as s, unref as e, normalizeProps as l, guardReactiveProps as m, withCtx as i, renderSlot as d } from "vue";
import { useForwardPropsEmits as c, DialogRoot as u } from "radix-vue";
const y = /* @__PURE__ */ n({
  __name: "Sheet",
  props: {
    open: { type: Boolean },
    defaultOpen: { type: Boolean },
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const r = c(o, t);
    return (p, B) => (a(), s(e(u), l(m(e(r))), {
      default: i(() => [
        d(p.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  y as default
};
//# sourceMappingURL=Sheet.vue.js.map
