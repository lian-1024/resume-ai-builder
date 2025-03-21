<script lang="ts" setup>
import { useForm } from 'vee-validate'
import { FormDescription, FormField, FormItem, FormLabel, FormControl, Input, Button, FormMessage } from '@lianqq/resume-ui'
import * as z from 'zod'
import { toTypedSchema } from '@vee-validate/zod'
import { basicsSchema, type Basics } from '@lianqq/resume-schema'


type FormData = z.infer<typeof basicsSchema>

const form = useForm<FormData>({
    validationSchema: toTypedSchema(basicsSchema),
})

const onSubmit = form.handleSubmit((values) => {
    console.log('提交的值：', values)
})


</script>

<template>
    <div class="flex gap-4">
        <div class="w-32 h-40 bg-gray-50">
            <img src="" alt="">
        </div>
        <div class="flex flex-col gap-4">
            <form @submit.prevent="onSubmit" class="gap-4 grid grid-cols-2 ">
                <span class="text-md col-span-2 border-b border-gray-200 pb-2">基本信息</span>
                <FormField :validate-on-blur="!form.isFieldDirty" v-slot="{ componentField, field, errorMessage }"
                    name="name">
                    <FormItem>
                        <FormLabel>姓名</FormLabel>
                        <FormControl>
                            <Input v-bind="componentField" @blur="field.onBlur" type="text" placeholder="请输入姓名" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <FormField v-slot="{ field, errorMessage }" name="email">
                    <FormItem>
                        <FormLabel>邮箱</FormLabel>
                        <FormControl>
                            <Input v-model="field.value" @blur="field.onBlur" :error="!!errorMessage" type="email"
                                placeholder="请输入邮箱" />
                        </FormControl>
                        <FormMessage v-if="errorMessage">
                            {{ errorMessage }}
                        </FormMessage>
                    </FormItem>
                </FormField>

                <FormField v-slot="{ field, errorMessage }" name="phone">
                    <FormItem>
                        <FormLabel>电话</FormLabel>
                        <FormControl>
                            <Input v-model="field.value" @blur="field.onBlur" :error="!!errorMessage" type="tel"
                                placeholder="请输入手机号码" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>


                <span class="text-md col-span-2 border-b border-gray-200 pb-2">意向</span>

                <FormField v-slot="{ field, errorMessage }" name="intention.currentStatus">
                    <FormItem>
                        <FormLabel>当前状态</FormLabel>
                        <FormControl>
                            <Input v-model="field.value" @blur="field.onBlur" :error="!!errorMessage" type="tel"
                                placeholder="请输入当前状态" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>


                <FormField v-slot="{ field, errorMessage }" name="intention.positionTitle">
                    <FormItem>
                        <FormLabel>意向职位</FormLabel>
                        <FormControl>
                            <Input v-model="field.value" @blur="field.onBlur" :error="!!errorMessage" type="tel"
                                placeholder="请输入手机号码" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>

                <FormField v-slot="{ field, errorMessage }" name="intention.salary">
                    <FormItem>
                        <FormLabel>薪资</FormLabel>
                        <FormControl>
                            <Input v-model="field.value" @blur="field.onBlur" :error="!!errorMessage" type="tel"
                                placeholder="请输入薪资" />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                </FormField>


                <FormField v-slot="{ field, errorMessage }" name="intention.city">
                    <FormItem>
                        <FormLabel>城市</FormLabel>
                        <FormControl>
                            <Input v-model="field.value" @blur="field.onBlur" :error="!!errorMessage" type="tel"
                                placeholder="请输入城市" />
                        </FormControl>
                        <FormMessage />

                    </FormItem>
                </FormField>



            </form>
        </div>
    </div>
</template>

<style lang="less" scoped></style>
