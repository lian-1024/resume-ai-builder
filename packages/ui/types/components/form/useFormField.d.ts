export declare function useFormField(): {
    valid: import('vue').ComputedRef<boolean>;
    isDirty: import('vue').ComputedRef<boolean>;
    isTouched: import('vue').ComputedRef<boolean>;
    error: import('vue').ComputedRef<string>;
    id: string | undefined;
    name: import('vue').MaybeRef<string>;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
