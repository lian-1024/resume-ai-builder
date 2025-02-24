
import { type AIModelConfig } from './base'
export const AIConfig: Record<string, AIModelConfig> = {
    zhipu: {
        modelName: 'glm-4-flash',
        baseURL: 'https://open.bigmodel.cn/api/paas/v4',
        apiKey: '87180c6d421a4070bdcbd673ac11990f.9RQYH7fS4xmL9mWP',
        temperature: 0.7,
    }
}

export type AIConfigKey = keyof typeof AIConfig