import { defineComponent as l, computed as c, openBlock as t, createElementBlock as m, normalizeClass as d, unref as e, createBlock as i, createCommentVNode as u, createVNode as p, normalizeStyle as f } from "vue";
import o from "../skeleton/Skeleton.vue.js";
import { cn as h } from "../../lib/utils.js";
const y = /* @__PURE__ */ l({
  __name: "SidebarMenuSkeleton",
  props: {
    showIcon: { type: Boolean },
    class: {}
  },
  setup(n) {
    const a = n, s = c(() => `${Math.floor(Math.random() * 40) + 50}%`);
    return (r, k) => (t(), m("div", {
      "data-sidebar": "menu-skeleton",
      class: d(e(h)("rounded-md h-8 flex gap-2 px-2 items-center", a.class))
    }, [
      r.showIcon ? (t(), i(e(o), {
        key: 0,
        class: "size-4 rounded-md",
        "data-sidebar": "menu-skeleton-icon"
      })) : u("", !0),
      p(e(o), {
        class: "h-4 flex-1 max-w-[--skeleton-width]",
        "data-sidebar": "menu-skeleton-text",
        style: f({ "--skeleton-width": s.value })
      }, null, 8, ["style"])
    ], 2));
  }
});
export {
  y as default
};
//# sourceMappingURL=SidebarMenuSkeleton.vue.js.map
