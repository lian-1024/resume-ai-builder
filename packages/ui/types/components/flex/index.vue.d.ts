type __VLS_Props = {
    direction?: 'row' | 'column';
    justify?: 'start' | 'end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
    align?: 'start' | 'end' | 'center' | 'stretch' | 'baseline';
    wrap?: 'nowrap' | 'wrap' | 'wrap-reverse';
    gap?: 'small' | 'medium' | 'large';
    width?: string;
};
declare function __VLS_template(): {
    attrs: Partial<{}>;
    slots: {
        default?(_: {}): any;
    };
    refs: {};
    rootEl: HTMLDivElement;
};
type __VLS_TemplateResult = ReturnType<typeof __VLS_template>;
declare const __VLS_component: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{}>, {
    align: "start" | "end" | "center" | "stretch" | "baseline";
    wrap: "nowrap" | "wrap" | "wrap-reverse";
    direction: "row" | "column";
    justify: "start" | "end" | "center" | "space-between" | "space-around" | "space-evenly";
    gap: "small" | "medium" | "large";
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, HTMLDivElement>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, __VLS_TemplateResult["slots"]>;
export default _default;
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
