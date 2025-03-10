import { defineComponent as p, computed as f, createBlock as m, openBlock as g, unref as e, withCtx as s, createVNode as o, mergeProps as y, renderSlot as h } from "vue";
import { cn as b } from "../../lib/utils.js";
import { Cross2Icon as C } from "@radix-icons/vue";
import { useForwardPropsEmits as _, DialogPortal as w, DialogOverlay as B, DialogContent as D, DialogClose as O } from "radix-vue";
import { sheetVariants as P } from "./index.js";
const S = /* @__PURE__ */ p({
  inheritAttrs: !1,
  __name: "SheetContent",
  props: {
    class: {},
    side: {},
    forceMount: { type: Boolean },
    trapFocus: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "openAutoFocus", "closeAutoFocus"],
  setup(n, { emit: r }) {
    const a = n, i = r, c = f(() => {
      const { class: t, side: l, ...u } = a;
      return u;
    }), d = _(c, i);
    return (t, l) => (g(), m(e(w), null, {
      default: s(() => [
        o(e(B), { class: "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" }),
        o(e(D), y({
          class: e(b)(e(P)({ side: t.side }), a.class)
        }, { ...e(d), ...t.$attrs }), {
          default: s(() => [
            h(t.$slots, "default"),
            o(e(O), { class: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary" }, {
              default: s(() => [
                o(e(C), { class: "w-4 h-4" })
              ]),
              _: 1
            })
          ]),
          _: 3
        }, 16, ["class"])
      ]),
      _: 3
    }));
  }
});
export {
  S as default
};
//# sourceMappingURL=SheetContent.vue.js.map
