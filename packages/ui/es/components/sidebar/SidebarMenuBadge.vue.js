import { defineComponent as o, openBlock as r, createElementBlock as a, normalizeClass as s, unref as u, renderSlot as d } from "vue";
import { cn as i } from "../../lib/utils.js";
const l = /* @__PURE__ */ o({
  __name: "SidebarMenuBadge",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (n, c) => (r(), a("div", {
      "data-sidebar": "menu-badge",
      class: s(u(i)(
        "absolute right-1 flex h-5 min-w-5 items-center justify-center rounded-md px-1 text-xs font-medium tabular-nums text-sidebar-foreground select-none pointer-events-none",
        "peer-hover/menu-button:text-sidebar-accent-foreground peer-data-[active=true]/menu-button:text-sidebar-accent-foreground",
        "peer-data-[size=sm]/menu-button:top-1",
        "peer-data-[size=default]/menu-button:top-1.5",
        "peer-data-[size=lg]/menu-button:top-2.5",
        "group-data-[collapsible=icon]:hidden",
        t.class
      ))
    }, [
      d(n.$slots, "default")
    ], 2));
  }
});
export {
  l as default
};
//# sourceMappingURL=SidebarMenuBadge.vue.js.map
