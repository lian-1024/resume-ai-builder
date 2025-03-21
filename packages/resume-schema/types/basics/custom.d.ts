import { z } from 'zod';
export declare const customFieldSchema: z.ZodObject<{
    id: z.ZodString;
    icon: z.ZodString;
    name: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name?: string;
    value?: string;
    id?: string;
    icon?: string;
}, {
    name?: string;
    value?: string;
    id?: string;
    icon?: string;
}>;
export type CustomField = z.infer<typeof customFieldSchema>;
