import { z } from 'zod';
export declare const projectSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
}, {
    name: z.ZodString;
    description: z.ZodString;
    date: z.ZodString;
    summary: z.ZodString;
    keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
    url: z.ZodObject<{
        label: z.ZodString;
        href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
    }, "strip", z.ZodTypeAny, {
        label?: string;
        href?: string;
    }, {
        label?: string;
        href?: string;
    }>;
}>, "strip", z.ZodTypeAny, {
    name?: string;
    date?: string;
    url?: {
        label?: string;
        href?: string;
    };
    id?: string;
    visible?: boolean;
    summary?: string;
    description?: string;
    keywords?: string[];
}, {
    name?: string;
    date?: string;
    url?: {
        label?: string;
        href?: string;
    };
    id?: string;
    visible?: boolean;
    summary?: string;
    description?: string;
    keywords?: string[];
}>;
export type Project = z.infer<typeof projectSchema>;
export declare const defaultProject: Project;
