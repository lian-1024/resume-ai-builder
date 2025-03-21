import { z } from 'zod';
export declare const resumeDataSchema: z.ZodObject<{
    basics: z.ZodObject<{
        name: z.ZodString;
        headline: z.ZodString;
        email: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
        phone: z.ZodString;
        url: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
        avatar: z.ZodString;
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
        intention?: {
            currentStatus?: string;
            positionTitle?: string;
            salary?: string;
            city?: string;
        };
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
            name?: string;
            id?: "education";
            visible?: boolean;
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
            name?: string;
            id?: "education";
            visible?: boolean;
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
                name?: string;
                url?: string;
                city?: string;
                id?: string;
                visible?: boolean;
                startDate?: string;
                endDate?: string;
                summary?: string;
                role?: string;
            }, {
                name?: string;
                url?: string;
                city?: string;
                id?: string;
                visible?: boolean;
                startDate?: string;
                endDate?: string;
                summary?: string;
                role?: string;
            }>, "many">;
        }>, "strip", z.ZodTypeAny, {
            name?: string;
            id?: "projects";
            visible?: boolean;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                name?: string;
                url?: string;
                city?: string;
                id?: string;
                visible?: boolean;
                startDate?: string;
                endDate?: string;
                summary?: string;
                role?: string;
            }[];
        }, {
            name?: string;
            id?: "projects";
            visible?: boolean;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                name?: string;
                url?: string;
                city?: string;
                id?: string;
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
            visible?: boolean;
            columns?: number;
            separateLinks?: boolean;
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
            visible?: boolean;
            columns?: number;
            separateLinks?: boolean;
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
            visible?: boolean;
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
            name?: string;
            id?: "projects";
            visible?: boolean;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                name?: string;
                url?: string;
                city?: string;
                id?: string;
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
            visible?: boolean;
            columns?: number;
            separateLinks?: boolean;
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
            visible?: boolean;
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
            name?: string;
            id?: "projects";
            visible?: boolean;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                name?: string;
                url?: string;
                city?: string;
                id?: string;
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
            visible?: boolean;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                name?: string;
                id?: string;
                visible?: boolean;
                summary?: string;
                level?: string | number;
            }[];
        };
    }>;
    config: z.ZodObject<{
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
    }>;
}, "strip", z.ZodTypeAny, {
    basics?: {
        name?: string;
        headline?: string;
        email?: string;
        phone?: string;
        url?: string;
        avatar?: string;
        intention?: {
            currentStatus?: string;
            positionTitle?: string;
            salary?: string;
            city?: string;
        };
    };
    sections?: {
        education?: {
            name?: string;
            id?: "education";
            visible?: boolean;
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
            name?: string;
            id?: "projects";
            visible?: boolean;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                name?: string;
                url?: string;
                city?: string;
                id?: string;
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
            visible?: boolean;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                name?: string;
                id?: string;
                visible?: boolean;
                summary?: string;
                level?: string | number;
            }[];
        };
    };
    config?: {
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
    };
}, {
    basics?: {
        name?: string;
        headline?: string;
        email?: string;
        phone?: string;
        url?: string;
        avatar?: string;
        intention?: {
            currentStatus?: string;
            positionTitle?: string;
            salary?: string;
            city?: string;
        };
    };
    sections?: {
        education?: {
            name?: string;
            id?: "education";
            visible?: boolean;
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
            name?: string;
            id?: "projects";
            visible?: boolean;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                name?: string;
                url?: string;
                city?: string;
                id?: string;
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
            visible?: boolean;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                name?: string;
                id?: string;
                visible?: boolean;
                summary?: string;
                level?: string | number;
            }[];
        };
    };
    config?: {
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
    };
}>;
export type ResumeData = z.infer<typeof resumeDataSchema>;
export declare const defaultResumeData: ResumeData;
export * from './basics';
export * from './config';
export * from './example';
export * from './sections';
export * from './shared';
