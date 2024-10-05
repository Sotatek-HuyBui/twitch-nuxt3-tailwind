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
  modules: ["@nuxt/ui", '@nuxtjs/tailwindcss',["@pinia/nuxt", {autoImports: ['defineStore', 'acceptHMRUpdate']}], "@ant-design-vue/nuxt", "@nuxtjs/color-mode"],
  colorMode: {
    classPrefix: ''
  },
  imports: {
    dirs: ['stores']
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
  }
})