<script setup lang="ts">
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  toast
} from '@lianqq/resume-ui'

import { toTypedSchema, } from '@vee-validate/zod'
import { h } from 'vue'
import { Icon } from '@iconify/vue'
import {z} from 'zod'


const props = withDefaults(defineProps<{
  title?: string
  description?: string,
  submitText?: string,
  formSchema?: z.AnyZodObject
}>(),{
  title:"",
  description:"",
  submitText:"提交",
  formSchema: () => z.object({})
})

const open = defineModel('open',{
  default:false
})

const schema = toTypedSchema(props.formSchema)

const emit = defineEmits<{
  (e: 'submit', values: any): void
}>()

function onSubmit(values: any) {
  emit('submit', values)
}
</script>

<template>
  <Form v-slot="slotProps" as="" keep-values :validation-schema="schema">
    <Dialog v-model:open="open">
      <DialogTrigger as-child>
        <slot name="trigger">
          <Button variant="outline"
            class="w-full py-12 bg-transparent dark:hover:bg-black hover:bg-zinc-50 border-dashed dark:border-zinc-700 dark:hover:border-zinc-500 hover:border-zinc-100 border-zinc-300">
            <Icon icon="lucide:plus" class="dark:text-white text-zinc-700"/>
            <span class="dark:text-white text-zinc-700">
              添加
            </span>
          </Button>
        </slot>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <slot name="header">
            <DialogTitle>{{ title  }}</DialogTitle>
            <DialogDescription>
              {{ description }}
            </DialogDescription>
          </slot>
        </DialogHeader>

        <slot  name="content" v-bind="{...slotProps}">
          <form id="dialogForm" @submit="slotProps.handleSubmit($event, onSubmit)">
            <FormField v-slot="{ componentField }" name="username">
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="shadcn" v-bind="componentField" />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            </FormField>
          </form>
        </slot>

        <DialogFooter>
          <slot name="footer" >
            <Button type="submit" form="dialogForm">
              {{ submitText }}
            </Button>
          </slot>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </Form>
</template>