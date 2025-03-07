import type { AIConfig } from "@lianqq/resume-ai"
import { ref } from "vue"
import { ResumeBuilder } from "@lianqq/resume-ai"
import type { ResumeData } from "@lianqq/resume-schema"

export const useResumeBuilder = (config: AIConfig) => {
    const resumeBuilder = ref<ResumeBuilder | null>(null)

    const initOptimizer = (initConfig?: AIConfig) => {
        if (resumeBuilder.value) return true

        try {
            resumeBuilder.value = new ResumeBuilder(initConfig || config)
            return true
        } catch (error) {
            console.error(error)
            return false
        }
    }


    const builderResume = async (description: string, example: string | ResumeData) => {
        if (!resumeBuilder.value) return false
        console.log("builderResume: example", JSON.stringify(example));
        
        return await resumeBuilder.value.builderResume(description, example)
    }

    return {
        initOptimizer,
        builderResume
    }
}