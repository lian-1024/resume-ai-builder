import { z } from 'zod';
export declare const certificationSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
}, {
    name: z.ZodString;
    issuer: z.ZodString;
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
    name?: string;
    date?: string;
    url?: {
        label?: string;
        href?: string;
    };
    id?: string;
    visible?: boolean;
    summary?: string;
    issuer?: string;
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
    issuer?: string;
}>;
export type Certification = z.infer<typeof certificationSchema>;
export declare const defaultCertification: Certification;
