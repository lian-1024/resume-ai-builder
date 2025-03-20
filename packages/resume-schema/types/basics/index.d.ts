import { z } from 'zod';
export declare const basicsSchema: z.ZodObject<{
    name: z.ZodString;
    headline: z.ZodString;
    email: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
    phone: z.ZodString;
    url: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
    customFields: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        icon: z.ZodString;
        name: z.ZodString;
        value: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id?: string;
        icon?: string;
        name?: string;
        value?: string;
    }, {
        id?: string;
        icon?: string;
        name?: string;
        value?: string;
    }>, "many">;
    picture: z.ZodObject<{
        url: z.ZodString;
        size: z.ZodDefault<z.ZodNumber>;
    }, "strip", z.ZodTypeAny, {
        url?: string;
        size?: number;
    }, {
        url?: string;
        size?: number;
    }>;
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
    customFields?: {
        id?: string;
        icon?: string;
        name?: string;
        value?: string;
    }[];
    picture?: {
        url?: string;
        size?: number;
    };
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
    customFields?: {
        id?: string;
        icon?: string;
        name?: string;
        value?: string;
    }[];
    picture?: {
        url?: string;
        size?: number;
    };
    intention?: {
        currentStatus?: string;
        positionTitle?: string;
        salary?: string;
        city?: string;
    };
}>;
export type Basics = z.infer<typeof basicsSchema>;
export declare const defaultBasics: Basics;
