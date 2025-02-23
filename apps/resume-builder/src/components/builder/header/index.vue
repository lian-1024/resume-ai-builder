<script lang="ts" setup>
import { Button, Tooltip, TooltipTrigger, TooltipProvider, TooltipContent } from '@lianqq/resume-ui';
import { printElementPdf } from '@/utils/print-pdf';
import { ref } from 'vue';
import { useIframeResume, IframeMessageTypeMap } from '@/composables/use-iframe'
import { Icon } from '@iconify/vue'
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
    <div class="flex">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Button   @click="exportResumeToPdf" size="sm">
              <Icon icon="lucide:download" />
              <span>下载简历</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            下载简历
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>

    </div>
  </header>
</template>

<style lang="less" scoped></style>
