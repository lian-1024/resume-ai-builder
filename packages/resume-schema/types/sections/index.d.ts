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
    summary: z.ZodObject<z.objectUtil.extendShape<{
        name: z.ZodString;
        columns: z.ZodDefault<z.ZodNumber>;
        separateLinks: z.ZodDefault<z.ZodBoolean>;
        visible: z.ZodDefault<z.ZodBoolean>;
    }, {
        id: z.ZodLiteral<"summary">;
        content: z.ZodDefault<z.ZodString>;
    }>, "strip", z.ZodTypeAny, {
        name?: string;
        id?: "summary";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        content?: string;
    }, {
        name?: string;
        id?: "summary";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
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
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            title?: string;
            awarder?: string;
        }, {
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            title?: string;
            awarder?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        name?: string;
        id?: "awards";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            title?: string;
            awarder?: string;
        }[];
    }, {
        name?: string;
        id?: "awards";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            title?: string;
            awarder?: string;
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
            name?: string;
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            issuer?: string;
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
            issuer?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        name?: string;
        id?: "certifications";
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
            issuer?: string;
        }[];
    }, {
        name?: string;
        id?: "certifications";
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
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            institution?: string;
            studyType?: string;
            area?: string;
            score?: string;
        }, {
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            institution?: string;
            studyType?: string;
            area?: string;
            score?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        name?: string;
        id?: "education";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            institution?: string;
            studyType?: string;
            area?: string;
            score?: string;
        }[];
    }, {
        name?: string;
        id?: "education";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
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
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            company?: string;
            position?: string;
            location?: string;
        }, {
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            company?: string;
            position?: string;
            location?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        name?: string;
        id?: "experience";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            company?: string;
            position?: string;
            location?: string;
        }[];
    }, {
        name?: string;
        id?: "experience";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            company?: string;
            position?: string;
            location?: string;
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
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            position?: string;
            location?: string;
            organization?: string;
        }, {
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            position?: string;
            location?: string;
            organization?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        name?: string;
        id?: "volunteer";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            position?: string;
            location?: string;
            organization?: string;
        }[];
    }, {
        name?: string;
        id?: "volunteer";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            position?: string;
            location?: string;
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
            name?: string;
            id?: string;
            visible?: boolean;
            keywords?: string[];
        }, {
            name?: string;
            id?: string;
            visible?: boolean;
            keywords?: string[];
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        name?: string;
        id?: "interests";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            name?: string;
            id?: string;
            visible?: boolean;
            keywords?: string[];
        }[];
    }, {
        name?: string;
        id?: "interests";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            name?: string;
            id?: string;
            visible?: boolean;
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
            name?: string;
            id?: string;
            visible?: boolean;
            description?: string;
            level?: string | number;
        }, {
            name?: string;
            id?: string;
            visible?: boolean;
            description?: string;
            level?: string | number;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        name?: string;
        id?: "languages";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            name?: string;
            id?: string;
            visible?: boolean;
            description?: string;
            level?: string | number;
        }[];
    }, {
        name?: string;
        id?: "languages";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            name?: string;
            id?: string;
            visible?: boolean;
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
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        name?: string;
        id?: "profiles";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            icon?: string;
            visible?: boolean;
            network?: string;
            username?: string;
        }[];
    }, {
        name?: string;
        id?: "profiles";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            icon?: string;
            visible?: boolean;
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
            name?: string;
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            keywords?: string[];
            description?: string;
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
            keywords?: string[];
            description?: string;
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
            keywords?: string[];
            description?: string;
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
            name?: string;
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            publisher?: string;
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
            publisher?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        name?: string;
        id?: "publications";
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
            publisher?: string;
        }[];
    }, {
        name?: string;
        id?: "publications";
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
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            description?: string;
        }, {
            name?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            description?: string;
        }>, "many">;
    }>, "strip", z.ZodTypeAny, {
        name?: string;
        id?: "references";
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
            visible?: boolean;
            summary?: string;
            description?: string;
        }[];
    }, {
        name?: string;
        id?: "references";
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
            visible?: boolean;
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
        }>, "strip", z.ZodTypeAny, {
            name?: string;
            id?: string;
            visible?: boolean;
            description?: string;
            level?: string | number;
        }, {
            name?: string;
            id?: string;
            visible?: boolean;
            description?: string;
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
            description?: string;
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
            description?: string;
            level?: string | number;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    summary?: {
        name?: string;
        id?: "summary";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        content?: string;
    };
    awards?: {
        name?: string;
        id?: "awards";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            title?: string;
            awarder?: string;
        }[];
    };
    certifications?: {
        name?: string;
        id?: "certifications";
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
            issuer?: string;
        }[];
    };
    education?: {
        name?: string;
        id?: "education";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            institution?: string;
            studyType?: string;
            area?: string;
            score?: string;
        }[];
    };
    experience?: {
        name?: string;
        id?: "experience";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            company?: string;
            position?: string;
            location?: string;
        }[];
    };
    volunteer?: {
        name?: string;
        id?: "volunteer";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            position?: string;
            location?: string;
            organization?: string;
        }[];
    };
    interests?: {
        name?: string;
        id?: "interests";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            name?: string;
            id?: string;
            visible?: boolean;
            keywords?: string[];
        }[];
    };
    languages?: {
        name?: string;
        id?: "languages";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            name?: string;
            id?: string;
            visible?: boolean;
            description?: string;
            level?: string | number;
        }[];
    };
    profiles?: {
        name?: string;
        id?: "profiles";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            icon?: string;
            visible?: boolean;
            network?: string;
            username?: string;
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
            keywords?: string[];
            description?: string;
        }[];
    };
    publications?: {
        name?: string;
        id?: "publications";
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
            publisher?: string;
        }[];
    };
    references?: {
        name?: string;
        id?: "references";
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
            visible?: boolean;
            summary?: string;
            description?: string;
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
            description?: string;
            level?: string | number;
        }[];
    };
}, {
    summary?: {
        name?: string;
        id?: "summary";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        content?: string;
    };
    awards?: {
        name?: string;
        id?: "awards";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            title?: string;
            awarder?: string;
        }[];
    };
    certifications?: {
        name?: string;
        id?: "certifications";
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
            issuer?: string;
        }[];
    };
    education?: {
        name?: string;
        id?: "education";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            institution?: string;
            studyType?: string;
            area?: string;
            score?: string;
        }[];
    };
    experience?: {
        name?: string;
        id?: "experience";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            company?: string;
            position?: string;
            location?: string;
        }[];
    };
    volunteer?: {
        name?: string;
        id?: "volunteer";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            date?: string;
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            visible?: boolean;
            summary?: string;
            position?: string;
            location?: string;
            organization?: string;
        }[];
    };
    interests?: {
        name?: string;
        id?: "interests";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            name?: string;
            id?: string;
            visible?: boolean;
            keywords?: string[];
        }[];
    };
    languages?: {
        name?: string;
        id?: "languages";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            name?: string;
            id?: string;
            visible?: boolean;
            description?: string;
            level?: string | number;
        }[];
    };
    profiles?: {
        name?: string;
        id?: "profiles";
        columns?: number;
        separateLinks?: boolean;
        visible?: boolean;
        items?: {
            url?: {
                label?: string;
                href?: string;
            };
            id?: string;
            icon?: string;
            visible?: boolean;
            network?: string;
            username?: string;
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
            keywords?: string[];
            description?: string;
        }[];
    };
    publications?: {
        name?: string;
        id?: "publications";
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
            publisher?: string;
        }[];
    };
    references?: {
        name?: string;
        id?: "references";
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
            visible?: boolean;
            summary?: string;
            description?: string;
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
