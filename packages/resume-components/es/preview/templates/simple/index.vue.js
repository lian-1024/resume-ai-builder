import { defineComponent as s, openBlock as e, createElementBlock as n, Fragment as c, renderList as i, createBlock as a, resolveDynamicComponent as l } from "vue";
import m from "./basic.vue.js";
const p = { class: "flex flex-col" }, x = /* @__PURE__ */ s({
  __name: "index",
  props: {
    sections: {}
  },
  setup(_) {
    const o = {
      basics: m
    };
    return (t, f) => (e(), n("div", p, [
      (e(!0), n(c, null, i(t.sections, (r) => (e(), a(l(o[r])))), 256))
    ]));
  }
});
export {
  x as default
};
//# sourceMappingURL=index.vue.js.map
