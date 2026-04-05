import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useNotificacionesStore = defineStore('notificaciones', () => {
  const onNotificacion = ref(false)

  const error = ref('')
  const notificacion = ref('')

  const cambioNotificacion = (mensaje) => {
    notificacion.value = mensaje
    onNotificacion.value = true
    setTimeout(() => {
      onNotificacion.value = false
    }, 3000)
  }
  return {
    error,
    onNotificacion,
    notificacion,
    cambioNotificacion,
  }
})
