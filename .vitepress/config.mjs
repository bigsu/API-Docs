import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto_sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/API-Docs/',
  title: "数据服务接口文档",
  description: "数据服务接口文档",
  head: [['link', { rel: 'icon', href: '/API-Docs/images/logo.png' }]],
  lang: 'zh-CN',
  // 是否显示更新时间
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // logo: '/logo.svg',
    logo: { light: '/images/logo.svg', dark: '/images/logo_dark.svg', alt: '' },
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    darkModeSwitchLabel: '外观',
    returnToTopLabel: '返回顶部',
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    lastUpdatedText: "最后更新",
    outlineTitle: "页面导航",
    sidebarMenuLabel: '菜单',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: {
            buttonText: '搜索文档',
            buttonAriaLabel: '搜索文档'
          },
          modal: {
            noResultsText: '无法找到相关结果',
            resetButtonTitle: '清除查询条件',
            footer: {
              selectText: '选择',
              navigateText: '切换'
            }
          }
        }
      }
    },
    nav: [
      { text: '首页', link: '/index' },
      { text: '指南', link: '/docs/简介' }
    ],
    sidebar: { "/docs": set_sidebar("/docs") },
    // sidebar: [
    //   {
    //     text: '接口列表',
    //     items: [
    //       { text: 'Markdown示例', link: '/docs/markdown-examples' },
    //       { text: 'Runtime API示例', link: '/docs/api-examples' },
    //       { text: 'Vue示例', link: '/docs/demo' }
    //     ]
    //   }
    // ],



    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
