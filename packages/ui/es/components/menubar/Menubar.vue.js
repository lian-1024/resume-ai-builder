import { defineComponent as c, computed as m, openBlock as p, createBlock as u, unref as e, mergeProps as f, withCtx as i, renderSlot as _ } from "vue";
import { cn as b } from "../../lib/utils.js";
import { useForwardPropsEmits as g, MenubarRoot as h } from "radix-vue";
const B = /* @__PURE__ */ c({
  __name: "Menubar",
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    loop: { type: Boolean },
    class: {}
  },
  emits: ["update:modelValue"],
  setup(s, { emit: a }) {
    const o = s, d = a, n = m(() => {
      const { class: t, ...r } = o;
      return r;
    }), l = g(n, d);
    return (t, r) => (p(), u(e(h), f(e(l), {
      class: e(b)(
        "flex h-9 items-center space-x-1 rounded-md border bg-background p-1 shadow-sm",
        o.class
      )
    }), {
      default: i(() => [
        _(t.$slots, "default")
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  B as default
};
//# sourceMappingURL=Menubar.vue.js.map
