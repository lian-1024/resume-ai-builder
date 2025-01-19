<script lang="ts" setup>

defineProps<{
  title: string
}>()
</script>

<template>
  <div class="flex flex-col gap-4">
    <h1>{{ title }}</h1>
    <slot/>
  </div>
</template>

<style lang="less" scoped>
</style>