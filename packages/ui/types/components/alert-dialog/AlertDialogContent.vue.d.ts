import { AlertDialogContentProps } from 'reka-ui';
import { HTMLAttributes } from 'vue';
type __VLS_Props = AlertDialogContentProps & {
    class?: HTMLAttributes['class'];
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    openAutoFocus: (event: Event) => any;
    escapeKeyDown: (event: KeyboardEvent) => any;
    pointerDownOutside: (event: CustomEvent<{
        originalEvent: PointerEvent;
    }>) => any;
    focusOutside: (event: CustomEvent<{
        originalEvent: FocusEvent;
    }>) => any;
    interactOutside: (event: CustomEvent<{
        originalEvent: PointerEvent;
    }> | CustomEvent<{
        originalEvent: FocusEvent;
    }>) => any;
    closeAutoFocus: (event: Event) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onOpenAutoFocus?: ((event: Event) => any) | undefined;
    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
    onPointerDownOutside?: ((event: CustomEvent<{
        originalEvent: PointerEvent;
    }>) => any) | undefined;
    onFocusOutside?: ((event: CustomEvent<{
        originalEvent: FocusEvent;
    }>) => any) | undefined;
    onInteractOutside?: ((event: CustomEvent<{
        originalEvent: PointerEvent;
    }> | CustomEvent<{
        originalEvent: FocusEvent;
    }>) => any) | undefined;
    onCloseAutoFocus?: ((event: Event) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
