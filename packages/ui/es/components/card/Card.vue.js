import { defineComponent as s, openBlock as n, createElementBlock as t, normalizeClass as a, unref as c, renderSlot as d } from "vue";
import { cn as l } from "../../lib/utils.js";
const u = /* @__PURE__ */ s({
  __name: "Card",
  props: {
    class: {}
  },
  setup(e) {
    const r = e;
    return (o, p) => (n(), t("div", {
      class: a(
        c(l)(
          "rounded-xl border bg-card text-card-foreground shadow",
          r.class
        )
      )
    }, [
      d(o.$slots, "default")
    ], 2));
  }
});
export {
  u as default
};
//# sourceMappingURL=Card.vue.js.map
