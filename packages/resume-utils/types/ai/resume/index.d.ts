import { BaseAIModel, AIModelConfig } from '../modal';

declare class ResumeAI extends BaseAIModel {
    constructor(config: AIModelConfig);
    /**
     * 根据用户输入生成简历内容
     * @param content 用户输入的基本信息
     */
    generateResume(content: string): Promise<string>;
    /**
     * 优化简历内容
     */
    optimizeContent(content: string): Promise<string>;
    /**
     * 优化项目经历
     */
    optimizeProjectExperience(content: string): Promise<string>;
    /**
     * 优化教育经历
     */
    optimizeEducationExperience(content: string): Promise<string>;
    /**
     * 优化技能
     */
    optimizeSkill(content: string): Promise<string>;
}
export default ResumeAI;
