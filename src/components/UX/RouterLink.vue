<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  to: { type: Object },
  title: { type: String },
  img: { type: Object },
})
</script>

<template>
  <div class="text-white font-bold text-xl uppercase cursor-pointer">
    <RouterLink v-if="!img" :to="to" active-class="text-orange-500">
      {{ title }}
    </RouterLink>
    <RouterLink v-else :to="to" active-class="text-orange-500">
      <img :src="img.logo" :alt="img.alt" class="w-16 h-16 object-contain" />
    </RouterLink>
  </div>
</template>
