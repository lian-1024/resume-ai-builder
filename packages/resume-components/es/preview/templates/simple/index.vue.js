import { defineComponent as s, openBlock as e, createBlock as t, withCtx as c, createElementBlock as i, Fragment as m, renderList as a, resolveDynamicComponent as p } from "vue";
import _ from "./basic.vue.js";
import l from "../wrapper.vue.js";
import f from "./skill.vue.js";
const $ = /* @__PURE__ */ s({
  __name: "index",
  props: {
    sections: {}
  },
  setup(u) {
    const n = {
      basics: _,
      skills: f
    };
    return (o, d) => (e(), t(l, null, {
      default: c(() => [
        (e(!0), i(m, null, a(o.sections, (r) => (e(), t(p(n[r])))), 256))
      ]),
      _: 1
    }));
  }
});
export {
  $ as default
};
//# sourceMappingURL=index.vue.js.map
