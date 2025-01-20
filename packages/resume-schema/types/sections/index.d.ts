import { z } from 'zod';
export declare const sectionSchema: z.ZodObject<{
    name: z.ZodString;
    columns: z.ZodDefault<z.ZodNumber>;
    separateLinks: z.ZodDefault<z.ZodBoolean>;
    visible: z.ZodDefault<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    visible?: boolean;
    name?: string;
    columns?: number;
    separateLinks?: boolean;
}, {
    visible?: boolean;
    name?: string;
    columns?: number;
    separateLinks?: boolean;
}>;
export declare const sectionsSchema: z.ZodObject<{
    summary: z.ZodObject<z.objectUtil.extendShape<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
    }, {
        id: z.ZodLiteral<"summary">;
        content: z.ZodDefault<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        id?: "summary";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        content?: string;
    }, {
        id?: "summary";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        content?: string;
    }>;
    awards: z.ZodObject<z.objectUtil.extendShape<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
    }, {
        id: z.ZodLiteral<"awards">;
        items: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
        }, {
            title: z.ZodString;
            awarder: z.ZodString;
            date: z.ZodString;
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
            id?: string;
            visible?: boolean;
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            title?: string;
            awarder?: string;
            summary?: string;
        }, {
            id?: string;
            visible?: boolean;
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            title?: string;
            awarder?: string;
            summary?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        id?: "awards";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            title?: string;
            awarder?: string;
            summary?: string;
        }[];
    }, {
        id?: "awards";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            title?: string;
            awarder?: string;
            summary?: string;
        }[];
    }>;
    certifications: z.ZodObject<z.objectUtil.extendShape<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
    }, {
        id: z.ZodLiteral<"certifications">;
        items: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
        }, {
            name: z.ZodString;
            issuer: z.ZodString;
            date: z.ZodString;
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
            id?: string;
            visible?: boolean;
            date?: string;
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            issuer?: string;
        }, {
            id?: string;
            visible?: boolean;
            date?: string;
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            issuer?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        id?: "certifications";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            date?: string;
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            issuer?: string;
        }[];
    }, {
        id?: "certifications";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            date?: string;
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            issuer?: string;
        }[];
    }>;
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
            institution: z.ZodString;
            studyType: z.ZodString;
            area: z.ZodString;
            score: z.ZodString;
            date: z.ZodString;
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
            id?: string;
            visible?: boolean;
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            institution?: string;
            studyType?: string;
            area?: string;
            score?: string;
        }, {
            id?: string;
            visible?: boolean;
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            institution?: string;
            studyType?: string;
            area?: string;
            score?: string;
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
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            institution?: string;
            studyType?: string;
            area?: string;
            score?: string;
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
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            institution?: string;
            studyType?: string;
            area?: string;
            score?: string;
        }[];
    }>;
    experience: z.ZodObject<z.objectUtil.extendShape<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
    }, {
        id: z.ZodLiteral<"experience">;
        items: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
        }, {
            company: z.ZodString;
            position: z.ZodString;
            location: z.ZodString;
            date: z.ZodString;
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
            id?: string;
            visible?: boolean;
            date?: string;
            location?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            company?: string;
            position?: string;
        }, {
            id?: string;
            visible?: boolean;
            date?: string;
            location?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            company?: string;
            position?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        id?: "experience";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            date?: string;
            location?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            company?: string;
            position?: string;
        }[];
    }, {
        id?: "experience";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            date?: string;
            location?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            company?: string;
            position?: string;
        }[];
    }>;
    volunteer: z.ZodObject<z.objectUtil.extendShape<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
    }, {
        id: z.ZodLiteral<"volunteer">;
        items: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
        }, {
            organization: z.ZodString;
            position: z.ZodString;
            location: z.ZodString;
            date: z.ZodString;
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
            id?: string;
            visible?: boolean;
            date?: string;
            location?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            position?: string;
            organization?: string;
        }, {
            id?: string;
            visible?: boolean;
            date?: string;
            location?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            position?: string;
            organization?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        id?: "volunteer";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            date?: string;
            location?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            position?: string;
            organization?: string;
        }[];
    }, {
        id?: "volunteer";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            date?: string;
            location?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            position?: string;
            organization?: string;
        }[];
    }>;
    interests: z.ZodObject<z.objectUtil.extendShape<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
    }, {
        id: z.ZodLiteral<"interests">;
        items: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
        }, {
            name: z.ZodString;
            keywords: z.ZodDefault<z.ZodArray<z.ZodString, "many">>;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            visible?: boolean;
            name?: string;
            keywords?: string[];
        }, {
            id?: string;
            visible?: boolean;
            name?: string;
            keywords?: string[];
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        id?: "interests";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            name?: string;
            keywords?: string[];
        }[];
    }, {
        id?: "interests";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            name?: string;
            keywords?: string[];
        }[];
    }>;
    languages: z.ZodObject<z.objectUtil.extendShape<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
    }, {
        id: z.ZodLiteral<"languages">;
        items: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
        }, {
            name: z.ZodString;
            description: z.ZodString;
            level: z.ZodUnion<[z.ZodDefault<z.ZodNumber>, z.ZodString]>;
        }>, "strip", z.ZodTypeAny, {
            id?: string;
            visible?: boolean;
            name?: string;
            description?: string;
            level?: string | number;
        }, {
            id?: string;
            visible?: boolean;
            name?: string;
            description?: string;
            level?: string | number;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        id?: "languages";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            name?: string;
            description?: string;
            level?: string | number;
        }[];
    }, {
        id?: "languages";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            name?: string;
            description?: string;
            level?: string | number;
        }[];
    }>;
    profiles: z.ZodObject<z.objectUtil.extendShape<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
    }, {
        id: z.ZodLiteral<"profiles">;
        items: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
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
            id?: string;
            visible?: boolean;
            icon?: string;
            url?: {
                label?: string;
                href?: string;
            };
            network?: string;
            username?: string;
        }, {
            id?: string;
            visible?: boolean;
            icon?: string;
            url?: {
                label?: string;
                href?: string;
            };
            network?: string;
            username?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        id?: "profiles";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            icon?: string;
            url?: {
                label?: string;
                href?: string;
            };
            network?: string;
            username?: string;
        }[];
    }, {
        id?: "profiles";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            icon?: string;
            url?: {
                label?: string;
                href?: string;
            };
            network?: string;
            username?: string;
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
            id?: string;
            visible?: boolean;
            date?: string;
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            keywords?: string[];
            description?: string;
        }, {
            id?: string;
            visible?: boolean;
            date?: string;
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            keywords?: string[];
            description?: string;
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
            date?: string;
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            keywords?: string[];
            description?: string;
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
            date?: string;
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            keywords?: string[];
            description?: string;
        }[];
    }>;
    publications: z.ZodObject<z.objectUtil.extendShape<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
    }, {
        id: z.ZodLiteral<"publications">;
        items: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
        }, {
            name: z.ZodString;
            publisher: z.ZodString;
            date: z.ZodString;
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
            id?: string;
            visible?: boolean;
            date?: string;
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            publisher?: string;
        }, {
            id?: string;
            visible?: boolean;
            date?: string;
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            publisher?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        id?: "publications";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            date?: string;
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            publisher?: string;
        }[];
    }, {
        id?: "publications";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            date?: string;
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            publisher?: string;
        }[];
    }>;
    references: z.ZodObject<z.objectUtil.extendShape<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
    }, {
        id: z.ZodLiteral<"references">;
        items: z.ZodArray<z.ZodObject<z.objectUtil.extendShape<{
            id: z.ZodDefault<z.ZodString>;
            visible: z.ZodBoolean;
        }, {
            name: z.ZodString;
            description: z.ZodString;
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
            id?: string;
            visible?: boolean;
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            description?: string;
        }, {
            id?: string;
            visible?: boolean;
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            description?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        id?: "references";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            description?: string;
        }[];
    }, {
        id?: "references";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            description?: string;
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
            name?: string;
            keywords?: string[];
            description?: string;
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
            name?: string;
            keywords?: string[];
            description?: string;
            level?: string | number;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    summary?: {
        id?: "summary";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        content?: string;
    };
    awards?: {
        id?: "awards";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            title?: string;
            awarder?: string;
            summary?: string;
        }[];
    };
    certifications?: {
        id?: "certifications";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            date?: string;
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            issuer?: string;
        }[];
    };
    education?: {
        id?: "education";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            institution?: string;
            studyType?: string;
            area?: string;
            score?: string;
        }[];
    };
    experience?: {
        id?: "experience";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            date?: string;
            location?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            company?: string;
            position?: string;
        }[];
    };
    volunteer?: {
        id?: "volunteer";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            date?: string;
            location?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            position?: string;
            organization?: string;
        }[];
    };
    interests?: {
        id?: "interests";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            name?: string;
            keywords?: string[];
        }[];
    };
    languages?: {
        id?: "languages";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            name?: string;
            description?: string;
            level?: string | number;
        }[];
    };
    profiles?: {
        id?: "profiles";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            icon?: string;
            url?: {
                label?: string;
                href?: string;
            };
            network?: string;
            username?: string;
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
            date?: string;
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            keywords?: string[];
            description?: string;
        }[];
    };
    publications?: {
        id?: "publications";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            date?: string;
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            publisher?: string;
        }[];
    };
    references?: {
        id?: "references";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            description?: string;
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
            name?: string;
            keywords?: string[];
            description?: string;
            level?: string | number;
        }[];
    };
}, {
    summary?: {
        id?: "summary";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        content?: string;
    };
    awards?: {
        id?: "awards";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            title?: string;
            awarder?: string;
            summary?: string;
        }[];
    };
    certifications?: {
        id?: "certifications";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            date?: string;
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            issuer?: string;
        }[];
    };
    education?: {
        id?: "education";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            institution?: string;
            studyType?: string;
            area?: string;
            score?: string;
        }[];
    };
    experience?: {
        id?: "experience";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            date?: string;
            location?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            company?: string;
            position?: string;
        }[];
    };
    volunteer?: {
        id?: "volunteer";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            date?: string;
            location?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            position?: string;
            organization?: string;
        }[];
    };
    interests?: {
        id?: "interests";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            name?: string;
            keywords?: string[];
        }[];
    };
    languages?: {
        id?: "languages";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            name?: string;
            description?: string;
            level?: string | number;
        }[];
    };
    profiles?: {
        id?: "profiles";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            icon?: string;
            url?: {
                label?: string;
                href?: string;
            };
            network?: string;
            username?: string;
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
            date?: string;
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            keywords?: string[];
            description?: string;
        }[];
    };
    publications?: {
        id?: "publications";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            date?: string;
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            publisher?: string;
        }[];
    };
    references?: {
        id?: "references";
        visible?: boolean;
        name?: string;
        columns?: number;
        separateLinks?: boolean;
        items?: {
            id?: string;
            visible?: boolean;
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            summary?: string;
            description?: string;
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
            name?: string;
            keywords?: string[];
            description?: string;
            level?: string | number;
        }[];
    };
}>;
export type Section = z.infer<typeof sectionSchema>;
export type Sections = z.infer<typeof sectionsSchema>;
export type SectionKey = 'basics' | keyof Sections | `custom.${string}`;
export declare const defaultSection: Section;
export declare const defaultSections: Sections;
export * from './award';
export * from './certification';
export * from './custom-section';
export * from './education';
export * from './experience';
export * from './interest';
export * from './language';
export * from './profile';
export * from './project';
export * from './publication';
export * from './reference';
export * from './skill';
export * from './volunteer';
