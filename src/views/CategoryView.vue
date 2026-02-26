<script setup>
import { computed, ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { ChevronRight, Paintbrush, Building2, Droplets, Zap, Layers, Sofa, TreePine, Sparkles, Truck, Monitor, Wrench, ShieldCheck, Heart, Home, UtensilsCrossed, Briefcase, HelpCircle } from 'lucide-vue-next'
import { categories } from '@/data/categories.js'
import { businesses } from '@/data/businesses.js'
import SearchBar from '@/components/ui/SearchBar.vue'
import BusinessCard from '@/components/ui/BusinessCard.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import BackToTop from '@/components/ui/BackToTop.vue'

const route = useRoute()

const iconMap = { Paintbrush, Building2, Droplets, Zap, Layers, Sofa, TreePine, Sparkles, Truck, Monitor, Wrench, ShieldCheck, Heart, Home, UtensilsCrossed, Briefcase }

const category = computed(() => categories.find(c => c.slug === route.params.slug))
const categoryIcon = computed(() => category.value ? (iconMap[category.value.icon] || HelpCircle) : HelpCircle)

const query = ref('')

const filtered = computed(() => {
  let result = businesses.filter(b => b.category === route.params.slug)
  if (query.value) {
    const q = query.value.toLowerCase()
    result = result.filter(b =>
      b.name.toLowerCase().includes(q) ||
      b.description.toLowerCase().includes(q)
    )
  }
  return result
})

function onSearch({ query: q }) {
  query.value = q
}
</script>

<template>
  <div class="pt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-sm text-text-muted mb-8">
        <RouterLink to="/" class="hover:text-brand transition-colors">Acasă</RouterLink>
        <ChevronRight :size="14" />
        <span class="text-text-primary font-medium">{{ category?.name || 'Categorie' }}</span>
      </nav>

      <!-- Header -->
      <div class="flex items-center gap-3 mb-6">
        <div class="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center">
          <component :is="categoryIcon" :size="24" class="text-brand" />
        </div>
        <SectionHeading
          :title="category?.name || 'Categorie'"
          :subtitle="category?.description || ''"
          :center="false"
        />
      </div>

      <!-- Search -->
      <div class="mb-10 max-w-3xl">
        <SearchBar compact @search="onSearch" />
      </div>

      <!-- Results -->
      <div v-if="filtered.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <BusinessCard v-for="biz in filtered" :key="biz.slug" :business="biz" />
      </div>

      <div v-else class="text-center py-20">
        <p class="text-text-muted text-lg">Nu am găsit firme în categoria {{ category?.name }}.</p>
        <p class="text-text-muted text-sm mt-2">Fii primul care listează o firmă!</p>
        <RouterLink
          to="/adauga-firma"
          class="inline-block mt-4 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Adaugă Firma Ta
        </RouterLink>
      </div>
    </div>
    <BackToTop />
  </div>
</template>
