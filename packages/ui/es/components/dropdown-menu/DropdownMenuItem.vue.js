import { defineComponent as l, computed as c, openBlock as d, createBlock as p, unref as o, mergeProps as i, withCtx as u, renderSlot as m } from "vue";
import { cn as f } from "../../lib/utils.js";
import { useForwardProps as g, DropdownMenuItem as x } from "radix-vue";
const B = /* @__PURE__ */ l({
  __name: "DropdownMenuItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(n) {
    const t = n, r = c(() => {
      const { class: e, ...s } = t;
      return s;
    }), a = g(r);
    return (e, s) => (d(), p(o(x), i(o(a), {
      class: o(f)(
        "relative flex cursor-default select-none items-center rounded-sm gap-2 px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50  [&>svg]:size-4 [&>svg]:shrink-0",
        e.inset && "pl-8",
        t.class
      )
    }), {
      default: u(() => [
        m(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  B as default
};
//# sourceMappingURL=DropdownMenuItem.vue.js.map
