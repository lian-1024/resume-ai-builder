import { ChatOpenAI } from '@langchain/openai'
import { ChatPromptTemplate } from '@langchain/core/prompts'
import { StringOutputParser } from '@langchain/core/output_parsers'
import { RunnableSequence } from '@langchain/core/runnables'

export interface AIModelConfig {
    apiKey: string
    baseURL?: string
    temperature?: number
    maxTokens?: number
    modelName?: string
}

export abstract class BaseAIModel {
    protected model: ChatOpenAI
    protected outputParser: StringOutputParser

    // 初始化模型
    constructor(config: AIModelConfig) {
        // 初始化模型
        this.model = new ChatOpenAI({
            openAIApiKey: config.apiKey,
            modelName: config.modelName,
            temperature: config.temperature || 0.7,
            maxTokens: config.maxTokens || 1000,
            configuration: {
                baseURL: config.baseURL,
                defaultHeaders: {
                    'Authorization': `Bearer ${config.apiKey}`
                }
            }
        })
        this.outputParser = new StringOutputParser()
    }

    protected createChain(template: string) {
        const prompt = ChatPromptTemplate.fromTemplate(template)
        return RunnableSequence.from([prompt, this.model, this.outputParser])
    }
} 