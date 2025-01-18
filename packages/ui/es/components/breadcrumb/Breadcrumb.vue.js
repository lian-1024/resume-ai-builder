import { defineComponent as s, openBlock as o, createElementBlock as l, normalizeClass as n, renderSlot as t } from "vue";
const p = /* @__PURE__ */ s({
  __name: "Breadcrumb",
  props: {
    class: {}
  },
  setup(e) {
    const a = e;
    return (r, c) => (o(), l("nav", {
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
