import { HTMLAttributes } from 'vue';
declare const _default: import('vue').DefineComponent<(import('node_modules/radix-vue/dist/Calendar/CalendarRoot').MultipleCalendarRootProps & {
    class?: HTMLAttributes["class"];
}) | (import('node_modules/radix-vue/dist/Calendar/CalendarRoot').SingleCalendarRootProps & {
    class?: HTMLAttributes["class"];
}), {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "update:modelValue": (date: import('@internationalized/date').DateValue | undefined) => any;
    "update:placeholder": (date: import('@internationalized/date').DateValue) => any;
}, string, import('vue').PublicProps, Readonly<(import('node_modules/radix-vue/dist/Calendar/CalendarRoot').MultipleCalendarRootProps & {
    class?: HTMLAttributes["class"];
}) | (import('node_modules/radix-vue/dist/Calendar/CalendarRoot').SingleCalendarRootProps & {
    class?: HTMLAttributes["class"];
})> & Readonly<{
    "onUpdate:modelValue"?: ((date: import('@internationalized/date').DateValue | undefined) => any) | undefined;
    "onUpdate:placeholder"?: ((date: import('@internationalized/date').DateValue) => any) | undefined;
}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, false, {}, any>;
export default _default;
