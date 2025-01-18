import { defineComponent as u, computed as m, openBlock as p, createBlock as f, unref as e, mergeProps as _, withCtx as r, createElementVNode as b, createVNode as a, renderSlot as x } from "vue";
import { cn as h } from "../../lib/utils.js";
import { useForwardPropsEmits as g, MenubarRadioItem as w, MenubarItemIndicator as y } from "radix-vue";
import B from "../../node_modules/.pnpm/@radix-icons_vue@1.0.0_vue@3.5.13_typescript@5.6.3_/node_modules/@radix-icons/vue/esm/DotFilledIcon.js";
const I = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, V = /* @__PURE__ */ u({
  __name: "MenubarRadioItem",
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(n, { emit: l }) {
    const t = n, c = l, d = m(() => {
      const { class: o, ...s } = t;
      return s;
    }), i = g(d, c);
    return (o, s) => (p(), f(e(w), _(e(i), {
      class: e(h)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: r(() => [
        b("span", I, [
          a(e(y), null, {
            default: r(() => [
              a(e(B), { class: "h-4 w-4 fill-current" })
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
  V as default
};
//# sourceMappingURL=MenubarRadioItem.vue.js.map
