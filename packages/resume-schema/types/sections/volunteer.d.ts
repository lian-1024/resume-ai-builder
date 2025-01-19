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
        label: string;
        href: string;
    }, {
        label: string;
        href: string;
    }>;
}>, "strip", z.ZodTypeAny, {
    id: string;
    visible: boolean;
    date: string;
    location: string;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    position: string;
    organization: string;
}, {
    visible: boolean;
    date: string;
    location: string;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    position: string;
    organization: string;
    id?: string | undefined;
}>;
export type Volunteer = z.infer<typeof volunteerSchema>;
export declare const defaultVolunteer: Volunteer;
