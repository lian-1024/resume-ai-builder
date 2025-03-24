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
    id?: string;
    visible?: boolean;
    startDate?: string;
    endDate?: string;
    summary?: string;
    name?: string;
    role?: string;
    city?: string;
    url?: string;
}, {
    id?: string;
    visible?: boolean;
    startDate?: string;
    endDate?: string;
    summary?: string;
    name?: string;
    role?: string;
    city?: string;
    url?: string;
}>;
export type Project = z.infer<typeof projectSchema>;
export declare const defaultProject: Project;
