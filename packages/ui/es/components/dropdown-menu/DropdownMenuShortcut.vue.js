import { defineComponent as s, openBlock as n, createElementBlock as r, normalizeClass as a, unref as c, renderSlot as l } from "vue";
import { cn as p } from "../../lib/utils.js";
const f = /* @__PURE__ */ s({
  __name: "DropdownMenuShortcut",
  props: {
    class: {}
  },
  setup(e) {
    const t = e;
    return (o, m) => (n(), r("span", {
      class: a(c(p)("ml-auto text-xs tracking-widest opacity-60", t.class))
    }, [
      l(o.$slots, "default")
    ], 2));
  }
});
export {
  f as default
};
//# sourceMappingURL=DropdownMenuShortcut.vue.js.map
