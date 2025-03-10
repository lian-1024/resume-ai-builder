import { defineComponent as c, computed as l, createBlock as p, openBlock as d, unref as e, mergeProps as u, withCtx as m, renderSlot as f, createVNode as i } from "vue";
import { cn as g } from "../../lib/utils.js";
import { ChevronRightIcon as _ } from "@radix-icons/vue";
import { useForwardProps as h, DropdownMenuSubTrigger as w } from "radix-vue";
const P = /* @__PURE__ */ c({
  __name: "DropdownMenuSubTrigger",
  props: {
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(s) {
    const o = s, n = l(() => {
      const { class: t, ...r } = o;
      return r;
    }), a = h(n);
    return (t, r) => (d(), p(e(w), u(e(a), {
      class: e(g)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        o.class
      )
    }), {
      default: m(() => [
        f(t.$slots, "default"),
        i(e(_), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  P as default
};
//# sourceMappingURL=DropdownMenuSubTrigger.vue.js.map
