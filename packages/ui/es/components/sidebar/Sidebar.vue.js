import { defineComponent as h, openBlock as t, createElementBlock as n, mergeProps as r, unref as e, renderSlot as l, createBlock as g, withCtx as p, createVNode as v, normalizeStyle as m, createElementVNode as i, normalizeClass as w } from "vue";
import "../sheet/index.js";
import { cn as s } from "../../lib/utils.js";
import { useSidebar as _, SIDEBAR_WIDTH_MOBILE as $ } from "./utils.js";
import k from "../sheet/Sheet.vue.js";
import y from "../sheet/SheetContent.vue.js";
const B = { class: "flex h-full w-full flex-col" }, S = ["data-state", "data-collapsible", "data-variant", "data-side"], E = {
  "data-sidebar": "sidebar",
  class: "flex h-full w-full flex-col bg-sidebar group-data-[variant=floating]:rounded-lg group-data-[variant=floating]:border group-data-[variant=floating]:border-sidebar-border group-data-[variant=floating]:shadow"
}, O = /* @__PURE__ */ h({
  inheritAttrs: !1,
  __name: "Sidebar",
  props: {
    side: { default: "left" },
    variant: { default: "sidebar" },
    collapsible: { default: "offcanvas" },
    class: {}
  },
  setup(f) {
    const d = f, { isMobile: c, state: o, openMobile: b, setOpenMobile: u } = _();
    return (a, M) => a.collapsible === "none" ? (t(), n("div", r({
      key: 0,
      class: e(s)("flex h-full w-[--sidebar-width] flex-col bg-sidebar text-sidebar-foreground", d.class)
    }, a.$attrs), [
      l(a.$slots, "default")
    ], 16)) : e(c) ? (t(), g(e(k), r({
      key: 1,
      open: e(b)
    }, a.$attrs, { "onUpdate:open": e(u) }), {
      default: p(() => [
        v(e(y), {
          "data-sidebar": "sidebar",
          "data-mobile": "true",
          side: a.side,
          class: "w-[--sidebar-width] bg-sidebar p-0 text-sidebar-foreground [&>button]:hidden",
          style: m({
            "--sidebar-width": e($)
          })
        }, {
          default: p(() => [
            i("div", B, [
              l(a.$slots, "default")
            ])
          ]),
          _: 3
        }, 8, ["side", "style"])
      ]),
      _: 3
    }, 16, ["open", "onUpdate:open"])) : (t(), n("div", {
      key: 2,
      class: "group peer hidden md:block",
      "data-state": e(o),
      "data-collapsible": e(o) === "collapsed" ? a.collapsible : "",
      "data-variant": a.variant,
      "data-side": a.side
    }, [
      i("div", {
        class: w(e(s)(
          "duration-200 relative h-svh w-[--sidebar-width] bg-transparent transition-[width] ease-linear",
          "group-data-[collapsible=offcanvas]:w-0",
          "group-data-[side=right]:rotate-180",
          a.variant === "floating" || a.variant === "inset" ? "group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4))]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon]"
        ))
      }, null, 2),
      i("div", r({
        class: e(s)(
          "duration-200 fixed inset-y-0 z-10 hidden h-svh w-[--sidebar-width] transition-[left,right,width] ease-linear md:flex",
          a.side === "left" ? "left-0 group-data-[collapsible=offcanvas]:left-[calc(var(--sidebar-width)*-1)]" : "right-0 group-data-[collapsible=offcanvas]:right-[calc(var(--sidebar-width)*-1)]",
          // Adjust the padding for floating and inset variants.
          a.variant === "floating" || a.variant === "inset" ? "p-2 group-data-[collapsible=icon]:w-[calc(var(--sidebar-width-icon)_+_theme(spacing.4)_+2px)]" : "group-data-[collapsible=icon]:w-[--sidebar-width-icon] group-data-[side=left]:border-r group-data-[side=right]:border-l",
          d.class
        )
      }, a.$attrs), [
        i("div", E, [
          l(a.$slots, "default")
        ])
      ], 16)
    ], 8, S));
  }
});
export {
  O as default
};
//# sourceMappingURL=Sidebar.vue.js.map
