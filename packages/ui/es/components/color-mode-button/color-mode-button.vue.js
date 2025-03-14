import { defineComponent as u, createBlock as d, openBlock as f, unref as o, withCtx as r, createVNode as e, createElementVNode as p, createTextVNode as i } from "vue";
import "../button/index.js";
import c from "../dropdown-menu/DropdownMenu.vue.js";
import "clsx";
import "tailwind-merge";
import "@radix-icons/vue";
import "radix-vue";
import _ from "../dropdown-menu/DropdownMenuContent.vue.js";
import m from "../dropdown-menu/DropdownMenuItem.vue.js";
import k from "../dropdown-menu/DropdownMenuTrigger.vue.js";
import { Icon as l } from "@iconify/vue";
import { useColorMode as C } from "@vueuse/core";
import { COLOR_MODE as a } from "./index.js";
import $ from "../button/Button.vue.js";
const I = /* @__PURE__ */ u({
  name: "ColorModeButton",
  __name: "color-mode-button",
  setup(v) {
    const n = C();
    return (w, t) => (f(), d(o(c), null, {
      default: r(() => [
        e(o(k), { "as-child": "" }, {
          default: r(() => [
            e(o($), {
              variant: "outline",
              class: "rounded-full h-8 w-8"
            }, {
              default: r(() => [
                e(o(l), {
                  icon: "lucide:moon",
                  class: "h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                }),
                e(o(l), {
                  icon: "lucide:sun",
                  class: "absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
                }),
                t[3] || (t[3] = p("span", { class: "sr-only" }, "Toggle theme", -1))
              ]),
              _: 1
            })
          ]),
          _: 1
        }),
        e(o(_), { align: "end" }, {
          default: r(() => [
            e(o(m), {
              onClick: t[0] || (t[0] = (s) => n.value = o(a).Light)
            }, {
              default: r(() => [
                e(o(l), {
                  icon: "lucide:sun",
                  class: "w-4 h-4"
                }),
                t[4] || (t[4] = i(" Light "))
              ]),
              _: 1
            }),
            e(o(m), {
              onClick: t[1] || (t[1] = (s) => n.value = o(a).Dark)
            }, {
              default: r(() => [
                e(o(l), {
                  icon: "lucide:moon",
                  class: "w-4 h-4"
                }),
                t[5] || (t[5] = i(" Dark "))
              ]),
              _: 1
            }),
            e(o(m), {
              onClick: t[2] || (t[2] = (s) => n.value = o(a).Auto)
            }, {
              default: r(() => [
                e(o(l), {
                  icon: "lucide:laptop-minimal",
                  class: "w-4 h-4"
                }),
                t[6] || (t[6] = i(" System "))
              ]),
              _: 1
            })
          ]),
          _: 1
        })
      ]),
      _: 1
    }));
  }
});
export {
  I as default
};
//# sourceMappingURL=color-mode-button.vue.js.map
