import { default as BaseModel } from '../model/base';
import { AIConfig } from '../types';
import { ResumeData } from '@lianqq/resume-schema';
import { ContentType } from './types';
/**
 * 简历优化器类
 * 继承自BaseModel,提供简历内容的智能优化功能
 */
declare class ResumeOptimizer extends BaseModel {
    /**
     * 构造函数
     * @param config AI配置参数
     */
    constructor(config: AIConfig);
    /**
     * 优化整体简历内容
     * @param resume 简历数据
     * @returns 优化后的简历内容(JSON格式)
     */
    optimizeResume(resume: ResumeData | string): Promise<string>;
    /**
     * 优化教育经历部分
     * @param content 原始教育经历内容
     * @returns 优化后的教育经历(JSON格式)
     */
    optimizeEducation(content: string): Promise<string>;
    /**
     * 优化项目经历部分
     * @param content 原始项目经历内容
     * @returns 优化后的项目经历(JSON格式)
     */
    optimizeProject(content: string): Promise<string>;
    /**
     * 优化技能部分
     * @param content 原始技能内容
     * @returns 优化后的技能内容(JSON格式)
     */
    optimizeSkill(content: string): Promise<string>;
    /**
     * 优化指定内容
     * @param content 原始内容
     * @param type 内容类型
     * @returns 优化后的内容(JSON格式)
     */
    optimizeActions(content: string, type: ContentType): Promise<string>;
}
export default ResumeOptimizer;
