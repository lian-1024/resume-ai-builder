import { defineComponent as a, computed as n, openBlock as c, createBlock as p, unref as s, mergeProps as d, withCtx as m, renderSlot as f } from "vue";
import { cn as i } from "../../lib/utils.js";
import { DialogTitle as u } from "radix-vue";
const x = /* @__PURE__ */ a({
  __name: "SheetTitle",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(r) {
    const e = r, l = n(() => {
      const { class: t, ...o } = e;
      return o;
    });
    return (t, o) => (c(), p(s(u), d({
      class: s(i)("text-lg font-semibold text-foreground", e.class)
    }, l.value), {
      default: m(() => [
        f(t.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  x as default
};
//# sourceMappingURL=SheetTitle.vue.js.map
