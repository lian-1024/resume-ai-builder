// 导入基础模型类
import BaseModel from "@/model/base";
// 导入AI配置类型
import { AIConfig } from "@/types";
// 导入简历数据类型
import { Example, ResumeData } from "@lianqq/resume-schema";
// 导入简历内容类型
import { type ContentType, ContentTypeMap } from "./types";
import { OPTIMIZER_PROMPTS } from "@/prompts/optimizer";

/**
 * 简历优化器类
 * 继承自BaseModel,提供简历内容的智能优化功能
 */
class ResumeOptimizer extends BaseModel {

    /**
     * 构造函数
     * @param config AI配置参数
     */
    constructor(config: AIConfig) {
        super(config)
    }

    /**
     * 优化整体简历内容
     * @param resume 简历数据
     * @returns 优化后的简历内容(JSON格式)
     */
    async optimizeResume(resume: ResumeData | string): Promise<string> {
        const prompt = OPTIMIZER_PROMPTS.general(Example, resume)

        return await this.invoke(prompt)
    }



    /**
     * 优化教育经历部分
     * @param content 原始教育经历内容
     * @returns 优化后的教育经历(JSON格式)
     */
    async optimizeEducation(content: string): Promise<string> {
        const prompt = OPTIMIZER_PROMPTS.education(content)

        return await this.invoke(prompt)
    }

    /**
     * 优化项目经历部分
     * @param content 原始项目经历内容
     * @returns 优化后的项目经历(JSON格式)
     */
    async optimizeProject(content: string) {
        const prompt = OPTIMIZER_PROMPTS.project(content)

        return await this.invoke(prompt)
    }

    /**
     * 优化技能部分
     * @param content 原始技能内容
     * @returns 优化后的技能内容(JSON格式)
     */
    async optimizeSkill(content: string) {
        const prompt = OPTIMIZER_PROMPTS.skills(content)


        return await this.invoke(prompt)
    }


    /**
     * 优化指定内容
     * @param content 原始内容
     * @param type 内容类型
     * @returns 优化后的内容(JSON格式)
     */
    async optimizeActions(content: string, type: ContentType): Promise<string> {
        switch (type) {
            case ContentTypeMap.Education:
                return this.optimizeEducation(content)
            case ContentTypeMap.Project:
                return this.optimizeProject(content)
            case ContentTypeMap.Skill:
                return this.optimizeSkill(content)
            default:
                throw new Error('Unsupported content type')
        }
    }
}

export default ResumeOptimizer