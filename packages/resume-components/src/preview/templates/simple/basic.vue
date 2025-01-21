<script lang="ts" setup>
import IconPrimary from '@/components/icon-primary.vue';
import { Simple } from '@lianqq/resume-schema';
import { } from '@lianqq/resume-ui';
import { computed, ref, type CSSProperties } from 'vue';
import LinkPrimary from '@/components/link-primary.vue';
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
      <div class="flex gap-4 gap-y-2 items-center flex-wrap">
        <div class="flex items-center gap-1">
          <IconPrimary icon="lucide:mail" />
          <small class="text-sm font-medium leading-none whitespace-nowrap">
            {{ basics?.email }}
          </small>
        </div>

        <div class="flex items-center gap-1">
          <IconPrimary icon="lucide:phone" />
          <small class="text-sm  font-medium leading-none whitespace-nowrap">
            {{ basics?.phone }}
          </small>
        </div>

        <div class="flex items-center gap-1">
          <IconPrimary icon="lucide:map-pin" />
          <small class="text-sm  font-medium leading-none whitespace-nowrap">
            {{ basics?.location}}
          </small>
        </div>
        <div class="flex items-center gap-1">
          <IconPrimary icon="lucide:github" />
          <small  class="text-sm  font-medium leading-none whitespace-nowrap">
           <LinkPrimary :href="basics?.url?.href || ''">
            {{ basics?.url?.href}}
           </LinkPrimary>
          </small>
        </div>
      </div>
    </div>
    <div :style="pictureSize" class="h-auto bg-zinc-100">
      <img src="@/assets/default-picture.jpg" alt="" class="h-full w-full object-cover">
    </div>
  </div>
</template>

<style lang="less" scoped></style>