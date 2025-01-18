import { defineComponent as t, openBlock as a, createBlock as n, unref as l, normalizeProps as i, guardReactiveProps as p, withCtx as s, renderSlot as d } from "vue";
import { TooltipProvider as u } from "radix-vue";
const y = /* @__PURE__ */ t({
  __name: "TooltipProvider",
  props: {
    delayDuration: {},
    skipDelayDuration: {},
    disableHoverableContent: { type: Boolean },
    disableClosingTrigger: { type: Boolean },
    disabled: { type: Boolean },
    ignoreNonKeyboardFocus: { type: Boolean }
  },
  setup(e) {
    const o = e;
    return (r, c) => (a(), n(l(u), i(p(o)), {
      default: s(() => [
        d(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  y as default
};
//# sourceMappingURL=TooltipProvider.vue.js.map
