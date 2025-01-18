import { defineComponent as d, computed as p, openBlock as i, createBlock as m, unref as t, mergeProps as u, withCtx as f, renderSlot as b } from "vue";
import { cn as x } from "../../lib/utils.js";
import { useForwardPropsEmits as _, MenubarItem as g } from "radix-vue";
const w = /* @__PURE__ */ d({
  __name: "MenubarItem",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  emits: ["select"],
  setup(n, { emit: a }) {
    const o = n, r = a, c = p(() => {
      const { class: e, ...s } = o;
      return s;
    }), l = _(c, r);
    return (e, s) => (i(), m(t(g), u(t(l), {
      class: t(x)(
        "relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        e.inset && "pl-8",
        o.class
      )
    }), {
      default: f(() => [
        b(e.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  w as default
};
//# sourceMappingURL=MenubarItem.vue.js.map
