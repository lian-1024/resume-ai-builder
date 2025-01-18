import { defineComponent as p, openBlock as s, createBlock as a, unref as e, normalizeProps as u, guardReactiveProps as d, withCtx as m, renderSlot as i } from "vue";
import { useForwardPropsEmits as c, DropdownMenuSub as l } from "radix-vue";
const S = /* @__PURE__ */ p({
  __name: "DropdownMenuSub",
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean }
  },
  emits: ["update:open"],
  setup(o, { emit: t }) {
    const r = c(o, t);
    return (n, w) => (s(), a(e(l), u(d(e(r))), {
      default: m(() => [
        i(n.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  S as default
};
//# sourceMappingURL=DropdownMenuSub.vue.js.map
