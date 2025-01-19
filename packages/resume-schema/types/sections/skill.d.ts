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
    id: string;
    visible: boolean;
    name: string;
    description: string;
    keywords: string[];
    level: string | number;
}, {
    visible: boolean;
    name: string;
    description: string;
    id?: string | undefined;
    keywords?: string[] | undefined;
    level?: string | number | undefined;
}>;
export type Skill = z.infer<typeof skillSchema>;
export declare const defaultSkill: Skill;
