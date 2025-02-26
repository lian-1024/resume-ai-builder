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

/**
 * 基础AI模型
 */
export abstract class BaseAIModel {
    protected model: ChatOpenAI
    protected outputParser: StringOutputParser

    // 初始化模型
    constructor(config: AIModelConfig) {
        // 初始化模型
        this.model = new ChatOpenAI({
            openAIApiKey: config.apiKey, // api key
            modelName: config.modelName, // 模型名称
            temperature: config.temperature || 0.7, // 温度
            maxTokens: config.maxTokens || 1000, // 最大token
            configuration: {
                baseURL: config.baseURL, // 基础url
                defaultHeaders: {
                    'Authorization': `Bearer ${config.apiKey}` // 授权
                }
            }
        })
        this.outputParser = new StringOutputParser() // 输出解析器
    }

    // 创建链
    protected createChain(template: string) {
        const prompt = ChatPromptTemplate.fromTemplate(template)
        return RunnableSequence.from([prompt, this.model, this.outputParser])
    }
} 
