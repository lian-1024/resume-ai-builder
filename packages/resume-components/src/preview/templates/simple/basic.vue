<script lang="ts" setup>
import IconPrimary from '@/components/icon-primary.vue';
import { Icon } from '@iconify/vue';
import { Simple } from '@lianqq/resume-schema';
import { ref } from 'vue';

// 展示模拟数据 后续根据store渲染
const basics = ref(Simple.basics)

</script>

<template>
  <div class="flex flex-col">
    <div class="flex flex-col">
      <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight">
        {{ basics?.name }}
      </h3>
      <div class="flex gap-2">
        <small class="text-sm font-medium leading-none">
          <IconPrimary icon="lucide:mail" />
          {{ basics?.email }}
        </small>
        <small class="text-sm font-medium leading-none">
          <Icon icon="lucide:phone" />
          {{ basics?.phone }}
        </small>
      </div>
    </div>
    <div>
      <img src="" alt="">
    </div>
  </div>
</template>

<style lang="less" scoped></style>