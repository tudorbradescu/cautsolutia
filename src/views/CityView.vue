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
import SectionHeading from '@/components/ui/SectionHeading.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import BackToTop from '@/components/ui/BackToTop.vue'

const iconMap = { Paintbrush, Building2, Droplets, Zap, Layers, Sofa, TreePine, Sparkles, Truck, Monitor, Wrench, ShieldCheck, Heart, Home, UtensilsCrossed, Briefcase }

const route = useRoute()

const city = computed(() => cities.find(c => c.slug === route.params.slug))

// Get categories that have businesses in this city
const cityCategories = computed(() => {
  const cityBusinesses = businesses.filter(b => b.city === route.params.slug)
  const categorySlugs = [...new Set(cityBusinesses.map(b => b.category))]

  return categorySlugs.map(slug => {
    const cat = categories.find(c => c.slug === slug)
    const count = cityBusinesses.filter(b => b.category === slug).length
    return {
      ...(cat || { name: slug, slug, icon: 'HelpCircle', description: '' }),
      businessCount: count
    }
  })
})
</script>

<template>
  <div class="pt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-sm text-text-muted mb-8">
        <RouterLink to="/" class="hover:text-brand transition-colors">Acasă</RouterLink>
        <ChevronRight :size="14" />
        <span class="text-text-primary font-medium">{{ city?.name || 'Oraș' }}</span>
      </nav>

      <!-- Header -->
      <div class="flex items-center gap-3 mb-10">
        <MapPin :size="28" class="text-brand" />
        <SectionHeading
          :title="`Servicii în ${city?.name || 'acest oraș'}`"
          :subtitle="`Alege o categorie pentru a vedea firmele disponibile în ${city?.name || 'orașul selectat'}.`"
          :center="false"
        />
      </div>

      <!-- Categories grid -->
      <div v-if="cityCategories.length" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        <ScrollReveal v-for="(cat, i) in cityCategories" :key="cat.slug" :delay="i * 80">
          <RouterLink
            :to="{ name: 'city-category', params: { citySlug: route.params.slug, categorySlug: cat.slug } }"
            class="group flex items-center gap-5 bg-white border border-border-subtle rounded-2xl p-6 transition-all duration-300 hover:border-brand hover:shadow-lg hover:-translate-y-1"
          >
            <div class="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
              <component :is="iconMap[cat.icon] || HelpCircle" :size="26" class="text-brand group-hover:text-white transition-colors" />
            </div>
            <div class="min-w-0">
              <h3 class="font-heading font-bold text-lg text-text-primary group-hover:text-brand transition-colors">
                {{ cat.name }}
              </h3>
              <p class="text-text-muted text-sm mt-0.5">
                {{ cat.businessCount }} {{ cat.businessCount === 1 ? 'firmă' : 'firme' }}
              </p>
              <p v-if="cat.description" class="text-text-secondary text-sm mt-1 line-clamp-1">{{ cat.description }}</p>
            </div>
            <ChevronRight :size="18" class="text-text-muted ml-auto shrink-0 group-hover:text-brand transition-colors" />
          </RouterLink>
        </ScrollReveal>
      </div>

      <!-- Empty state -->
      <div v-else class="text-center py-20">
        <div class="w-20 h-20 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-5">
          <MapPin :size="36" class="text-brand" />
        </div>
        <p class="text-text-muted text-lg">Încă nu avem firme listate în {{ city?.name }}.</p>
        <p class="text-text-muted text-sm mt-2">Fii primul care listează o firmă!</p>
        <RouterLink
          to="/adauga-firma"
          class="inline-block mt-6 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Adaugă Firma Ta
        </RouterLink>
      </div>
    </div>
    <BackToTop />
  </div>
</template>
