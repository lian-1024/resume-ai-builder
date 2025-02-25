<script setup lang="ts">
// 导入图标组件
import { Icon } from '@iconify/vue'
// 导入UI组件
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  Button, buttonVariants ,
  RangeCalendarCell,
  RangeCalendarCellTrigger,
  RangeCalendarGrid,
  RangeCalendarGridBody,
  RangeCalendarGridHead,
  RangeCalendarGridRow,
  RangeCalendarHeadCell,
} from '@/components'

// 导入工具函数
import { cn } from '@/lib/utils'
// 导入日期相关类型和函数
import {
  CalendarDate,
  type DateValue,
  isEqualMonth,
} from '@internationalized/date'

// 导入日期范围选择器相关组件和工具
import { type DateRange, RangeCalendarRoot, useDateFormatter } from 'radix-vue'
import { createMonth, type Grid, toDate } from 'radix-vue/date'
import { type Ref, ref, watch } from 'vue'

// 初始化日期范围值
const value = ref({
  start: new CalendarDate(2022, 1, 20),
  end: new CalendarDate(2022, 1, 20).add({ days: 20 }),
}) as Ref<DateRange>

// 设置本地化
const locale = ref('en-US')
const formatter = useDateFormatter(locale.value)

// 设置占位符日期
const placeholder = ref(value.value.start) as Ref<DateValue>
const secondMonthPlaceholder = ref(value.value.end) as Ref<DateValue>

const emits = defineEmits<{
  (e: 'update:value', dateRange: DateRange): void
}>()

// 创建第一个月份日历网格
const firstMonth = ref(
  createMonth({
    dateObj: placeholder.value,
    locale: locale.value,
    fixedWeeks: true,
    weekStartsOn: 0,
  }),
) as Ref<Grid<DateValue>>

// 创建第二个月份日历网格
const secondMonth = ref(
  createMonth({
    dateObj: secondMonthPlaceholder.value,
    locale: locale.value,
    fixedWeeks: true,
    weekStartsOn: 0,
  }),
) as Ref<Grid<DateValue>>

/**
 * 更新月份
 * @param reference 更新第一个月还是第二个月
 * @param months 月份增减值
 */
function updateMonth(reference: 'first' | 'second', months: number) {
  console.log("reference:",reference,"months:",months);
  if (reference === 'first') {
    placeholder.value = placeholder.value.add({ months })
  }
  else {
    secondMonthPlaceholder.value = secondMonthPlaceholder.value.add({
      months,
    })
  }
}

// 监听第一个占位符变化
watch(placeholder, (_placeholder) => {
  // 更新第一个月份日历
  firstMonth.value = createMonth({
    dateObj: _placeholder,
    weekStartsOn: 0,
    fixedWeeks: false,
    locale: locale.value,
  })
  // 如果两个月份相同,第二个月份加1
  if (isEqualMonth(secondMonthPlaceholder.value, _placeholder)) {
    secondMonthPlaceholder.value = secondMonthPlaceholder.value.add({
      months: 1,
    })
  }
})

// 监听第二个占位符变化
watch(secondMonthPlaceholder, (_secondMonthPlaceholder) => {
  // 更新第二个月份日历
  secondMonth.value = createMonth({
    dateObj: _secondMonthPlaceholder,
    weekStartsOn: 0,
    fixedWeeks: false,
    locale: locale.value,
  })
  // 如果两个月份相同,第一个月份减1
  if (isEqualMonth(_secondMonthPlaceholder, placeholder.value))
    placeholder.value = placeholder.value.subtract({ months: 1 })
})

watch(value, (newDateRange,oldDateRange) => {
  emits('update:value', newDateRange)
})
</script>

