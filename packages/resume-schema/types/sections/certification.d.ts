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
    issuer: string;
}, {
    visible: boolean;
    date: string;
    name: string;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    issuer: string;
    id?: string | undefined;
}>;
export type Certification = z.infer<typeof certificationSchema>;
export declare const defaultCertification: Certification;
