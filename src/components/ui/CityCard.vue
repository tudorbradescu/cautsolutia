<script setup>
import { RouterLink } from 'vue-router'
import { MapPin } from 'lucide-vue-next'

defineProps({
  city: { type: Object, required: true }
})

const base = import.meta.env.BASE_URL
</script>

<template>
  <RouterLink
    :to="{ name: 'city', params: { slug: city.slug } }"
    class="group relative block aspect-[4/3] rounded-2xl overflow-hidden"
  >
    <!-- Image -->
    <img
      :src="base + city.image"
      :alt="city.name"
      class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      loading="lazy"
    >

    <!-- Gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>

    <!-- Content -->
    <div class="absolute bottom-0 left-0 right-0 p-5">
      <h3 class="text-white font-heading font-bold text-xl">{{ city.name }}</h3>
      <div class="flex items-center gap-1.5 mt-1.5">
        <MapPin :size="14" class="text-accent" />
        <span class="text-white/80 text-sm">{{ city.businessCount }} firme</span>
      </div>
    </div>
  </RouterLink>
</template>
