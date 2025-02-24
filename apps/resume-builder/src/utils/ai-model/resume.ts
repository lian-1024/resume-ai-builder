import { BaseAIModel, type AIModelConfig } from './base'
import type { ResumeData } from '@lianqq/resume-schema'

export class ResumeAI extends BaseAIModel {
    constructor(config: AIModelConfig) {
        super(config)
    }

    /**
     * 优化简历内容
     */
    async optimizeContent(content: string) {
        const chain = this.createChain(`
            你是一位专业的简历优化顾问。请帮我优化以下简历内容，使其更专业、更有吸引力：
            {content}
            
            请注意：
            1. 使用更有力的动词和具体的数据
            2. 突出成就和影响
            3. 保持简洁清晰
            4. 使用行业相关的专业术语
            5. 避免主观或笼统的描述
            6. 返回对应的 JSON 格式
            7. 请你使用中文回答
        `)

        return chain.invoke({
            content
        })
    }

    /**
     * 根据职位描述优化简历
     */
    async optimizeForJob(resumeData: ResumeData, jobDescription: string) {
        const chain = this.createChain(`
            你是一位专业的求职顾问。请根据以下职位描述，分析并给出如何优化简历的建议：
            
            职位描述：
            {jobDescription}
            
            简历数据：
            {resumeData}
            
            请提供具体的优化建议，包括：
            1. 需要突出的技能和经验
            2. 可以调整的描述方式
            3. 需要补充的内容
            4. 可以删减的内容
        `)

        return chain.invoke({
            jobDescription,
            resumeData: JSON.stringify(resumeData)
        })
    }

    /**
     * 生成工作经历描述
     */
    async generateJobDescription(position: string, company: string, responsibilities: string) {
        const chain = this.createChain(`
            作为一位专业的简历撰写专家，请帮我生成一段专业的工作经历描述：
            
            公司：{company}
            职位：{position}
            主要职责：{responsibilities}
            
            要求：
            1. 使用专业的表达方式
            2. 突出具体的成就和数据
            3. 使用有力的行为动词
            4. 突出影响力和价值
            5. 控制在3-5条要点内
        `)

        return chain.invoke({
            company,
            position,
            responsibilities
        })
    }
}