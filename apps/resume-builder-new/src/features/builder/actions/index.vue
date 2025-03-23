<script setup lang="ts">
import { Button } from '@lianqq/resume-ui';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
import { exportPDF } from '@/utils/export-pdf';
import { toast } from '@lianqq/resume-ui';
defineOptions({
  name: 'BuilderActions'
})

const router = useRouter()

const handlePreview = () => {
  router.push('/preview')
}

const handleExportPDF = async () => {
  const res = await exportPDF()
  if (res) {
    toast({
      title: '下载成功',
    });
  } else {
    toast({
      title: '下载失败',
      variant: 'destructive',
    });
  }
}
</script>

<template>
  <div class="p-4 rounded-lg flex flex-col gap-2 min-w-40">
    <Button @click="handlePreview">
      <Icon icon="lucide:eye" />
      预览
    </Button>
    <Button @click="handleExportPDF">
      <Icon icon="lucide:download" />
      下载
    </Button>
  </div>
</template>