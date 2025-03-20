<script lang="ts" setup>
import { Button} from '@lianqq/resume-ui';
import { useIframeResume, IframeMessageTypeMap } from '../../../../../../packages/resume-utils/src/composables/use-iframe'
import { Icon } from '@iconify/vue'
import Tooltip from '@/components/ui/tooltip.vue';
import { AIButton } from '@/components/feature/optimizer-button';
defineOptions({
  name: 'BuilderHeader'
})



</script>

<template>
  <header
    class="h-12 px-4 flex items-center justify-between dark:text-white text-sm bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
    <span>
      Resume Builder / My First Resume
    </span>
    
  </header>
</template>

<style lang="less" scoped></style>
