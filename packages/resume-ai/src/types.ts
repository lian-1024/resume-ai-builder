import { ChatOpenAI } from '@langchain/openai'

export type AIConfig = ConstructorParameters<typeof ChatOpenAI>[0]