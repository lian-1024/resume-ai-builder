import { BaseAIModel, type AIModelConfig } from '@/ai/modal'
import { Example } from '@lianqq/resume-schema'

export class ResumeAI extends BaseAIModel {
    constructor(config: AIModelConfig) {
        super(config)
    }

    /**
     * 根据用户输入生成简历内容
     * @param content 用户输入的基本信息
     */
    async generateResume(content: string) {
        const chain = this.createChain(`
            你是一位专业的简历顾问，请根据以下信息生成一份完整的简历内容：
            {content}

            要求：
            1. 基本信息处理：
               - 提取并规范化个人基本信息
               - 确保联系方式格式统一
               - 添加适当的个人简介

            2. 教育经历优化：
               - 突出学术成就和相关课程
               - 标注重要的学术项目
               - 列举获得的奖项和荣誉

            3. 工作/项目经历处理：
               - 使用STAR法则展开描述
               - 突出个人贡献和成果
               - 加入量化的数据指标
               - 使用行业相关的专业术语

            4. 技能展示：
               - 按照领域分类技能
               - 标注熟练程度
               - 突出核心竞争力

            5. 格式要求：
               - 返回标准的JSON格式
               - 符合 ResumeSchema 的数据结构
               - 确保所有字段完整且合理
               - 内容保持专业性和可读性

            6. 语言风格：
               - 使用中文
               - 语言简洁专业
               - 表述清晰准确
               - 突出重点成就

            请按照以下数据结构返回JSON：{ example }
            
        `)

        return chain.invoke({
            content,
            example: Example
        })
    }

    /**
     * 优化简历内容
     */
    async optimizeContent(content: string) {
        const chain = this.createChain(`
            你是一位资深的简历优化专家。请对以下简历内容进行全面优化和提升：
            {content}
            
            优化要求：
            1. 使用有力的行动动词，突出关键成就和贡献
            2. 加入具体的数据指标和量化结果
            3. 确保语言简洁、专业且富有说服力
            4. 恰当运用行业术语，展现专业性
            5. 重点突出个人在项目中的核心价值
            6. 保持内容的逻辑性和连贯性
            7. 返回标准的 JSON 格式数据
            8. 请使用中文回答，保持表述清晰自然
        `)

        return chain.invoke({
            content
        })
    }

    /**
     * 优化项目经历
     */
    async optimizeProjectExperience(content: string) {
        const chain = this.createChain(`
            作为资深的技术简历专家，请优化以下项目经历描述：
            {content}
            
            优化要求：
            1. 严格遵循 STAR 法则展开叙述：
               - Situation: 项目背景和面临的挑战
               - Task: 你的职责和目标
               - Action: 采取的具体行动和技术方案
               - Result: 取得的成果和影响
            2. 突出技术难点和创新点：
               - 技术选型的理由和考量
               - 架构设计的思路和优势
               - 性能优化的措施和效果
            3. 强调个人贡献：
               - 独立负责的模块和功能
               - 解决的关键问题
               - 团队协作中的角色
            4. 使用具体数据说明成果：
               - 性能提升指标
               - 业务价值影响
               - 用户体验改善
            5. 返回规范的 HTML 格式（无需<html>标签，避免使用 markdown）
            6. 使用中文回答，语言专业规范
        `)

        return chain.invoke({
            content
        })
    }

    /**
     * 优化教育经历
     */
    async optimizeEducationExperience(content: string) {
        const chain = this.createChain(`
            作为专业的教育背景优化顾问，请优化以下教育经历：
            {content}
            
            优化要求：
            1. 学术成就展示：
               - 重点课程的学习成果
               - 研究项目的具体贡献
               - GPA或专业排名（如有）
            2. 专业能力凸显：
               - 核心课程体系
               - 专业实践项目
               - 学术研究方向
            3. 综合素质体现：
               - 获得的奖学金和荣誉
               - 担任的学生工作
               - 参与的学术活动
            4. 实践经验强调：
               - 实验室研究经历
               - 学术竞赛成果
               - 创新项目经验
            5. 返回规范的 HTML 格式（无需<html>标签，避免使用 markdown）
            6. 使用中文回答，表述专业准确
        `)

        return chain.invoke({
            content
        })
    }

    /**
     * 优化技能
     */
    async optimizeSkill(content: string) {
        const chain = this.createChain(`
            作为技术领域的资深顾问，请优化以下技能描述：
            {content}
            
            优化要求：
            1. 技术能力展示：
               - 技术栈的熟练程度
               - 核心技术的实践经验
               - 技术难点攻克案例
            2. 专业度体现：
               - 使用准确的技术术语
               - 突出技术的深度理解
               - 强调实际应用场景
            3. 技能分类呈现：
               - 前端/后端/运维等领域划分
               - 框架/工具/平台等类别
               - 按熟练度排序展示
            4. 返回规范的 HTML 格式（无需<html>标签，避免使用 markdown）
            5. 使用中文回答，确保专业性和可读性
        `)

        return chain.invoke({
            content
        })
    }


}
