<script lang="ts" setup>
import { useResumeStore } from '@/stores';
import { Input, Button } from '@lianqq/resume-ui'
import { Icon } from '@iconify/vue'
import { computed } from 'vue';
import { defaultBasics } from '@lianqq/resume-schema'

const resumeStore = useResumeStore()

const basics = computed(() => {
    return resumeStore.resume.basics || defaultBasics
})

const intention = computed(() => {
    return resumeStore.resume.sections?.intention
})


</script>

<template>
    <div class="flex gap-4">
        <div class="w-36 h-44 rounded-lg bg-gray-100">
            <img :src="basics.avatar" />
        </div>
        <div class="flex flex-col gap-4">
            <h4 class="scroll-m-20 text-xl font-semibold tracking-tight">
                {{ basics.name }}
            </h4>
            <div class="grid grid-cols-[repeat(3,minmax(100px,auto))] gap-4 justify-start">
                <div class="flex items-center gap-2 text-muted-foreground">
                    <Icon icon="lucide:phone" />
                    <p class="text-sm text-black">
                        {{ basics.phone }}
                    </p>
                </div>
                <div class="flex items-center gap-2 text-muted-foreground">
                    <Icon icon="lucide:mail" />
                    <p class="text-sm text-black">
                        {{ basics.email }}
                    </p>
                </div>

            </div>
            <div class="flex flex-wrap gap-4 mt-4">
                <p class="text-sm text-muted-foreground">
                    <span>意向城市：</span><span class="text-black">{{ intention?.location }}</span>
                </p>
                <p class="text-sm text-muted-foreground">
                    <span>期望薪资：</span><span class="text-black">{{ intention?.salary }}</span>
                </p>
                <p class="text-sm text-muted-foreground">
                    <span>求职状态：</span><span class="text-black">{{ intention?.status }}</span>
                </p>
                <p class="text-sm text-muted-foreground">
                    <span>期望职位：</span><span class="text-black">{{ intention?.position }}</span>
                </p>
            </div>
        </div>


    </div>
</template>

<style lang="less" scoped></style>
