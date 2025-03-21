import { defineComponent, type PropType, h } from "vue";
import ResumeActions from "@/components/resume/actions/actions.vue"
import type { ActionType } from "@/constants/actions";

export const WithResumeAction = defineComponent({
    name: 'WithResumeAction',
    props: {
        id: {
            type: String as PropType<string>,
            required: true
        }
    },
    setup(props, { slots, emit }) {


        return () => {
            return h(ResumeActions, {
                ...props,
                onHandle: (actionType: ActionType) => emit('handle', actionType, props.id)
            }, slots)
        }
    }
})
