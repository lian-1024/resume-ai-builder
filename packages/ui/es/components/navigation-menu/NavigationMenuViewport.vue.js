import { defineComponent as i, computed as d, openBlock as p, createElementBlock as l, createVNode as c, unref as e, mergeProps as u } from "vue";
import { cn as m } from "../../lib/utils.js";
import { useForwardProps as f, NavigationMenuViewport as g } from "radix-vue";
const v = { class: "absolute left-0 top-full flex justify-center" }, x = /* @__PURE__ */ i({
  __name: "NavigationMenuViewport",
  props: {
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(a) {
    const o = a, r = d(() => {
      const { class: s, ...t } = o;
      return t;
    }), n = f(r);
    return (s, t) => (p(), l("div", v, [
      c(e(g), u(e(n), {
        class: e(m)(
          "origin-top-center relative mt-1.5 h-[--radix-navigation-menu-viewport-height] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[--radix-navigation-menu-viewport-width]",
          o.class
        )
      }), null, 16, ["class"])
    ]));
  }
});
export {
  x as default
};
//# sourceMappingURL=NavigationMenuViewport.vue.js.map
