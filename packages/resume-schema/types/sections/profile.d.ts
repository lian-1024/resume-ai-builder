import { z } from 'zod';
export declare const profileSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
}, {
    network: z.ZodString;
    username: z.ZodString;
    icon: z.ZodOptional<z.ZodString>;
    url: z.ZodObject<{
        label: z.ZodString;
        href: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
    }, "strip", z.ZodTypeAny, {
        label?: string;
        href?: string;
    }, {
        label?: string;
        href?: string;
    }>;
}>, "strip", z.ZodTypeAny, {
    url?: {
        label?: string;
        href?: string;
    };
    id?: string;
    icon?: string;
    visible?: boolean;
    network?: string;
    username?: string;
}, {
    url?: {
        label?: string;
        href?: string;
    };
    id?: string;
    icon?: string;
    visible?: boolean;
    network?: string;
    username?: string;
}>;
export type Profile = z.infer<typeof profileSchema>;
export declare const defaultProfile: Profile;
