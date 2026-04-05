<script setup>
import { useBebidasStore } from '@/stores/bebidas'

const data = useBebidasStore()

defineProps({
  categorias: {
    type: Array,
  },
})
</script>

<template>
  <form
    class="md:w-1/2 2xl:w-1/3 bg-orange-400 ct-2 mt-32 p-10 space-y-6"
    @submit.prevent="data.obtenerRecetas"
  >
    <div class="space-y-4">
      <label class="block text-white uppercase font-extrabold texy-lg" for="Ingredientes">
        Nombre o Ingradientes
      </label>
      <input
        type="text"
        id="ingredientes"
        class="p-3 w-full rounded-lg focus:outline-none bg-white"
        placeholder="Nombre o Ingredientes: ej. Vodka, Tequila, etc"
        v-model="data.busqueda.nombre"
      />
    </div>
    <div class="space-y-4">
      <label class="block text-white uppercase font-extrabold texy-lg" for="categoria">
        Categoría
      </label>
      <select
        id="categoria"
        class="p-3 w-full rounded-lg focus:outline-none bg-white"
        placeholder="Nombre o Ingredientes: ej. Vodka, Tequila, etc"
        v-model="data.busqueda.categoria"
      >
        <option value="">-- Selecciona --</option>
        <option v-for="value in categorias" :key="value.strCategory" :value="value.strCategory">
          {{ value.strCategory }}
        </option>
      </select>
    </div>
    <input
      type="submit"
      class="bg-orange-800 hover:bg-orange-900 text-white font-extrabold rounded-lg crounded-lg w-full uppercase py-3 px-5 transition-all duration-150 ease-in-out cursor-pointer"
      value="Buscar Recetas"
    />
  </form>
</template>
