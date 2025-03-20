import { ToastProps } from '.';
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: any;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<ToastProps, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:open": (value: boolean) => any;
    escapeKeyDown: (event: KeyboardEvent) => any;
    pause: () => any;
    resume: () => any;
    swipeStart: (event: import('node_modules/radix-vue/dist/Toast/utils').SwipeEvent) => any;
    swipeMove: (event: import('node_modules/radix-vue/dist/Toast/utils').SwipeEvent) => any;
    swipeCancel: (event: import('node_modules/radix-vue/dist/Toast/utils').SwipeEvent) => any;
    swipeEnd: (event: import('node_modules/radix-vue/dist/Toast/utils').SwipeEvent) => any;
}, string, import('vue').PublicProps, Readonly<ToastProps> & Readonly<{
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
    onPause?: (() => any) | undefined;
    onResume?: (() => any) | undefined;
    onSwipeStart?: ((event: import('node_modules/radix-vue/dist/Toast/utils').SwipeEvent) => any) | undefined;
    onSwipeMove?: ((event: import('node_modules/radix-vue/dist/Toast/utils').SwipeEvent) => any) | undefined;
    onSwipeCancel?: ((event: import('node_modules/radix-vue/dist/Toast/utils').SwipeEvent) => any) | undefined;
    onSwipeEnd?: ((event: import('node_modules/radix-vue/dist/Toast/utils').SwipeEvent) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
