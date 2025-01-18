import { defineComponent as r, openBlock as n, createBlock as s, unref as t, normalizeClass as i, withCtx as u, renderSlot as d } from "vue";
import { cn as c } from "../../lib/utils.js";
import { Primitive as p } from "radix-vue";
const h = /* @__PURE__ */ r({
  __name: "SidebarMenuAction",
  props: {
    asChild: { type: Boolean },
    as: { default: "button" },
    showOnHover: { type: Boolean },
    class: {}
  },
  setup(o) {
    const a = o;
    return (e, l) => (n(), s(t(p), {
      "data-sidebar": "menu-action",
      class: i(t(c)(
        "absolute right-1 top-1.5 flex aspect-square w-5 items-center justify-center rounded-md p-0 text-sidebar-foreground outline-none ring-sidebar-ring transition-transform hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:ring-2 peer-hover/menu-button:text-sidebar-accent-foreground [&>svg]:size-4 [&>svg]:shrink-0",
        // Increases the hit area of the button on mobile.
        "after:absolute after:-inset-2 after:md:hidden",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        e.showOnHover && "group-focus-within/menu-item:opacity-100 group-hover/menu-item:opacity-100 data-[state=open]:opacity-100 peer-data-[active=true]/menu-button:text-sidebar-accent-foreground md:opacity-0",
        a.class
      )),
      as: e.as,
      "as-child": e.asChild
    }, {
      default: u(() => [
        d(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class", "as", "as-child"]));
  }
});
export {
  h as default
};
//# sourceMappingURL=SidebarMenuAction.vue.js.map
