import { z } from 'zod';
export declare const referenceSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
}, {
    name: z.ZodString;
    description: z.ZodString;
    summary: z.ZodString;
    url: z.ZodObject<{
        label: z.ZodString;
        href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
    }, "strip", z.ZodTypeAny, {
        label: string;
        href: string;
    }, {
        label: string;
        href: string;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    visible: boolean;
    name: string;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    description: string;
}, {
    visible: boolean;
    name: string;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    description: string;
    id?: string | undefined;
}>;
export type Reference = z.infer<typeof referenceSchema>;
export declare const defaultReference: Reference;
