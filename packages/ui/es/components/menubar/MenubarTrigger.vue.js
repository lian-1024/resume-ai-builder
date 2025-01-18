import { defineComponent as c, computed as d, openBlock as l, createBlock as p, unref as e, mergeProps as u, withCtx as f, renderSlot as m } from "vue";
import { cn as i } from "../../lib/utils.js";
import { useForwardProps as g, MenubarTrigger as x } from "radix-vue";
const P = /* @__PURE__ */ c({
  __name: "MenubarTrigger",
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(s) {
    const t = s, n = d(() => {
      const { class: o, ...r } = t;
      return r;
    }), a = g(n);
    return (o, r) => (l(), p(e(x), u(e(a), {
      class: e(i)(
        "flex cursor-default select-none items-center rounded-sm px-3 py-1 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        t.class
      )
    }), {
      default: f(() => [
        m(o.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  P as default
};
//# sourceMappingURL=MenubarTrigger.vue.js.map
