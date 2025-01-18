import { defineComponent as p, computed as c, openBlock as l, createBlock as m, unref as e, mergeProps as d } from "vue";
import { cn as u } from "../../lib/utils.js";
import { useForwardProps as f, MenubarSeparator as _ } from "radix-vue";
const P = /* @__PURE__ */ p({
  __name: "MenubarSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(s) {
    const r = s, a = c(() => {
      const { class: n, ...o } = r;
      return o;
    }), t = f(a);
    return (n, o) => (l(), m(e(_), d({
      class: e(u)("-mx-1 my-1 h-px bg-muted", r.class)
    }, e(t)), null, 16, ["class"]));
  }
});
export {
  P as default
};
//# sourceMappingURL=MenubarSeparator.vue.js.map
