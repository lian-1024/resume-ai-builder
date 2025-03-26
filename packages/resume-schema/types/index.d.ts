import { z } from 'zod';
export declare const resumeDataSchema: z.ZodObject<{
    basics: z.ZodObject<{
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
    intention: z.ZodObject<{
        status: z.ZodString;
        position: z.ZodString;
        salary: z.ZodString;
        location: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        status?: string;
        position?: string;
        salary?: string;
        location?: string;
    }, {
        status?: string;
        position?: string;
        salary?: string;
        location?: string;
    }>;
    sections: z.ZodObject<{
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
            }>, "strip", z.ZodTypeAny, {
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
            id?: "education";
            visible?: boolean;
            name?: string;
            columns?: number;
            separateLinks?: boolean;
            items?: {
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
            id?: "education";
            visible?: boolean;
            name?: string;
            columns?: number;
            separateLinks?: boolean;
            items?: {
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
                url: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
            }>, "strip", z.ZodTypeAny, {
                id?: string;
                visible?: boolean;
                startDate?: string;
                endDate?: string;
                summary?: string;
                name?: string;
                role?: string;
                city?: string;
                url?: string;
            }, {
                id?: string;
                visible?: boolean;
                startDate?: string;
                endDate?: string;
                summary?: string;
                name?: string;
                role?: string;
                city?: string;
                url?: string;
            }>, "many">;
        }>, "strip", z.ZodTypeAny, {
            id?: "projects";
            visible?: boolean;
            name?: string;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                id?: string;
                visible?: boolean;
                startDate?: string;
                endDate?: string;
                summary?: string;
                name?: string;
                role?: string;
                city?: string;
                url?: string;
            }[];
        }, {
            id?: "projects";
            visible?: boolean;
            name?: string;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                id?: string;
                visible?: boolean;
                startDate?: string;
                endDate?: string;
                summary?: string;
                name?: string;
                role?: string;
                city?: string;
                url?: string;
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
                id?: string;
                visible?: boolean;
                summary?: string;
                name?: string;
                level?: string | number;
            }, {
                id?: string;
                visible?: boolean;
                summary?: string;
                name?: string;
                level?: string | number;
            }>, "many">;
        }>, "strip", z.ZodTypeAny, {
            id?: "skills";
            visible?: boolean;
            name?: string;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                id?: string;
                visible?: boolean;
                summary?: string;
                name?: string;
                level?: string | number;
            }[];
        }, {
            id?: "skills";
            visible?: boolean;
            name?: string;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                id?: string;
                visible?: boolean;
                summary?: string;
                name?: string;
                level?: string | number;
            }[];
        }>;
        intention: z.ZodObject<z.objectUtil.extendShape<{
            name: z.ZodString;
            columns: z.ZodDefault<z.ZodNumber>;
            separateLinks: z.ZodDefault<z.ZodBoolean>;
            visible: z.ZodDefault<z.ZodBoolean>;
        }, z.objectUtil.extendShape<{
            status: z.ZodString;
            position: z.ZodString;
            salary: z.ZodString;
            location: z.ZodString;
        }, {
            id: z.ZodLiteral<"intention">;
        }>>, "strip", z.ZodTypeAny, {
            id?: "intention";
            visible?: boolean;
            status?: string;
            name?: string;
            position?: string;
            salary?: string;
            location?: string;
            columns?: number;
            separateLinks?: boolean;
        }, {
            id?: "intention";
            visible?: boolean;
            status?: string;
            name?: string;
            position?: string;
            salary?: string;
            location?: string;
            columns?: number;
            separateLinks?: boolean;
        }>;
    }, "strip", z.ZodTypeAny, {
        education?: {
            id?: "education";
            visible?: boolean;
            name?: string;
            columns?: number;
            separateLinks?: boolean;
            items?: {
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
            id?: "projects";
            visible?: boolean;
            name?: string;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                id?: string;
                visible?: boolean;
                startDate?: string;
                endDate?: string;
                summary?: string;
                name?: string;
                role?: string;
                city?: string;
                url?: string;
            }[];
        };
        skills?: {
            id?: "skills";
            visible?: boolean;
            name?: string;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                id?: string;
                visible?: boolean;
                summary?: string;
                name?: string;
                level?: string | number;
            }[];
        };
        intention?: {
            id?: "intention";
            visible?: boolean;
            status?: string;
            name?: string;
            position?: string;
            salary?: string;
            location?: string;
            columns?: number;
            separateLinks?: boolean;
        };
    }, {
        education?: {
            id?: "education";
            visible?: boolean;
            name?: string;
            columns?: number;
            separateLinks?: boolean;
            items?: {
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
            id?: "projects";
            visible?: boolean;
            name?: string;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                id?: string;
                visible?: boolean;
                startDate?: string;
                endDate?: string;
                summary?: string;
                name?: string;
                role?: string;
                city?: string;
                url?: string;
            }[];
        };
        skills?: {
            id?: "skills";
            visible?: boolean;
            name?: string;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                id?: string;
                visible?: boolean;
                summary?: string;
                name?: string;
                level?: string | number;
            }[];
        };
        intention?: {
            id?: "intention";
            visible?: boolean;
            status?: string;
            name?: string;
            position?: string;
            salary?: string;
            location?: string;
            columns?: number;
            separateLinks?: boolean;
        };
    }>;
    metadata: z.ZodObject<{
        template: z.ZodDefault<z.ZodEnum<["simple"]>>;
        page: z.ZodObject<{
            margin: z.ZodDefault<z.ZodNumber>;
            format: z.ZodDefault<z.ZodEnum<["a4", "letter"]>>;
        }, "strip", z.ZodTypeAny, {
            margin?: number;
            format?: "a4" | "letter";
        }, {
            margin?: number;
            format?: "a4" | "letter";
        }>;
        theme: z.ZodObject<{
            background: z.ZodDefault<z.ZodString>;
            text: z.ZodDefault<z.ZodString>;
            primary: z.ZodDefault<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            background?: string;
            text?: string;
            primary?: string;
        }, {
            background?: string;
            text?: string;
            primary?: string;
        }>;
        sectionsOrder: z.ZodDefault<z.ZodArray<z.ZodEnum<["intention", "skills", "projects", "education"]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        template?: "simple";
        page?: {
            margin?: number;
            format?: "a4" | "letter";
        };
        theme?: {
            background?: string;
            text?: string;
            primary?: string;
        };
        sectionsOrder?: ("education" | "projects" | "skills" | "intention")[];
    }, {
        template?: "simple";
        page?: {
            margin?: number;
            format?: "a4" | "letter";
        };
        theme?: {
            background?: string;
            text?: string;
            primary?: string;
        };
        sectionsOrder?: ("education" | "projects" | "skills" | "intention")[];
    }>;
}, "strip", z.ZodTypeAny, {
    intention?: {
        status?: string;
        position?: string;
        salary?: string;
        location?: string;
    };
    basics?: {
        name?: string;
        url?: string;
        headline?: string;
        email?: string;
        phone?: string;
        avatar?: string;
        wechat?: string;
        birthday?: string;
    };
    sections?: {
        education?: {
            id?: "education";
            visible?: boolean;
            name?: string;
            columns?: number;
            separateLinks?: boolean;
            items?: {
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
            id?: "projects";
            visible?: boolean;
            name?: string;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                id?: string;
                visible?: boolean;
                startDate?: string;
                endDate?: string;
                summary?: string;
                name?: string;
                role?: string;
                city?: string;
                url?: string;
            }[];
        };
        skills?: {
            id?: "skills";
            visible?: boolean;
            name?: string;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                id?: string;
                visible?: boolean;
                summary?: string;
                name?: string;
                level?: string | number;
            }[];
        };
        intention?: {
            id?: "intention";
            visible?: boolean;
            status?: string;
            name?: string;
            position?: string;
            salary?: string;
            location?: string;
            columns?: number;
            separateLinks?: boolean;
        };
    };
    metadata?: {
        template?: "simple";
        page?: {
            margin?: number;
            format?: "a4" | "letter";
        };
        theme?: {
            background?: string;
            text?: string;
            primary?: string;
        };
        sectionsOrder?: ("education" | "projects" | "skills" | "intention")[];
    };
}, {
    intention?: {
        status?: string;
        position?: string;
        salary?: string;
        location?: string;
    };
    basics?: {
        name?: string;
        url?: string;
        headline?: string;
        email?: string;
        phone?: string;
        avatar?: string;
        wechat?: string;
        birthday?: string;
    };
    sections?: {
        education?: {
            id?: "education";
            visible?: boolean;
            name?: string;
            columns?: number;
            separateLinks?: boolean;
            items?: {
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
            id?: "projects";
            visible?: boolean;
            name?: string;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                id?: string;
                visible?: boolean;
                startDate?: string;
                endDate?: string;
                summary?: string;
                name?: string;
                role?: string;
                city?: string;
                url?: string;
            }[];
        };
        skills?: {
            id?: "skills";
            visible?: boolean;
            name?: string;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                id?: string;
                visible?: boolean;
                summary?: string;
                name?: string;
                level?: string | number;
            }[];
        };
        intention?: {
            id?: "intention";
            visible?: boolean;
            status?: string;
            name?: string;
            position?: string;
            salary?: string;
            location?: string;
            columns?: number;
            separateLinks?: boolean;
        };
    };
    metadata?: {
        template?: "simple";
        page?: {
            margin?: number;
            format?: "a4" | "letter";
        };
        theme?: {
            background?: string;
            text?: string;
            primary?: string;
        };
        sectionsOrder?: ("education" | "projects" | "skills" | "intention")[];
    };
}>;
export type ResumeData = z.infer<typeof resumeDataSchema>;
export declare const defaultResumeData: ResumeData;
export * from './basics';
export * from './metadata';
export * from './example';
export * from './sections';
export * from './shared';
