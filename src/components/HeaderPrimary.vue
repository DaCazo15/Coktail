<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { useBebidasStore } from '@/stores/bebidas'

import FromApp from './FormApp.vue'
import RouterLink from './UX/RouterLink.vue'

import logo from '@/assets/img/logo.svg'

const ruta = useRoute()
const pageInicio = computed(() => ruta.name === 'inicio')
const store = useBebidasStore()
</script>

<template>
  <header class="bg-slate-800" :class="{ header: pageInicio }">
    <div class="mx-auto container px-5 py-16">
      <div class="flex justify-between items-center">
        <div class="">
          <RouterLink :img="{ logo: logo, alt: 'img-logo' }" :to="{ name: 'inicio' }" />
        </div>
        <div class="flex flex-row gap-5 justify-between items-center">
          <RouterLink :to="{ name: 'inicio' }" :title="'Inicio'" />
          <RouterLink :to="{ name: 'favoritos' }" :title="'Favoritos'" />
          <RouterLink :to="{ name: 'ia' }" :title="'Generar con IA'" />
        </div>
      </div>
      <FromApp v-if="pageInicio" :categorias="store.categorias" />
    </div>
  </header>
</template>
