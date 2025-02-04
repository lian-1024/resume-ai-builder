import { defineComponent as s, createElementBlock as o, openBlock as l, normalizeClass as n, renderSlot as t } from "vue";
const p = /* @__PURE__ */ s({
  __name: "Breadcrumb",
  props: {
    class: {}
  },
  setup(e) {
    const a = e;
    return (r, c) => (l(), o("nav", {
      "aria-label": "breadcrumb",
      class: n(a.class)
    }, [
      t(r.$slots, "default")
    ], 2));
  }
});
export {
  p as default
};
//# sourceMappingURL=Breadcrumb.vue.js.map
