import type { App } from 'vue';
import * as components from './components';
import './styles/index.css';
export * from './components';

export const install = (app: App) => {
  Object.entries(components).forEach(([key, component]) => {
    app.component(key, component);
  });
}

export default {
  install
}