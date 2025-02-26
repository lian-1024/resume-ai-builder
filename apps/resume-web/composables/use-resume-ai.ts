import { type AIModelConfig, ResumeAI } from '@lianqq/resume-utils'

export const useResumeAI = (config: AIModelConfig) => {
    const resumeAI = ref<ResumeAI>()


    const createAIModel = () => {
        resumeAI.value = new ResumeAI(config)
    }

    const generateResume = async (content: string) => {
        if (!resumeAI.value) return
        return resumeAI.value.generateResume(content)
    }

    return {
        resumeAI,
        createAIModel,
        generateResume
    }
}   