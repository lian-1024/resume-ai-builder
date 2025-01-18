import { defineComponent as _, computed as g, openBlock as a, createBlock as r, normalizeProps as n, mergeProps as y, withCtx as t, renderSlot as d, unref as o, createVNode as i, guardReactiveProps as h, createElementBlock as $, Fragment as k, createTextVNode as v, toDisplayString as B, resolveDynamicComponent as b } from "vue";
import C from "../tooltip/Tooltip.vue.js";
import P from "../tooltip/TooltipContent.vue.js";
import "radix-vue";
import S from "../tooltip/TooltipTrigger.vue.js";
import p from "./SidebarMenuButtonChild.vue.js";
import { useSidebar as z } from "./utils.js";
const F = /* @__PURE__ */ _({
  inheritAttrs: !1,
  __name: "SidebarMenuButton",
  props: {
    variant: { default: "default" },
    size: { default: "default" },
    isActive: { type: Boolean },
    class: {},
    asChild: { type: Boolean },
    as: { default: "button" },
    tooltip: {}
  },
  setup(f) {
    const m = f, { isMobile: u, state: c } = z(), l = g(() => {
      const { tooltip: e, ...s } = m;
      return s;
    });
    return (e, s) => e.tooltip ? (a(), r(o(C), { key: 1 }, {
      default: t(() => [
        i(o(S), { "as-child": "" }, {
          default: t(() => [
            i(p, n(h({ ...l.value, ...e.$attrs })), {
              default: t(() => [
                d(e.$slots, "default")
              ]),
              _: 3
            }, 16)
          ]),
          _: 3
        }),
        i(o(P), {
          side: "right",
          align: "center",
          hidden: o(c) !== "collapsed" || o(u)
        }, {
          default: t(() => [
            typeof e.tooltip == "string" ? (a(), $(k, { key: 0 }, [
              v(B(e.tooltip), 1)
            ], 64)) : (a(), r(b(e.tooltip), { key: 1 }))
          ]),
          _: 1
        }, 8, ["hidden"])
      ]),
      _: 3
    })) : (a(), r(p, n(y({ key: 0 }, { ...l.value, ...e.$attrs })), {
      default: t(() => [
        d(e.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  F as default
};
//# sourceMappingURL=SidebarMenuButton.vue.js.map
