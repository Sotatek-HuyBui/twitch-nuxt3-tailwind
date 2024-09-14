import {resolve} from 'path'

export default defineNuxtConfig({
  alias: {
    "@": resolve(__dirname, '/')
  },
  modules: ['@nuxtjs/tailwindcss'],
  
})
