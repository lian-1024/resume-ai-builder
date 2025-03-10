import { defineComponent as i, computed as p, createBlock as l, openBlock as c, unref as e, mergeProps as d, withCtx as u, renderSlot as m, createVNode as g } from "vue";
import { cn as f } from "../../lib/utils.js";
import { ChevronDownIcon as _ } from "@radix-icons/vue";
import { useForwardProps as h, NavigationMenuTrigger as v } from "radix-vue";
import { navigationMenuTriggerStyle as w } from "./index.js";
const M = /* @__PURE__ */ i({
  __name: "NavigationMenuTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(a) {
    const o = a, n = p(() => {
      const { class: r, ...t } = o;
      return t;
    }), s = h(n);
    return (r, t) => (c(), l(e(v), d(e(s), {
      class: e(f)(e(w)(), "group", o.class)
    }), {
      default: u(() => [
        m(r.$slots, "default"),
        g(e(_), {
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
