import { ChatOpenAI } from "@langchain/openai"
import { AIConfig } from "../types"
import { StringOutputParser } from "@langchain/core/output_parsers"

class BaseModel {
    protected model: ChatOpenAI
    protected outputParser: StringOutputParser

    constructor(config:AIConfig) {
        this.model = new ChatOpenAI(config)
    }

    async invoke(message:string) {
        // 调用模型
        const response = await this.model.invoke(message)
        return this.outputParser.invoke(response)
    }
   
}

export default BaseModel