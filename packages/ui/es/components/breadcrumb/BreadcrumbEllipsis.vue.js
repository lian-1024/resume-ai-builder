import { defineComponent as o, openBlock as a, createElementBlock as l, normalizeClass as c, unref as r, renderSlot as p, createVNode as m, createElementVNode as i } from "vue";
import { cn as d } from "../../lib/utils.js";
import f from "../../node_modules/.pnpm/@radix-icons_vue@1.0.0_vue@3.5.13_typescript@5.6.3_/node_modules/@radix-icons/vue/esm/DotsHorizontalIcon.js";
const _ = /* @__PURE__ */ o({
  __name: "BreadcrumbEllipsis",
  props: {
    class: {}
  },
  setup(s) {
    const t = s;
    return (n, e) => (a(), l("span", {
      role: "presentation",
      "aria-hidden": "true",
      class: c(r(d)("flex h-9 w-9 items-center justify-center", t.class))
    }, [
      p(n.$slots, "default", {}, () => [
        m(r(f), { class: "h-4 w-4" })
      ]),
      e[0] || (e[0] = i("span", { class: "sr-only" }, "More", -1))
    ], 2));
  }
});
export {
  _ as default
};
//# sourceMappingURL=BreadcrumbEllipsis.vue.js.map
