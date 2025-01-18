import { defineComponent as s, openBlock as p, createBlock as n, unref as e, normalizeProps as u, guardReactiveProps as d, withCtx as i, renderSlot as m } from "vue";
import { useForwardPropsEmits as l, MenubarRadioGroup as c } from "radix-vue";
const C = /* @__PURE__ */ s({
  __name: "MenubarRadioGroup",
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(o, { emit: r }) {
    const t = l(o, r);
    return (a, h) => (p(), n(e(c), u(d(e(t))), {
      default: i(() => [
        m(a.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  C as default
};
//# sourceMappingURL=MenubarRadioGroup.vue.js.map
