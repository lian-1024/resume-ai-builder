<script setup lang="ts">
import IconPrimary from '@/components/templates/components/icon-primary.vue';
import LinkPrimary from '@/components/templates/components/link-primary.vue';

withDefaults(
    defineProps<{
        icon?: string;
        text?: string;
        href?: string;
    }>(),
    {
        text: '',
        icon: ''
    }
)

defineOptions({
    name: "BasicsInfoItem"
})
</script>

<template>
    <div class="flex items-center gap-1" v-show="text">
        <slot>
            <IconPrimary :icon="icon" />
            <template v-if="!href">
                <small class="text-sm font-medium leading-none whitespace-nowrap min-w-10">
                    {{ text }}
                </small>
            </template>
            <template v-else>
                <LinkPrimary :href="href">
                    {{ text }} 
                </LinkPrimary>
            </template>
        </slot>
    </div>
</template>
