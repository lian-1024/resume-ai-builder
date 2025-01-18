import { defineComponent as t, openBlock as n, createBlock as p, unref as a, normalizeProps as s, guardReactiveProps as u, withCtx as l, renderSlot as c } from "vue";
import { DropdownMenuGroup as d } from "radix-vue";
const _ = /* @__PURE__ */ t({
  __name: "DropdownMenuGroup",
  props: {
    asChild: { type: Boolean },
    as: {}
  },
  setup(o) {
    const e = o;
    return (r, f) => (n(), p(a(d), s(u(e)), {
      default: l(() => [
        c(r.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  _ as default
};
//# sourceMappingURL=DropdownMenuGroup.vue.js.map
