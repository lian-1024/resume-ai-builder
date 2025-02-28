import { BaseModel } from '../model'
import type { AIConfig } from '../types'
import { type ContentType, ContentTypeMap } from './types'

export class ResumeWriter extends BaseModel {
    constructor(config: AIConfig) {
        super(config)
    }

    /**
     * 续写教育经历
     * @param content 当前内容
     * @returns 续写后的内容
     */
    async continueEducation(content: string): Promise<string> {
        const prompt = `
            你是一个专业的简历优化专家。请基于以下教育经历内容，继续补充和扩展更多相关的细节：
            
            当前内容：
            ${content}
            
            要求：
            1. 保持原有的写作风格和语气
            2. 添加更多具体的学习成果、奖项或相关活动
            3. 突出教育经历中的亮点
            4. 使用专业且准确的描述
            5. 确保内容真实可信
            6. 返回的内容要包含原有内容
            
            请用 markdown 格式返回续写后的完整内容。
        `
        return await this.invoke(prompt)
    }

    /**
     * 续写项目经历
     * @param content 当前内容
     * @returns 续写后的内容
     */
    async continueProject(content: string): Promise<string> {
        const prompt = `
            你是一个专业的简历优化专家。请基于以下项目经历内容，继续补充和扩展更多相关的细节：
            
            当前内容：
            ${content}
            
            要求：
            1. 保持原有的写作风格和语气
            2. 添加更多技术细节和项目成果
            3. 突出个人贡献和解决的问题
            4. 补充项目的影响力和价值
            5. 使用 STAR 法则展开描述
            6. 确保内容真实可信
            7. 返回的内容要包含原有内容
            
            请用 markdown 格式返回续写后的完整内容。
        `
        return await this.invoke(prompt)
    }

    /**
     * 续写技能描述
     * @param content 当前内容
     * @returns 续写后的内容
     */
    async continueSkill(content: string): Promise<string> {
        const prompt = `
            你是一个专业的简历优化专家。请基于以下技能描述内容，继续补充和扩展更多相关的细节：
            
            当前内容：
            ${content}
            
            要求：
            1. 保持原有的写作风格和语气
            2. 添加更多具体的技能应用场景
            3. 突出技能的熟练程度
            4. 补充相关的技术生态和工具
            5. 使用专业且准确的描述
            6. 确保内容真实可信
            7. 返回的内容要包含原有内容
            
            请用 markdown 格式返回续写后的完整内容。
        `
        return await this.invoke(prompt)
    }

    /**
     * 通用续写
     * @param content 当前内容
     * @param type 内容类型
     * @returns 续写后的内容
     */
    async continueActions(content: string, type: ContentType): Promise<string> {
        switch (type) {
            case ContentTypeMap.Education:
                return this.continueEducation(content)
            case ContentTypeMap.Project:
                return this.continueProject(content)
            case ContentTypeMap.Skill:
                return this.continueSkill(content)
            default:
                throw new Error('Unsupported content type')
        }
    }
}
