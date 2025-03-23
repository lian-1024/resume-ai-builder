import { z } from 'zod';
export declare const itemSchema: z.ZodObject<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    visible?: boolean;
    id?: string;
}, {
    visible?: boolean;
    id?: string;
}>;
export type Item = z.infer<typeof itemSchema>;
export declare const defaultItem: Item;
