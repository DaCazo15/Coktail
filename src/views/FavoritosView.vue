<script setup>
import CardBebidas from '@/components/cardBebidas.vue'
import { RouterLink } from 'vue-router'
import { useFavoritosStore } from '@/stores/favoritos'

const favoritos = useFavoritosStore()
</script>

<template>
  <div>
    <h1 class="text-6xl font-extrabold">Favoritos</h1>
    <div
      v-if="!favoritos.favoritosCount"
      class="pt-10 grid grid-cols-2 md:grid-cols-3 gap-10 justify-between items-center"
    >
      <CardBebidas
        v-for="value in favoritos.favoritos"
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
      <p>¿Sin favoritos aun?</p>
      <RouterLink :to="{ name: 'inicio' }" class="text-orange-500">Agreguemos...</RouterLink>
    </div>
  </div>
</template>
