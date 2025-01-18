import { defineComponent as t, openBlock as o, createBlock as i, unref as r, normalizeClass as n, withCtx as d, renderSlot as l } from "vue";
import { cn as c } from "../../lib/utils.js";
import { Primitive as p } from "radix-vue";
const b = /* @__PURE__ */ t({
  __name: "SidebarGroupAction",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(s) {
    const a = s;
    return (e, u) => (o(), i(r(p), {
      "data-sidebar": "group-action",
      as: e.as,
      "as-child": e.asChild,
      class: n(r(c)(
        "absolute right-3 top-3.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "group-data-[collapsible=icon]:hidden",
        a.class
      ))
    }, {
      default: d(() => [
        l(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
});
export {
  b as default
};
//# sourceMappingURL=SidebarGroupAction.vue.js.map
