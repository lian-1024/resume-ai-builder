import { defineComponent as r, openBlock as i, createBlock as n, unref as a, normalizeClass as t, withCtx as l, renderSlot as d } from "vue";
import { cn as p } from "../../lib/utils.js";
import { Primitive as c } from "radix-vue";
const b = /* @__PURE__ */ r({
  __name: "SidebarGroupLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(s) {
    const o = s;
    return (e, m) => (i(), n(a(c), {
      "data-sidebar": "group-label",
      as: e.as,
      "as-child": e.asChild,
      class: t(a(p)(
        "duration-200 flex h-8 shrink-0 items-center rounded-md px-2 text-xs font-medium text-sidebar-foreground/70 outline-none ring-sidebar-ring transition-[margin,opa] ease-linear focus-visible:ring-2 [&>svg]:size-4 [&>svg]:shrink-0",
        "group-data-[collapsible=icon]:-mt-8 group-data-[collapsible=icon]:opacity-0",
        o.class
      ))
    }, {
      default: l(() => [
        d(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["as", "as-child", "class"]));
  }
});
export {
  b as default
};
//# sourceMappingURL=SidebarGroupLabel.vue.js.map
