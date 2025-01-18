import { defineComponent as p, openBlock as s, createBlock as a, unref as e, normalizeProps as u, guardReactiveProps as m, withCtx as i, renderSlot as c } from "vue";
import { useForwardPropsEmits as d, MenubarSub as l } from "radix-vue";
const P = /* @__PURE__ */ p({
  __name: "MenubarSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const r = d(o, t);
    return (n, b) => (s(), a(e(l), u(m(e(r))), {
      default: i(() => [
        c(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  P as default
};
//# sourceMappingURL=MenubarSub.vue.js.map
