import { defineComponent as p, computed as c, openBlock as r, createBlock as i, unref as t, mergeProps as m, withCtx as u, createElementBlock as d, normalizeClass as f, toDisplayString as x, createCommentVNode as b } from "vue";
import { cn as o } from "../../lib/utils.js";
import { Separator as g } from "radix-vue";
const k = /* @__PURE__ */ p({
  __name: "Separator",
  props: {
    orientation: {},
    decorative: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {},
    label: {}
  },
  setup(l) {
    const e = l, s = c(() => {
      const { class: n, ...a } = e;
      return a;
    });
    return (n, a) => (r(), i(t(g), m(s.value, {
      class: t(o)(
        "shrink-0 bg-border relative",
        e.orientation === "vertical" ? "w-px h-full" : "h-px w-full",
        e.class
      )
    }), {
      default: u(() => [
        e.label ? (r(), d("span", {
          key: 0,
          class: f(
            t(o)(
              "text-xs text-muted-foreground bg-background absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex justify-center items-center",
              e.orientation === "vertical" ? "w-[1px] px-1 py-2" : "h-[1px] py-1 px-2"
            )
          )
        }, x(e.label), 3)) : b("", !0)
      ]),
      _: 1
    }, 16, ["class"]));
  }
});
export {
  k as default
};
//# sourceMappingURL=Separator.vue.js.map
