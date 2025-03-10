import { defineComponent as u, computed as m, createBlock as p, openBlock as f, unref as e, mergeProps as _, withCtx as a, createElementVNode as b, renderSlot as x, createVNode as r } from "vue";
import { cn as h } from "../../lib/utils.js";
import { DotFilledIcon as g } from "@radix-icons/vue";
import { useForwardPropsEmits as w, MenubarRadioItem as y, MenubarItemIndicator as I } from "radix-vue";
const B = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, V = /* @__PURE__ */ u({
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
    }), i = w(d, c);
    return (o, s) => (f(), p(e(y), _(e(i), {
      class: e(h)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: a(() => [
        b("span", B, [
          r(e(I), null, {
            default: a(() => [
              r(e(g), { class: "h-4 w-4 fill-current" })
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
