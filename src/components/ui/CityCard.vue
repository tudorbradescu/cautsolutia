<script setup>
import { RouterLink } from 'vue-router'
import { MapPin } from 'lucide-vue-next'

defineProps({
  city: { type: Object, required: true }
})
</script>

<template>
  <RouterLink
    :to="{ name: 'city', params: { slug: city.slug } }"
    class="group relative block aspect-[4/3] rounded-2xl overflow-hidden"
  >
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-brand-dark to-brand transition-transform duration-500 group-hover:scale-105">
      <div class="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_40%,white_0%,transparent_70%)]"></div>
    </div>

    <!-- Gradient overlay -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>

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
