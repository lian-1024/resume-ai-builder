import { defineComponent as a, openBlock as n, createBlock as l, unref as e, normalizeProps as i, guardReactiveProps as d, withCtx as m, renderSlot as c } from "vue";
import { useForwardPropsEmits as u, CollapsibleRoot as f } from "radix-vue";
const h = /* @__PURE__ */ a({
  __name: "Collapsible",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const p = u(o, t);
    return (r, C) => (n(), l(e(f), i(d(e(p))), {
      default: m(({ open: s }) => [
        c(r.$slots, "default", { open: s })
      ]),
      _: 3
    }, 16));
  }
});
export {
  h as default
};
//# sourceMappingURL=Collapsible.vue.js.map
