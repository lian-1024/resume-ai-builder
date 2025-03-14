import { defineComponent as p, computed as c, createBlock as u, openBlock as f, unref as e, withCtx as s, createVNode as m, mergeProps as g, renderSlot as w } from "vue";
import { cn as h } from "../../lib/utils.js";
import { useForwardPropsEmits as y, DropdownMenuPortal as B, DropdownMenuContent as P } from "radix-vue";
const O = /* @__PURE__ */ p({
  __name: "DropdownMenuContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
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
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(n, { emit: d }) {
    const o = n, i = d, r = c(() => {
      const { class: t, ...a } = o;
      return a;
    }), l = y(r, i);
    return (t, a) => (f(), u(e(B), null, {
      default: s(() => [
        m(e(P), g(e(l), {
          class: e(h)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", o.class)
        }), {
          default: s(() => [
            w(t.$slots, "default")
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
});
export {
  O as default
};
//# sourceMappingURL=DropdownMenuContent.vue.js.map
