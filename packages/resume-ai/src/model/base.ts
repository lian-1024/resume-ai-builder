import { ChatOpenAI } from "@langchain/openai"
import { AIConfig } from "../types"
import { StringOutputParser } from "@langchain/core/output_parsers"

class BaseModel {
    protected model: ChatOpenAI
    protected outputParser: StringOutputParser
    protected config: AIConfig

    constructor(config:AIConfig) {
        this.config = config
        this.outputParser = new StringOutputParser()
        // 初始化模型
        this.initModel()
    }

    protected async initModel() {
        try{
            this.model = new ChatOpenAI(this.config)
        }catch(error){
            console.error(error)
        }
    }

    async invoke(message:string) {
        // 调用模型
        const response = await this.model.invoke(message)
        return this.outputParser.invoke(response)
    }
   
}

export default BaseModel