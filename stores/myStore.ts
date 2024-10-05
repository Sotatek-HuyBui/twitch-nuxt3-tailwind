// stores/counter.js
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNavigateStore = defineStore('navigation', () => {

    const isShowingVideoCorner = ref(false)
    const showVideoCorner = () => {
        isShowingVideoCorner.value  = true
    }
    const hideVideoCorner = () => isShowingVideoCorner.value  = false
    

    return {isShowingVideoCorner, showVideoCorner, hideVideoCorner}
})