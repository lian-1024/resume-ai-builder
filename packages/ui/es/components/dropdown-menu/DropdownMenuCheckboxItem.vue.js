import { defineComponent as i, computed as u, openBlock as m, createBlock as f, unref as e, mergeProps as h, withCtx as n, createElementVNode as _, createVNode as r, renderSlot as x } from "vue";
import { cn as w } from "../../lib/utils.js";
import { useForwardPropsEmits as b, DropdownMenuCheckboxItem as g, DropdownMenuItemIndicator as k } from "radix-vue";
import y from "../../node_modules/.pnpm/@radix-icons_vue@1.0.0_vue@3.5.13_typescript@5.6.3_/node_modules/@radix-icons/vue/esm/CheckIcon.js";
const B = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, P = /* @__PURE__ */ i({
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
  setup(a, { emit: c }) {
    const t = a, l = c, d = u(() => {
      const { class: o, ...s } = t;
      return s;
    }), p = b(d, l);
    return (o, s) => (m(), f(e(g), h(e(p), {
      class: e(w)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: n(() => [
        _("span", B, [
          r(e(k), null, {
            default: n(() => [
              r(e(y), { class: "w-4 h-4" })
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
