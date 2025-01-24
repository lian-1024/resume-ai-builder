import { z } from 'zod';
export declare const resumeDataSchema: z.ZodObject<{
    basics: z.ZodObject<{
        name: z.ZodString;
        headline: z.ZodString;
        email: z.ZodUnion<[z.ZodLiteral<"">, z.ZodString]>;
        phone: z.ZodString;
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
        customFields: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            icon: z.ZodString;
            name: z.ZodString;
            value: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name?: string;
            value?: string;
            id?: string;
            icon?: string;
        }, {
            name?: string;
            value?: string;
            id?: string;
            icon?: string;
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
        url?: {
            label?: string;
            href?: string;
        };
        customFields?: {
            name?: string;
            value?: string;
            id?: string;
            icon?: string;
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
        url?: {
            label?: string;
            href?: string;
        };
        customFields?: {
            name?: string;
            value?: string;
            id?: string;
            icon?: string;
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
                description: z.ZodString;
                date: z.ZodString;
                summary: z.ZodString;
                keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
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
                date?: string;
                url?: {
                    label?: string;
                    href?: string;
                };
                id?: string;
                visible?: boolean;
                summary?: string;
                description?: string;
                keywords?: string[];
            }, {
                name?: string;
                date?: string;
                url?: {
                    label?: string;
                    href?: string;
                };
                id?: string;
                visible?: boolean;
                summary?: string;
                description?: string;
                keywords?: string[];
            }>, "many">;
        }>, "strip", z.ZodTypeAny, {
            name?: string;
            id?: "projects";
            columns?: number;
            separateLinks?: boolean;
            visible?: boolean;
            items?: {
                name?: string;
                date?: string;
                url?: {
                    label?: string;
                    href?: string;
                };
                id?: string;
                visible?: boolean;
                summary?: string;
                description?: string;
                keywords?: string[];
            }[];
        }, {
            name?: string;
            id?: "projects";
            columns?: number;
            separateLinks?: boolean;
            visible?: boolean;
            items?: {
                name?: string;
                date?: string;
                url?: {
                    label?: string;
                    href?: string;
                };
                id?: string;
                visible?: boolean;
                summary?: string;
                description?: string;
                keywords?: string[];
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
                date?: string;
                url?: {
                    label?: string;
                    href?: string;
                };
                id?: string;
                visible?: boolean;
                summary?: string;
                description?: string;
                keywords?: string[];
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
                date?: string;
                url?: {
                    label?: string;
                    href?: string;
                };
                id?: string;
                visible?: boolean;
                summary?: string;
                description?: string;
                keywords?: string[];
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
    config: z.ZodObject<{
        template: z.ZodDefault<z.ZodEnum<["Simple"]>>;
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
        template?: "Simple";
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
        template?: "Simple";
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
        url?: {
            label?: string;
            href?: string;
        };
        customFields?: {
            name?: string;
            value?: string;
            id?: string;
            icon?: string;
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
                date?: string;
                url?: {
                    label?: string;
                    href?: string;
                };
                id?: string;
                visible?: boolean;
                summary?: string;
                description?: string;
                keywords?: string[];
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
    };
    config?: {
        template?: "Simple";
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
        url?: {
            label?: string;
            href?: string;
        };
        customFields?: {
            name?: string;
            value?: string;
            id?: string;
            icon?: string;
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
                date?: string;
                url?: {
                    label?: string;
                    href?: string;
                };
                id?: string;
                visible?: boolean;
                summary?: string;
                description?: string;
                keywords?: string[];
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
    };
    config?: {
        template?: "Simple";
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
export * from './examples';
export * from './sections';
export * from './shared';
