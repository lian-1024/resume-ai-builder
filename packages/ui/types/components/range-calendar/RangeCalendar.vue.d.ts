import { RangeCalendarRootProps } from 'radix-vue';
import { HTMLAttributes } from 'vue';
type __VLS_Props = RangeCalendarRootProps & {
    class?: HTMLAttributes['class'];
};
declare const _default: import('vue').DefineComponent<__VLS_Props, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (date: import('radix-vue').DateRange) => any;
    "update:placeholder": (date: import('@internationalized/date').DateValue) => any;
    "update:startValue": (date: import('@internationalized/date').DateValue | undefined) => any;
}, string, import('vue').PublicProps, Readonly<__VLS_Props> & Readonly<{
    "onUpdate:modelValue"?: ((date: import('radix-vue').DateRange) => any) | undefined;
    "onUpdate:placeholder"?: ((date: import('@internationalized/date').DateValue) => any) | undefined;
    "onUpdate:startValue"?: ((date: import('@internationalized/date').DateValue | undefined) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
