<script lang="ts" setup>
import { Icon, type IconProps } from "@iconify/vue";
import { computed, type CSSProperties } from 'vue';
import { useConfig } from '@/composables/use-config';

defineOptions({
  name: "IconPrimary"
})

const props = defineProps<IconProps>()

const { config } = useConfig()

const styles = computed<CSSProperties>(() => ({
  color: config.value.primaryColor
}))

</script>

<template>
  <div :style="styles">
    <Icon v-bind="props" />
  </div>
</template>

<style lang="less" scoped></style>