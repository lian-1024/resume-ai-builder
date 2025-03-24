<script lang="ts" setup>
import { computed, onMounted, ref, nextTick } from 'vue';
import { Button } from '@lianqq/resume-ui';
import { Icon } from '@iconify/vue';
import Section from '@/views/preview/components/section.vue';
import { useResumeStore } from '@/stores';
import { exportPDF } from '@/utils/export-pdf';
import { toast } from '@lianqq/resume-ui';
import { defaultBasics, defaultProject, defaultEducation } from '@lianqq/resume-schema';

const resumeStore = useResumeStore();
const pageRef = ref<HTMLDivElement | null>(null);
const previewContainerRef = ref<HTMLDivElement | null>(null);
const pagedRendered = ref(false);

const styles = computed(() => ({
    width: '210mm',
}));

const handleExportPDF = async () => {
    const res = await exportPDF()
    if (res) {
        toast({ title: '下载成功' });
    } else {
        toast({ title: '下载失败', variant: 'destructive' });
    }
}

const basics = computed(() => resumeStore.resume.basics || defaultBasics)
const projects = computed(() => resumeStore.resume.sections?.projects)
const educations = computed(() => resumeStore.resume.sections?.education)
const skills = computed(() => resumeStore.resume.sections?.skills)

onMounted(() => {
  
})

</script>

<template>
    <div class="flex justify-center">
        <!-- 导航按钮 -->
        <div class="p-4 fixed top-6 left-6 z-50 bg-white rounded-lg">
            <Button size="icon" class="rounded-lg" @click="$router.back()">
                <Icon icon="lucide:chevron-left" />
            </Button>
        </div>

        <!-- 分页预览容器 -->
        <div class="w-screen justify-center flex">
            <!-- 内容容器 - 将被Paged.js处理并转换为分页视图 -->
            <div class="bg-white mt-6 px-[10mm] py-[5mm] relative mx-6 rounded-lg" :style="styles" ref="pageRef" id="resume-page">
                <!-- 基本信息 - 防止分页断开 -->
                <div class="flex gap-2 relative justify-end ">
                    <div class="absolute left-1/2 -translate-x-1/2 flex flex-col items-center flex-1">
                        <h4 class="scroll-m-20 text-xl tracking-tight">
                            {{ basics.name }}
                        </h4>
                        <div class="flex gap-4 text-gray-700">
                            <span class="text-nowrap text-sm">手机：{{ basics.phone }}</span>
                            <span class="text-nowrap text-sm">邮箱：{{ basics.email }}</span>
                            <span class="text-nowrap text-sm">微信：{{ basics.wechat }}</span>
                        </div>
                        <span class="text-sm">18 岁</span>
                        <span class="text-sm" v-if="basics.intention?.positionTitle">
                            求职意向：{{ basics.intention.positionTitle }}
                        </span>
                    </div>
                    <div class="w-24 h-32 rounded-lg bg-gray-100">
                        <img src="" />
                    </div>
                </div>

                <!-- 求职意向部分 -->
                <Section title="求职意向" class="section-title ">
                    <div class="flex gap-10">
                        <span class="text-sm" v-if="basics.intention?.currentStatus">
                            求职状态：{{ basics.intention?.currentStatus }}
                        </span>
                        <span class="text-sm" v-if="basics.intention?.positionTitle">
                            期望职位：{{ basics.intention?.positionTitle }}
                        </span>
                        <span class="text-sm" v-if="basics.intention?.city">
                            期望地点：{{ basics.intention?.city }}
                        </span>
                    </div>
                </Section>

                <!-- 技术栈部分 - 强制新页 -->
                <Section title="技术栈" class="section-title ">
                    <template v-for="skill in skills?.items" :key="skill.id">
                        <div v-html="skill.summary" class="text-sm text-gray-700" />
                    </template>
                </Section>

                <!-- 项目经历部分 - 强制新页 -->
                <Section v-for="item in 3" :key="item" title="项目经历" class="section-title ">
                    <div v-for="project in projects?.items" :key="project.id" class="no-break project-item my-4">
                        <div class="flex items-center">
                            <span class="font-semibold">
                                {{ project.name }}
                            </span>
                            <span class="text-sm text-muted-foreground flex-1 pl-8">
                                {{ project.role }}
                            </span>

                            <span class="text-sm text-muted-foreground">
                                {{ project.startDate }} - {{ project.endDate }}
                            </span>
                        </div>
                        <div v-html="project.summary" class="text-sm text-gray-700" />
                    </div>
                </Section>

                <!-- 教育经历部分 - 强制新页 -->
                <Section title="教育经历" class="section-title">
                    <div v-for="education in educations?.items" :key="education.id" class="flex flex-col no-break my-4">
                        <div class="flex justify-between">
                            <span class="font-semibold">
                                {{ education.school }}
                            </span>
                            <span class="text-sm text-gray-700">
                                {{ education.startDate }} - {{ education.endDate }}
                            </span>
                        </div>
                        <span class="text-sm text-gray-700">
                            {{ education.major }} | {{ education.degree }}
                        </span>
                    </div>
                </Section>
            </div>
        </div>

        <!-- 下载按钮 -->
        <div class="p-4 fixed top-6 right-6 z-50 max-w-min bg-white rounded-lg mt-6 self-start min-w-32">
            <Button type="primary" class="w-full" @click="handleExportPDF">
                <Icon icon="lucide:download" />
                下载
            </Button>
        </div>
    </div>
</template>

<style scoped lang="less">
/* 注意：这些样式必须是全局的（不使用scoped），否则Paged.js无法使用 */
#resume-page [data-page="1"] {
    page-break-after: always;
}
</style>