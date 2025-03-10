import { defineComponent as i, computed as u, createBlock as m, openBlock as f, unref as e, mergeProps as h, withCtx as n, createElementVNode as _, renderSlot as x, createVNode as r } from "vue";
import { cn as w } from "../../lib/utils.js";
import { CheckIcon as b } from "@radix-icons/vue";
import { useForwardPropsEmits as k, DropdownMenuCheckboxItem as g, DropdownMenuItemIndicator as y } from "radix-vue";
const C = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, P = /* @__PURE__ */ i({
  __name: "DropdownMenuCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select", "update:checked"],
  setup(c, { emit: a }) {
    const t = c, l = a, d = u(() => {
      const { class: o, ...s } = t;
      return s;
    }), p = k(d, l);
    return (o, s) => (f(), m(e(g), h(e(p), {
      class: e(w)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: n(() => [
        _("span", C, [
          r(e(y), null, {
            default: n(() => [
              r(e(b), { class: "w-4 h-4" })
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
//# sourceMappingURL=DropdownMenuCheckboxItem.vue.js.map
