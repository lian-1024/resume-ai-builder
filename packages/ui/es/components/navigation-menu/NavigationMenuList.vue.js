import { defineComponent as c, computed as l, openBlock as p, createBlock as i, unref as e, mergeProps as d, withCtx as u, renderSlot as f } from "vue";
import { cn as m } from "../../lib/utils.js";
import { useForwardProps as g, NavigationMenuList as _ } from "radix-vue";
const w = /* @__PURE__ */ c({
  __name: "NavigationMenuList",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(r) {
    const t = r, n = l(() => {
      const { class: o, ...s } = t;
      return s;
    }), a = g(n);
    return (o, s) => (p(), i(e(_), d(e(a), {
      class: e(m)(
        "group flex flex-1 list-none items-center justify-center gap-x-1",
        t.class
      )
    }), {
      default: u(() => [
        f(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  w as default
};
//# sourceMappingURL=NavigationMenuList.vue.js.map
