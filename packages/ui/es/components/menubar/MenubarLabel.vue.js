import { defineComponent as a, createBlock as n, openBlock as l, unref as o, normalizeClass as r, withCtx as p, renderSlot as c } from "vue";
import { cn as m } from "../../lib/utils.js";
import { MenubarLabel as i } from "radix-vue";
const _ = /* @__PURE__ */ a({
  __name: "MenubarLabel",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(s) {
    const t = s;
    return (e, f) => (l(), n(o(i), {
      class: r(o(m)("px-2 py-1.5 text-sm font-semibold", e.inset && "pl-8", t.class))
    }, {
      default: p(() => [
        c(e.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  _ as default
};
//# sourceMappingURL=MenubarLabel.vue.js.map
