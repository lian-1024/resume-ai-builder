import { VariantProps } from 'class-variance-authority';
export { default as Sheet } from './Sheet.vue';
export { default as SheetClose } from './SheetClose.vue';
export { default as SheetContent } from './SheetContent.vue';
export { default as SheetDescription } from './SheetDescription.vue';
export { default as SheetFooter } from './SheetFooter.vue';
export { default as SheetHeader } from './SheetHeader.vue';
export { default as SheetTitle } from './SheetTitle.vue';
export { default as SheetTrigger } from './SheetTrigger.vue';
export declare const sheetVariants: (props?: ({
    side?: "top" | "right" | "bottom" | "left" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type SheetVariants = VariantProps<typeof sheetVariants>;
