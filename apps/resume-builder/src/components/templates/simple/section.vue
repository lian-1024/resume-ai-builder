<script lang="ts" setup>
import { useConfig } from '@/composables/use-config';
import { type CSSProperties, computed } from 'vue';
import { TypographyTitle } from '@/components/ui/typography/index';

defineProps<{
  title: string
}>()

defineOptions({
  name: "SimpleSection"
})

const { config } = useConfig()


const titleBgStyles = computed<CSSProperties>(() => ({
  backgroundColor: config.value.secondaryColor,

}))



</script>

<template>
  <div class="flex flex-col gap-2 w-full" >
    <div class="flex flex-col gap-2 relative " >
      <TypographyTitle :title="title" />
      <!-- <div class="absolute z-[-1] top-0 left-0 w-full h-full" :style="titleBgStyles"></div> -->
    </div>
    <slot />
  </div>
</template> 

<style lang="less" scoped></style>