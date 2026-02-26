<script setup>
import { ref, onMounted } from 'vue'
import { Building2, MapPin, Users } from 'lucide-vue-next'
import SearchBar from '@/components/ui/SearchBar.vue'

const props = defineProps({
  animate: { type: Boolean, default: false }
})

const visible = ref(false)
const stats = ref({ firms: 0, cities: 0, categories: 0 })

const targetStats = { firms: 340, cities: 15, categories: 16 }

function animateCounter(key, target) {
  const duration = 1500
  const steps = 40
  const increment = target / steps
  let current = 0
  const interval = setInterval(() => {
    current += increment
    if (current >= target) {
      stats.value[key] = target
      clearInterval(interval)
    } else {
      stats.value[key] = Math.floor(current)
    }
  }, duration / steps)
}

onMounted(() => {
  if (props.animate) {
    visible.value = true
    setTimeout(() => {
      animateCounter('firms', targetStats.firms)
      animateCounter('cities', targetStats.cities)
      animateCounter('categories', targetStats.categories)
    }, 300)
  } else {
    visible.value = true
    stats.value = targetStats
  }
})
</script>

<template>
  <section class="relative min-h-screen flex items-center justify-center overflow-hidden">
    <!-- Animated gradient background -->
    <div
      class="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-light"
      style="background-size: 200% 200%; animation: gradient-shift 8s ease infinite;"
    ></div>

    <!-- Pattern overlay -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 25% 25%, white 1px, transparent 1px); background-size: 50px 50px;"></div>
    </div>

    <!-- Content -->
    <div
      class="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center transition-all duration-700"
      :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
    >
      <h1 class="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-white leading-tight">
        Găsește
        <span class="text-accent">soluția</span>
        perfectă
      </h1>
      <p class="mt-4 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto">
        Caută firme și servicii în orașul tău. Zugravi, instalatori, electricieni și multe altele — totul într-un singur loc.
      </p>

      <!-- Search bar -->
      <div class="mt-8 max-w-3xl mx-auto">
        <SearchBar />
      </div>

      <!-- Stats -->
      <div class="mt-12 flex items-center justify-center gap-8 sm:gap-16">
        <div class="text-center">
          <div class="flex items-center justify-center gap-2 text-accent">
            <Building2 :size="20" />
            <span class="text-2xl sm:text-3xl font-heading font-bold text-white">{{ stats.firms }}+</span>
          </div>
          <p class="text-white/60 text-sm mt-1">Firme listate</p>
        </div>
        <div class="text-center">
          <div class="flex items-center justify-center gap-2 text-accent">
            <MapPin :size="20" />
            <span class="text-2xl sm:text-3xl font-heading font-bold text-white">{{ stats.cities }}</span>
          </div>
          <p class="text-white/60 text-sm mt-1">Orașe</p>
        </div>
        <div class="text-center">
          <div class="flex items-center justify-center gap-2 text-accent">
            <Users :size="20" />
            <span class="text-2xl sm:text-3xl font-heading font-bold text-white">{{ stats.categories }}</span>
          </div>
          <p class="text-white/60 text-sm mt-1">Categorii</p>
        </div>
      </div>
    </div>
  </section>
</template>
