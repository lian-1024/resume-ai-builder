import { defineComponent as w, ref as S, computed as g, openBlock as k, createElementBlock as z, normalizeStyle as h, createElementVNode as o, toDisplayString as B, createVNode as e, unref as s, withCtx as r } from "vue";
import C from "../../../assets/default-picture.jpg.js";
import "../../../packages/resume-schema/es/index.js";
import "../../../packages/ui/es/node_modules/.pnpm/@iconify_vue@4.3.0_vue@3.5.13_typescript@5.6.3_/node_modules/@iconify/vue/dist/iconify.js";
import u from "../../../packages/ui/es/components/flex/index.vue.js";
import "../../../packages/ui/es/node_modules/.pnpm/@vueuse_shared@12.4.0_typescript@5.6.3/node_modules/@vueuse/shared/index.js";
import n from "../../../components/basics/info-item.vue.js";
import { Simple as j } from "../../../packages/resume-schema/es/examples/index.js";
const E = { class: "flex flex-col gap-4" }, N = { class: "scroll-m-20 text-2xl font-semibold tracking-tight" }, V = { class: "flex flex-col gap-y-2 flex-wrap" }, J = /* @__PURE__ */ w({
  name: "SimpleBasic",
  __name: "basic",
  setup($) {
    const t = S(j.basics), y = g(() => ({
      display: "flex",
      justifyContent: "space-between",
      width: "100%"
    })), b = g(() => {
      var c, a;
      return {
        width: `${(a = (c = t.value) == null ? void 0 : c.picture) == null ? void 0 : a.size}px`
      };
    });
    return (c, a) => {
      var p;
      return k(), z("div", {
        style: h(y.value)
      }, [
        o("div", E, [
          o("h3", N, B((p = t.value) == null ? void 0 : p.name), 1),
          o("div", V, [
            e(s(u), {
              align: "center",
              class: "gap-4"
            }, {
              default: r(() => {
                var l, i;
                return [
                  e(n, {
                    icon: "lucide:mail",
                    text: (l = t.value) == null ? void 0 : l.email
                  }, null, 8, ["text"]),
                  e(n, {
                    icon: "lucide:phone",
                    text: (i = t.value) == null ? void 0 : i.phone
                  }, null, 8, ["text"])
                ];
              }),
              _: 1
            }),
            e(s(u), {
              align: "center",
              class: "gap-4"
            }, {
              default: r(() => {
                var l, i, m, d, f, x, _, v;
                return [
                  e(n, {
                    icon: "lucide:tag",
                    text: (i = (l = t.value) == null ? void 0 : l.intention) == null ? void 0 : i.currentStatus
                  }, null, 8, ["text"]),
                  e(n, {
                    icon: "lucide:briefcase",
                    text: (d = (m = t.value) == null ? void 0 : m.intention) == null ? void 0 : d.positionTitle
                  }, null, 8, ["text"]),
                  e(n, {
                    icon: "lucide:credit-card",
                    text: (x = (f = t.value) == null ? void 0 : f.intention) == null ? void 0 : x.salary
                  }, null, 8, ["text"]),
                  e(n, {
                    icon: "lucide:map-pin",
                    text: (v = (_ = t.value) == null ? void 0 : _.intention) == null ? void 0 : v.city
                  }, null, 8, ["text"])
                ];
              }),
              _: 1
            }),
            e(s(u), {
              align: "center",
              class: "gap-4"
            }, {
              default: r(() => {
                var l, i;
                return [
                  e(n, {
                    href: (i = (l = t.value) == null ? void 0 : l.url) == null ? void 0 : i.href,
                    icon: "lucide:link",
                    text: "github"
                  }, null, 8, ["href"])
                ];
              }),
              _: 1
            })
          ])
        ]),
        o("div", {
          style: h(b.value),
          class: "h-auto bg-zinc-100"
        }, a[0] || (a[0] = [
          o("img", {
            src: C,
            alt: "",
            class: "h-full w-full object-cover"
          }, null, -1)
        ]), 4)
      ], 4);
    };
  }
});
export {
  J as default
};
//# sourceMappingURL=basic.vue.js.map
