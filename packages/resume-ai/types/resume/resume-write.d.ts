import { BaseModel } from '../model';
import { AIConfig } from '../types';
import { ContentType } from './types';
export declare class ResumeWriter extends BaseModel {
    constructor(config: AIConfig);
    /**
     * 续写教育经历
     * @param content 当前内容
     * @returns 续写后的内容
     */
    continueEducation(content: string): Promise<string>;
    /**
     * 续写项目经历
     * @param content 当前内容
     * @returns 续写后的内容
     */
    continueProject(content: string): Promise<string>;
    /**
     * 续写技能描述
     * @param content 当前内容
     * @returns 续写后的内容
     */
    continueSkill(content: string): Promise<string>;
    /**
     * 通用续写
     * @param content 当前内容
     * @param type 内容类型
     * @returns 续写后的内容
     */
    continueActions(content: string, type: ContentType): Promise<string>;
}
