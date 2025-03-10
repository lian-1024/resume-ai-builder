import { defineComponent as c, computed as l, createBlock as p, openBlock as d, unref as e, mergeProps as u, withCtx as f, renderSlot as m, createVNode as i } from "vue";
import { cn as g } from "../../lib/utils.js";
import { ChevronRightIcon as b } from "@radix-icons/vue";
import { useForwardProps as x, MenubarSubTrigger as h } from "radix-vue";
const C = /* @__PURE__ */ c({
  __name: "MenubarSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(s) {
    const o = s, n = l(() => {
      const { class: t, ...r } = o;
      return r;
    }), a = x(n);
    return (t, r) => (d(), p(e(h), u(e(a), {
      class: e(g)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        t.inset && "pl-8",
        o.class
      )
    }), {
      default: f(() => [
        m(t.$slots, "default"),
        i(e(b), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  C as default
};
//# sourceMappingURL=MenubarSubTrigger.vue.js.map
