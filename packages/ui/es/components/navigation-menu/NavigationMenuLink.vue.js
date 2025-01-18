import { defineComponent as s, openBlock as a, createBlock as i, unref as e, normalizeProps as p, guardReactiveProps as c, withCtx as m, renderSlot as l } from "vue";
import { useForwardPropsEmits as u, NavigationMenuLink as d } from "radix-vue";
const g = /* @__PURE__ */ s({
  __name: "NavigationMenuLink",
  props: {
    active: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["select"],
  setup(o, { emit: t }) {
    const r = u(o, t);
    return (n, k) => (a(), i(e(d), p(c(e(r))), {
      default: m(() => [
        l(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  g as default
};
//# sourceMappingURL=NavigationMenuLink.vue.js.map
