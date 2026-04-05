<script setup>
import { computed } from 'vue'
import { marked } from 'marked'
import { useIAStore } from '@/stores/ia'
import { useNotificacionesStore } from '@/stores/notificaciones'
import SpinCharge from '@/components/UX/SpinCharge.vue'

const store = useIAStore()
const mensaje = useNotificacionesStore()

// Asegúrate de que marked esté bien importado y ejecutado
const respuestaRenderizada = computed(() => {
  return store.respuesta ? marked.parse(store.respuesta) : ''
})

const handleSubmit = async () => {
  if (store.prompt.trim() === '') {
    mensaje.cambioNotificacion('Los campos no pueden ir vacíos')
    return
  }

  // Es mejor esperar la ejecución si tienes lógica posterior
  await store.generarReceta()
}
</script>

<template>
  <h1 class="text-6xl font-extrabold my-10">Generar Receta con IA</h1>

  <div class="max-w-4xl mx-auto">
    <form @submit.prevent="handleSubmit" class="flex flex-col space-y-3 py-10">
      <div class="relative">
        <input
          name="prompt"
          id="prompt"
          v-model="store.prompt"
          class="border bg-white p-4 rounded-lg w-full border-slate-800 focus:outline-none focus:ring-2 focus:ring-slate-400"
          placeholder="Genera una receta con ingredientes. Ej. Bebida con Tequila y Fresa"
        />
        <button
          type="submit"
          aria-label="Enviar"
          class="cursor-pointer absolute top-1/2 right-5 transform -translate-x-1/2 -translate-y-1/2 transition-all"
          :class="{ 'cursor-not-allowed opacity-50': store.loading }"
          :disabled="store.loading"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-10 h-10"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
    </form>

    <div v-if="store.loading" class="mt-20 w-full flex justify-center">
      <SpinCharge />
    </div>

    <div
      v-if="store.respuesta && !store.loading"
      class="py-10 prose prose-slate max-w-none p-8 mb-10 text-center animate-in fade-in duration-500"
      v-html="respuestaRenderizada"
    ></div>
  </div>
</template>
