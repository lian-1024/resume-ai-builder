<script lang="ts" setup>
import { Button } from '@lianqq/resume-ui'
import { Icon } from '@iconify/vue'
import { computed, type CSSProperties } from 'vue'

defineOptions({
    name: 'PreviewActions'
})

const props = defineProps<{
    /** 是否垂直布局 */
    vertical?: boolean,
    /** 当前缩放比例 */
    scale?: number
}>()

// 样式
const styles = computed<CSSProperties>(() => {
    return {
        flexDirection: props.vertical ? 'column' : 'row'
    }
})


// 格式化缩放比例显示
const formattedScale = computed(() => {
    return `${Math.round((props.scale || 1) * 100)}%`
})

</script>

<template>
    <div :style="styles" class="flex gap-2">
        <Button size="icon">
            <Icon icon="lucide:download" />
        </Button>
        <div v-if="scale" class="text-white text-sm flex items-center justify-center">
            {{ formattedScale }}
        </div>
    </div>
</template>

<style lang="less" scoped></style>
