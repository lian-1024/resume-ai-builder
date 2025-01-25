import { defineComponent as m, openBlock as e, createBlock as o, withCtx as i, createElementBlock as s, Fragment as c, renderList as a, resolveDynamicComponent as p } from "vue";
import _ from "./basic.vue.js";
import f from "../wrapper.vue.js";
import l from "./skill.vue.js";
import u from "./education.vue.js";
import d from "./project.vue.js";
const b = /* @__PURE__ */ m({
  name: "Simple",
  __name: "index",
  props: {
    sections: {}
  },
  setup($) {
    const t = {
      basics: _,
      skills: l,
      education: u,
      projects: d
    };
    return (n, k) => (e(), o(f, null, {
      default: i(() => [
        (e(!0), s(c, null, a(n.sections, (r) => (e(), o(p(t[r])))), 256))
      ]),
      _: 1
    }));
  }
});
export {
  b as default
};
//# sourceMappingURL=index.vue.js.map
