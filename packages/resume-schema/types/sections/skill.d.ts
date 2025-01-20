import { z } from 'zod';
export declare const skillSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
}, {
    name: z.ZodString;
    description: z.ZodString;
    level: z.ZodUnion<[z.ZodDefault<z.ZodNumber>, z.ZodString]>;
    keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
}>, "strip", z.ZodTypeAny, {
    id?: string;
    visible?: boolean;
    name?: string;
    keywords?: string[];
    description?: string;
    level?: string | number;
}, {
    id?: string;
    visible?: boolean;
    name?: string;
    keywords?: string[];
    description?: string;
    level?: string | number;
}>;
export type Skill = z.infer<typeof skillSchema>;
export declare const defaultSkill: Skill;
