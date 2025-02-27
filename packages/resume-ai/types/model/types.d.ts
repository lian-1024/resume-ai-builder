import { ChatOpenAI } from '@langchain/openai';
export type BaseConfigType = ConstructorParameters<typeof ChatOpenAI>[0];
