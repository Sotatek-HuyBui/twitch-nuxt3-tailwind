import {resolve} from 'path'

export default defineNuxtConfig({
  alias: {
    '@': resolve(__dirname, "/")
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
  modules: ["@nuxt/ui", '@nuxtjs/tailwindcss',"@pinia/nuxt"],
  ui: {
    primary: 'customPrimary',
  },
})