<script setup>
import { RouterLink } from 'vue-router'
import { MapPin, ExternalLink, Award, MessageCircle, Globe } from 'lucide-vue-next'
import StarRating from './StarRating.vue'

defineProps({
  business: { type: Object, required: true }
})

const base = import.meta.env.BASE_URL
</script>

<template>
  <div class="group bg-surface-card border border-border-subtle rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 hover:border-brand/30">
    <!-- Image (clickable, links to business page) -->
    <RouterLink :to="{ name: 'business', params: { slug: business.slug } }">
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
    </RouterLink>

    <!-- Content -->
    <div class="p-5">
      <RouterLink :to="{ name: 'business', params: { slug: business.slug } }" class="block">
        <h3 class="font-heading font-bold text-lg text-text-primary group-hover:text-brand transition-colors">
          {{ business.name }}
        </h3>
      </RouterLink>

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

      <!-- Two action buttons -->
      <div class="mt-4 flex gap-2">
        <a
          :href="`https://wa.me/${business.phone.replace(/[^0-9]/g, '')}?text=${encodeURIComponent('Bună ziua, am găsit firma dvs. pe CautSoluția.ro și aș dori mai multe informații.')}`"
          target="_blank"
          rel="noopener"
          class="flex-1 inline-flex items-center justify-center gap-1.5 bg-brand text-white text-sm font-semibold px-3 py-2.5 rounded-xl hover:bg-brand-dark transition-colors"
          @click.stop
        >
          <MessageCircle :size="15" />
          Trimite mesaj
        </a>
        <a
          :href="business.website"
          target="_blank"
          rel="noopener"
          class="flex-1 inline-flex items-center justify-center gap-1.5 bg-surface-secondary text-text-primary text-sm font-semibold px-3 py-2.5 rounded-xl hover:bg-brand/10 hover:text-brand transition-colors border border-border-subtle"
          @click.stop
        >
          <Globe :size="15" />
          Vizitează site-ul
        </a>
      </div>
    </div>
  </div>
</template>
