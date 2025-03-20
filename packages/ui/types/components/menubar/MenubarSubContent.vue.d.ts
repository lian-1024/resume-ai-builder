import { MenubarSubContentProps } from 'radix-vue';
import { HTMLAttributes } from 'vue';
type __VLS_Props = MenubarSubContentProps & {
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
    entryFocus: (event: Event) => any;
    openAutoFocus: (event: Event) => any;
    escapeKeyDown: (event: KeyboardEvent) => any;
    pointerDownOutside: (event: import('node_modules/radix-vue/dist/DismissableLayer').PointerDownOutsideEvent) => any;
    focusOutside: (event: import('node_modules/radix-vue/dist/DismissableLayer').FocusOutsideEvent) => any;
    interactOutside: (event: import('node_modules/radix-vue/dist/DismissableLayer').PointerDownOutsideEvent | import('node_modules/radix-vue/dist/DismissableLayer').FocusOutsideEvent) => any;
    closeAutoFocus: (event: Event) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    onEntryFocus?: ((event: Event) => any) | undefined;
    onOpenAutoFocus?: ((event: Event) => any) | undefined;
    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
    onPointerDownOutside?: ((event: import('node_modules/radix-vue/dist/DismissableLayer').PointerDownOutsideEvent) => any) | undefined;
    onFocusOutside?: ((event: import('node_modules/radix-vue/dist/DismissableLayer').FocusOutsideEvent) => any) | undefined;
    onInteractOutside?: ((event: import('node_modules/radix-vue/dist/DismissableLayer').PointerDownOutsideEvent | import('node_modules/radix-vue/dist/DismissableLayer').FocusOutsideEvent) => any) | undefined;
    onCloseAutoFocus?: ((event: Event) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
