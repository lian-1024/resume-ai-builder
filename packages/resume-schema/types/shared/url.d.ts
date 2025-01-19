import { z } from 'zod';
export declare const urlSchema: z.ZodObject<{
    label: z.ZodString;
    href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
}, "strip", z.ZodTypeAny, {
    label: string;
    href: string;
}, {
    label: string;
    href: string;
}>;
export type URL = z.infer<typeof urlSchema>;
export declare const defaultUrl: URL;
