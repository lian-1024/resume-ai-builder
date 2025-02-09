<script lang="ts" setup>
import { Flex } from '@lianqq/resume-ui';
import { computed, type CSSProperties } from 'vue';
import BasicsInfoItem from '@/components/templates/simple/components/info-item.vue';
import { defaultBasics } from '@lianqq/resume-schema';
import { resumeKey, type ResumeProviderProps } from '@/components/preview/provider';
defineOptions({
  name: "SimpleBasic"
})

const {resumeData} = inject<ResumeProviderProps>(resumeKey) || {}
const basics = computed(() => resumeData?.value?.basics || defaultBasics)

const wrapperStyles = computed<CSSProperties>(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%'
}))



</script>

<template>
  <div :style="wrapperStyles" v-show="basics">
    <div class="flex flex-col gap-4">
      <h3 class="scroll-m-20 text-2xl font-semibold tracking-tight" >
        {{ basics.name }}
      </h3>
      <div class="flex flex-col gap-y-2 flex-wrap">
        <Flex  align="center" class="gap-4">
          <BasicsInfoItem icon="lucide:mail" :text="basics.email" />
          <BasicsInfoItem icon="lucide:phone" :text="basics.phone" />
        </Flex>
        <Flex align="center" class="gap-4" v-if="basics.intention">
          <BasicsInfoItem icon="lucide:tag" :text="basics.intention.currentStatus" />
          <BasicsInfoItem icon="lucide:briefcase" :text="basics.intention.positionTitle" />
          <BasicsInfoItem icon="lucide:credit-card" :text="basics.intention.salary" />
          <BasicsInfoItem icon="lucide:map-pin" :text="basics.intention.city"  />
        </Flex>
        <Flex align="center" class="gap-4" v-if="basics.url">
          <BasicsInfoItem :href="basics.url.href" icon="lucide:link" :text="basics.url.label" />
        </Flex>
      </div>
    </div>
    <div v-if="basics.picture" :style="{ width: `${basics.picture.size}px` }" class="h-auto bg-zinc-100">
      <img :src="basics.picture.url"  alt="" class="h-full w-full object-cover">
    </div>
  </div>
</template>

<style lang="less" scoped></style>