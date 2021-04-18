module.exports = {
  base: '/gulu-april-demo/',
  title: '轱辘 UI',
  description: '一个好用的 UI 框架',
  themeConfig: {
    displayAllHeaders: true,
    nav: [
      {text: '主页', link: '/'},
      {text: '组件', link: '/components/'},
      {text: 'Github', link: 'https://github.com/April-cl/gulu-april-demo'}
    ],
    sidebar: {
      '/components/': [
        '/components/button',
        '/components/collapse',
        '/components/grid',
        '/components/input',
        '/components/layout',
        '/components/popover',
        '/components/tabs',
        '/components/toast'
      ],
      '/': [
        '/install/',
        '/get-started/'
      ]
    }
  }
}