<script lang="ts" setup>
import { useConfig } from '@/componsables/useConfig';
import { type CSSProperties, computed } from 'vue';

defineProps<{
  title: string
}>()

defineOptions({
  name: "Section"
})

const { config } = useConfig()

const titleStyles = computed<CSSProperties>(() => ({
  color: config.value.primaryColor,

}))

const titleBgStyles = computed<CSSProperties>(() => ({
  backgroundColor: config.value.primaryColor,
  opacity:0.1,

}))

const titleWrapperStyles = computed<CSSProperties>(() => ({
  borderLeftColor: config.value.primaryColor,
  borderLeftWidth: "4px",
  borderLeftStyle: "solid",
}))

</script>

<template>
  <div class="flex flex-col gap-2 w-full" >
    <div class="flex flex-col gap-2 relative p-2" :style="titleWrapperStyles">

      <h1 class="text-2xl font-bold pb-2" :style="titleStyles">{{ title }}</h1>
      <div class="absolute top-0 left-0 w-full h-full" :style="titleBgStyles"></div>
    </div>
    <slot />
  </div>
</template> 

<style lang="less" scoped></style>