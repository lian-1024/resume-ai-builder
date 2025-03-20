import { useResumeStore } from '@/stores'
import { ResumeAssistant } from '@lianqq/resume-ai'
import type { AIConfig } from '@lianqq/resume-ai'
import { ref } from 'vue'

/**
 * 简历助手
 * @returns 
 */
export const useResumeAssistant = (config?:AIConfig) => {
    const resumeAssistant = ref<ResumeAssistant | null>(null)
    
    /**
     * 初始化简历助手
     * @param config 
     */
    const initResumeAssistant = (initConfig?:AIConfig) => {
        resumeAssistant.value = new ResumeAssistant(initConfig || config)
    }

    /**
     * 对话
     * @param message 
     * @returns 
     */
    const chat = async (message:string) => {
        if (!resumeAssistant.value) initResumeAssistant(config)
        return resumeAssistant.value?.chat(message)
    }

    /**
     * 流式返回对话内容
     * @param message 
     * @returns 
     */
    const chatStream = async (message:string) => {
        if (!resumeAssistant.value) initResumeAssistant(config)
        return resumeAssistant.value?.chatStream(message)
    }

    return {
        resumeAssistant,
        initResumeAssistant,
        chat,
        chatStream
    }
}