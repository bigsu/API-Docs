import { defineConfig } from 'vitepress'
import { set_sidebar } from "../utils/auto_sidebar.mjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/API-Docs/',
  title: "元宇宙服务接口文档",
  description: "元宇宙服务接口文档",
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
    docFooter: {
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdatedText: "最后更新",
    outlineTitle: "文章目录",
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
