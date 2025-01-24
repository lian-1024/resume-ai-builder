import { defineComponent as m, openBlock as e, createBlock as n, withCtx as i, createElementBlock as s, Fragment as c, renderList as a, resolveDynamicComponent as p } from "vue";
import _ from "./basic.vue.js";
import l from "../wrapper.vue.js";
import f from "./skill.vue.js";
import u from "./education.vue.js";
const h = /* @__PURE__ */ m({
  name: "Simple",
  __name: "index",
  props: {
    sections: {}
  },
  setup(d) {
    const t = {
      basics: _,
      skills: f,
      education: u
    };
    return (o, k) => (e(), n(l, null, {
      default: i(() => [
        (e(!0), s(c, null, a(o.sections, (r) => (e(), n(p(t[r])))), 256))
      ]),
      _: 1
    }));
  }
});
export {
  h as default
};
//# sourceMappingURL=index.vue.js.map
