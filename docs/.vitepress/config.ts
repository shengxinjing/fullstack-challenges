
export default {
  title: '前端挑战题',
  description: '前端挑战题|Vue3|React|Vite|Cli',
  head: [
    // ['link', { rel: 'icon', href: 'https://cdn.jsdelivr.net/gh/shengxinjing/static/element3.ico', type: 'image/svg+xml' }],
    ['link', { rel: 'alternate icon', href: 'https://cdn.jsdelivr.net/gh/shengxinjing/static/woniu.png', type: 'image/png', sizes: '16x16' }],
  ],
  // base:"/src/"
  themeConfig: {
    logo: 'https://cdn.jsdelivr.net/gh/shengxinjing/static/woniu.png',
    nav: [
      { text: 'Vue3', link: '/vue/' },
      { text: 'React', link: '/react/' },
      { text: 'JS', link: '/js/' },
      { text: 'TS', link: '/ts/' },
      { text: '设计题', link: '/design/' },
      { text: '前端架构师指南', link: 'https://web-architect.netlify.app/' },
      { text: '前端源码漫游记', link: 'https://source-tour.netlify.app/' },
    ],
    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/channels/987387170232868904/987387170794922005' },
      { icon: 'github', link: 'https://github.com/shengxinjing/fullstack-challenges' },
      { icon: 'twitter', link: 'https://twitter.com/shengxj1' },
    ],
    sidebar: {
      '/': [
        {
          text: '使用指南',
          items: [
            { text: '使用说明', link: '/desc' },
          ],
        },
        {
          text: 'JS挑战',
          items: [
            { text: '开发步骤', link: '/js/' },
          ],
        },
        {
          text: 'Vue挑战',
          items: [
            { text: 'Vue3架构', link: '/vue/' },
            { text: '1・热身', link: '/vue/1-hello-word' },
            { text: '2・ref全家桶', link: '/vue/2-ref-family' },
            { text: '3・响应性丟失', link: '/vue/3-losing-reactivity' },
            { text: '4・可写的计算属性', link: '/vue/4-writable-computed' },
            { text: '5・watch 全家桶', link: '/vue/5-watch-family' },
            { text: '6・浅层 ref', link: '/vue/6-shallow-ref' },
            { text: '7・原始值 API', link: '/vue/7-raw-api' },
            { text: '8・Effect作用域 API', link: '/vue/8-effect-scope' },
            { text: '9・依赖注入', link: '/vue/9-dependency-injection' },
            { text: '10・生命周期钩子', link: '/vue/10-lifecycle' },
            { text: '11・下一次DOM更新', link: '/vue/11-next-dom-update' },
            { text: '12・优化性能的指令', link: '/vue/12-optimize-perf-directive' },
            { text: '13・DOM传送门', link: '/vue/13-dom-portal' },
            { text: '14・动态CSS', link: '/vue/14-dynamic-css-values' },
            { text: '15・切换器', link: '/vue/15-useToggle' },
            { text: '16・until', link: '/vue/16-until' },
            { text: '17・计数器', link: '/vue/17-useCounter' },
            { text: '18・实现本地存储函数', link: '/vue/18-useLocalStorage' },
            { text: '19・切换焦点指令', link: '/vue/19-v-focus' },
            { text: '20・防抖点击指令', link: '/vue/20-v-debounce-click' },
            { text: '21・函数式组件', link: '/vue/21-functional-component' },
            { text: '22・自定义元素', link: '/vue/22-custom-element' },
            { text: '23・自定义ref', link: '/vue/23-custom-ref' },
            { text: '24・激活的样式-指令', link: '/vue/24-v-active-style' },
            { text: '25・鼠标坐标', link: '/vue/25-useMouse' },
            { text: '26・实现简易版`v-model`', link: '/vue/26-v-model' },
            { text: '27・全局CSS', link: '/vue/27-global-css' },
            { text: '208・树组件', link: '/vue/208-tree-component' },
            { text: '218・渲染函数[h()]', link: '/vue/218-h-render-function' },
            { text: '232・按键修饰符', link: '/vue/232-key-modifiers' },
            { text: '243・阻止事件冒泡 ', link: '/vue/243-prevent-event-propagation' },
            { text: '305・大写', link: '/vue/305-capitalize' },
            { text: '323・Prop验证', link: '/vue/323-prop-validation' },
            
          ],
        },
        {
          text: 'TS挑战',
          items: [
            { text: '开发步骤', link: '/ts/' },
          ],
        },

        {
          text: 'React挑战',
          items: [
            { text: 'React架构介绍', link: '/react/' },
          ],
        },
        {
          text: '系统设计挑战',
          items: [
            { text: 'webpack', link: '/design/' },
          ],
        },

      ],
    },
  }
}