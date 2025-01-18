import { defineComponent as n, openBlock as r, createElementBlock as s, normalizeClass as i, unref as l, renderSlot as d } from "vue";
import { cn as o } from "../../lib/utils.js";
const f = /* @__PURE__ */ n({
  __name: "SidebarInset",
  props: {
    class: {}
  },
  setup(e) {
    const a = e;
    return (t, m) => (r(), s("main", {
      class: i(l(o)(
        "relative flex min-h-svh flex-1 flex-col bg-background",
        "peer-data-[variant=inset]:min-h-[calc(100svh-theme(spacing.4))] md:peer-data-[variant=inset]:m-2 md:peer-data-[state=collapsed]:peer-data-[variant=inset]:ml-2 md:peer-data-[variant=inset]:ml-0 md:peer-data-[variant=inset]:rounded-xl md:peer-data-[variant=inset]:shadow",
        a.class
      ))
    }, [
      d(t.$slots, "default")
    ], 2));
  }
});
export {
  f as default
};
//# sourceMappingURL=SidebarInset.vue.js.map
