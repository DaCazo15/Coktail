import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  const modalReceta = ref(false)

  function cambioModal() {
    modalReceta.value = !modalReceta.value
  }

  return {
    modalReceta,
    cambioModal,
  }
})
