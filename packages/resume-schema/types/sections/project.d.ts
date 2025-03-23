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
    url: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
}>, "strip", z.ZodTypeAny, {
    name?: string;
    url?: string;
    city?: string;
    visible?: boolean;
    id?: string;
    startDate?: string;
    endDate?: string;
    summary?: string;
    role?: string;
}, {
    name?: string;
    url?: string;
    city?: string;
    visible?: boolean;
    id?: string;
    startDate?: string;
    endDate?: string;
    summary?: string;
    role?: string;
}>;
export type Project = z.infer<typeof projectSchema>;
export declare const defaultProject: Project;
