<script lang="ts" setup>
import { Input, Label } from '@lianqq/resume-ui'
import { Icon } from '@iconify/vue'
</script>

<template>
    <div class="flex gap-4">
        <div class="w-32 h-40 bg-gray-50">
            <img src="" alt="">
        </div>
        <div class="flex flex-col gap-4">
            <div class="text-lg ">
                小Q
            </div>
            <div class="grid grid-cols-2 grid-rows-3 gap-2">
                <div class="flex items-center">
                    <Icon icon="lucide:phone" class="font-sm text-muted-foreground" />
                    <small class="text-sm text-muted-foreground leading-none ml-2">
                        18888888888
                    </small>
                </div>

                <div class="flex items-center">
                    <Icon icon="lucide:mail" class="font-sm text-muted-foreground" />
                    <small class="text-sm text-muted-foreground leading-none ml-2">
                        2088486180@qq.com
                    </small>
                </div>
                <!-- <div class="flex items-center">
                    <Icon icon="lucide:github" class="font-sm text-muted-foreground" />
                    <small class="text-sm text-muted-foreground leading-none ml-2">
                        https://github.com/lianqq
                    </small>
                </div> -->

                <div>
                    <small class="text-sm text-muted-foreground leading-none">
                        年龄：
                    </small>
                    <small class="text-sm text-muted-foreground leading-none">
                        20
                    </small>
                </div>
                <div>
                    <small class="text-sm text-muted-foreground leading-none">
                        当前身份：
                    </small>
                    <small class="text-sm text-muted-foreground leading-none">
                        学生
                    </small>
                </div>

            </div>
        </div>
    </div>
</template>

