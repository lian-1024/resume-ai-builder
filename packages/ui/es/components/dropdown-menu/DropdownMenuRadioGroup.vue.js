import { defineComponent as a, openBlock as p, createBlock as n, unref as o, normalizeProps as d, guardReactiveProps as u, withCtx as i, renderSlot as m } from "vue";
import { useForwardPropsEmits as l, DropdownMenuRadioGroup as c } from "radix-vue";
const C = /* @__PURE__ */ a({
  __name: "DropdownMenuRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(e, { emit: r }) {
    const t = l(e, r);
    return (s, w) => (p(), n(o(c), d(u(o(t))), {
      default: i(() => [
        m(s.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  C as default
};
//# sourceMappingURL=DropdownMenuRadioGroup.vue.js.map
