import { z } from 'zod';
declare const templates: readonly ["simple"];
export type TemplateKey = (typeof templates)[number];
export declare const defaultSectionsOrder: string[];
export declare const resumeMetadataSchema: z.ZodObject<{
    template: z.ZodDefault<z.ZodEnum<["simple"]>>;
    page: z.ZodObject<{
        margin: z.ZodDefault<z.ZodNumber>;
        format: z.ZodDefault<z.ZodEnum<["a4", "letter"]>>;
    }, "strip", z.ZodTypeAny, {
        margin?: number;
        format?: "a4" | "letter";
    }, {
        margin?: number;
        format?: "a4" | "letter";
    }>;
    theme: z.ZodObject<{
        background: z.ZodDefault<z.ZodString>;
        text: z.ZodDefault<z.ZodString>;
        primary: z.ZodDefault<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        background?: string;
        text?: string;
        primary?: string;
    }, {
        background?: string;
        text?: string;
        primary?: string;
    }>;
    sectionsOrder: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
}, "strip", z.ZodTypeAny, {
    template?: "simple";
    page?: {
        margin?: number;
        format?: "a4" | "letter";
    };
    theme?: {
        background?: string;
        text?: string;
        primary?: string;
    };
    sectionsOrder?: string[];
}, {
    template?: "simple";
    page?: {
        margin?: number;
        format?: "a4" | "letter";
    };
    theme?: {
        background?: string;
        text?: string;
        primary?: string;
    };
    sectionsOrder?: string[];
}>;
export type ResumeMetadata = z.infer<typeof resumeMetadataSchema>;
export declare const defaultResumeMetadata: ResumeMetadata;
export {};
