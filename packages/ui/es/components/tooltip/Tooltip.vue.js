import { defineComponent as a, createBlock as p, openBlock as s, unref as e, normalizeProps as l, guardReactiveProps as i, withCtx as d, renderSlot as m } from "vue";
import { useForwardPropsEmits as u, TooltipRoot as c } from "radix-vue";
const g = /* @__PURE__ */ a({
  __name: "Tooltip",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    delayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const r = u(o, t);
    return (n, B) => (s(), p(e(c), l(i(e(r))), {
      default: d(() => [
        m(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  g as default
};
//# sourceMappingURL=Tooltip.vue.js.map
