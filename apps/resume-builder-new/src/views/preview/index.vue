<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { Button } from '@lianqq/resume-ui';
import { Icon } from '@iconify/vue';
import Section from '@/views/preview/components/section.vue';
import Editor from '@/features/editor/editor.vue';
import { useResumeStore } from '@/stores';
const resumeStore = useResumeStore();
const pageRef = ref<HTMLDivElement | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);

const addDashedLines = () => {
    if (!pageRef.value) return;
    // 创建虚线
    createDashedLines();
};

// 创建虚线
const createDashedLines = () => {
    // 获取 canvas 元素
    if (!canvasRef.value) return;
    const ctx = canvasRef.value.getContext('2d');
    if (!ctx) return;
    // 获取 pageRef 元素
    if (!pageRef.value) return;
    // 设置 canvas 的尺寸与 pageRef 相同
    canvasRef.value.width = pageRef.value.clientWidth;
    canvasRef.value.height = pageRef.value.clientHeight;

    // 设置虚线样式
    ctx.strokeStyle = 'lightgray';
    // 设置虚线样式
    ctx.setLineDash([10, 5]);

    // 将 297mm 转换为像素 (1mm ≈ 3.779527559px)
    const mmToPx = (mm: number) => mm * 3.779527559;
    const lineSpacingPx = mmToPx(297);

    // 计算需要绘制的虚线数量 当前页面高度 / 虚线间距
    const numLines = Math.floor(pageRef.value.clientHeight / lineSpacingPx);

    // 绘制虚线
    for (let i = 1; i <= numLines; i++) {
        // 计算虚线在页面中的位置
        const y = i * lineSpacingPx;
        // 开始绘制
        ctx.beginPath();
        // 移动到虚线起点
        ctx.moveTo(0, y);
        // 绘制虚线到页面底部
        ctx.lineTo(canvasRef.value.width, y);
        // 绘制虚线
        ctx.stroke();
    }
};

const styles = computed(() => ({
    width: '210mm',
}));

const exportPDF = async () => {
    console.log(resumeStore.resume);
    
    try {
        const res = await fetch("http://localhost:3002/api/export-pdf", {
            method: "POST",
            body: JSON.stringify(resumeStore.resume)
        });
        
        if (!res.ok) {
            throw new Error(`导出失败: ${res.status} ${res.statusText}`);
        }
        
        // 创建blob对象
        const blob = new Blob([await res.arrayBuffer()], { type: 'application/pdf' });
        
        // 创建下载链接
        const url = URL.createObjectURL(blob);
        
        // 创建一个临时<a>元素来触发下载
        const link = document.createElement('a');
        link.href = url;
        link.download = `resume_${new Date().toISOString().split('T')[0]}.pdf`; // 文件名带日期
        document.body.appendChild(link);
        link.click();
        
        // 清理
        setTimeout(() => {
            document.body.removeChild(link);
            URL.revokeObjectURL(url);
        }, 100);
    } catch (error) {
        console.error('PDF导出失败:', error);
        // 这里可以添加错误提示UI
    }
};

onMounted(() => {
    addDashedLines();
});
</script>

<template>
    <div class="flex justify-center">
        <div class="p-4 bg-white fixed max-w-min z-50 left-6 top-6 rounded-lg self-start">
            <Button size="icon" class="rounded-lg" @click="$router.back()">
                <Icon icon="lucide:chevron-left" />
            </Button>
        </div>
        <div class="p-4 fixed top-6 z-50 max-w-min bg-white right-6 rounded-lg self-start min-w-32">
            <Button type="primary" class="w-full" @click="exportPDF">
                <Icon icon="lucide:printer" />
                导出
            </Button>
        </div>
        <div class=" bg-white mt-6 p-8 relative " :style="styles" ref="pageRef" id="resume-page">
            <canvas id="dashed-lines" ref="canvasRef" class="absolute top-0 left-0 w-full h-full" />
            <!-- 基本信息 -->
            <div class="flex gap-2 relative justify-end">
                <div class="absolute left-1/2 -translate-x-1/2 flex flex-col items-center  flex-1">
                    <h4 class="scroll-m-20 text-xl tracking-tight">
                        lianqq
                    </h4>
                    <div class="flex gap-4 text-gray-700">
                        <span class="text-nowrap text-sm">手机：18888888888</span>
                        <span class="text-nowrap text-sm">邮箱：18888888888@qq.com</span>
                        <span class="text-nowrap text-sm">微信：18888888888</span>
                    </div>
                    <span class="text-sm">18 岁</span>
                    <span class="text-sm">求职意向： 前端开发工程师</span>
                </div>
                <div class="w-24 h-32 rounded-lg bg-gray-100">
                    <img src="" />
                </div>
            </div>
            <Section title="求职意向">
                <div class="flex gap-10">
                    <span class="text-sm">求职状态：一周内到岗</span>
                    <span class="text-sm">期望职位：前端开发工程师</span>
                    <span class="text-sm">期望地点：深圳</span>
                </div>
            </Section>
            <Section title="技术栈">
                <template v-for="skill in resumeStore.resume.sections?.skills?.items" :key="skill.id">
                    <div v-html="skill.summary" class="text-sm text-gray-700" />

                </template>
            </Section>
            <Section title="项目经历">
                <div class="flex items-center">
                    <span class="font-semibold">
                        AI 智能简历构建器
                    </span>
                    <span class="text-sm text-muted-foreground flex-1 pl-8">
                        全栈开发
                    </span>

                    <span class="text-sm text-muted-foreground">
                        2024.01 - 2024.02
                    </span>
                </div>
                <template v-for="project in resumeStore.resume.sections?.projects?.items" :key="project.id">
                    <div v-html="project.summary" class="text-sm text-gray-700" />
                </template>
            </Section>

            <Section title="教育经历">
                <div class="flex flex-col">
                    <div class="flex justify-between">
                        <span class="font-semibold">
                            深圳大学
                        </span>
                        <span class="text-sm text-muted-foreground">
                            2024.01 - 2024.02
                        </span>
                    </div>
                    <span class="text-sm text-muted-foreground">
                        计算机科学与技术 | 本科
                    </span>
                </div>

            </Section>
        </div>

    </div>
</template>

<style lang="less" scoped></style>