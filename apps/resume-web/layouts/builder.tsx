export default defineComponent({
  name: 'BuilderLayout',
  setup() {
    return () => (
      <div>
        <slot />
      </div>
    )
  }
})
