import { z } from 'zod';
export declare const intentionSchema: z.ZodObject<{
    name: z.ZodString;
    status: z.ZodString;
    position: z.ZodString;
    salary: z.ZodString;
    location: z.ZodString;
}, "strip", z.ZodTypeAny, {
    status?: string;
    name?: string;
    position?: string;
    salary?: string;
    location?: string;
}, {
    status?: string;
    name?: string;
    position?: string;
    salary?: string;
    location?: string;
}>;
export type Intention = z.infer<typeof intentionSchema>;
export declare const defaultIntention: Intention;
