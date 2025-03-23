import { z } from 'zod';
export declare const educationSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
}, {
    school: z.ZodString;
    major: z.ZodString;
    degree: z.ZodString;
    startDate: z.ZodString;
    endDate: z.ZodString;
    studyType: z.ZodString;
    summary: z.ZodString;
}>, "strip", z.ZodTypeAny, {
    visible?: boolean;
    id?: string;
    school?: string;
    major?: string;
    degree?: string;
    startDate?: string;
    endDate?: string;
    studyType?: string;
    summary?: string;
}, {
    visible?: boolean;
    id?: string;
    school?: string;
    major?: string;
    degree?: string;
    startDate?: string;
    endDate?: string;
    studyType?: string;
    summary?: string;
}>;
export type Education = z.infer<typeof educationSchema>;
export declare const defaultEducation: Education;
