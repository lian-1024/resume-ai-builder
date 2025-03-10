import { defineComponent as i, withDirectives as a, createElementBlock as u, openBlock as d, normalizeClass as m, unref as o, isRef as p, vModelText as f } from "vue";
import { cn as c } from "../../lib/utils.js";
import { useVModel as b } from "../../node_modules/.pnpm/@vueuse_core@12.8.2_typescript@5.6.3/node_modules/@vueuse/core/index.js";
const _ = /* @__PURE__ */ i({
  __name: "Input",
  props: {
    defaultValue: {},
    modelValue: {},
    class: {}
  },
  emits: ["update:modelValue"],
  setup(s, { emit: r }) {
    const e = s, l = b(e, "modelValue", r, {
      passive: !0,
      defaultValue: e.defaultValue
    });
    return (x, t) => a((d(), u("input", {
      "onUpdate:modelValue": t[0] || (t[0] = (n) => p(l) ? l.value = n : null),
      class: m(o(c)("flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50", e.class))
    }, null, 2)), [
      [f, o(l)]
    ]);
  }
});
export {
  _ as default
};
//# sourceMappingURL=Input.vue.js.map
