import { defineComponent as i, openBlock as r, createBlock as o, unref as e, mergeProps as n, withCtx as d, renderSlot as l } from "vue";
import { cn as u } from "../../lib/utils.js";
import { Primitive as f } from "radix-vue";
import { sidebarMenuButtonVariants as p } from "./index.js";
const B = /* @__PURE__ */ i({
  __name: "SidebarMenuButtonChild",
  props: {
    variant: { default: "default" },
    size: { default: "default" },
    isActive: { type: Boolean },
    class: {},
    asChild: { type: Boolean },
    as: { default: "button" }
  },
  setup(t) {
    const s = t;
    return (a, m) => (r(), o(e(f), n({
      "data-sidebar": "menu-button",
      "data-size": a.size,
      "data-active": a.isActive,
      class: e(u)(e(p)({ variant: a.variant, size: a.size }), s.class),
      as: a.as,
      "as-child": a.asChild
    }, a.$attrs), {
      default: d(() => [
        l(a.$slots, "default")
      ]),
      _: 3
    }, 16, ["data-size", "data-active", "class", "as", "as-child"]));
  }
});
export {
  B as default
};
//# sourceMappingURL=SidebarMenuButtonChild.vue.js.map
