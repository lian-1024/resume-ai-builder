import { ref } from 'vue'
import { ResumeAI } from '@/utils/ai-model/resume'
import type { AIConfigKey } from '@/utils/ai-model/config'
import { AIConfig } from '@/utils/ai-model'
import { toast } from '@lianqq/resume-ui'
export const OptionTypeMap = {
    OPTIMIZE_CONTENT: 'content',
    OPTIMIZE_PROJECT_EXPERIENCE: 'project',
    OPTIMIZE_EDUCATION_EXPERIENCE: 'education',
    OPTIMIZE_SKILL: 'skill'
} as const

export type OptionTypeKey = (typeof OptionTypeMap)[keyof typeof OptionTypeMap]

const resumeAI = ref<ResumeAI>()

export function useResumeAI() {
    /**
     * 初始化AI模型
     * @param model 
     */
    const initAIModel = (model: AIConfigKey) => {
        createAIModel(model)
    }

    /**
     * 切换AI模型
     * @param model 
     */
    const changeModel = (model: AIConfigKey) => {
        createAIModel(model)
    }

    /**
     * 创建AI模型
     * @param model 
     */
    const createAIModel = (model: AIConfigKey) => {
        const config = AIConfig[model]
        resumeAI.value = new ResumeAI(config)
    }

    /**
     * 优化内容
     * @param content 
     */
    const optimizeContent = async (content: string) => {
        if (!resumeAI.value) throw new Error('AI not initialized')
        if (content.length <= 20) return toast({
            title: "内容过短",
            description: "请输入更多的内容，否则无法优化",
            variant: "destructive"
        })
        return resumeAI.value.optimizeContent(content)
    }

    /**
     * 优化项目经历
     * @param content 
     */
    const optimizeProjectExperience = async (content: string) => {
        if (!resumeAI.value) throw new Error('AI not initialized')
        return resumeAI.value.optimizeProjectExperience(content)
    }

    /**
     * 优化教育经历
     * @param content 
     */
    const optimizeEducationExperience = async (content: string) => {
        if (!resumeAI.value) throw new Error('AI not initialized')
        return resumeAI.value.optimizeEducationExperience(content)
    }

    /**
     * 优化技能
     * @param content 
     */
    const optimizeSkill = async (content: string) => {
        if (!resumeAI.value) throw new Error('AI not initialized')
        return resumeAI.value.optimizeSkill(content)
    }

    return {
        initAIModel,
        changeModel,
        optimizeContent,
        optimizeProjectExperience,
        optimizeEducationExperience,
        optimizeSkill
    }
} 