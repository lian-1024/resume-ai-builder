import { z } from 'zod';
export declare const awardSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
}, {
    title: z.ZodString;
    awarder: z.ZodString;
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
    title?: string;
    awarder?: string;
}, {
    date?: string;
    url?: {
        label?: string;
        href?: string;
    };
    id?: string;
    visible?: boolean;
    summary?: string;
    title?: string;
    awarder?: string;
}>;
export type Award = z.infer<typeof awardSchema>;
export declare const defaultAward: Award;
