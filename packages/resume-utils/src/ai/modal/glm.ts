import { BaseAIModel } from '@/ai/modal'
import type { AIModelConfig } from '@/ai/types'
export class GLM extends BaseAIModel {

    constructor(config: AIModelConfig) {
        super(config)
    }

}
