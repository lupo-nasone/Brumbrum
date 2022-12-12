import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({
        index: 0
    }),
    actions: {
        set(index) {
            this.index = index
        }
    }
})