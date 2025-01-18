import { defineComponent as o, openBlock as a, createBlock as t, unref as c, mergeProps as l } from "vue";
import { AvatarImage as n } from "radix-vue";
const u = /* @__PURE__ */ o({
  __name: "AvatarImage",
  props: {
    src: {},
    referrerPolicy: {},
    asChild: { type: Boolean },
    as: {}
  },
  setup(e) {
    const r = e;
    return (s, p) => (a(), t(c(n), l(r, { class: "h-full w-full object-cover" }), null, 16));
  }
});
export {
  u as default
};
//# sourceMappingURL=AvatarImage.vue.js.map
