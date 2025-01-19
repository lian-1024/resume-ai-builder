import { defineComponent as t, ref as o, openBlock as n, createElementBlock as c, createElementVNode as l, toDisplayString as r } from "vue";
const s = { class: "flex flex-col" }, f = /* @__PURE__ */ t({
  __name: "basic",
  setup(a) {
    const e = o("基础信息");
    return (_, i) => (n(), c("div", s, [
      l("h1", null, r(e.value), 1)
    ]));
  }
});
export {
  f as default
};
//# sourceMappingURL=basic.vue.js.map
