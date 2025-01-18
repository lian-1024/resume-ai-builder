import { defineComponent as c, ref as m, computed as _, openBlock as v, createBlock as b, unref as a, withCtx as E, createElementVNode as O, mergeProps as B, renderSlot as I } from "vue";
import { cn as S } from "../../lib/utils.js";
import { useMediaQuery as h, useVModel as y, useEventListener as A } from "../../node_modules/.pnpm/@vueuse_core@12.4.0_typescript@5.6.3/node_modules/@vueuse/core/index.js";
import { TooltipProvider as D } from "radix-vue";
import { provideSidebarContext as x, SIDEBAR_WIDTH as g, SIDEBAR_WIDTH_ICON as w, SIDEBAR_COOKIE_NAME as C, SIDEBAR_COOKIE_MAX_AGE as M, SIDEBAR_KEYBOARD_SHORTCUT as R } from "./utils.js";
const P = /* @__PURE__ */ c({
  __name: "SidebarProvider",
  props: {
    defaultOpen: { type: Boolean, default: !0 },
    open: { type: Boolean, default: void 0 },
    class: {}
  },
  emits: ["update:open"],
  setup(l, { emit: p }) {
    const o = l, u = p, n = h("(max-width: 768px)"), r = m(!1), t = y(o, "open", u, {
      defaultValue: o.defaultOpen ?? !1,
      passive: o.open === void 0
    });
    function i(e) {
      t.value = e, document.cookie = `${C}=${t.value}; path=/; max-age=${M}`;
    }
    function s(e) {
      r.value = e;
    }
    function d() {
      return n.value ? s(!r.value) : i(!t.value);
    }
    A("keydown", (e) => {
      e.key === R && (e.metaKey || e.ctrlKey) && (e.preventDefault(), d());
    });
    const f = _(() => t.value ? "expanded" : "collapsed");
    return x({
      state: f,
      open: t,
      setOpen: i,
      isMobile: n,
      openMobile: r,
      setOpenMobile: s,
      toggleSidebar: d
    }), (e, k) => (v(), b(a(D), { "delay-duration": 0 }, {
      default: E(() => [
        O("div", B({
          style: {
            "--sidebar-width": a(g),
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
