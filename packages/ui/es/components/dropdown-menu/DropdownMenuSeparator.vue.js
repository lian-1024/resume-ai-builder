import { defineComponent as n, computed as p, openBlock as c, createBlock as l, unref as r, mergeProps as m } from "vue";
import { cn as u } from "../../lib/utils.js";
import { DropdownMenuSeparator as d } from "radix-vue";
const g = /* @__PURE__ */ n({
  __name: "DropdownMenuSeparator",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(s) {
    const e = s, t = p(() => {
      const { class: a, ...o } = e;
      return o;
    });
    return (a, o) => (c(), l(r(d), m(t.value, {
      class: r(u)("-mx-1 my-1 h-px bg-muted", e.class)
    }), null, 16, ["class"]));
  }
});
export {
  g as default
};
//# sourceMappingURL=DropdownMenuSeparator.vue.js.map
