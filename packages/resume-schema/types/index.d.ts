import { z } from 'zod';
export declare const resumeDataSchema: z.ZodObject<{
    basics: z.ZodObject<{
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
            name?: string;
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
            id?: "education";
            name?: string;
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
                id?: string;
                name?: string;
                url?: string;
                city?: string;
                visible?: boolean;
                startDate?: string;
                endDate?: string;
                summary?: string;
                role?: string;
            }, {
                id?: string;
                name?: string;
                url?: string;
                city?: string;
                visible?: boolean;
                startDate?: string;
                endDate?: string;
                summary?: string;
                role?: string;
            }>, "many">;
        }>, "strip", z.ZodTypeAny, {
            id?: "projects";
            name?: string;
            visible?: boolean;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                id?: string;
                name?: string;
                url?: string;
                city?: string;
                visible?: boolean;
                startDate?: string;
                endDate?: string;
                summary?: string;
                role?: string;
            }[];
        }, {
            id?: "projects";
            name?: string;
            visible?: boolean;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                id?: string;
                name?: string;
                url?: string;
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
                id?: string;
                name?: string;
                visible?: boolean;
                summary?: string;
                level?: string | number;
            }, {
                id?: string;
                name?: string;
                visible?: boolean;
                summary?: string;
                level?: string | number;
            }>, "many">;
        }>, "strip", z.ZodTypeAny, {
            id?: "skills";
            name?: string;
            visible?: boolean;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                id?: string;
                name?: string;
                visible?: boolean;
                summary?: string;
                level?: string | number;
            }[];
        }, {
            id?: "skills";
            name?: string;
            visible?: boolean;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                id?: string;
                name?: string;
                visible?: boolean;
                summary?: string;
                level?: string | number;
            }[];
        }>;
    }, "strip", z.ZodTypeAny, {
        education?: {
            id?: "education";
            name?: string;
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
            id?: "projects";
            name?: string;
            visible?: boolean;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                id?: string;
                name?: string;
                url?: string;
                city?: string;
                visible?: boolean;
                startDate?: string;
                endDate?: string;
                summary?: string;
                role?: string;
            }[];
        };
        skills?: {
            id?: "skills";
            name?: string;
            visible?: boolean;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                id?: string;
                name?: string;
                visible?: boolean;
                summary?: string;
                level?: string | number;
            }[];
        };
    }, {
        education?: {
            id?: "education";
            name?: string;
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
            id?: "projects";
            name?: string;
            visible?: boolean;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                id?: string;
                name?: string;
                url?: string;
                city?: string;
                visible?: boolean;
                startDate?: string;
                endDate?: string;
                summary?: string;
                role?: string;
            }[];
        };
        skills?: {
            id?: "skills";
            name?: string;
            visible?: boolean;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                id?: string;
                name?: string;
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
    };
    sections?: {
        education?: {
            id?: "education";
            name?: string;
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
            id?: "projects";
            name?: string;
            visible?: boolean;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                id?: string;
                name?: string;
                url?: string;
                city?: string;
                visible?: boolean;
                startDate?: string;
                endDate?: string;
                summary?: string;
                role?: string;
            }[];
        };
        skills?: {
            id?: "skills";
            name?: string;
            visible?: boolean;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                id?: string;
                name?: string;
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
    };
    sections?: {
        education?: {
            id?: "education";
            name?: string;
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
            id?: "projects";
            name?: string;
            visible?: boolean;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                id?: string;
                name?: string;
                url?: string;
                city?: string;
                visible?: boolean;
                startDate?: string;
                endDate?: string;
                summary?: string;
                role?: string;
            }[];
        };
        skills?: {
            id?: "skills";
            name?: string;
            visible?: boolean;
            columns?: number;
            separateLinks?: boolean;
            items?: {
                id?: string;
                name?: string;
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
