import { defineComponent as n, computed as c, openBlock as l, createBlock as p, unref as s, mergeProps as d, withCtx as m, renderSlot as i } from "vue";
import { cn as u } from "../../lib/utils.js";
import { DialogDescription as f } from "radix-vue";
const x = /* @__PURE__ */ n({
  __name: "SheetDescription",
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(r) {
    const e = r, a = c(() => {
      const { class: t, ...o } = e;
      return o;
    });
    return (t, o) => (l(), p(s(f), d({
      class: s(u)("text-sm text-muted-foreground", e.class)
    }, a.value), {
      default: m(() => [
        i(t.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  x as default
};
//# sourceMappingURL=SheetDescription.vue.js.map
