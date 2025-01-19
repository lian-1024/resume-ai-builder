<script lang="ts" setup>
import { ref } from 'vue';

// 展示模拟数据 后续根据store渲染
const title = ref('基础信息')

</script>

<template>
    <div class="flex flex-col"> 
      <h1>{{ title }}</h1>
    </div>
</template>

<style lang="less" scoped>
  
</style>