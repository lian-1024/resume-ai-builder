import { z } from 'zod';
declare const templates: readonly ["simple"];
export type Template = (typeof templates)[number];
export declare const resumeConfigSchema: z.ZodObject<{
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
}>;
export type ResumeConfig = z.infer<typeof resumeConfigSchema>;
export declare const defaultResumeConfig: ResumeConfig;
export {};
