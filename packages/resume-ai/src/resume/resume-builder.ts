import BaseModel from "@/model/base";
import { AIConfig } from "@/types";
import { BUILDER_PROMPTS } from "@/prompts/builder";
import { ResumeData } from "@lianqq/resume-schema";
class ResumeBuilder extends BaseModel {
    constructor(config: AIConfig) {
        super(config)
    }

    /**
     * 根据描述生成简历
     * @param description 描述
     * @param example 示例
     * @returns 简历
     */
    async builderResume(description: string, example: string | ResumeData) {
        console.log("builderResume: example", JSON.stringify(example));

        const prompt = BUILDER_PROMPTS.general(description, example)
        return await this.invoke(prompt)
    }


    
}


export default ResumeBuilder