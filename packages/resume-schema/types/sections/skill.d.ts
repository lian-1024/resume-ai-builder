import { z } from 'zod';
export declare const skillSchema: z.ZodObject<z.objectUtil.extendShape<{
    id: z.ZodDefault<z.ZodString>;
    visible: z.ZodBoolean;
}, {
    name: z.ZodString;
    summary: z.ZodString;
    level: z.ZodUnion<[z.ZodDefault<z.ZodNumber>, z.ZodString]>;
}>, "strip", z.ZodTypeAny, {
    name?: string;
    id?: string;
    visible?: boolean;
    summary?: string;
    level?: string | number;
}, {
    name?: string;
    id?: string;
    visible?: boolean;
    summary?: string;
    level?: string | number;
}>;
export type Skill = z.infer<typeof skillSchema>;
export declare const defaultSkill: Skill;
