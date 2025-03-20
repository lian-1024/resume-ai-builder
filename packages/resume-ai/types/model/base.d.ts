import { ChatOpenAI } from '@langchain/openai';
import { AIConfig } from '../types';
import { StringOutputParser } from '@langchain/core/output_parsers';
declare class BaseModel {
    protected model: ChatOpenAI;
    protected outputParser: StringOutputParser;
    protected config: AIConfig;
    constructor(config: AIConfig);
    protected initModel(): Promise<void>;
    invoke(message: string): Promise<string>;
}
export default BaseModel;
