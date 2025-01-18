import { defineComponent as o, openBlock as r, createElementBlock as s, normalizeClass as t, unref as a } from "vue";
import { cn as c } from "../../lib/utils.js";
const u = /* @__PURE__ */ o({
  __name: "Skeleton",
  props: {
    class: {}
  },
  setup(e) {
    const n = e;
    return (l, m) => (r(), s("div", {
      class: t(a(c)("animate-pulse rounded-md bg-primary/10", n.class))
    }, null, 2));
  }
});
export {
  u as default
};
//# sourceMappingURL=Skeleton.vue.js.map
