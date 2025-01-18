import { defineComponent as p, openBlock as s, createBlock as a, unref as e, normalizeProps as d, guardReactiveProps as m, withCtx as i, renderSlot as l } from "vue";
import { useForwardPropsEmits as u, DropdownMenuRoot as c } from "radix-vue";
const P = /* @__PURE__ */ p({
  __name: "DropdownMenu",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const r = u(o, t);
    return (n, w) => (s(), a(e(c), d(m(e(r))), {
      default: i(() => [
        l(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  P as default
};
//# sourceMappingURL=DropdownMenu.vue.js.map
