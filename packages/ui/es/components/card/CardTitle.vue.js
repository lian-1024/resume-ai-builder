import { defineComponent as t, openBlock as r, createElementBlock as s, normalizeClass as a, unref as l, renderSlot as c } from "vue";
import { cn as i } from "../../lib/utils.js";
const d = /* @__PURE__ */ t({
  __name: "CardTitle",
  props: {
    class: {}
  },
  setup(e) {
    const n = e;
    return (o, m) => (r(), s("h3", {
      class: a(
        l(i)("font-semibold leading-none tracking-tight", n.class)
      )
    }, [
      c(o.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
//# sourceMappingURL=CardTitle.vue.js.map
