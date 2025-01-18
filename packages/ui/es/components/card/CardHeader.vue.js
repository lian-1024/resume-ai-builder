import { defineComponent as s, openBlock as a, createElementBlock as l, normalizeClass as n, unref as t, renderSlot as c } from "vue";
import { cn as p } from "../../lib/utils.js";
const i = /* @__PURE__ */ s({
  __name: "CardHeader",
  props: {
    class: {}
  },
  setup(e) {
    const o = e;
    return (r, f) => (a(), l("div", {
      class: n(t(p)("flex flex-col gap-y-1.5 p-6", o.class))
    }, [
      c(r.$slots, "default")
    ], 2));
  }
});
export {
  i as default
};
//# sourceMappingURL=CardHeader.vue.js.map
