import { defineComponent as p, computed as l, openBlock as c, createBlock as d, unref as o, mergeProps as m, withCtx as u, renderSlot as f } from "vue";
import { cn as i } from "../../lib/utils.js";
import { useForwardProps as _, DropdownMenuLabel as w } from "radix-vue";
const g = /* @__PURE__ */ p({
  __name: "DropdownMenuLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(r) {
    const s = r, n = l(() => {
      const { class: e, ...t } = s;
      return t;
    }), a = _(n);
    return (e, t) => (c(), d(o(w), m(o(a), {
      class: o(i)("px-2 py-1.5 text-sm font-semibold", e.inset && "pl-8", s.class)
    }), {
      default: u(() => [
        f(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  g as default
};
//# sourceMappingURL=DropdownMenuLabel.vue.js.map
