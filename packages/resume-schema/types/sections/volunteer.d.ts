import { z } from 'zod';
export declare const volunteerSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
}, {
    organization: z.ZodString;
    position: z.ZodString;
    location: z.ZodString;
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
    position?: string;
    location?: string;
    organization?: string;
}, {
    date?: string;
    url?: {
        label?: string;
        href?: string;
    };
    id?: string;
    visible?: boolean;
    summary?: string;
    position?: string;
    location?: string;
    organization?: string;
}>;
export type Volunteer = z.infer<typeof volunteerSchema>;
export declare const defaultVolunteer: Volunteer;
