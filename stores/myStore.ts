// stores/counter.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useCounterStore = defineStore('counter', () => {
    const count = ref(0)
    const name = ref('Ja')
    const increase = () => count.value ++


    return {count, name, increase}
})