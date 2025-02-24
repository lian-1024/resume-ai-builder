import { ref } from 'vue'
import { ResumeAI } from '@/utils/ai-model/resume'
import type { AIConfigKey } from '@/utils/ai-model/config'
import { AIConfig } from '@/utils/ai-model'

const resumeAI = ref<ResumeAI>()

export function useResumeAI() {
    const initAIModel = (model: AIConfigKey) => {
        createAIModel(model)
    }

    const changeModel = (model: AIConfigKey) => {
        createAIModel(model)
    }

    const createAIModel = (model: AIConfigKey) => {
        const config = AIConfig[model]
        console.log("config", config);
        
        resumeAI.value = new ResumeAI(config)
    }

    const optimizeContent = async (content: string) => {
        if (!resumeAI.value) throw new Error('AI not initialized')
        return resumeAI.value.optimizeContent(content)
    }

    const optimizeForJob = async (resumeData: any, jobDescription: string) => {
        if (!resumeAI.value) throw new Error('AI not initialized')
        return resumeAI.value.optimizeForJob(resumeData, jobDescription)
    }

    const generateJobDescription = async (position: string, company: string, responsibilities: string) => {
        if (!resumeAI.value) throw new Error('AI not initialized')
        return resumeAI.value.generateJobDescription(position, company, responsibilities)
    }

    return {
        initAIModel,
        changeModel,
        optimizeContent,
        optimizeForJob,
        generateJobDescription
    }
} 