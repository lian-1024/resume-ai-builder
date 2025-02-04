import { defineComponent as o, createElementBlock as t, openBlock as s, normalizeClass as l, unref as e, renderSlot as c } from "vue";
import { cn as i } from "../../lib/utils.js";
import { badgeVariants as m } from "./index.js";
const v = /* @__PURE__ */ o({
  __name: "Badge",
  props: {
    variant: {},
    class: {}
  },
  setup(r) {
    const n = r;
    return (a, p) => (s(), t("div", {
      class: l(e(i)(e(m)({ variant: a.variant }), n.class))
    }, [
      c(a.$slots, "default")
    ], 2));
  }
});
export {
  v as default
};
//# sourceMappingURL=Badge.vue.js.map
