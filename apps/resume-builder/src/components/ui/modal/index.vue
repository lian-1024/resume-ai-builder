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

import { toTypedSchema } from '@vee-validate/zod'
import { h } from 'vue'
import * as z from 'zod'

const props =defineProps<{
  title?:string
  description?:string,
  submitText?:string,
  formSchema?:ReturnType<typeof toTypedSchema>
}>()


function onSubmit(values: any) {
  toast({
    title: 'You submitted the following values:',
    description: h('pre', { class: 'mt-2 w-[340px] rounded-md bg-slate-950 p-4' }, h('code', { class: 'text-white' }, JSON.stringify(values, null, 2))),
  })
}
</script>

<template>
  <Form v-slot="{ handleSubmit }" as="" keep-values :validation-schema="formSchema">
    <Dialog>
      <DialogTrigger as-child>
        <slot name="trigger">
          <Button variant="outline">
            Trigger
          </Button>
        </slot>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <slot name="header">
            <DialogTitle>{{ title ? title : 'Title' }}</DialogTitle>
            <DialogDescription>
              {{ description ? description : 'Description' }}
            </DialogDescription>
          </slot>
        </DialogHeader>

        <slot name="content">
          <form id="dialogForm" @submit="handleSubmit($event, onSubmit)">
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
          <slot name="footer">
            <Button type="submit" form="dialogForm">
              {{ submitText }}
            </Button>
          </slot>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  </Form>
</template>