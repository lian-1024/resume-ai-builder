import { defineComponent as n, createElementBlock as r, openBlock as s, normalizeClass as a, unref as c, renderSlot as l } from "vue";
import { cn as p } from "../../lib/utils.js";
const i = /* @__PURE__ */ n({
  __name: "CardContent",
  props: {
    class: {}
  },
  setup(e) {
    const o = e;
    return (t, m) => (s(), r("div", {
      class: a(c(p)("p-6 pt-0", o.class))
    }, [
      l(t.$slots, "default")
    ], 2));
  }
});
export {
  i as default
};
//# sourceMappingURL=CardContent.vue.js.map
