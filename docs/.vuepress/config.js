module.exports = {
  base: '/gulu-april-demo/',
  title: '轱辘 UI',
  description: '一个好用的 UI 框架',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    nav: [
      {text: '主页', link: '/'},
      {text: '指南', link: '/guide/'},
      {text: 'Github', link: 'https://github.com/April-cl/gulu-april-demo'}
    ],
    sidebar: [
      '/guide/',
      '/get-started/',
      {
        title: '组件',
        collapsable: false,
        children: [
          {
            title: '通用',
            children: [
              '/components/button',
              '/components/button-group'
            ]
          },
          {
            title: '布局',
            children: [
              '/components/grid',
              '/components/layout'
            ]
          },
          {
            title: '数据录入',
            children: [
              '/components/input'
            ]
          },
          {
            title: '数据展示',
            children: [
              '/components/collapse',
              '/components/popover',
              '/components/tabs',
              '/components/toast'
            ]
          }
        ]
      }
    ]
  }
}