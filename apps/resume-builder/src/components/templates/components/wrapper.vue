<script setup lang="ts">
import { Flex } from '@lianqq/resume-ui';
const gap = 30;

</script>

<template>
   <Flex  direction="column" :gap="gap">
    <slot/>
   </Flex>
</template>
