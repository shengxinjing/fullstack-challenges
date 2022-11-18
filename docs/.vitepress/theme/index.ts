import DefaultTheme from 'vitepress/theme'
import BFrame from './BFrame.vue'

import './theme.css'
export default {
  ...DefaultTheme,
  enhanceApp(ctx) {
    ctx.app.component('BFrame',BFrame)
  //   DefaultTheme.enhanceApp(ctx)
  //   // ctx.app.component('VueClickAwayExample', VueClickAwayExample)
  }
}