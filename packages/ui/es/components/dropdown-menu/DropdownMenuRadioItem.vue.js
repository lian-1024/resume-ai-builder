import { defineComponent as p, computed as u, openBlock as m, createBlock as f, unref as e, mergeProps as _, withCtx as r, createElementVNode as w, createVNode as n, renderSlot as x } from "vue";
import { cn as h } from "../../lib/utils.js";
import { useForwardPropsEmits as b, DropdownMenuRadioItem as g, DropdownMenuItemIndicator as y } from "radix-vue";
import B from "../../node_modules/.pnpm/@radix-icons_vue@1.0.0_vue@3.5.13_typescript@5.6.3_/node_modules/@radix-icons/vue/esm/DotFilledIcon.js";
const I = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, P = /* @__PURE__ */ p({
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
    }), i = b(d, c);
    return (o, s) => (m(), f(e(g), _(e(i), {
      class: e(h)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: r(() => [
        w("span", I, [
          n(e(y), null, {
            default: r(() => [
              n(e(B), { class: "h-4 w-4 fill-current" })
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
