import IAServices from '@/services/IAServices'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useIAStore = defineStore('ia', () => {
  const prompt = ref('')
  const respuesta = ref('')
  const loading = ref(false)

  const generarReceta = async () => {
    loading.value = true
    respuesta.value = ''
    const resultado = await IAServices.generarReceta(prompt.value)
    loading.value = false
    for await (const mensaje of resultado) {
      respuesta.value += mensaje
    }
  }

  return {
    prompt,
    respuesta,
    loading,
    generarReceta,
  }
})
