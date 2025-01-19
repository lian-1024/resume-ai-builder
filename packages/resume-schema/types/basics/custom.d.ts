import { z } from 'zod';
export declare const customFieldSchema: z.ZodObject<{
    id: z.ZodString;
    icon: z.ZodString;
    name: z.ZodString;
    value: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    value: string;
    icon: string;
    name: string;
}, {
    id: string;
    value: string;
    icon: string;
    name: string;
}>;
export type CustomField = z.infer<typeof customFieldSchema>;
