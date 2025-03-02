<script lang="ts" setup>
import { computed, type CSSProperties } from 'vue';
import { pageSizeMap, type PageSize } from '@lianqq/resume-utils'

defineOptions({
  name: 'PreviewPage'
})

const props = defineProps<{
  pageSize: PageSize
}>()

const pageMeta = {
  scale: 0.5
}

const style = computed<CSSProperties>(() => {
  console.log("pageSizeMap[props.pageSize]", pageSizeMap[props.pageSize])
  return {
    width: `${pageSizeMap[props.pageSize].width}mm`,
    height: `${pageSizeMap[props.pageSize].height}mm`,
  }
})

</script>

<template>
  <div id="resume-page" :style="{...style,boxShadow: '0 0 10px 0 rgba(0, 0, 0, 0.1)'}" class="transform scale-[0.9]  bg-white overflow-auto"
  >
    <slot />
  </div>
</template>
