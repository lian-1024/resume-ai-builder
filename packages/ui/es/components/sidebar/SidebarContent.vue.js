import { defineComponent as t, openBlock as a, createElementBlock as l, normalizeClass as r, unref as s, renderSlot as c } from "vue";
import { cn as p } from "../../lib/utils.js";
const m = /* @__PURE__ */ t({
  __name: "SidebarContent",
  props: {
    class: {}
  },
  setup(e) {
    const o = e;
    return (n, f) => (a(), l("div", {
      "data-sidebar": "content",
      class: r(s(p)("flex min-h-0 flex-1 flex-col gap-2 overflow-auto group-data-[collapsible=icon]:overflow-hidden", o.class))
    }, [
      c(n.$slots, "default")
    ], 2));
  }
});
export {
  m as default
};
//# sourceMappingURL=SidebarContent.vue.js.map
