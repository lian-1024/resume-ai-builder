import { z } from 'zod';
export declare const publicationSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
}, {
    name: z.ZodString;
    publisher: z.ZodString;
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
    name: string;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    publisher: string;
}, {
    visible: boolean;
    date: string;
    name: string;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    publisher: string;
    id?: string | undefined;
}>;
export type Publication = z.infer<typeof publicationSchema>;
export declare const defaultPublication: Publication;
