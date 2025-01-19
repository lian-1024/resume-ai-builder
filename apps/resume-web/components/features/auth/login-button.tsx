import { Icon } from '#components'
import { Button } from '@lianqq/resume-ui'

export default defineComponent({
  name: 'LoginButton',
  setup() {
    return () => (
      <Button
        size={'sm'}
        variant={'outline'}
      >
        <Icon
          name="lucide:github"
          class="w-4 h-4 "
        />
        <span>Sign In</span>
      </Button>
    )
  }
})
