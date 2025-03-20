<script lang="ts" setup>
import { Input } from '@lianqq/resume-ui';
import Item from './item.vue'
defineProps<{
    title: string;
    placeholder: string;
}>();
defineOptions({
    name: 'InputItem'
})

const value = defineModel<string>();

</script>

<template>
    <Item :title="title" :placeholder="placeholder">  
        <Input :placeholder="placeholder" v-model="value" />
    </Item>
</template>

<style lang="less" scoped></style>
