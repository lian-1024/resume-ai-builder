<script lang="ts" setup>
import Modal from '@/components/ui/modal/index.vue'
import { FormField, FormItem,FormLabel,FormDescription,FormMessage, Input, Button, FormControl} from '@lianqq/resume-ui'
import { educationSchema } from '@lianqq/resume-schema'
import * as z from 'zod'
import {toTypedSchema} from '@vee-validate/zod'
defineOptions({
    name: 'AddEducationModal'
})

    const formSchema = toTypedSchema(educationSchema)

const onSubmit = () => {
    console.log('submit')
}
const handleSubmit = (event: Event, onSubmit: Function) => {
    event.preventDefault()
    console.log(event);
    
    onSubmit()
}
</script>

<template>
    <div>
        <Modal title="添加教育经历" description="请填写教育经历信息" submitText="添加" :formSchema="formSchema">
            <template #content>
                <form id="educationForm" class="flex flex-col gap-4" @submit="handleSubmit($event, onSubmit)" >
                    <FormField v-slot="{ componentField }" name="school">
                        <FormItem>
                            <FormLabel>学校名称</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="请输入您的学校名称" v-bind="componentField" />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    </FormField>
                    <FormField v-slot="{ componentField }" name="major">
                        <FormItem>
                            <FormLabel>专业</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="请输入您的专业" v-bind="componentField" />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    </FormField>
                    <FormField v-slot="{ componentField }" name="degree">
                        <FormItem>
                            <FormLabel>学历</FormLabel>
                            <FormControl>
                                <Input type="text" placeholder="请输入您的学历" v-bind="componentField" />
                            </FormControl>
                            <FormMessage/>
                        </FormItem>
                    </FormField>
                </form>
            </template>

            <template>
                <Button type="submit" form="educationForm">
                    添加
                </Button>
            </template>
        </Modal>
    </div>
</template>

<style lang="less" scoped></style>
