import { defineComponent as m, computed as l, openBlock as u, createBlock as f, unref as t, mergeProps as c, withCtx as p, renderSlot as g } from "vue";
import { cn as w } from "../../lib/utils.js";
import { useForwardPropsEmits as _, NavigationMenuContent as h } from "radix-vue";
const O = /* @__PURE__ */ m({
  __name: "NavigationMenuContent",
  props: {
    forceMount: { type: Boolean },
    disableOutsidePointerEvents: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside"],
  setup(n, { emit: s }) {
    const o = n, i = s, r = l(() => {
      const { class: e, ...a } = o;
      return a;
    }), d = _(r, i);
    return (e, a) => (u(), f(t(h), c(t(d), {
      class: t(w)(
        "left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto",
        o.class
      )
    }), {
      default: p(() => [
        g(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  O as default
};
//# sourceMappingURL=NavigationMenuContent.vue.js.map
