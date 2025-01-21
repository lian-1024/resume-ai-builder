import { defineComponent as g, ref as w, computed as u, openBlock as b, createElementBlock as y, normalizeStyle as h, createElementVNode as e, toDisplayString as i, createVNode as o, withCtx as S, createTextVNode as z } from "vue";
import k from "../../../assets/default-picture.jpg.js";
import l from "../../../components/icon-primary.vue.js";
import "../../../packages/resume-schema/es/index.js";
import "../../../packages/ui/es/node_modules/.pnpm/@iconify_vue@4.3.0_vue@3.5.13_typescript@5.6.3_/node_modules/@iconify/vue/dist/iconify.js";
import "../../../packages/ui/es/node_modules/.pnpm/@vueuse_shared@12.4.0_typescript@5.6.3/node_modules/@vueuse/shared/index.js";
import C from "../../../components/link-primary.vue.js";
import { Simple as N } from "../../../packages/resume-schema/es/examples/index.js";
const V = { class: "flex flex-col gap-4" }, $ = { class: "scroll-m-20 text-2xl font-semibold tracking-tight" }, j = { class: "flex gap-4 gap-y-2 items-center flex-wrap" }, B = { class: "flex items-center gap-1" }, E = { class: "text-sm font-medium leading-none whitespace-nowrap" }, D = { class: "flex items-center gap-1" }, T = { class: "text-sm font-medium leading-none whitespace-nowrap" }, q = { class: "flex items-center gap-1" }, A = { class: "text-sm font-medium leading-none whitespace-nowrap" }, F = { class: "flex items-center gap-1" }, G = { class: "text-sm font-medium leading-none whitespace-nowrap" }, R = /* @__PURE__ */ g({
  __name: "basic",
  setup(H) {
    const t = w(N.basics), x = u(() => ({
      display: "flex",
      justifyContent: "space-between",
      width: "100%"
    })), v = u(() => {
      var a, s;
      return {
        width: `${(s = (a = t.value) == null ? void 0 : a.picture) == null ? void 0 : s.size}px`
      };
    });
    return (a, s) => {
      var n, c, m, r, p, d;
      return b(), y("div", {
        style: h(x.value)
      }, [
        e("div", V, [
          e("h3", $, i((n = t.value) == null ? void 0 : n.name), 1),
          e("div", j, [
            e("div", B, [
              o(l, { icon: "lucide:mail" }),
              e("small", E, i((c = t.value) == null ? void 0 : c.email), 1)
            ]),
            e("div", D, [
              o(l, { icon: "lucide:phone" }),
              e("small", T, i((m = t.value) == null ? void 0 : m.phone), 1)
            ]),
            e("div", q, [
              o(l, { icon: "lucide:map-pin" }),
              e("small", A, i((r = t.value) == null ? void 0 : r.location), 1)
            ]),
            e("div", F, [
              o(l, { icon: "lucide:github" }),
              e("small", G, [
                o(C, {
                  href: ((d = (p = t.value) == null ? void 0 : p.url) == null ? void 0 : d.href) || ""
                }, {
                  default: S(() => {
                    var _, f;
                    return [
                      z(i((f = (_ = t.value) == null ? void 0 : _.url) == null ? void 0 : f.href), 1)
                    ];
                  }),
                  _: 1
                }, 8, ["href"])
              ])
            ])
          ])
        ]),
        e("div", {
          style: h(v.value),
          class: "h-auto bg-zinc-100"
        }, s[0] || (s[0] = [
          e("img", {
            src: k,
            alt: "",
            class: "h-full w-full object-cover"
          }, null, -1)
        ]), 4)
      ], 4);
    };
  }
});
export {
  R as default
};
//# sourceMappingURL=basic.vue.js.map
