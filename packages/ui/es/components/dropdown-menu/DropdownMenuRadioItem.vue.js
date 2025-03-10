import { defineComponent as p, computed as u, createBlock as m, openBlock as f, unref as e, mergeProps as _, withCtx as n, createElementVNode as w, renderSlot as x, createVNode as r } from "vue";
import { cn as h } from "../../lib/utils.js";
import { DotFilledIcon as b } from "@radix-icons/vue";
import { useForwardPropsEmits as g, DropdownMenuRadioItem as y, DropdownMenuItemIndicator as I } from "radix-vue";
const B = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, P = /* @__PURE__ */ p({
  __name: "DropdownMenuRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(a, { emit: l }) {
    const t = a, c = l, d = u(() => {
      const { class: o, ...s } = t;
      return s;
    }), i = g(d, c);
    return (o, s) => (f(), m(e(y), _(e(i), {
      class: e(h)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: n(() => [
        w("span", B, [
          r(e(I), null, {
            default: n(() => [
              r(e(b), { class: "h-4 w-4 fill-current" })
            ]),
            _: 1
          })
        ]),
        x(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  P as default
};
//# sourceMappingURL=DropdownMenuRadioItem.vue.js.map
