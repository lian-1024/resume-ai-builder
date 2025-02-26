<template>
  <div>
    <Toaster />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
  // Enable Nuxt 3 features
  import {Toaster} from '@lianqq/resume-ui'
</script>
