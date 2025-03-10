import { defineComponent as u, computed as i, createBlock as m, openBlock as f, unref as e, mergeProps as h, withCtx as a, createElementVNode as b, renderSlot as _, createVNode as n } from "vue";
import { cn as x } from "../../lib/utils.js";
import { CheckIcon as k } from "@radix-icons/vue";
import { useForwardPropsEmits as g, MenubarCheckboxItem as y, MenubarItemIndicator as C } from "radix-vue";
const w = { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, V = /* @__PURE__ */ u({
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
  setup(r, { emit: c }) {
    const t = r, l = c, d = i(() => {
      const { class: o, ...s } = t;
      return s;
    }), p = g(d, l);
    return (o, s) => (f(), m(e(y), h(e(p), {
      class: e(x)(
        "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        t.class
      )
    }), {
      default: a(() => [
        b("span", w, [
          n(e(C), null, {
            default: a(() => [
              n(e(k), { class: "w-4 h-4" })
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
