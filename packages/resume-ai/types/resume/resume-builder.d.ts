import { default as BaseModel } from '../model/base';
import { AIConfig } from '../types';
import { ResumeData } from '@lianqq/resume-schema';
declare class ResumeBuilder extends BaseModel {
    constructor(config: AIConfig);
    /**
     * 根据描述生成简历
     * @param description 描述
     * @param example 示例
     * @returns 简历
     */
    builderResume(description: string, example: string | ResumeData): Promise<string>;
}
export default ResumeBuilder;
