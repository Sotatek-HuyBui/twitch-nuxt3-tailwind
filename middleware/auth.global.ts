import { navigateTo } from "nuxt/app"

export default defineNuxtRouteMiddleware((to: any, from: any) => {
    console.log('AUTH MIDDLEWARE')

})