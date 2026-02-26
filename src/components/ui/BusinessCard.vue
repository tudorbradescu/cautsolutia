<script setup>
import { RouterLink } from 'vue-router'
import { MapPin, ExternalLink, Award } from 'lucide-vue-next'
import StarRating from './StarRating.vue'

defineProps({
  business: { type: Object, required: true }
})

const base = import.meta.env.BASE_URL
</script>

<template>
  <RouterLink
    :to="{ name: 'business', params: { slug: business.slug } }"
    class="group block bg-surface-card border border-border-subtle rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-brand/30"
  >
    <!-- Image -->
    <div class="relative aspect-[16/10] overflow-hidden bg-surface-secondary">
      <img
        :src="base + business.image"
        :alt="business.name"
        class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        loading="lazy"
      >
      <div v-if="business.featured" class="absolute top-3 left-3 bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full flex items-center gap-1">
        <Award :size="12" />
        Recomandat
      </div>
    </div>

    <!-- Content -->
    <div class="p-5">
      <h3 class="font-heading font-bold text-lg text-text-primary group-hover:text-brand transition-colors">
        {{ business.name }}
      </h3>

      <p class="text-text-secondary text-sm mt-1.5 line-clamp-2">
        {{ business.shortDescription }}
      </p>

      <div class="flex items-center gap-1.5 mt-3 text-text-muted text-sm">
        <MapPin :size="14" class="text-brand" />
        <span>{{ business.address }}</span>
      </div>

      <div class="mt-3">
        <StarRating :rating="business.rating" :review-count="business.reviewCount" :size="14" />
      </div>

      <div class="mt-4 flex items-center justify-between">
        <span class="text-xs text-text-muted uppercase tracking-wider">
          {{ business.category }}
        </span>
        <span class="text-brand text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
          Vizitează <ExternalLink :size="14" />
        </span>
      </div>
    </div>
  </RouterLink>
</template>
