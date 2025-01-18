import { defineComponent as i, computed as l, openBlock as p, createBlock as f, unref as e, withCtx as d, createVNode as c, mergeProps as u, renderSlot as m } from "vue";
import { cn as g } from "../../lib/utils.js";
import { useForwardProps as h, MenubarPortal as y, MenubarContent as B } from "radix-vue";
const w = /* @__PURE__ */ i({
  __name: "MenubarContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: { default: 8 },
    align: { default: "start" },
    alignOffset: { default: -4 },
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(n) {
    const o = n, s = l(() => {
      const { class: t, ...a } = o;
      return a;
    }), r = h(s);
    return (t, a) => (p(), f(e(y), null, {
      default: d(() => [
        c(e(B), u(e(r), {
          class: e(g)(
            "z-50 min-w-48 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
            o.class
          )
        }), {
          default: d(() => [
            m(t.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
});
export {
  w as default
};
//# sourceMappingURL=MenubarContent.vue.js.map
