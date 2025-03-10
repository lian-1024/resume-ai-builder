import { defineComponent as n, createElementBlock as a, openBlock as l, normalizeClass as c, unref as r, renderSlot as p, createElementVNode as i, createVNode as m } from "vue";
import { cn as f } from "../../lib/utils.js";
import { DotsHorizontalIcon as d } from "@radix-icons/vue";
const _ = /* @__PURE__ */ n({
  __name: "BreadcrumbEllipsis",
  props: {
    class: {}
  },
  setup(s) {
    const o = s;
    return (t, e) => (l(), a("span", {
      role: "presentation",
      "aria-hidden": "true",
      class: c(r(f)("flex h-9 w-9 items-center justify-center", o.class))
    }, [
      p(t.$slots, "default", {}, () => [
        m(r(d), { class: "h-4 w-4" })
      ]),
      e[0] || (e[0] = i("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
});
export {
  _ as default
};
//# sourceMappingURL=BreadcrumbEllipsis.vue.js.map
