
import { type BaseConfigType } from '@lianqq/resume-ai'
export const AIConfig = {
    zhipu: {
        modelName: 'glm-4-flash',
        apiKey: '',
        temperature: 0.7,
        configuration: {
            baseURL: 'https://open.bigmodel.cn/api/paas/v4',
            defaultHeaders:{
                "Authorization":`Bearer 87180c6d421a4070bdcbd673ac11990f.9RQYH7fS4xmL9mWP`
            }
        }

    }
}

export type AIConfigKey = keyof typeof AIConfig