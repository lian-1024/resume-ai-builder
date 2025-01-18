import { defineComponent as t, openBlock as s, createBlock as p, unref as e, mergeProps as a, withCtx as d, renderSlot as l } from "vue";
import { useForwardProps as u, DropdownMenuTrigger as c } from "radix-vue";
const g = /* @__PURE__ */ t({
  __name: "DropdownMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const r = u(o);
    return (n, f) => (s(), p(e(c), a({ class: "outline-none" }, e(r)), {
      default: d(() => [
        l(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  g as default
};
//# sourceMappingURL=DropdownMenuTrigger.vue.js.map
