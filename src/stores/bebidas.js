import { defineStore } from 'pinia'

import { useModalStore } from '@/stores/modal'
import { ref, onMounted, reactive, computed } from 'vue'
import APIServices from '@/services/APIServices'

import { useNotificacionesStore } from './notificaciones'

export const useBebidasStore = defineStore('bebidas', () => {
  const modal = useModalStore()
  const notificaciones = useNotificacionesStore()

  const categorias = ref([])
  const recetas = ref([])
  const receta = ref({})
  const busqueda = reactive({
    nombre: '',
    categoria: '',
  })

  onMounted(async function () {
    const {
      data: { drinks },
    } = await APIServices.obtenerCategorias()
    categorias.value = drinks
  })

  async function obtenerRecetas() {
    if (Object.values(busqueda).includes('')) {
      notificaciones.cambioNotificacion('Por favor, completa todos los campos')
      return
    }
    recetas.value = []
    const {
      data: { drinks },
    } = await APIServices.obtenerRecetas(busqueda)
    recetas.value = drinks
  }

  async function recetaCompleta(id) {
    receta.value = []
    modal.cambioModal()
    const {
      data: { drinks },
    } = await APIServices.recetaCompleta(id)
    receta.value = drinks[0]
  }

  const recetasCount = computed(() => recetas.value.length === 0)

  return {
    categorias,
    recetas,
    receta,
    busqueda,
    recetasCount,
    recetaCompleta,
    obtenerRecetas,
  }
})
