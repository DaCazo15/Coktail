<script setup>
import { computed } from 'vue'
import { useModalStore } from '@/stores/modal'
import { useBebidasStore } from '@/stores/bebidas'
import { useFavoritosStore } from '@/stores/favoritos'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

const modal = useModalStore()
const bebida = useBebidasStore()
const favoritos = useFavoritosStore()

const textButton = computed(() => {
  if (favoritos.isFavorito) {
    return 'Remover de Favoritos'
  } else {
    return 'Agregar a Favoritos'
  }
})

const formatearIngradientes = () => {
  const ingredientesDIV = document.createElement('div')
  for (let i = 1; i <= 15; i++) {
    if (bebida.receta[`strIngredient${i}`]) {
      const ingrediente = bebida.receta[`strIngredient${i}`]
      const medida = bebida.receta[`strMeasure${i}`]

      const ingredienteCantidad = document.createElement('p')
      ingredienteCantidad.classList.add('text-lg', 'text-gray-500')
      ingredienteCantidad.textContent = `${ingrediente} - ${medida}`

      ingredientesDIV.appendChild(ingredienteCantidad)
    }
  }
  return ingredientesDIV
}
</script>

<template>
  <TransitionRoot as="template" :show="modal.modalReceta">
    <Dialog as="div" class="relative z-10" @close="modal.cambioModal">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-gray-500/50 transition-opacity" />
      </TransitionChild>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div
          class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-2xl sm:p-6"
            >
              <div>
                <div class="mt-3">
                  <DialogTitle as="h3" class="text-gray-800 font-extrabold my-5 text-4xl">{{
                    bebida.receta.strDrink
                  }}</DialogTitle>
                  <div class="relative w-full overflow-hidden rounded-lg">
                    <div
                      v-if="favoritos.isFavorito"
                      @click="favoritos.handleClickFavoritos()"
                      class="absolute top-5 right-5 z-10 pt-3 px-2 pb-2 w-10 h-10 flex justify-center items-center rounded-full hover:bg-slate-400 text-2xl hover:text-white bi bi-suit-heart-fill cursor-pointer bg-orange-300 text-orange-500 hover:scale-105 transition-all ease-in-out duration-300"
                    ></div>

                    <img
                      class="w-full h-auto mask-[linear-gradient(to_bottom,black_50%,transparent_100%)]"
                      :src="bebida.receta.strDrinkThumb"
                      :alt="`img-bebida ${bebida.receta.strDrink}`"
                    />
                  </div>
                  <DialogTitle as="h3" class="text-gray-800 font-extrabold my-5 text-4xl">
                    Ingredientes y Cantidad
                  </DialogTitle>
                  <div v-html="formatearIngradientes().outerHTML"></div>
                  <DialogTitle as="h3" class="text-gray-800 font-extrabold my-5 text-4xl">
                    Instrucciones
                  </DialogTitle>
                  <p class="text-lg text-gray-500">{{ bebida.receta.strInstructions }}</p>
                </div>
              </div>
              <div class="mt-5 sm:mt-6 flex justify-between gap-4">
                <button
                  type="button"
                  @click="modal.cambioModal"
                  class="rounded-lg bg-slate-600 p-3 text-white text-xl font-semibold w-full hover:bg-slate-500 scale-95 hover:scale-100 cursor-pointer transition-all ease-in-out duration-300 uppercase"
                >
                  Cerrar
                </button>
                <button
                  @click="favoritos.handleClickFavoritos()"
                  type="button"
                  class="rounded-lg p-3 text-white text-xl font-semibold w-full scale-95 hover:scale-100 cursor-pointer transition-all ease-in-out duration-300 uppercase"
                  :class="{
                    'bg-orange-500 hover:bg-orange-600': !favoritos.isFavorito,
                    'bg-slate-600 hover:bg-slate-500': favoritos.isFavorito,
                  }"
                >
                  {{ textButton }}
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
