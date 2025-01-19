import { z } from 'zod';
export declare const interestSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
}, {
    name: z.ZodString;
    keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    visible: boolean;
    name: string;
    keywords: string[];
}, {
    visible: boolean;
    name: string;
    id?: string | undefined;
    keywords?: string[] | undefined;
}>;
export type Interest = z.infer<typeof interestSchema>;
export declare const defaultInterest: Interest;
