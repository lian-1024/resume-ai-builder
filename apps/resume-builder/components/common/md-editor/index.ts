import type { Component } from 'vue'
import MDPreview from './preview.vue'
import MDEditor from './editor.vue'

// 明确指定默认导出
const components: { MDEditor: Component; MDPreview: Component } = {
    MDEditor,
    MDPreview
}

export default components
export {
    MDEditor,
    MDPreview
}