import { z } from 'zod';
export declare const languageSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
}, {
    name: z.ZodString;
    description: z.ZodString;
    level: z.ZodUnion<[z.ZodDefault<z.ZodNumber>, z.ZodString]>;
}>, "strip", z.ZodTypeAny, {
    name?: string;
    id?: string;
    visible?: boolean;
    description?: string;
    level?: string | number;
}, {
    name?: string;
    id?: string;
    visible?: boolean;
    description?: string;
    level?: string | number;
}>;
export type Language = z.infer<typeof languageSchema>;
export declare const defaultLanguage: Language;
