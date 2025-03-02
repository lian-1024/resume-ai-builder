import { ResumeData } from "@lianqq/resume-schema";

export const BUILDER_PROMPTS = {
    general: (description: string, example: string | ResumeData) => `
    你是一个经验丰富的简历生成器，请根据以下描述生成一份简历：
    描述：${description}
    
    请返回 JSON 格式，严格遵守以下格式：
    ${example}
    不要将键转换为中文
    `
}