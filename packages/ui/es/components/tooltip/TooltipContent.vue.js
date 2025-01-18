import { defineComponent as p, computed as c, openBlock as f, createBlock as m, unref as e, withCtx as s, createVNode as u, mergeProps as g, renderSlot as h } from "vue";
import { cn as y } from "../../lib/utils.js";
import { useForwardPropsEmits as w, TooltipPortal as B, TooltipContent as _ } from "radix-vue";
const b = /* @__PURE__ */ p({
  inheritAttrs: !1,
  __name: "TooltipContent",
  props: {
    forceMount: { type: Boolean },
    ariaLabel: {},
    asChild: { type: Boolean },
    as: {},
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside"],
  setup(i, { emit: d }) {
    const o = i, n = d, r = c(() => {
      const { class: t, ...a } = o;
      return a;
    }), l = w(r, n);
    return (t, a) => (f(), m(e(B), null, {
      default: s(() => [
        u(e(_), g({ ...e(l), ...t.$attrs }, {
          class: e(y)("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", o.class)
        }), {
          default: s(() => [
            h(t.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
});
export {
  b as default
};
//# sourceMappingURL=TooltipContent.vue.js.map
