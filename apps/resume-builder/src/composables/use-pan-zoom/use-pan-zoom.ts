import Panzoom, { type PanOptions, type PanzoomObject, type PanzoomOptions, type ZoomOptions } from "@panzoom/panzoom";
import { ref } from "vue";
import { useEventListener } from "@vueuse/core";
const defaultOptions: PanzoomOptions = {
    maxScale: 5,    // 最大缩放比例
    minScale: 0.5,  // 最小缩放比例
    step: 0.05,       // 滚轮缩放步长
    startScale: 0.9,
    // initialY: 30,
}

const defaultZoomOptions: ZoomOptions = {
    animate: true,
    step: 0.03,
}

export const usePanZoom = (options: PanzoomOptions = defaultOptions, zoomOptions: ZoomOptions = defaultZoomOptions) => {
    const instance = ref<PanzoomObject | null>(null)


    const initialPanzoom = (instanceRef: HTMLElement) => {

        instance.value = Panzoom(instanceRef, options)

        // 监听滚轮事件
        useEventListener(instanceRef, 'wheel', (event: WheelEvent) => {
            instance.value?.zoomWithWheel(event)
        })
    }

    const zoomIn = () => {
        if (!instance.value) throw new Error('instance is null')
        instance.value.zoomIn(zoomOptions)
    }

    const zoomOut = () => {
        if (!instance.value) throw new Error('instance is null')
        instance.value.zoomOut(zoomOptions)
    }

    const reset = () => {
        if (!instance.value) throw new Error('instance is null')
        instance.value.reset()
    }

    const pan = (x: number, y: number) => {
        if (!instance.value) throw new Error('instance is null')
        instance.value.pan(x, y)
    }

    return {
        instance,
        initialPanzoom,
        zoomIn,
        zoomOut,
        reset,
        pan,
    }
}