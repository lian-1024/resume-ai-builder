import { defineComponent as m, ref as r, openBlock as d, createElementBlock as _, createElementVNode as e, toDisplayString as t, createVNode as c, createTextVNode as a, unref as f } from "vue";
import p from "../../../components/icon-primary.vue.js";
import { Icon as u } from "../../../node_modules/.pnpm/@iconify_vue@4.3.0_vue@3.5.13_typescript@5.6.3_/node_modules/@iconify/vue/dist/iconify.js";
import "../../../packages/resume-schema/es/index.js";
import { Simple as x } from "../../../packages/resume-schema/es/examples/index.js";
const h = { class: "flex flex-col" }, g = { class: "flex flex-col" }, v = { class: "scroll-m-20 text-2xl font-semibold tracking-tight" }, b = { class: "flex gap-2" }, k = { class: "text-sm font-medium leading-none" }, N = { class: "text-sm font-medium leading-none" }, I = /* @__PURE__ */ m({
  __name: "basic",
  setup(V) {
    const o = r(x.basics);
    return (B, s) => {
      var l, i, n;
      return d(), _("div", h, [
        e("div", g, [
          e("h3", v, t((l = o.value) == null ? void 0 : l.name), 1),
          e("div", b, [
            e("small", k, [
              c(p, { icon: "lucide:mail" }),
              a(" " + t((i = o.value) == null ? void 0 : i.email), 1)
            ]),
            e("small", N, [
              c(f(u), { icon: "lucide:phone" }),
              a(" " + t((n = o.value) == null ? void 0 : n.phone), 1)
            ])
          ])
        ]),
        s[0] || (s[0] = e("div", null, [
          e("img", {
            src: "",
            alt: ""
          })
        ], -1))
      ]);
    };
  }
});
export {
  I as default
};
//# sourceMappingURL=basic.vue.js.map