<template>
  <!-- 弹出层组件 -->
  <Popover>
    <!-- 触发按钮 -->
    <PopoverTrigger as-child>
      <Button
        variant="outline"
        :class="
          cn(
            'w-[280px] justify-start text-left font-normal',
            !value && 'text-muted-foreground',
          )
        "
      >
        <!-- 日历图标 -->
        <Icon icon="lucide:calendar"  class="mr-2 h-4 w-4"/>
        <!-- 显示选中的日期范围 -->
        <template v-if="value.start">
          <template v-if="value.end">
            {{
              formatter.custom(toDate(value.start), {
                dateStyle: "medium",
              })
            }}
            -
            {{
              formatter.custom(toDate(value.end), {
                dateStyle: "medium",
              })
            }}
          </template>

          <template v-else>
            {{
              formatter.custom(toDate(value.start), {
                dateStyle: "medium",
              })
            }}
          </template>
        </template>
        <template v-else>
          Pick a date
        </template>
      </Button>
    </PopoverTrigger>
    <!-- 弹出内容 -->
    <PopoverContent class="w-auto p-0">
      <!-- 日期范围选择器根组件 -->
      <RangeCalendarRoot v-slot="{ weekDays }" v-model="value" v-model:placeholder="placeholder" class="p-3">
        <div
          class="flex flex-col gap-y-4 mt-4 sm:flex-row sm:gap-x-4 sm:gap-y-0"
        >
          <!-- 第一个月份日历 -->
          <div class="flex flex-col gap-4">
            <!-- 月份导航 -->
            <div class="flex items-center justify-between">
              <button
                :class="
                  cn(
                    buttonVariants({ variant: 'outline' }),
                    'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                  )
                "
                @click="updateMonth('first', -1)"
              >
                <Icon icon="lucide:chevron-left" class="h-4 w-4" />
              </button>
              <div
                :class="cn('text-sm font-medium')"
              >
                {{
                  formatter.fullMonthAndYear(
                    toDate(firstMonth.value),
                  )
                }}
              </div>
              <button
                :class="
                  cn(
                    buttonVariants({ variant: 'outline' }),
                    'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                  )
                "
                @click="updateMonth('first', 1)"
              >
                <Icon icon="lucide:chevron-right" class="h-4 w-4" />
              </button>
            </div>
            <!-- 日历网格 -->
            <RangeCalendarGrid>
              <!-- 星期表头 -->
              <RangeCalendarGridHead>
                <RangeCalendarGridRow>
                  <RangeCalendarHeadCell
                    v-for="day in weekDays"
                    :key="day"
                    class="w-full"
                  >
                    {{ day }}
                  </RangeCalendarHeadCell>
                </RangeCalendarGridRow>
              </RangeCalendarGridHead>
              <!-- 日期单元格 -->
              <RangeCalendarGridBody>
                <RangeCalendarGridRow
                  v-for="(
                    weekDates, index
                  ) in firstMonth.rows"
                  :key="`weekDate-${index}`"
                  class="mt-2 w-full"
                >
                  <RangeCalendarCell
                    v-for="weekDate in weekDates"
                    :key="weekDate.toString()"
                    :date="weekDate"
                  >
                    <RangeCalendarCellTrigger
                      :day="weekDate"
                      :month="firstMonth.value"
                    />
                  </RangeCalendarCell>
                </RangeCalendarGridRow>
              </RangeCalendarGridBody>
            </RangeCalendarGrid>
          </div>
          <!-- 第二个月份日历 -->
          <div class="flex flex-col gap-4">
            <!-- 月份导航 -->
            <div class="flex items-center justify-between">
              <button
                :class="
                  cn(
                    buttonVariants({ variant: 'outline' }),
                    'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                  )
                "
                @click="updateMonth('second', -1)"
              >
                <Icon icon="lucide:chevron-left" class="h-4 w-4" />
              </button>
              <div
                :class="cn('text-sm font-medium')"
              >
                {{
                  formatter.fullMonthAndYear(
                    toDate(secondMonth.value),
                  )
                }}
              </div>

              <button
                :class="
                  cn(
                    buttonVariants({ variant: 'outline' }),
                    'h-7 w-7 bg-transparent p-0 opacity-50 hover:opacity-100',
                  )
                "
                @click="updateMonth('second', 1)"
              >
                  <Icon icon="lucide:chevron-right" class="h-4 w-4" />
              </button>
            </div>
            <!-- 日历网格 -->
            <RangeCalendarGrid>
              <!-- 星期表头 -->
              <RangeCalendarGridHead>
                <RangeCalendarGridRow>
                  <RangeCalendarHeadCell
                    v-for="day in weekDays"
                    :key="day"
                    class="w-full"
                  >
                    {{ day }}
                  </RangeCalendarHeadCell>
                </RangeCalendarGridRow>
              </RangeCalendarGridHead>
              <!-- 日期单元格 -->
              <RangeCalendarGridBody>
                <RangeCalendarGridRow
                  v-for="(
                    weekDates, index
                  ) in secondMonth.rows"
                  :key="`weekDate-${index}`"
                  class="mt-2 w-full"
                >
                  <RangeCalendarCell
                    v-for="weekDate in weekDates"
                    :key="weekDate.toString()"
                    :date="weekDate"
                  >
                    <RangeCalendarCellTrigger
                      :day="weekDate"
                      :month="secondMonth.value"
                    />
                  </RangeCalendarCell>
                </RangeCalendarGridRow>
              </RangeCalendarGridBody>
            </RangeCalendarGrid>
          </div>
        </div>
      </RangeCalendarRoot>
    </PopoverContent>
  </Popover>
</template>