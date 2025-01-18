import { defineComponent as c, computed as l, openBlock as d, createBlock as p, unref as e, mergeProps as u, withCtx as f, renderSlot as m, createVNode as i } from "vue";
import { cn as g } from "../../lib/utils.js";
import { useForwardProps as b, MenubarSubTrigger as x } from "radix-vue";
import _ from "../../node_modules/.pnpm/@radix-icons_vue@1.0.0_vue@3.5.13_typescript@5.6.3_/node_modules/@radix-icons/vue/esm/ChevronRightIcon.js";
const P = /* @__PURE__ */ c({
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
    const o = s, a = l(() => {
      const { class: t, ...r } = o;
      return r;
    }), n = b(a);
    return (t, r) => (d(), p(e(x), u(e(n), {
      class: e(g)(
        "flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground",
        t.inset && "pl-8",
        o.class
      )
    }), {
      default: f(() => [
        m(t.$slots, "default"),
        i(e(_), { class: "ml-auto h-4 w-4" })
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  P as default
};
//# sourceMappingURL=MenubarSubTrigger.vue.js.map
