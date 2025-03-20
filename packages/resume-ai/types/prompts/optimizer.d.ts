import { ResumeData } from '@lianqq/resume-schema';
export declare const OPTIMIZER_PROMPTS: {
    education: (content: string) => string;
    project: (content: string) => string;
    internship: (content: string) => string;
    skills: (content: string) => string;
    experience: (content: string) => string;
    general: (example: string | ResumeData, content: string | ResumeData) => string;
};
