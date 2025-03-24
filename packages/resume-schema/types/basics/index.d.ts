import { z } from 'zod';
export declare const basicsSchema: z.ZodObject<{
    name: z.ZodString;
    headline: z.ZodString;
    email: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
    phone: z.ZodString;
    url: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
    avatar: z.ZodString;
    wechat: z.ZodString;
    birthday: z.ZodString;
}, "strip", z.ZodTypeAny, {
    name?: string;
    url?: string;
    headline?: string;
    email?: string;
    phone?: string;
    avatar?: string;
    wechat?: string;
    birthday?: string;
}, {
    name?: string;
    url?: string;
    headline?: string;
    email?: string;
    phone?: string;
    avatar?: string;
    wechat?: string;
    birthday?: string;
}>;
export type Basics = z.infer<typeof basicsSchema>;
export declare const defaultBasics: Basics;
