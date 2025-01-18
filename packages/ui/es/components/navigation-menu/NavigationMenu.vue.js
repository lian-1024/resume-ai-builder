import { defineComponent as c, computed as d, openBlock as m, createBlock as p, unref as e, mergeProps as u, withCtx as f, renderSlot as g, createVNode as _ } from "vue";
import { cn as x } from "../../lib/utils.js";
import { useForwardPropsEmits as y, NavigationMenuRoot as B } from "radix-vue";
import k from "./NavigationMenuViewport.vue.js";
const h = /* @__PURE__ */ c({
  __name: "NavigationMenu",
  props: {
    modelValue: {},
    defaultValue: {},
    dir: {},
    orientation: {},
    delayDuration: {},
    skipDelayDuration: {},
    disableClickTrigger: { type: Boolean },
    disableHoverTrigger: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(r, { emit: s }) {
    const t = r, l = s, n = d(() => {
      const { class: o, ...a } = t;
      return a;
    }), i = y(n, l);
    return (o, a) => (m(), p(e(B), u(e(i), {
      class: e(x)("relative z-10 flex max-w-max flex-1 items-center justify-center", t.class)
    }), {
      default: f(() => [
        g(o.$slots, "default"),
        _(k)
      ]),
      _: 3
    }, 16, ["class"]));
  }
});
export {
  h as default
};
//# sourceMappingURL=NavigationMenu.vue.js.map
