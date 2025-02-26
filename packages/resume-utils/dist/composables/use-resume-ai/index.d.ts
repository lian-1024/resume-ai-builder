import type { AIConfigKey } from '@/utils/ai-model/config';
export declare const OptionTypeMap: {
    readonly OPTIMIZE_CONTENT: "content";
    readonly OPTIMIZE_PROJECT_EXPERIENCE: "project";
    readonly OPTIMIZE_EDUCATION_EXPERIENCE: "education";
    readonly OPTIMIZE_SKILL: "skill";
};
export type OptionTypeKey = (typeof OptionTypeMap)[keyof typeof OptionTypeMap];
export declare function useResumeAI(): {
    initAIModel: (model: AIConfigKey) => void;
    changeModel: (model: AIConfigKey) => void;
    optimizeContent: (content: string) => Promise<any>;
    optimizeProjectExperience: (content: string) => Promise<any>;
    optimizeEducationExperience: (content: string) => Promise<any>;
    optimizeSkill: (content: string) => Promise<any>;
    generateResume: (content: string) => Promise<any>;
};
