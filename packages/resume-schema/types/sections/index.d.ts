import { z } from 'zod';
export declare const sectionSchema: z.ZodObject<{
    name: z.ZodString;
    columns: z.ZodDefault<z.ZodNumber>;
    separateLinks: z.ZodDefault<z.ZodBoolean>;
    visible: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    name?: string;
    columns?: number;
    separateLinks?: boolean;
    visible?: boolean;
}, {
    name?: string;
    columns?: number;
    separateLinks?: boolean;
    visible?: boolean;
}>;
export declare const sectionsSchema: z.ZodObject<{
    education: z.ZodObject<z.objectUtil.extendShape<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
    }, {
        id: z.ZodLiteral<"education">;
        items: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
        }, {
            school: z.ZodString;
            major: z.ZodString;
            degree: z.ZodString;
            startDate: z.ZodString;
            endDate: z.ZodString;
            studyType: z.ZodString;
            summary: z.ZodString;
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
            visible?: boolean;
            school?: string;
            major?: string;
            degree?: string;
            startDate?: string;
            endDate?: string;
            studyType?: string;
            summary?: string;
        }, {
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            school?: string;
            major?: string;
            degree?: string;
            startDate?: string;
            endDate?: string;
            studyType?: string;
            summary?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        name?: string;
        id?: "education";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            school?: string;
            major?: string;
            degree?: string;
            startDate?: string;
            endDate?: string;
            studyType?: string;
            summary?: string;
        }[];
    }, {
        name?: string;
        id?: "education";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            school?: string;
            major?: string;
            degree?: string;
            startDate?: string;
            endDate?: string;
            studyType?: string;
            summary?: string;
        }[];
    }>;
    projects: z.ZodObject<z.objectUtil.extendShape<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
    }, {
        id: z.ZodLiteral<"projects">;
        items: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
        }, {
            name: z.ZodString;
            startDate: z.ZodString;
            endDate: z.ZodString;
            role: z.ZodString;
            city: z.ZodString;
            summary: z.ZodString;
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
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            city?: string;
            visible?: boolean;
            startDate?: string;
            endDate?: string;
            summary?: string;
            role?: string;
        }, {
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            city?: string;
            visible?: boolean;
            startDate?: string;
            endDate?: string;
            summary?: string;
            role?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        name?: string;
        id?: "projects";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            city?: string;
            visible?: boolean;
            startDate?: string;
            endDate?: string;
            summary?: string;
            role?: string;
        }[];
    }, {
        name?: string;
        id?: "projects";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            city?: string;
            visible?: boolean;
            startDate?: string;
            endDate?: string;
            summary?: string;
            role?: string;
        }[];
    }>;
    skills: z.ZodObject<z.objectUtil.extendShape<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
    }, {
        id: z.ZodLiteral<"skills">;
        items: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
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
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        name?: string;
        id?: "skills";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            name?: string;
            id?: string;
            visible?: boolean;
            summary?: string;
            level?: string | number;
        }[];
    }, {
        name?: string;
        id?: "skills";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            name?: string;
            id?: string;
            visible?: boolean;
            summary?: string;
            level?: string | number;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    education?: {
        name?: string;
        id?: "education";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            school?: string;
            major?: string;
            degree?: string;
            startDate?: string;
            endDate?: string;
            studyType?: string;
            summary?: string;
        }[];
    };
    projects?: {
        name?: string;
        id?: "projects";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            city?: string;
            visible?: boolean;
            startDate?: string;
            endDate?: string;
            summary?: string;
            role?: string;
        }[];
    };
    skills?: {
        name?: string;
        id?: "skills";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            name?: string;
            id?: string;
            visible?: boolean;
            summary?: string;
            level?: string | number;
        }[];
    };
}, {
    education?: {
        name?: string;
        id?: "education";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            school?: string;
            major?: string;
            degree?: string;
            startDate?: string;
            endDate?: string;
            studyType?: string;
            summary?: string;
        }[];
    };
    projects?: {
        name?: string;
        id?: "projects";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            city?: string;
            visible?: boolean;
            startDate?: string;
            endDate?: string;
            summary?: string;
            role?: string;
        }[];
    };
    skills?: {
        name?: string;
        id?: "skills";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            name?: string;
            id?: string;
            visible?: boolean;
            summary?: string;
            level?: string | number;
        }[];
    };
}>;
export type Section = z.infer<typeof sectionSchema>;
export type Sections = z.infer<typeof sectionsSchema>;
export type SectionKey = 'basics' | keyof Sections | `custom.${string}`;
export declare const defaultSection: Section;
export declare const defaultSections: Sections;
export * from './education';
export * from './project';
export * from './skill';
