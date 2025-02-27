// 导入基础模型类
import BaseModel from "@/model/base";
// 导入AI配置类型
import { AIConfig } from "@/types";
// 导入简历数据类型
import { ResumeData } from "@lianqq/resume-schema";

/**
 * 简历优化器类
 * 继承自BaseModel,提供简历内容的智能优化功能
 */
class ResumeOptimizer extends BaseModel {

    /**
     * 构造函数
     * @param config AI配置参数
     */
    constructor(config:AIConfig) {
        super(config)
    }   

    /**
     * 优化整体简历内容
     * @param resume 简历数据
     * @returns 优化后的简历内容(JSON格式)
     */
    async optimizeResume(resume:ResumeData | string): Promise<string> {
        const prompt = `
            你是一位专业的简历优化专家。请根据以下简历内容进行全面优化和改进。
            
            简历内容:
            ${resume}

            优化要求:
            1. 个人信息优化
            - 确保基本信息(姓名、年龄、学历等)完整准确
            - 个人简介突出核心竞争力和职业目标
            - 联系方式格式规范统一
            
            2. 教育背景优化
            - 重点突出最高学历和核心专业课程
            - 量化展示学术成果(GPA、排名等)
            - 突出重要奖项和实践经历
            
            3. 工作经验优化
            - 采用STAR法则描述工作职责和成果
            - 突出关键业绩和重要贡献
            - 强调管理经验和团队协作能力
            
            4. 项目经历优化
            - 清晰描述项目背景、职责和技术栈
            - 量化项目规模和核心指标
            - 突出个人贡献和项目影响力
            
            5. 专业技能优化
            - 按重要程度排序核心技能
            - 标注技能熟练度和实践经验
            - 突出与目标岗位的匹配度
            
            6. 整体要求
            - 内容真实可信,逻辑清晰
            - 重点突出,层次分明
            - 语言精炼专业
            - 统一格式规范
            - 返回JSON格式数据

            请基于以上要求进行优化,确保简历整体专业性和竞争力。
        `

        return await this.invoke(prompt)
    }

    /**
     * 优化基本信息部分
     * @param content 原始基本信息内容
     * @returns 优化后的基本信息(JSON格式)
     */
    async optimizeBasicInfo(content:string) {
        const prompt = `
            作为专业的简历优化顾问,请帮助优化以下个人基本信息。

            原始内容:
            ${content}

            优化要求:
            1. 基本要素完整性
            - 核心信息:姓名、年龄、学历、工作年限
            - 联系方式:手机、邮箱、社交账号
            - 求职意向:期望职位、城市、薪资
            
            2. 个人简介优化
            - 突出核心竞争力(3-5点)
            - 强调专业背景和行业经验
            - 体现职业规划和发展目标
            - 使用数据佐证个人能力
            
            3. 内容展示
            - 信息完整准确
            - 重点突出醒目  
            - 逻辑层次清晰
            - 语言简洁专业
            
            4. 格式规范
            - 统一展示格式
            - 合理使用排版
            - 确保可读性
            - 返回JSON格式

            请基于以上要求进行优化,打造专业且有竞争力的个人信息展示。
        `

        return await this.invoke(prompt)
    }

    /**
     * 优化教育经历部分
     * @param content 原始教育经历内容
     * @returns 优化后的教育经历(JSON格式)
     */
    async optimizeEducation(content:string) {
        const prompt = `
            作为专业的简历优化顾问,请帮助优化以下教育经历内容。

            原始内容:
            ${content}

            优化要求:
            1. 基本信息完整性
            - 学校及专业信息
            - 学历层次和就读时间
            - 主修课程和研究方向
            - 重要荣誉奖项
            
            2. 学术表现优化
            - 突出核心课程成绩
            - 量化学术成果(论文/专利)
            - 强调科研项目经历
            - 突出专业技能实践
            
            3. 能力展示
            - 学生工作和社团经历
            - 竞赛获奖情况
            - 专业资格认证
            - 实习实践经验
            
            4. 内容呈现
            - 按时间倒序排列
            - 重点突出核心经历
            - 语言精炼专业
            - 返回JSON格式

            请基于以上要求进行优化,突出教育背景价值和专业能力。
        `

        return await this.invoke(prompt)
    }

    /**
     * 优化项目经历部分
     * @param content 原始项目经历内容
     * @returns 优化后的项目经历(JSON格式)
     */
    async optimizeProject(content:string) {
        const prompt = `
            作为专业的简历优化顾问,请帮助优化以下项目经历内容。

            原始内容:
            ${content}

            优化要求:
            1. 项目基本信息
            - 项目名称和时间
            - 项目背景和目标
            - 项目规模和技术栈
            - 担任角色和职责
            
            2. 工作内容优化
            - 采用STAR法则描述
            - 突出技术难点攻克
            - 强调创新点和亮点
            - 体现解决问题能力
            
            3. 成果展示
            - 量化项目指标
            - 突出个人贡献
            - 强调影响力
            - 体现价值创造
            
            4. 核心能力
            - 技术能力提升
            - 项目管理经验
            - 团队协作表现
            - 问题解决能力
            
            5. 格式规范
            - 结构清晰完整
            - 重点突出醒目
            - 语言专业精炼
            - 返回JSON格式

            请基于以上要求进行优化,打造专业且有说服力的项目经历展示。
        `

        return await this.invoke(prompt)
    }

    /**
     * 优化技能部分
     * @param content 原始技能内容
     * @returns 优化后的技能内容(JSON格式)
     */
    async optimizeSkill(content:string) {
        const prompt = `
            作为专业的简历优化顾问,请帮助优化以下技能内容。

            原始内容:
            ${content}

            优化要求:
            1. 技能完整性
            - 技术技能清单
            - 专业资质证书
            - 语言能力水平
            - 软技能展示
            
            2. 技能分类
            - 按领域分类(前端/后端/运维等)
            - 按熟练度排序
            - 突出核心竞争力
            - 体现技术深度
            
            3. 技能描述
            - 说明掌握程度
            - 关联实践经验
            - 突出应用场景
            - 体现解决方案能力
            
            4. 呈现方式
            - 结构清晰
            - 重点突出
            - 客观准确
            - 返回JSON格式

            请基于以上要求进行优化,打造专业且有竞争力的技能展示。
        `   

        return await this.invoke(prompt)
    }

    /**
     * 优化工作经验部分
     * @param content 原始工作经验内容
     * @returns 优化后的工作经验(JSON格式)
     */
    async optimizeExperience(content:string) {
        const prompt = `
            作为专业的简历优化顾问,请帮助优化以下工作经验内容。

            原始内容:
            ${content}

            优化要求:
            1. 基本信息完整性
            - 公司名称和规模
            - 所属行业领域
            - 职位及任职时间
            - 工作地点
            
            2. 工作内容优化
            - 主要职责清晰
            - 重点项目突出
            - 管理经验体现
            - 业务能力展示
            
            3. 业绩展示
            - 量化工作成果
            - 突出重要贡献
            - 强调价值创造
            - 体现核心竞争力
            
            4. 能力提升
            - 专业技能进步
            - 管理能力提升
            - 问题解决案例
            - 团队协作表现
            
            5. 格式规范
            - 按时间倒序
            - 结构层次分明
            - 语言专业精炼
            - 返回JSON格式

            请基于以上要求进行优化,打造专业且有说服力的工作经验展示。
        `

        return await this.invoke(prompt)
    }
}

export default ResumeOptimizer