import {resolve} from 'path'

export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, "./")
  },

  css: [
    "~/assets/main.scss"
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },

  devtools: { enabled: true },
  modules: ["@nuxt/ui", '@nuxtjs/tailwindcss',["@pinia/nuxt", {autoImports: ['defineStore', 'acceptHMRUpdate']}], "@ant-design-vue/nuxt", "@nuxtjs/color-mode", '@nuxtjs/i18n'],
  colorMode: {
    classPrefix: ''
  },
  imports: {
    dirs: ['stores']
  },
  i18n: {
    // Module Options
    lazy: true,
    langDir: "locales", 
    strategy: "prefix_except_default",
    defaultLocale: "en", // Default Language
    locales: [
        { code: "vi", iso: "vi-VN", file: "vi.json", name: 'Vietnam(VI)'},
        { code: "en", iso: "en-US", file: "en.json", name: 'English(US)' },
    ],
  },
  tailwindcss: {
    cssPath: '~/assets/main.scss',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {},
    injectPosition: 0,
    viewer: true
  },
  ui: {
    primary: 'customPrimary',
  },
  app: {
        head: {
            link: [{ rel: 'icon', type: 'image/png', href: '/twitch_logo.png' }]
        }
    },
})