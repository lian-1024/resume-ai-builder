<script lang="ts" setup>
import EditorSectionWrapper from './components/wrapper.vue'
import InputItem from './components/input-item.vue'
import { storeToRefs } from 'pinia'
import { useResumeStore } from '~/stores/resume'
import Item from './components/item.vue'
import { DatePicker,Textarea } from '@lianqq/resume-ui'
import { MDEditor } from '~/components/common/md-editor'
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import Editor from '@tinymce/tinymce-vue'
const resumeStore = useResumeStore()
const { resume } = storeToRefs(resumeStore)
const education = computed(() => resume.value.sections?.education || {})
const changeValueHandle = (path:string,value: any) => {
    console.log(path,value)

    resumeStore.setResumeValue(path,value)
}
defineOptions({
    name: 'EditorSectionEducation'
})
const PathMap = {
    school:(index:number) =>  `sections.education.items[${index}].school`,
    major:(index:number) =>  `sections.education.items[${index}].major`,
    degree:(index:number) =>  `sections.education.items[${index}].degree`,
    studyType:(index:number) =>  `sections.education.items[${index}].studyType`,
    startDate:(index:number) =>  `sections.education.items[${index}].startDate`,
    endDate:(index:number) =>  `sections.education.items[${index}].endDate`,
    summary:(index:number) =>  `sections.education.items[${index}].summary`,
}

const apiKey = "x1u79rir4u6mi9on3g3uurdld1l9d6yvm0tiuwvtgwa4ansc"


const init = {
  selector: 'textarea',
  plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons accordion',
  editimage_cors_hosts: ['picsum.photos'],
  menubar: 'file edit view insert format tools table help',
  toolbar: "undo redo | accordion accordionremove | blocks fontfamily fontsize | bold italic underline strikethrough | align numlist bullist | link image | table media | lineheight outdent indent| forecolor backcolor removeformat | charmap emoticons | code fullscreen preview | save print | pagebreak anchor codesample | ltr rtl",
  autosave_ask_before_unload: true,
  autosave_interval: '30s',
  autosave_prefix: '{path}{query}-{id}-',
  autosave_restore_when_empty: false,
  autosave_retention: '2m',
  image_advtab: true,
  link_list: [
    { title: 'My page 1', value: 'https://www.tiny.cloud' },
    { title: 'My page 2', value: 'http://www.moxiecode.com' }
  ],
  image_list: [
    { title: 'My page 1', value: 'https://www.tiny.cloud' },
    { title: 'My page 2', value: 'http://www.moxiecode.com' }
  ],
  image_class_list: [
    { title: 'None', value: '' },
    { title: 'Some class', value: 'class-name' }
  ],
  importcss_append: true,
//   file_picker_callback: (callback, value, meta) => {
//     /* Provide file and text for the link dialog */
//     if (meta.filetype === 'file') {
//       callback('https://www.google.com/logos/google.jpg', { text: 'My text' });
//     }

//     /* Provide image and alt text for the image dialog */
//     if (meta.filetype === 'image') {
//       callback('https://www.google.com/logos/google.jpg', { alt: 'My alt text' });
//     }

//     /* Provide alternative source and posted for the media dialog */
//     if (meta.filetype === 'media') {
//       callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.google.com/logos/google.jpg' });
//     }
//   },
  height: 600,
  image_caption: true,
  quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
  noneditable_class: 'mceNonEditable',
  toolbar_mode: 'sliding',
  contextmenu: 'link image table',
  content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:16px }'
}
</script>

<template>
    <EditorSectionWrapper title="教育经历">
        <template #content>
            <div class="flex flex-col gap-8" v-for="(item,index) in education.items" :key="item.id">
                <div class="flex flex-col gap-6">
                    <div class="grid grid-cols-3 grid-rows-2 gap-6">
                        <InputItem title="学校" placeholder="请输入您的学校" :model-value="item.school"
                            @update:model-value="(value) => changeValueHandle(PathMap.school(index),value)" />
                        <InputItem title="专业" placeholder="请输入您的专业" :model-value="item.major"
                            @update:model-value="(value) => changeValueHandle(PathMap.major(index),value)" />
                        <InputItem title="学历" placeholder="请输入您的学历" :model-value="item.degree"
                            @update:model-value="(value) => changeValueHandle(PathMap.degree(index),value)" />
                        <Item title="在读时间" placeholder="请输入您的在读时间">
                            <DatePicker class="w-full" />
                        </Item>
                        <InputItem class="col-start-3 -col-end-1" title="学历类型" placeholder="请输入您的学历类型" :model-value="item.studyType"
                            @update:model-value="(value) => changeValueHandle(PathMap.studyType(index),value)" />

                    </div>
                    <div class="flex flex-col gap-2 flex-1 ">
                        <span class="text-sm dark:text-zinc-300 text-zinc-500">在校经历</span>
<ClientOnly>
    <!-- <textarea class="textarea"></textarea> -->
     <Editor :api-key="apiKey" :init="init"/>

</ClientOnly>
                    </div>
                </div>
            </div>
        </template>
    </EditorSectionWrapper>
</template>
