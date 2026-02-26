<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { ChevronRight, MapPin, Phone, Globe, Star, ExternalLink, CheckCircle } from 'lucide-vue-next'
import { businesses } from '@/data/businesses.js'
import { cities } from '@/data/cities.js'
import { categories } from '@/data/categories.js'
import StarRating from '@/components/ui/StarRating.vue'
import BusinessCard from '@/components/ui/BusinessCard.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import BackToTop from '@/components/ui/BackToTop.vue'

const base = import.meta.env.BASE_URL

const route = useRoute()

const business = computed(() => businesses.find(b => b.slug === route.params.slug))

const similar = computed(() => {
  if (!business.value) return []
  return businesses
    .filter(b => b.slug !== business.value.slug && (b.category === business.value.category || b.city === business.value.city))
    .slice(0, 3)
})
</script>

<template>
  <div class="pt-20">
    <div v-if="business" class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-sm text-text-muted mb-8 flex-wrap">
        <RouterLink to="/" class="hover:text-brand transition-colors">Acasă</RouterLink>
        <ChevronRight :size="14" />
        <RouterLink :to="{ name: 'city', params: { slug: business.city } }" class="hover:text-brand transition-colors">
          {{ cities.find(c => c.slug === business.city)?.name || business.city }}
        </RouterLink>
        <ChevronRight :size="14" />
        <RouterLink :to="{ name: 'city-category', params: { citySlug: business.city, categorySlug: business.category } }" class="hover:text-brand transition-colors">
          {{ categories.find(c => c.slug === business.category)?.name || business.category }}
        </RouterLink>
        <ChevronRight :size="14" />
        <span class="text-text-primary font-medium">{{ business.name }}</span>
      </nav>

      <!-- Hero -->
      <div class="bg-gradient-to-br from-brand/10 to-accent/5 rounded-3xl p-8 md:p-12 mb-10">
        <div class="flex flex-col md:flex-row gap-8">
          <!-- Business image -->
          <div class="w-full md:w-80 aspect-[4/3] rounded-2xl overflow-hidden shrink-0">
            <img :src="base + business.image" :alt="business.name" class="w-full h-full object-cover">
          </div>

          <div class="flex-1">
            <div class="flex items-start justify-between gap-4">
              <h1 class="text-3xl md:text-4xl font-heading font-bold text-text-primary">
                {{ business.name }}
              </h1>
              <span v-if="business.featured" class="shrink-0 bg-accent text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                Recomandat
              </span>
            </div>

            <div class="mt-3">
              <StarRating :rating="business.rating" :review-count="business.reviewCount" />
            </div>

            <p class="mt-4 text-text-secondary leading-relaxed">
              {{ business.description }}
            </p>

            <div class="mt-6 flex flex-col gap-3">
              <div class="flex items-center gap-2 text-text-secondary">
                <MapPin :size="16" class="text-brand" />
                <span>{{ business.address }}</span>
              </div>
              <a :href="`tel:${business.phone}`" class="flex items-center gap-2 text-text-secondary hover:text-brand transition-colors">
                <Phone :size="16" class="text-brand" />
                <span>{{ business.phone }}</span>
              </a>
              <a :href="business.website" target="_blank" rel="noopener" class="flex items-center gap-2 text-brand hover:text-brand-dark transition-colors font-medium">
                <Globe :size="16" />
                <span>Vizitează site-ul</span>
                <ExternalLink :size="14" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Services -->
      <div class="mb-12">
        <h2 class="text-2xl font-heading font-bold text-text-primary mb-6">Servicii oferite</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          <div
            v-for="service in business.services"
            :key="service"
            class="flex items-center gap-3 bg-surface-secondary rounded-xl p-4"
          >
            <CheckCircle :size="18" class="text-brand shrink-0" />
            <span class="text-text-primary text-sm">{{ service }}</span>
          </div>
        </div>
      </div>

      <!-- CTA -->
      <div class="bg-brand rounded-2xl p-8 text-center mb-12">
        <h3 class="text-2xl font-heading font-bold text-white">Interesat de serviciile {{ business.name }}?</h3>
        <p class="text-white/70 mt-2">Contactează firma direct sau vizitează site-ul pentru mai multe detalii.</p>
        <div class="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            :href="`tel:${business.phone}`"
            class="inline-flex items-center gap-2 bg-white text-brand font-bold px-6 py-3 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <Phone :size="18" />
            Sună acum
          </a>
          <a
            :href="business.website"
            target="_blank"
            rel="noopener"
            class="inline-flex items-center gap-2 bg-white/20 text-white font-semibold px-6 py-3 rounded-xl hover:bg-white/30 transition-colors"
          >
            <Globe :size="18" />
            Vizitează site-ul
          </a>
        </div>
      </div>

      <!-- Similar businesses -->
      <div v-if="similar.length">
        <ScrollReveal>
          <SectionHeading title="Firme similare" subtitle="Alte firme din același domeniu sau oraș." />
        </ScrollReveal>
        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <BusinessCard v-for="biz in similar" :key="biz.slug" :business="biz" />
        </div>
      </div>
    </div>

    <!-- Not found -->
    <div v-else class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
      <p class="text-text-muted text-lg">Firma nu a fost găsită.</p>
      <RouterLink to="/" class="inline-block mt-4 text-brand hover:text-brand-dark font-medium transition-colors">
        Înapoi la pagina principală
      </RouterLink>
    </div>

    <BackToTop />
  </div>
</template>
