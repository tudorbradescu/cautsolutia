<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { Search, MapPin, Building2, Users, ChevronDown } from 'lucide-vue-next'
import { cities } from '@/data/cities.js'
import { businesses } from '@/data/businesses.js'

const props = defineProps({
  animate: { type: Boolean, default: false }
})

const router = useRouter()
const visible = ref(false)
const searchQuery = ref('')
const showResults = ref(false)
const stats = ref({ firms: 0, cities: 0, categories: 0 })

const targetStats = { firms: 340, cities: 15, categories: 16 }

const searchResults = computed(() => {
  const q = searchQuery.value.trim().toLowerCase()
  if (q.length < 2) return { businesses: [], cities: [] }

  const matchedBusinesses = businesses
    .filter(b => b.name.toLowerCase().includes(q) || b.shortDescription.toLowerCase().includes(q))
    .slice(0, 4)

  const matchedCities = cities
    .filter(c => c.name.toLowerCase().includes(q))
    .slice(0, 3)

  return { businesses: matchedBusinesses, cities: matchedCities }
})

const hasResults = computed(() => {
  return searchResults.value.businesses.length > 0 || searchResults.value.cities.length > 0
})

function onSearchFocus() {
  if (searchQuery.value.trim().length >= 2) showResults.value = true
}

function onSearchInput() {
  showResults.value = searchQuery.value.trim().length >= 2
}

function goToBusiness(slug) {
  showResults.value = false
  searchQuery.value = ''
  router.push({ name: 'business', params: { slug } })
}

function goToCity(slug) {
  showResults.value = false
  searchQuery.value = ''
  router.push({ name: 'city', params: { slug } })
}

function scrollToCities() {
  document.getElementById('cities-section')?.scrollIntoView({ behavior: 'smooth' })
}

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
        Caută firme și servicii sau alege orașul tău de mai jos.
      </p>

      <!-- Search bar -->
      <div class="mt-8 max-w-xl mx-auto relative">
        <div class="relative">
          <Search :size="20" class="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" />
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Caută o firmă, serviciu sau oraș..."
            class="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-text-primary text-base placeholder-text-muted shadow-lg focus:outline-none focus:ring-2 focus:ring-accent"
            @focus="onSearchFocus"
            @input="onSearchInput"
            @blur="setTimeout(() => showResults = false, 200)"
          />
        </div>

        <!-- Search results dropdown -->
        <div
          v-if="showResults && searchQuery.trim().length >= 2"
          class="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl overflow-hidden z-20"
        >
          <div v-if="!hasResults" class="p-4 text-text-muted text-sm text-center">
            Nicio rezultat pentru „{{ searchQuery }}"
          </div>
          <template v-else>
            <!-- Business results -->
            <div v-if="searchResults.businesses.length">
              <div class="px-4 py-2 text-xs font-semibold text-text-muted uppercase tracking-wider bg-surface-secondary">Firme</div>
              <button
                v-for="biz in searchResults.businesses"
                :key="biz.slug"
                class="w-full flex items-center gap-3 px-4 py-3 hover:bg-surface-secondary transition-colors text-left"
                @mousedown.prevent="goToBusiness(biz.slug)"
              >
                <Building2 :size="16" class="text-brand shrink-0" />
                <div>
                  <div class="text-text-primary text-sm font-medium">{{ biz.name }}</div>
                  <div class="text-text-muted text-xs">{{ biz.address }}</div>
                </div>
              </button>
            </div>
            <!-- City results -->
            <div v-if="searchResults.cities.length">
              <div class="px-4 py-2 text-xs font-semibold text-text-muted uppercase tracking-wider bg-surface-secondary">Orașe</div>
              <button
                v-for="city in searchResults.cities"
                :key="city.slug"
                class="w-full flex items-center gap-3 px-4 py-3 hover:bg-surface-secondary transition-colors text-left"
                @mousedown.prevent="goToCity(city.slug)"
              >
                <MapPin :size="16" class="text-accent shrink-0" />
                <div>
                  <div class="text-text-primary text-sm font-medium">{{ city.name }}</div>
                  <div class="text-text-muted text-xs">{{ city.businessCount }} firme</div>
                </div>
              </button>
            </div>
          </template>
        </div>
      </div>

      <!-- Scrollable city selector -->
      <div class="mt-8">
        <p class="text-white/60 text-sm mb-3">sau alege un oraș:</p>
        <div class="flex gap-3 overflow-x-auto pb-2 px-2 scrollbar-hide justify-center flex-wrap">
          <button
            v-for="city in cities"
            :key="city.slug"
            class="shrink-0 bg-white/15 hover:bg-white/25 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors backdrop-blur-sm"
            @click="goToCity(city.slug)"
          >
            {{ city.name }}
          </button>
        </div>
      </div>

      <!-- Stats -->
      <div class="mt-10 flex items-center justify-center gap-8 sm:gap-16">
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

      <!-- Scroll indicator -->
      <button
        type="button"
        class="mt-8 mx-auto flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors animate-bounce"
        @click="scrollToCities"
      >
        <span class="text-xs uppercase tracking-widest">Orașe</span>
        <ChevronDown :size="20" />
      </button>
    </div>
  </section>
</template>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
