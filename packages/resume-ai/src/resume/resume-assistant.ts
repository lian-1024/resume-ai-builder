import { ChatOpenAI } from "@langchain/openai";
import { AIConfig } from "@/types";
import BaseModel from "@/model/base";
import { HumanMessage, AIMessage, SystemMessage, type MessageContent } from "@langchain/core/messages";
import { StringOutputParser } from "@langchain/core/output_parsers";

class ResumeAssistant extends BaseModel {
    /**
     * 对话历史记录 
     */
    private messageHistory: (HumanMessage | AIMessage | SystemMessage)[] = [];
    /**
     * 系统提示
     */
    private readonly systemPrompt = `
        你是一位专业的简历顾问助手，具有以下特点：
        1. 专业性：熟悉各行业简历编写标准和最佳实践
        2. 针对性：根据用户具体情况提供个性化建议
        3. 实用性：建议具体可行，易于执行
        4. 友好性：语气亲切，耐心解答用户问题
        
        在对话中，你需要：
        1. 理解用户问题，提供准确的建议
        2. 使用举例说明，让建议更容易理解
        3. 关注用户反馈，适时调整建议
        4. 保持对话连贯性，参考之前的对话内容
    `;

    constructor(config: AIConfig) {
        super(config);
        // 初始化对话历史，添加系统提示
        this.messageHistory.push(new SystemMessage(this.systemPrompt));
    }

    /**
     * 发送消息并获取回复
     * @param message 用户消息
     * @returns AI回复的内容
     */
    async chat(message: string): Promise<string> {
        try {
            // 添加用户消息到历史记录
            this.messageHistory.push(new HumanMessage(message));

            // 获取AI回复
            const response = await this.model.invoke(this.messageHistory);

            // 处理回复内容
            const processedContent = await this.outputParser.invoke(response)
           
            // 添加AI回复到历史记录
            this.messageHistory.push(new AIMessage(processedContent));

            return processedContent;
        } catch (error) {
            console.error('Chat error:', error);
            throw error;
        }
    }

    /**
     * 获取对话历史
     * @returns 对话历史记录
     */
    getHistory(): (HumanMessage | AIMessage | SystemMessage)[] {
        return this.messageHistory;
    }

    /**
     * 清空对话历史，但保留系统提示
     */
    clearHistory(): void {
        this.messageHistory = [new SystemMessage(this.systemPrompt)];
    }

    /**
     * 获取特定主题的简历建议
     * @param topic 主题（如"项目经验"、"技能描述"等）
     * @returns 建议内容
     */
    async getAdvice(topic: string): Promise<string> {
        const prompt = `请针对简历中的"${topic}"部分提供专业的优化建议，包括：
        1. 内容组织方式
        2. 关键要点
        3. 常见问题
        4. 实际案例
        请给出具体且可操作的建议。`;

        return this.chat(prompt);
    }

    /**
     * 分析简历中的问题
     * @param content 简历内容
     * @returns 分析结果
     */
    async analyzeResume(content: string): Promise<string> {
        const prompt = `请分析以下简历内容，指出需要改进的地方：
        
        ${content}
        
        请从以下几个方面进行分析：
        1. 内容完整性
        2. 表达方式
        3. 重点突出
        4. 专业性
        5. 改进建议`;
        return this.chat(prompt);
    }
    /**
     * 流式返回对话内容
     * @param message 用户输入的消息
     * @returns 生成器,用于流式返回AI回复的内容片段
     */
    async *chatStream(message: string): AsyncGenerator<string> {
        try {
            // 添加用户消息到历史记录
            this.messageHistory.push(new HumanMessage(message));

            // 创建流式输出
            const stream = await this.model.pipe(new StringOutputParser()).stream(this.messageHistory);
            
            // 用于收集完整的AI回复
            let fullResponse = '';

            // 逐个返回内容片段
            for await (const chunk of stream) {
                fullResponse += chunk;
                yield chunk;
            }

            // 将完整的AI回复添加到历史记录
            this.messageHistory.push(new AIMessage(fullResponse));
        } catch (error) {
            console.error('ChatStream error:', error);
            throw error;
        }
    }
}

export default ResumeAssistant;