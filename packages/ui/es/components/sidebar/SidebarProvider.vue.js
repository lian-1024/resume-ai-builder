import { defineComponent as c, ref as m, computed as v, createBlock as _, openBlock as b, unref as a, withCtx as E, createElementVNode as O, mergeProps as B, renderSlot as I } from "vue";
import { cn as S } from "../../lib/utils.js";
import { useMediaQuery as h, useVModel as y, useEventListener as A } from "@vueuse/core";
import { TooltipProvider as D } from "radix-vue";
import { SIDEBAR_KEYBOARD_SHORTCUT as x, provideSidebarContext as g, SIDEBAR_WIDTH_ICON as w, SIDEBAR_WIDTH as C, SIDEBAR_COOKIE_NAME as M, SIDEBAR_COOKIE_MAX_AGE as R } from "./utils.js";
const P = /* @__PURE__ */ c({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !0 },
    open: { type: Boolean, default: void 0 },
    class: {}
  },
  emits: ["update:open"],
  setup(d, { emit: p }) {
    const o = d, u = p, n = h("(max-width: 768px)"), r = m(!1), t = y(o, "open", u, {
      defaultValue: o.defaultOpen ?? !1,
      passive: o.open === void 0
    });
    function i(e) {
      t.value = e, document.cookie = `${M}=${t.value}; path=/; max-age=${R}`;
    }
    function s(e) {
      r.value = e;
    }
    function l() {
      return n.value ? s(!r.value) : i(!t.value);
    }
    A("keydown", (e) => {
      e.key === x && (e.metaKey || e.ctrlKey) && (e.preventDefault(), l());
    });
    const f = v(() => t.value ? "expanded" : "collapsed");
    return g({
      state: f,
      open: t,
      setOpen: i,
      isMobile: n,
      openMobile: r,
      setOpenMobile: s,
      toggleSidebar: l
    }), (e, k) => (b(), _(a(D), { "delay-duration": 0 }, {
      default: E(() => [
        O("div", B({
          style: {
            "--sidebar-width": a(C),
            "--sidebar-width-icon": a(w)
          },
          class: a(S)("group/sidebar-wrapper flex min-h-svh w-full text-sidebar-foreground has-[[data-variant=inset]]:bg-sidebar", o.class)
        }, e.$attrs), [
          I(e.$slots, "default")
        ], 16)
      ]),
      _: 3
    }));
  }
});
export {
  P as default
};
//# sourceMappingURL=SidebarProvider.vue.js.map
