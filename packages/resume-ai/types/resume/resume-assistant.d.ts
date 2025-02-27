import { AIConfig } from '../types';
import { default as BaseModel } from '../model/base';
import { HumanMessage, AIMessage, SystemMessage } from '@langchain/core/messages';
declare class ResumeAssistant extends BaseModel {
    /**
     * 对话历史记录
     */
    private messageHistory;
    /**
     * 系统提示
     */
    private readonly systemPrompt;
    constructor(config: AIConfig);
    /**
     * 发送消息并获取回复
     * @param message 用户消息
     * @returns AI回复的内容
     */
    chat(message: string): Promise<string>;
    /**
     * 获取对话历史
     * @returns 对话历史记录
     */
    getHistory(): (HumanMessage | AIMessage | SystemMessage)[];
    /**
     * 清空对话历史，但保留系统提示
     */
    clearHistory(): void;
    /**
     * 获取特定主题的简历建议
     * @param topic 主题（如"项目经验"、"技能描述"等）
     * @returns 建议内容
     */
    getAdvice(topic: string): Promise<string>;
    /**
     * 分析简历中的问题
     * @param content 简历内容
     * @returns 分析结果
     */
    analyzeResume(content: string): Promise<string>;
    /**
     * 流式返回对话内容
     * @param message 用户输入的消息
     * @returns 生成器,用于流式返回AI回复的内容片段
     */
    chatStream(message: string): AsyncGenerator<string>;
}
export default ResumeAssistant;
