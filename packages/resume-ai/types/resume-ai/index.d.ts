import { GLMModel } from '../model';
import { default as BaseModal } from '../model/base';
/**
 * 简历 AI
 */
declare class ResumeAI {
    model: BaseModal | GLMModel;
    constructor(model: BaseModal);
    /**
     * 切换模型
     * @param model
     */
    changeModel(model: BaseModal): void;
    /**
     * 优化简历操作
     * @param content
     * @returns
     */
    optimizeResume(content: string): Promise<any>;
    /**
     * 根据描述生成简历
     * @param content
     * @returns
     */
    generateResume(content: string): Promise<any>;
    /**
      * 优化简历内容
      */
    optimizeContent(content: string): Promise<any>;
    /**
     * 优化项目经历
     */
    optimizeProjectExperience(content: string): Promise<any>;
    /**
     * 优化教育经历
     */
    optimizeEducationExperience(content: string): Promise<any>;
    /**
     * 优化技能
     */
    optimizeSkill(content: string): Promise<any>;
}
export default ResumeAI;
