import { defineComponent as r, computed as i, openBlock as l, createElementBlock as p, normalizeStyle as c, createVNode as a, unref as s, normalizeProps as m, guardReactiveProps as u } from "vue";
import { Icon as y } from "@iconify/vue";
import { useConfig as d } from "../composables/use-config.js";
const g = /* @__PURE__ */ r({
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
  setup(o) {
    const e = o, { config: t } = d(), n = i(() => ({
      color: t.value.primaryColor
    }));
    return (f, B) => (l(), p("div", {
      style: c(n.value)
    }, [
      a(s(y), m(u(e)), null, 16)
    ], 4));
  }
});
export {
  g as default
};
//# sourceMappingURL=icon-primary.vue.js.map
