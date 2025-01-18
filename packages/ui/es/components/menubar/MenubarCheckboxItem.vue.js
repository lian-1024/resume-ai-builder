import { defineComponent as u, computed as i, openBlock as m, createBlock as f, unref as e, mergeProps as b, withCtx as r, createElementVNode as h, createVNode as a, renderSlot as _ } from "vue";
import { cn as x } from "../../lib/utils.js";
import { useForwardPropsEmits as g, MenubarCheckboxItem as k, MenubarItemIndicator as y } from "radix-vue";
import w from "../../node_modules/.pnpm/@radix-icons_vue@1.0.0_vue@3.5.13_typescript@5.6.3_/node_modules/@radix-icons/vue/esm/CheckIcon.js";
const B = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, V = /* @__PURE__ */ u({
  __name: "MenubarCheckboxItem",
  props: {
    checked: { type: [Boolean, String] },
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select", "update:checked"],
  setup(n, { emit: c }) {
    const t = n, l = c, d = i(() => {
      const { class: o, ...s } = t;
      return s;
    }), p = g(d, l);
    return (o, s) => (m(), f(e(k), b(e(p), {
      class: e(x)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: r(() => [
        h("span", B, [
          a(e(y), null, {
            default: r(() => [
              a(e(w), { class: "w-4 h-4" })
            ]),
            _: 1
          })
        ]),
        _(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  V as default
};
//# sourceMappingURL=MenubarCheckboxItem.vue.js.map
