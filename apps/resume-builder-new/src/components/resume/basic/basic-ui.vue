<script lang="ts" setup>
import { useResumeStore } from '@/stores';
import { Input } from '@lianqq/resume-ui'
import { computed } from 'vue';
import { defaultBasics } from '@lianqq/resume-schema'
import { Icon } from '@iconify/vue/dist/iconify.js';

const resumeStore = useResumeStore()

const basics = computed(() => {
    return resumeStore.resume.basics || defaultBasics
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
                    <p class="text-sm text-muted-foreground">
                        {{ basics.phone }}
                    </p>
                </div>
                <div class="flex items-center gap-2 text-muted-foreground">
                    <Icon icon="lucide:mail" />
                    <p class="text-sm text-muted-foreground">
                        {{ basics.email }}
                    </p>
                </div>

            </div>
            <div class="flex flex-wrap gap-4 mt-4">

                <p class="text-sm text-muted-foreground">
                    意向城市：{{ basics.intention?.city }}
                </p>
                <p class="text-sm text-muted-foreground">
                    期望薪资：{{ basics.intention?.salary }}
                </p>
                <p class="text-sm text-muted-foreground">
                    求职状态：{{ basics.intention?.currentStatus }}
                </p>
            </div>
        </div>
    </div>
</template>

<style lang="less" scoped></style>
