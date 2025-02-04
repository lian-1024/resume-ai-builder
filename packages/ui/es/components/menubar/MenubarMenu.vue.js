import { defineComponent as t, createBlock as n, openBlock as a, unref as u, normalizeProps as p, guardReactiveProps as s, withCtx as c, renderSlot as l } from "vue";
import { MenubarMenu as f } from "radix-vue";
const _ = /* @__PURE__ */ t({
  __name: "MenubarMenu",
  props: {
    value: {}
  },
  setup(e) {
    const r = e;
    return (o, m) => (a(), n(u(f), p(s(r)), {
      default: c(() => [
        l(o.$slots, "default")
      ]),
      _: 3
    }, 16));
  }
});
export {
  _ as default
};
//# sourceMappingURL=MenubarMenu.vue.js.map
