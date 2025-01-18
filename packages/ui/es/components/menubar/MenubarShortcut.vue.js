import { defineComponent as r, openBlock as s, createElementBlock as n, normalizeClass as a, unref as c, renderSlot as l } from "vue";
import { cn as m } from "../../lib/utils.js";
const d = /* @__PURE__ */ r({
  __name: "MenubarShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, p) => (s(), n("span", {
      class: a(c(m)("ml-auto text-xs tracking-widest text-muted-foreground", t.class))
    }, [
      l(o.$slots, "default")
    ], 2));
  }
});
export {
  d as default
};
//# sourceMappingURL=MenubarShortcut.vue.js.map
