import { defineComponent as t, openBlock as s, createElementBlock as n, normalizeClass as a, unref as c, renderSlot as l } from "vue";
import { cn as p } from "../../lib/utils.js";
const d = /* @__PURE__ */ t({
  __name: "CardFooter",
  props: {
    class: {}
  },
  setup(e) {
    const o = e;
    return (r, m) => (s(), n("div", {
      class: a(c(p)("flex items-center p-6 pt-0", o.class))
    }, [
      l(r.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
//# sourceMappingURL=CardFooter.vue.js.map
