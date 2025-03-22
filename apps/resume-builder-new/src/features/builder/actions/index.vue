<script setup lang="ts">
import { Button } from '@lianqq/resume-ui';
import { Icon } from '@iconify/vue';
import { useRouter } from 'vue-router';
defineOptions({
  name: 'BuilderActions'
})

const router = useRouter()

const handlePreview = () => {
  router.push('/preview')
}
</script>

<template>
  <div class="p-4 rounded-lg flex flex-col gap-2 min-w-40">
    <Button @click="handlePreview">
      <Icon icon="lucide:eye" />
      预览
    </Button>
  </div>
</template>