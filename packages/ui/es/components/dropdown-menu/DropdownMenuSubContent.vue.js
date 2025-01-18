import { defineComponent as l, computed as p, openBlock as c, createBlock as u, unref as o, mergeProps as m, withCtx as f, renderSlot as g } from "vue";
import { cn as w } from "../../lib/utils.js";
import { useForwardPropsEmits as y, DropdownMenuSubContent as h } from "radix-vue";
const b = /* @__PURE__ */ l({
  __name: "DropdownMenuSubContent",
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    sideOffset: {},
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
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "entryFocus", "openAutoFocus", "closeAutoFocus"],
  setup(s, { emit: n }) {
    const e = s, d = n, i = p(() => {
      const { class: t, ...a } = e;
      return a;
    }), r = y(i, d);
    return (t, a) => (c(), u(o(h), m(o(r), {
      class: o(w)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e.class)
    }), {
      default: f(() => [
        g(t.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  b as default
};
//# sourceMappingURL=DropdownMenuSubContent.vue.js.map
