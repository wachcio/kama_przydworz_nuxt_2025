import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
  state: () => ({
    phoneNumberTxt: '+48 532 623 229',
    phoneNumber: '+48532623229',
  }),
  actions: {
    increment() {
      // puste działanie zachowane dla kompatybilności
      console.log('increment called')
    },
  },
})
