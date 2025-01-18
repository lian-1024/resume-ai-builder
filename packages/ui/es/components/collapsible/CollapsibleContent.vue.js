import { defineComponent as a, openBlock as l, createBlock as n, unref as s, mergeProps as r, withCtx as p, renderSlot as i } from "vue";
import { CollapsibleContent as c } from "radix-vue";
const u = /* @__PURE__ */ a({
  __name: "CollapsibleContent",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const o = e;
    return (t, d) => (l(), n(s(c), r(o, { class: "overflow-hidden transition-all data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down" }), {
      default: p(() => [
        i(t.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  u as default
};
//# sourceMappingURL=CollapsibleContent.vue.js.map
