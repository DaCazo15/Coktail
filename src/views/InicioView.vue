<script setup>
import CardBebidas from '@/components/cardBebidas.vue'
import { useBebidasStore } from '@/stores/bebidas'

const bebida = useBebidasStore()
</script>

<template>
  <div class="flex flex-col px-5">
    <h1 class="text-6xl font-extrabold">Recetas</h1>
    <div
      v-if="!bebida.recetasCount"
      class="pt-10 grid grid-cols-2 md:grid-cols-3 gap-10 justify-between items-center"
    >
      <CardBebidas
        v-for="value in bebida.recetas"
        :key="value.idDrink"
        :name="value.strDrink"
        :img="value.strDrinkThumb"
        :receta="value"
      />
    </div>
    <div
      v-else
      class="py-30 text-2xl font-medium text-slate-400 flex justify-center items-center gap-2"
    >
      <p>Sin bebidas aun...</p>
    </div>
  </div>
</template>
