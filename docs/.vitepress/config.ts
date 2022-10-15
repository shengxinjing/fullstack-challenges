
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
      { text: '企业级应用开发文档', link: 'https://dasheng.netlify.app/' },
      { text: '前端源码漫游记', link: 'https://fesource.netlify.app/' },
    ],
    socialLinks: [
      { icon: 'discord', link: 'https://discord.com/channels/987387170232868904/987387170794922005' },
      { icon: 'github', link: 'https://github.com/shengxinjing/challenges/' },
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
          text: 'TS挑战',
          items: [
            { text: '开发步骤', link: '/ts/' },
          ],
        },
        {
          text: 'Vue挑战',
          items: [
            { text: 'Vue3架构', link: '/vue/' },
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