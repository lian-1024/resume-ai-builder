<script lang="ts" setup>
import { useConfig } from '@/composables/use-config';
import { type CSSProperties, computed } from 'vue';
import { TypographyTitle } from '@/components/common/typography/index';

defineProps<{
  title: string
}>()

defineOptions({
  name: "SimpleSection"
})

const { config } = useConfig()


const titleBgStyles = computed<CSSProperties>(() => ({
  backgroundColor: config.value.primaryColor,
  opacity:0.1,

}))

const titleWrapperStyles = computed<CSSProperties>(() => ({
  borderLeftColor: config.value.primaryColor,
  borderLeftWidth: "6px",
  borderLeftStyle: "solid",
}))

</script>

<template>
  <div class="flex flex-col gap-2 w-full" >
    <div class="flex flex-col gap-2 px-2 relative " :style="titleWrapperStyles">
      <TypographyTitle :title="title" />
      <div class="absolute top-0 left-0 w-full h-full" :style="titleBgStyles"></div>
    </div>
    <slot />
  </div>
</template> 

<style lang="less" scoped></style>