import { VariantProps } from 'class-variance-authority';
export { default as Badge } from './Badge.vue';
export declare const badgeVariants: (props?: ({
    variant?: "default" | "destructive" | "outline" | "secondary" | null | undefined;
} & import('class-variance-authority/types').ClassProp) | undefined) => string;
export type BadgeVariants = VariantProps<typeof badgeVariants>;
