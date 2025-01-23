import { Component } from 'vue';
import { default as MDPreview } from './preview.vue';
import { default as MDEditor } from './editor.vue';
declare const components: {
    MDEditor: Component;
    MDPreview: Component;
};
export default components;
export { MDEditor, MDPreview };
