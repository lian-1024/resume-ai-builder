<script lang="ts" setup>
import { Button} from '@lianqq/resume-ui';
import { useIframeResume, IframeMessageTypeMap } from '@/composables/use-iframe'
import { Icon } from '@iconify/vue'
import Tooltip from '@/components/ui/tooltip.vue';
import { AIButton } from '@/components/feature/ai-button';
defineOptions({
  name: 'BuilderHeader'
})

const { exportResumeToPdf } = useIframeResume()


</script>

<template>
  <header
    class="h-12 px-4 flex items-center justify-between dark:text-white text-sm bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800">
    <span>
      Resume Builder / My First Resume
    </span>
    <div class="flex gap-2 items-center">
      <Tooltip>
        <template #trigger>
          <Button @click="exportResumeToPdf" size="sm">
            <Icon icon="lucide:download" />
            <span>下载简历</span>
          </Button>
        </template>
        <template #content>
          下载简历
        </template>
      </Tooltip>
      <AIButton size="sm"/>
    </div>
  </header>
</template>

<style lang="less" scoped></style>
