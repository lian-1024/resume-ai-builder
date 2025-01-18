import { defineComponent as t, openBlock as o, createBlock as l, unref as e, normalizeClass as n, withCtx as p, renderSlot as c } from "vue";
import { cn as i } from "../../lib/utils.js";
import { AvatarRoot as m } from "radix-vue";
import { avatarVariant as f } from "./index.js";
const v = /* @__PURE__ */ t({
  __name: "Avatar",
  props: {
    class: {},
    size: { default: "sm" },
    shape: { default: "circle" }
  },
  setup(s) {
    const r = s;
    return (a, u) => (o(), l(e(m), {
      class: n(e(i)(e(f)({ size: a.size, shape: a.shape }), r.class))
    }, {
      default: p(() => [
        c(a.$slots, "default")
      ]),
      _: 3
    }, 8, ["class"]));
  }
});
export {
  v as default
};
//# sourceMappingURL=Avatar.vue.js.map
