<script lang="ts" setup>
import { Icon, type IconProps } from "@iconify/vue";
import { computed, ref, type CSSProperties } from 'vue';

defineOptions({
  name: "IconPrimary"
})

const props = defineProps<IconProps>()

const primaryColor = ref<string>("#4672f1")

const styles = computed<CSSProperties>(() => ({
  color: primaryColor.value
}))

</script>

<template>
  <div :style="styles">
    <Icon v-bind="props" />
  </div>
</template>

<style lang="less" scoped></style>