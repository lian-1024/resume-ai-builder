import { defineComponent as i, computed as p, createBlock as d, openBlock as l, unref as e, mergeProps as c, withCtx as u, renderSlot as m, createVNode as g } from "vue";
import { cn as f } from "../../lib/utils.js";
import { useForwardProps as _, NavigationMenuTrigger as h } from "radix-vue";
import { navigationMenuTriggerStyle as v } from "./index.js";
import w from "../../node_modules/.pnpm/@radix-icons_vue@1.0.0_vue@3.5.13/node_modules/@radix-icons/vue/esm/ChevronDownIcon.js";
const M = /* @__PURE__ */ i({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(a) {
    const r = a, s = p(() => {
      const { class: o, ...t } = r;
      return t;
    }), n = _(s);
    return (o, t) => (l(), d(e(h), c(e(n), {
      class: e(f)(e(v)(), "group", r.class)
    }), {
      default: u(() => [
        m(o.$slots, "default"),
        g(e(w), {
          class: "relative top-px ml-1 h-3 w-3 transition duration-300 group-data-[state=open]:rotate-180",
          "aria-hidden": "true"
        })
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  M as default
};
//# sourceMappingURL=NavigationMenuTrigger.vue.js.map
