import { ref } from 'vue'
import { type AIConfig } from '@lianqq/resume-ai'
import { ResumeOptimizer } from '@lianqq/resume-ai'
import { toast } from "@lianqq/resume-ui"


export function useResumeOptimizer(config: AIConfig) {
    const resumeOptimizer = ref<ResumeOptimizer>()


    // 初始化优化器
    const initOptimizer = (initConfig?: AIConfig) => {
        if (resumeOptimizer.value) return true

        try {
            resumeOptimizer.value = new ResumeOptimizer(initConfig || config)
            return true
        } catch (err) {
            toast({
                title: "初始化失败",
                variant: "destructive"
            })
            return false
        }
    }



    /**
     * 优化内容
     * @param content 
     */
    const optimizeContent = async (content: string) => {
        if (!resumeOptimizer.value) throw new Error("优化器成功未初始化")
        return resumeOptimizer.value.optimizeResume(content)
    }

    /**
     * 优化项目经历
     * @param content 
     */
    const optimizeProject = async (content: string) => {
        if (!resumeOptimizer.value) throw new Error("优化器成功未初始化")
        return resumeOptimizer.value.optimizeProject(content)
    }

    /**
     * 优化教育经历
     * @param content 
     */
    const optimizeEducation = async (content: string) => {
        if (!resumeOptimizer.value) throw new Error("优化器成功未初始化")
        return resumeOptimizer.value.optimizeEducation(content)
    }

    /**
     * 优化技能
     * @param content 
     */
    const optimizeSkill = async (content: string) => {
        if (!resumeOptimizer.value) throw new Error("优化器成功未初始化")
        return resumeOptimizer.value.optimizeSkill(content)
    }



    return {
        optimizeContent,
        optimizeSkill,
        optimizeProject,
        optimizeEducation,
        initOptimizer
    }
}