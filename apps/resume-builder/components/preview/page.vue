<script lang="ts" setup>
import type { CSSProperties } from 'vue';
import { MM_TO_PX, pageSizeMap, type PageSize } from './page-size';

defineOptions({
  name: 'PreviewPage'
})

const props = defineProps<{
  pageSize: PageSize
}>()

const pageMeta  = {
  scale:0.5
}

const style = computed<CSSProperties>(() => {
 return {
  width: `${pageSizeMap[props.pageSize].width * MM_TO_PX}px`,
  height: `${pageSizeMap[props.pageSize].height * MM_TO_PX}px`,
 }
})

</script>

<template>
  <div :style="style" class="shadow-lg transform scale-[0.9]   overflow-auto">
    <slot />
  </div>
</template>
