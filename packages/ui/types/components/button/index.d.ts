import { VariantProps } from 'class-variance-authority';
export { default as Button } from './Button.vue';
export declare const buttonVariants: (props?: ({
    variant?: "default" | "link" | "secondary" | "destructive" | "outline" | "ghost" | null | undefined;
    size?: "sm" | "lg" | "default" | "xs" | "icon" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type ButtonVariants = VariantProps<typeof buttonVariants>;
