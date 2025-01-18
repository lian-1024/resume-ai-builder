import { defineComponent as r, openBlock as s, createElementBlock as l, normalizeClass as n, unref as a, renderSlot as c } from "vue";
import { cn as p } from "../../lib/utils.js";
const i = /* @__PURE__ */ r({
  __name: "SheetHeader",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, f) => (s(), l("div", {
      class: n(
        a(p)("flex flex-col gap-y-2 text-center sm:text-left", t.class)
      )
    }, [
      c(o.$slots, "default")
    ], 2));
  }
});
export {
  i as default
};
//# sourceMappingURL=SheetHeader.vue.js.map
