import { ChatOpenAI } from '@langchain/openai';
import { AIConfig } from '../types';
import { StringOutputParser } from '@langchain/core/output_parsers';
declare class BaseModel {
    protected model: ChatOpenAI;
    protected outputParser: StringOutputParser;
    constructor(config: AIConfig);
    invoke(message: string): Promise<string>;
}
export default BaseModel;
