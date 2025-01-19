import { z } from 'zod';
export declare const itemSchema: z.ZodObject<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    id: string;
    visible: boolean;
}, {
    visible: boolean;
    id?: string | undefined;
}>;
export type Item = z.infer<typeof itemSchema>;
export declare const defaultItem: Item;
