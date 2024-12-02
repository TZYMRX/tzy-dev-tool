import { type DefaultTheme, defineConfig } from 'vitepress'
import UnoCSS from 'unocss/vite'

export default defineConfig({
  base: '/tzy-dev-tool/',
  lang: 'zh',
  title: "Tzy Dev Tool",
  description: '由 Vite 和 Vue 驱动的静态网站',
  // rewrites: {
  //   'zh/:rest*': ':rest*'
  // },
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: 'https://vitepress.dev/vitepress-logo-large.webp' }],
  ],
  vite: {
    plugins: [
      UnoCSS({
        configFile: '../../uno.config.ts'
      }),
    ],
  },
  themeConfig: {
    logo: { src: 'https://vitepress.dev/vitepress-logo-large.webp' },
    nav: nav(),
    sidebar: [
      {
        text: '总览',
        items: [
          { text: '所有工具🔧', link: '/zh/all' },
        ]
      },
      {
        text: '前端',
        collapsed: false,
        items: [
          { text: 'Vue', link: '/zh/frontend/api-examples' },
          { text: 'React', link: '/zh/frontend/markdown-examples' },
        ]
      },
      {
        text: 'Web3',
        collapsed: false,
        items: [
          { text: 'Dev', link: '/zh/web3/dev.md' },
        ]
      },
    ],
    footer: {
      message: 'Released under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferer">MIT License</a>',
      copyright: `Made with  🤪 by Tzy`
      // copyright: `Copyright © 2024-present Tzy`
    },
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    outline: {
      label: '页面导航'
    },
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    },
    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    search: {
      // provider: 'algolia',
      provider: 'local',
      options: {
        // appId: '8J64VVRP8K',
        // apiKey: '52f578a92b88ad6abde815aae2b0ad7c',
        // indexName: 'vitepress',
        locales: {
          zh: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  resetButtonTitle: '清除查询条件',
                  resetButtonAriaLabel: '清除查询条件',
                  cancelButtonText: '取消',
                  cancelButtonAriaLabel: '取消'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  navigateText: '切换',
                  closeText: '关闭',
                  searchByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                }
              }
            }
          }
        }
      }
    },
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: '前端',
      link: '/zh/frontend/api-examples.md',
      activeMatch: '/zh/frontend/'
    },
    {
      text: '参考',
      link: '/zh/reference/site-config',
      activeMatch: '/zh/reference/'
    },
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '简介',
      collapsed: false,
      items: [
        { text: '什么是 VitePress？', link: 'what-is-vitepress' },
        { text: '快速开始', link: 'getting-started' },
        { text: '路由', link: 'routing' },
        { text: '部署', link: 'deploy' }
      ]
    },
    {
      text: '写作',
      collapsed: false,
      items: [
        { text: 'Markdown 扩展', link: 'markdown' },
        { text: '资源处理', link: 'asset-handling' },
        { text: 'frontmatter', link: 'frontmatter' },
        { text: '在 Markdown 使用 Vue', link: 'using-vue' },
        { text: '国际化', link: 'i18n' }
      ]
    },
    {
      text: '自定义',
      collapsed: false,
      items: [
        { text: '自定义主题', link: 'custom-theme' },
        { text: '扩展默认主题', link: 'extending-default-theme' },
        { text: '构建时数据加载', link: 'data-loading' },
        { text: 'SSR 兼容性', link: 'ssr-compat' },
        { text: '连接 CMS', link: 'cms' }
      ]
    },
    {
      text: '实验性功能',
      collapsed: false,
      items: [
        { text: 'MPA 模式', link: 'mpa-mode' },
        { text: 'sitemap 生成', link: 'sitemap-generation' }
      ]
    },
    { text: '配置和 API 参考', base: '/zh/reference/', link: 'site-config' }
  ]
}
