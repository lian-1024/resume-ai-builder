import { ChatOpenAI } from '@langchain/openai';
import { StringOutputParser } from '@langchain/core/output_parsers';
import { RunnableSequence } from '@langchain/core/runnables';
import type { AIModelConfig } from '@/ai/types';
/**
 * 基础AI模型
 */
export declare abstract class BaseAIModel {
    protected model: ChatOpenAI;
    protected outputParser: StringOutputParser;
    constructor(config: AIModelConfig);
    protected createChain(template: string): RunnableSequence<import("@langchain/core/prompts").ParamsFromFString<string>, string>;
}
