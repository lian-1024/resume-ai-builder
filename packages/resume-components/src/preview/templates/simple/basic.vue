<script lang="ts" setup>
import IconPrimary from '@/components/icon-primary.vue';
import { Simple } from '@lianqq/resume-schema';
import { } from '@lianqq/resume-ui';
import { computed, ref, type CSSProperties } from 'vue';

// 展示模拟数据 后续根据store渲染
const basics = ref(Simple.basics)

const wrapperStyles = computed<CSSProperties>(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%'
}))


const pictureSize = computed<CSSProperties>(() => ({
  width: `${basics.value?.picture?.size}px`,
}))

</script>

<template>
  <div :style="wrapperStyles">
    <div class="flex flex-col gap-4">
      <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">
        {{ basics?.name }}
      </h3>
      <div class="flex gap-4 items-center">
        <small class="text-sm gap-1 font-medium leading-none flex ">
          <IconPrimary icon="lucide:mail" />
          {{ basics?.email }}
        </small>
        <small class="text-sm gap-1 font-medium leading-none flex ">
          <IconPrimary icon="lucide:phone" />
          {{ basics?.phone }}
        </small>
      </div>
    </div>
    <div :style="pictureSize" class="h-auto bg-zinc-100">
      <img src="@/assets/default-picture.jpg" alt="" class="h-full w-full object-cover">
    </div>
  </div>
</template>

<style lang="less" scoped></style>