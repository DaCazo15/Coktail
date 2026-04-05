import { defineStore } from 'pinia'
import { ref, watch, onMounted, computed } from 'vue'
import { useBebidasStore } from '@/stores/bebidas'
import { useModalStore } from '@/stores/modal'
import { useNotificacionesStore } from '@/stores/notificaciones'

export const useFavoritosStore = defineStore('favoritos', () => {
  const bebidas = useBebidasStore()
  const modal = useModalStore()
  const notificaciones = useNotificacionesStore()
  const favoritos = ref([])
  const isFavorito = ref(false)

  onMounted(() => {
    if (localStorage.getItem('favoritos')) {
      favoritos.value = JSON.parse(localStorage.getItem('favoritos'))
    }
    updateIsFavorito()
  })

  watch(
    favoritos,
    () => {
      syncLocalStorage()
      updateIsFavorito()
    },
    { deep: true },
  )

  watch(
    () => bebidas.receta,
    () => {
      updateIsFavorito()
    },
  )

  const updateIsFavorito = () => {
    isFavorito.value = favoritos.value.some((fav) => fav.idDrink === bebidas.receta.idDrink)
  }

  const handleClickFavoritos = () => {
    if (isFavorito.value) {
      favoritos.value = favoritos.value.filter((fav) => fav.idDrink !== bebidas.receta.idDrink)
      notificaciones.cambioNotificacion('Eliminado de favoritos')
    } else {
      favoritos.value.push(bebidas.receta)
      notificaciones.cambioNotificacion('Agregado a favoritos')
    }
    modal.cambioModal()
  }

  const syncLocalStorage = () => {
    localStorage.setItem('favoritos', JSON.stringify(favoritos.value))
  }

  const favoritosCount = computed(() => favoritos.value.length === 0)
  return {
    isFavorito,
    favoritos,
    favoritosCount,
    handleClickFavoritos,
  }
})
