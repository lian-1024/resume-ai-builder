import { ref } from 'vue'
import { type AIConfig } from '@lianqq/resume-ai'
import { ResumeOptimizer } from '@lianqq/resume-ai'




const resumeOptimizer = ref<ResumeOptimizer>()

export function useResumeOptimizer() {
   
    // 初始化优化器
    const initOptimizer = (config:AIConfig) => {
        resumeOptimizer.value = new ResumeOptimizer(config)
    }

    /**
     * 优化内容
     * @param content 
     */
    const optimizeContent = async (content: string) => {
        if (!resumeOptimizer.value) throw new Error('AI not initialized')
       
        return resumeOptimizer.value.optimizeResume(content)
    }   

    /**
     * 优化项目经历
     * @param content 
     */
    const optimizeProject = async (content: string) => {
        if (!resumeOptimizer.value) throw new Error('AI not initialized')
        return resumeOptimizer.value.optimizeProject(content)
    }

    /**
     * 优化教育经历
     * @param content 
     */
    const optimizeEducation = async (content: string) => {
        if (!resumeOptimizer.value) throw new Error('AI not initialized')
        return resumeOptimizer.value.optimizeEducation(content)
    }

    /**
     * 优化技能
     * @param content 
     */
    const optimizeSkill = async (content: string) => {
        if (!resumeOptimizer.value) throw new Error('AI not initialized')
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