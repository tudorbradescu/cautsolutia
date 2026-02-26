<script setup>
import { computed } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { ChevronRight, MapPin } from 'lucide-vue-next'
import {
  Paintbrush, Building2, Droplets, Zap, Layers, Sofa, TreePine, Sparkles,
  Truck, Monitor, Wrench, ShieldCheck, Heart, Home, UtensilsCrossed, Briefcase, HelpCircle
} from 'lucide-vue-next'
import { cities } from '@/data/cities.js'
import { businesses } from '@/data/businesses.js'
import { categories } from '@/data/categories.js'
import BusinessCard from '@/components/ui/BusinessCard.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import BackToTop from '@/components/ui/BackToTop.vue'

const iconMap = { Paintbrush, Building2, Droplets, Zap, Layers, Sofa, TreePine, Sparkles, Truck, Monitor, Wrench, ShieldCheck, Heart, Home, UtensilsCrossed, Briefcase }

const route = useRoute()

const city = computed(() => cities.find(c => c.slug === route.params.citySlug))
const category = computed(() => categories.find(c => c.slug === route.params.categorySlug))
const categoryIcon = computed(() => category.value ? (iconMap[category.value.icon] || HelpCircle) : HelpCircle)

const filtered = computed(() => {
  return businesses.filter(b => b.city === route.params.citySlug && b.category === route.params.categorySlug)
})
</script>

<template>
  <div class="pt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-sm text-text-muted mb-8">
        <RouterLink to="/" class="hover:text-brand transition-colors">Acasă</RouterLink>
        <ChevronRight :size="14" />
        <RouterLink :to="{ name: 'city', params: { slug: route.params.citySlug } }" class="hover:text-brand transition-colors">
          {{ city?.name || 'Oraș' }}
        </RouterLink>
        <ChevronRight :size="14" />
        <span class="text-text-primary font-medium">{{ category?.name || 'Categorie' }}</span>
      </nav>

      <!-- Header -->
      <div class="flex items-center gap-4 mb-10">
        <div class="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center shrink-0">
          <component :is="categoryIcon" :size="28" class="text-brand" />
        </div>
        <div>
          <SectionHeading
            :title="`${category?.name || 'Categorie'} în ${city?.name || 'Oraș'}`"
            :subtitle="`${filtered.length} ${filtered.length === 1 ? 'firmă disponibilă' : 'firme disponibile'}`"
            :center="false"
          />
        </div>
      </div>

      <!-- Results -->
      <div v-if="filtered.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ScrollReveal v-for="(biz, i) in filtered" :key="biz.slug" :delay="i * 100">
          <BusinessCard :business="biz" />
        </ScrollReveal>
      </div>

      <div v-else class="text-center py-20">
        <p class="text-text-muted text-lg">Nu am găsit firme în această categorie.</p>
        <p class="text-text-muted text-sm mt-2">Fii primul care listează o firmă!</p>
        <div class="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
          <RouterLink
            :to="{ name: 'city', params: { slug: route.params.citySlug } }"
            class="text-brand hover:text-brand-dark font-medium transition-colors"
          >
            Înapoi la categorii
          </RouterLink>
          <RouterLink
            to="/adauga-firma"
            class="bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            Adaugă Firma Ta
          </RouterLink>
        </div>
      </div>
    </div>
    <BackToTop />
  </div>
</template>
