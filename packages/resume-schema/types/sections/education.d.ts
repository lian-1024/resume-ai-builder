import { z } from 'zod';
export declare const educationSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
}, {
    institution: z.ZodString;
    studyType: z.ZodString;
    area: z.ZodString;
    score: z.ZodString;
    date: z.ZodString;
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
    date?: string;
    url?: {
        label?: string;
        href?: string;
    };
    id?: string;
    visible?: boolean;
    summary?: string;
    institution?: string;
    studyType?: string;
    area?: string;
    score?: string;
}, {
    date?: string;
    url?: {
        label?: string;
        href?: string;
    };
    id?: string;
    visible?: boolean;
    summary?: string;
    institution?: string;
    studyType?: string;
    area?: string;
    score?: string;
}>;
export type Education = z.infer<typeof educationSchema>;
export declare const defaultEducation: Education;
