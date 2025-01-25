<script lang="ts" setup>
import { useConfig } from '@/composables/use-config';
import { computed, type CSSProperties } from 'vue';

const { config } = useConfig()

 defineProps<{
  text?:string
  href?: string
}>()

const styles = computed<CSSProperties>(() => ({
  color: config.value.primaryColor
}))
</script>

<template>
  <a :href="href" :style="styles" target="_blank">
    <slot >
      {{ text }}
    </slot>
  </a>
</template>
