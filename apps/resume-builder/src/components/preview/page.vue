<script lang="ts" setup>
import { computed, onMounted, ref, type CSSProperties } from 'vue';
import { pageSizeMap, type PageSize } from '@lianqq/resume-utils'
import { useRoute } from 'vue-router';
import { Button } from '@lianqq/resume-ui';
import { useEventListener } from '@vueuse/core'
import PanZoomButton from '@/components/feature/pan-zoom-button/pan-zoom-button.vue'
import { usePanZoom } from '@/composables/use-pan-zoom';

defineOptions({
  name: 'PreviewPage'
})

const props = defineProps<{
  pageSize: PageSize
}>()

const route = useRoute()
const isFullScreen = ref(false)


const pageStyle = computed<CSSProperties>(() => {
  return {
    width: `${pageSizeMap[props.pageSize].width}mm`,
    // height: `${pageSizeMap[props.pageSize].height}mm`,
  }
})


const pageRef = ref<HTMLDivElement | null>(null)

const { instance, initialPanzoom, zoomIn, zoomOut, reset, pan } = usePanZoom()

onMounted(() => {
  isFullScreen.value = Boolean(route.query.fullScreen)
  initialPanzoom(pageRef.value!)
})



</script>

<template>

  <div ref="pageRef">
    <!-- <VueZoomable v-bind="ZoomableProps" :pan-y="0"> -->
    <div id="resume-page" :style="pageStyle" :class="`bg-white ${!isFullScreen && 'shadow-lg'}`">
      <slot />
    </div>
    <!-- </VueZoomable> -->
  </div>
  <!-- <PreviewActions class="absolute top-1/2 -translate-y-1/2 right-6" /> -->
  <PanZoomButton @zoom-in="zoomIn" @zoom-out="zoomOut" @reset="reset"
    class="absolute bottom-10 left-1/2 -translate-x-1/2" />

</template>
