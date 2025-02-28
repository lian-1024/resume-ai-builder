import type { App } from 'vue'
import { autoScroll } from './auto-scroll'

const setupDirective = (app: App) => {
    app.directive('auto-scroll', autoScroll)
}

export default setupDirective
export { autoScroll }