import { defineComponent as r, openBlock as t, createElementBlock as l, normalizeClass as n, unref as a, renderSlot as c } from "vue";
import { cn as m } from "../../lib/utils.js";
const u = /* @__PURE__ */ r({
  __name: "SheetFooter",
  props: {
    class: {}
  },
  setup(e) {
    const s = e;
    return (o, f) => (t(), l("div", {
      class: n(
        a(m)(
          "flex flex-col-reverse sm:flex-row sm:justify-end sm:gap-x-2",
          s.class
        )
      )
    }, [
      c(o.$slots, "default")
    ], 2));
  }
});
export {
  u as default
};
//# sourceMappingURL=SheetFooter.vue.js.map
