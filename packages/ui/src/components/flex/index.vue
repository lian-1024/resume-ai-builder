<script lang="ts" setup>
// 导入必要的Vue组件和类型
import { computed, type CSSProperties } from 'vue'

// 定义组件Props接口
interface Props {
  // 布局方向: 行或列
  direction?: 'row' | 'column'
  // 主轴对齐方式
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'
  // 交叉轴对齐方式
  align?: 'start' | 'end' | 'center' | 'baseline' | 'stretch'
  // 是否换行
  wrap?: boolean
  // 间距大小,可以是数字(px)或字符串
  gap?: number | string
}

// 设置Props默认值
const props = withDefaults(defineProps<Props>(), {
  direction: 'row',
  justify: 'start', 
  align: 'start',
  wrap: false,
  gap: undefined
})

// 获取justify-content的CSS值
const getJustifyContent = (justify: Props['justify']) => {
  const justifyMap = {
    between: 'space-between',
    around: 'space-around',
    evenly: 'space-evenly',
    center: 'center',
    end: 'flex-end',
    start: 'flex-start'
  }
  return justifyMap[justify || 'start']
}

// 获取align-items的CSS值
const getAlignItems = (align: Props['align']) => {
  const alignMap = {
    center: 'center',
    end: 'flex-end',
    baseline: 'baseline',
    stretch: 'stretch',
    start: 'flex-start'
  }
  return alignMap[align || 'start']
}

// 计算最终的样式对象
const styles = computed<CSSProperties>(() => {
  const style: CSSProperties = {
    display: 'flex',
    flexDirection: props.direction,
    justifyContent: getJustifyContent(props.justify), 
    alignItems: getAlignItems(props.align),
    flexWrap: props.wrap ? 'wrap' : 'nowrap'
  }
  
  if (props.gap !== undefined) {
    style.gap = typeof props.gap === 'number' ? `${props.gap}px` : props.gap
  }
  
  return style
})

// 定义组件名称
defineOptions({
  name: "Flex"
})
</script>

<template>
  <!-- Flex容器 -->
  <div :style="styles">
    <slot />
  </div>
</template>