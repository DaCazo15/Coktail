<script setup>
import { useBebidasStore } from '@/stores/bebidas'

const store = useBebidasStore()

defineProps({
  name: { type: String },
  img: { type: String },
  receta: { type: Object },
})
const activarModal = (id) => {
  store.recetaCompleta(id)
}
</script>

<template>
  <div
    class="p-10 bg-slate-200/70 shadow-lg ct-2 gap-5 flex flex-col justify-center items-center overflow-hidden"
  >
    <img
      :src="img"
      :alt="`img-bebida ${name}`"
      class="ct-2 blur-xs hover:blur-none scale-95 hover:scale-105 hover:rotate-1 transition-all ease-in-out duration-300"
    />
    <h2 class="text-sm md:text-xl truncate text-slate-800 font-bold">{{ name }}</h2>
    <button
      @click="activarModal(receta.idDrink)"
      class="bg-orange-500 hover:bg-orange-600 ct-2 text-white font-extrabold w-full uppercase py-3 px-5 transition-all duration-150 ease-in-out cursor-pointer"
    >
      Ver Receta
    </button>
  </div>
</template>
