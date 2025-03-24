import { z } from 'zod';
export declare const basicsSchema: z.ZodObject<{
    name: z.ZodString;
    headline: z.ZodString;
    email: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
    phone: z.ZodString;
    url: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
    avatar: z.ZodString;
    wechat: z.ZodString;
    intention: z.ZodObject<{
        currentStatus: z.ZodString;
        positionTitle: z.ZodString;
        salary: z.ZodString;
        city: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        currentStatus?: string;
        positionTitle?: string;
        salary?: string;
        city?: string;
    }, {
        currentStatus?: string;
        positionTitle?: string;
        salary?: string;
        city?: string;
    }>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    headline?: string;
    email?: string;
    phone?: string;
    url?: string;
    avatar?: string;
    wechat?: string;
    intention?: {
        currentStatus?: string;
        positionTitle?: string;
        salary?: string;
        city?: string;
    };
}, {
    name?: string;
    headline?: string;
    email?: string;
    phone?: string;
    url?: string;
    avatar?: string;
    wechat?: string;
    intention?: {
        currentStatus?: string;
        positionTitle?: string;
        salary?: string;
        city?: string;
    };
}>;
export type Basics = z.infer<typeof basicsSchema>;
export declare const defaultBasics: Basics;
