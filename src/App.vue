<script setup>
import HeaderPrimary from './components/HeaderPrimary.vue'
import { RouterView } from 'vue-router'
import ModalReceta from './components/ModalReceta.vue'
import NotificacionComponent from './components/NotificacionComponent.vue'
</script>

<template>
  <HeaderPrimary />
  <main class="container mx-auto mt-10">
    <RouterView />
  </main>
  <ModalReceta />
  <NotificacionComponent />
</template>
