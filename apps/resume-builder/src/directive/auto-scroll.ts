import type { Directive } from "vue";
import { isScrollable } from "@lianqq/resume-utils";
export const autoScroll: Directive = {
    updated(el: HTMLElement, binding) {
        if (!binding.arg) throw Error("请传入 args 参数")
        // 根据参数进行滚动
        switch (binding.arg) {
            case "bottom":
                el.scrollTop = el.scrollHeight
                break
            default:
                throw Error("请传入正确的参数，可选值为 bottom")
        }
    }
}

