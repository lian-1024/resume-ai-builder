import { defineComponent as r, createElementBlock as s, openBlock as n, normalizeClass as a, unref as c, renderSlot as l } from "vue";
import { cn as p } from "../../lib/utils.js";
const d = /* @__PURE__ */ r({
  __name: "CardDescription",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, m) => (n(), s("p", {
      class: a(c(p)("text-sm text-muted-foreground", t.class))
    }, [
      l(o.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
//# sourceMappingURL=CardDescription.vue.js.map
