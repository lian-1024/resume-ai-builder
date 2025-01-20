import { defineComponent as r, ref as l, computed as i, openBlock as p, createElementBlock as a, normalizeStyle as c, createVNode as s, unref as m, normalizeProps as u, guardReactiveProps as y } from "vue";
import { Icon as d } from "@iconify/vue";
const v = /* @__PURE__ */ r({
  name: "IconPrimary",
  __name: "icon-primary",
  props: {
    ssr: { type: Boolean },
    onLoad: { type: Function },
    customise: { type: Function },
    id: {},
    style: {},
    icon: {},
    mode: {},
    color: {},
    flip: {},
    rotate: {},
    hFlip: { type: Boolean },
    vFlip: { type: Boolean },
    width: {},
    height: {},
    inline: { type: Boolean }
  },
  setup(e) {
    const o = e, t = l("#4672f1"), n = i(() => ({
      color: t.value
    }));
    return (f, B) => (p(), a("div", {
      style: c(n.value)
    }, [
      s(m(d), u(y(o)), null, 16)
    ], 4));
  }
});
export {
  v as default
};
//# sourceMappingURL=icon-primary.vue.js.map
