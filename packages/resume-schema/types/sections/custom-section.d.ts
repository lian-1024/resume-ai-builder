import { z } from 'zod';
export declare const customSectionSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
}, {
    name: z.ZodString;
    description: z.ZodString;
    date: z.ZodString;
    location: z.ZodString;
    summary: z.ZodString;
    keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
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
    location: string;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    description: string;
    keywords: string[];
}, {
    visible: boolean;
    date: string;
    name: string;
    location: string;
    url: {
        label: string;
        href: string;
    };
    summary: string;
    description: string;
    id?: string | undefined;
    keywords?: string[] | undefined;
}>;
export type CustomSection = z.infer<typeof customSectionSchema>;
export declare const defaultCustomSection: CustomSection;
