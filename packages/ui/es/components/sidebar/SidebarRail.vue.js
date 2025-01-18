import { defineComponent as i, openBlock as d, createElementBlock as f, normalizeClass as n, unref as a, renderSlot as c } from "vue";
import { cn as p } from "../../lib/utils.js";
import { useSidebar as b } from "./utils.js";
const _ = /* @__PURE__ */ i({
  __name: "SidebarRail",
  props: {
    class: {}
  },
  setup(r) {
    const s = r, { toggleSidebar: e } = b();
    return (l, t) => (d(), f("button", {
      "data-sidebar": "rail",
      "aria-label": "Toggle Sidebar",
      tabindex: -1,
      title: "Toggle Sidebar",
      class: n(a(p)(
        "absolute inset-y-0 z-20 hidden w-4 -translate-x-1/2 transition-all ease-linear after:absolute after:inset-y-0 after:left-1/2 after:w-[2px] hover:after:bg-sidebar-border group-data-[side=left]:-right-4 group-data-[side=right]:left-0 sm:flex",
        "[[data-side=left]_&]:cursor-w-resize [[data-side=right]_&]:cursor-e-resize",
        "[[data-side=left][data-state=collapsed]_&]:cursor-e-resize [[data-side=right][data-state=collapsed]_&]:cursor-w-resize",
        "group-data-[collapsible=offcanvas]:translate-x-0 group-data-[collapsible=offcanvas]:after:left-full group-data-[collapsible=offcanvas]:hover:bg-sidebar",
        "[[data-side=left][data-collapsible=offcanvas]_&]:-right-2",
        "[[data-side=right][data-collapsible=offcanvas]_&]:-left-2",
        s.class
      )),
      onClick: t[0] || (t[0] = //@ts-ignore
      (...o) => a(e) && a(e)(...o))
    }, [
      c(l.$slots, "default")
    ], 2));
  }
});
export {
  _ as default
};
//# sourceMappingURL=SidebarRail.vue.js.map
