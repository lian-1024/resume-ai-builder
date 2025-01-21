import { defineComponent as _, ref as x, computed as c, openBlock as h, createElementBlock as g, normalizeStyle as m, createElementVNode as e, toDisplayString as l, createVNode as r, createTextVNode as p } from "vue";
import v from "../../../assets/default-picture.jpg.js";
import d from "../../../components/icon-primary.vue.js";
import "../../../packages/resume-schema/es/index.js";
import "../../../packages/ui/es/node_modules/.pnpm/@iconify_vue@4.3.0_vue@3.5.13_typescript@5.6.3_/node_modules/@iconify/vue/dist/iconify.js";
import "../../../packages/ui/es/node_modules/.pnpm/@vueuse_shared@12.4.0_typescript@5.6.3/node_modules/@vueuse/shared/index.js";
import { Simple as b } from "../../../packages/resume-schema/es/examples/index.js";
const y = { class: "flex flex-col gap-4" }, w = { class: "scroll-m-20 text-2xl font-semibold tracking-tight" }, S = { class: "flex gap-4 items-center" }, z = { class: "text-sm gap-1 font-medium leading-none flex" }, k = { class: "text-sm gap-1 font-medium leading-none flex" }, T = /* @__PURE__ */ _({
  __name: "basic",
  setup(N) {
    const s = x(b.basics), u = c(() => ({
      display: "flex",
      justifyContent: "space-between",
      width: "100%"
    })), f = c(() => {
      var o, t;
      return {
        width: `${(t = (o = s.value) == null ? void 0 : o.picture) == null ? void 0 : t.size}px`
      };
    });
    return (o, t) => {
      var i, a, n;
      return h(), g("div", {
        style: m(u.value)
      }, [
        e("div", y, [
          e("h3", w, l((i = s.value) == null ? void 0 : i.name), 1),
          e("div", S, [
            e("small", z, [
              r(d, { icon: "lucide:mail" }),
              p(" " + l((a = s.value) == null ? void 0 : a.email), 1)
            ]),
            e("small", k, [
              r(d, { icon: "lucide:phone" }),
              p(" " + l((n = s.value) == null ? void 0 : n.phone), 1)
            ])
          ])
        ]),
        e("div", {
          style: m(f.value),
          class: "h-auto bg-zinc-100"
        }, t[0] || (t[0] = [
          e("img", {
            src: v,
            alt: "",
            class: "h-full w-full object-cover"
          }, null, -1)
        ]), 4)
      ], 4);
    };
  }
});
export {
  T as default
};
//# sourceMappingURL=basic.vue.js.map
