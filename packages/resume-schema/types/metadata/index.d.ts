import { z } from 'zod';
declare const templates: readonly ["simple"];
export type Template = (typeof templates)[number];
export declare const metadataSchema: z.ZodObject<{
    template: z.ZodDefault<z.ZodEnum<["simple"]>>;
    page: z.ZodObject<{
        margin: z.ZodDefault<z.ZodNumber>;
        format: z.ZodDefault<z.ZodEnum<["a4", "letter"]>>;
    }, "strip", z.ZodTypeAny, {
        margin: number;
        format: "a4" | "letter";
    }, {
        margin?: number | undefined;
        format?: "a4" | "letter" | undefined;
    }>;
    theme: z.ZodObject<{
        background: z.ZodDefault<z.ZodString>;
        text: z.ZodDefault<z.ZodString>;
        primary: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        background: string;
        text: string;
        primary: string;
    }, {
        background?: string | undefined;
        text?: string | undefined;
        primary?: string | undefined;
    }>;
}, "strip", z.ZodTypeAny, {
    template: "simple";
    page: {
        margin: number;
        format: "a4" | "letter";
    };
    theme: {
        background: string;
        text: string;
        primary: string;
    };
}, {
    page: {
        margin?: number | undefined;
        format?: "a4" | "letter" | undefined;
    };
    theme: {
        background?: string | undefined;
        text?: string | undefined;
        primary?: string | undefined;
    };
    template?: "simple" | undefined;
}>;
export type Metadata = z.infer<typeof metadataSchema>;
export declare const defaultMetadata: Metadata;
export {};
