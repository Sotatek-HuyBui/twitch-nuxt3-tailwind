export default defineNuxtPlugin((nuxtApp) => {
    return {
        provide: {
            saySomething: (msg: string) => console.log(`Hello ${msg}`)
        }
    }
})