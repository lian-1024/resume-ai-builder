<script lang="ts" setup>
import { computed, onMounted, ref } from 'vue';
import { Button } from '@lianqq/resume-ui';
import { Icon } from '@iconify/vue';
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

const exportPDF = () => {
    window.print();
};

onMounted(() => {
    addDashedLines();
});
</script>

<template>
    <div class="flex justify-center gap-6">
        <div class="p-4 bg-white absolute top-6 rounded-lg self-start">
            <Button size="icon" class="rounded-lg">
                <Icon icon="lucide:chevron-left" />
            </Button>
        </div>
        <div class=" bg-white mt-6 p-4 relative" :style="styles" ref="pageRef" id="resume-page">
            <canvas id="dashed-lines" ref="canvasRef" class="absolute top-0 left-0 w-full h-full" />
            <h1 v-for="i in 6" :key="i" class="text-2xl font-bold h-96">简历</h1>

        </div>
        <div class="p-4 absolute top-6 bg-white rounded-lg self-start min-w-32">
            <Button type="primary" class="w-full" @click="exportPDF">
                <Icon icon="lucide:printer" />
                导出
            </Button>
        </div>
    </div>
</template>

<style lang="less" scoped></style>