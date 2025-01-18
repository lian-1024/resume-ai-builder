import { defineComponent as c, computed as l, openBlock as d, createBlock as p, unref as e, mergeProps as u, withCtx as m, renderSlot as f, createVNode as i } from "vue";
import { cn as g } from "../../lib/utils.js";
import { useForwardProps as _, DropdownMenuSubTrigger as w } from "radix-vue";
import x from "../../node_modules/.pnpm/@radix-icons_vue@1.0.0_vue@3.5.13_typescript@5.6.3_/node_modules/@radix-icons/vue/esm/ChevronRightIcon.js";
const y = /* @__PURE__ */ c({
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
    }), a = _(n);
    return (t, r) => (d(), p(e(w), u(e(a), {
      class: e(g)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent",
        o.class
      )
    }), {
      default: m(() => [
        f(t.$slots, "default"),
        i(e(x), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  y as default
};
//# sourceMappingURL=DropdownMenuSubTrigger.vue.js.map
