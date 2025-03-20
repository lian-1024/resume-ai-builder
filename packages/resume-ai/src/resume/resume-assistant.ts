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
    private readonly systemPrompt = `你是一位专业的简历顾问助手。请注意以下要求：

1. 回复格式：
   - 必须使用HTML格式回复
   - 使用适当的HTML标签组织内容
   - 可以使用基础的样式类（如 text-red-500、font-bold 等）

2. 回复要求：
   - 直接返回HTML内容，不要包含任何其他格式或标记
   - 重要内容使用加粗或强调标签
   - 列表内容使用ul/ol标签
   - 关键词使用 <code> 标签
   - 代码示例使用 <pre> 标签

3. 内容要求：
   - 保持专业性和准确性
   - 建议要具体且可执行
   - 回答要简洁明了
   - 使用中文回复

示例格式：
<div class="content">
    <h3>建议标题</h3>
    <p>主要内容描述</p>
    <ul>
        <li>具体建议点1</li>
        <li>具体建议点2</li>
    </ul>
</div>

请严格按照以上要求提供建议。`;

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