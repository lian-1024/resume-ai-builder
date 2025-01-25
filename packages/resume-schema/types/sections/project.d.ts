import { z } from 'zod';
export declare const projectSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
}, {
    name: z.ZodString;
    startDate: z.ZodString;
    endDate: z.ZodString;
    role: z.ZodString;
    city: z.ZodString;
    summary: z.ZodString;
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
    id?: string;
    visible?: boolean;
    name?: string;
    url?: {
        label?: string;
        href?: string;
    };
    city?: string;
    startDate?: string;
    endDate?: string;
    summary?: string;
    role?: string;
}, {
    id?: string;
    visible?: boolean;
    name?: string;
    url?: {
        label?: string;
        href?: string;
    };
    city?: string;
    startDate?: string;
    endDate?: string;
    summary?: string;
    role?: string;
}>;
export type Project = z.infer<typeof projectSchema>;
export declare const defaultProject: Project;
