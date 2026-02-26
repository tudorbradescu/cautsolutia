<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Search, MapPin, ChevronDown } from 'lucide-vue-next'
import { cities } from '@/data/cities.js'

const props = defineProps({
  initialQuery: { type: String, default: '' },
  initialCity: { type: String, default: '' },
  compact: { type: Boolean, default: false }
})

const emit = defineEmits(['search'])
const router = useRouter()

const query = ref(props.initialQuery)
const selectedCity = ref(props.initialCity)
const cityDropdownOpen = ref(false)

const selectedCityName = () => {
  if (!selectedCity.value) return 'Toate orașele'
  const city = cities.find(c => c.slug === selectedCity.value)
  return city ? city.name : 'Toate orașele'
}

function selectCity(slug) {
  selectedCity.value = slug
  cityDropdownOpen.value = false
}

function handleSearch() {
  emit('search', { query: query.value, city: selectedCity.value })

  if (router.currentRoute.value.name === 'home') {
    const params = new URLSearchParams()
    if (query.value) params.set('q', query.value)
    if (selectedCity.value) {
      router.push({ name: 'city', params: { slug: selectedCity.value }, query: query.value ? { q: query.value } : {} })
    }
  }
}
</script>

<template>
  <div
    class="flex flex-col md:flex-row bg-white rounded-2xl shadow-xl border border-border-subtle overflow-visible"
    :class="compact ? 'p-1.5' : 'p-2'"
  >
    <!-- Search input -->
    <div class="flex items-center gap-3 flex-1 px-4 py-3">
      <Search :size="20" class="text-text-muted shrink-0" />
      <input
        v-model="query"
        type="text"
        placeholder="Ce cauți? (ex: zugrav, instalator, pavaj...)"
        class="w-full bg-transparent text-text-primary placeholder:text-text-muted outline-none text-sm md:text-base"
        @keyup.enter="handleSearch"
      >
    </div>

    <!-- Divider -->
    <div class="hidden md:block w-px bg-border-subtle my-2"></div>
    <div class="md:hidden h-px bg-border-subtle mx-4"></div>

    <!-- City dropdown -->
    <div class="relative px-4 py-3 md:w-52">
      <button
        type="button"
        class="flex items-center gap-2 w-full text-left"
        @click="cityDropdownOpen = !cityDropdownOpen"
      >
        <MapPin :size="18" class="text-brand shrink-0" />
        <span class="text-sm text-text-primary flex-1 truncate">{{ selectedCityName() }}</span>
        <ChevronDown :size="16" class="text-text-muted transition-transform" :class="cityDropdownOpen ? 'rotate-180' : ''" />
      </button>

      <!-- Dropdown -->
      <div
        v-show="cityDropdownOpen"
        class="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl border border-border-subtle max-h-60 overflow-y-auto z-50"
      >
        <button
          type="button"
          class="w-full text-left px-4 py-2.5 text-sm hover:bg-surface-secondary transition-colors"
          :class="!selectedCity ? 'text-brand font-medium' : 'text-text-primary'"
          @click="selectCity('')"
        >
          Toate orașele
        </button>
        <button
          v-for="city in cities"
          :key="city.slug"
          type="button"
          class="w-full text-left px-4 py-2.5 text-sm hover:bg-surface-secondary transition-colors"
          :class="selectedCity === city.slug ? 'text-brand font-medium' : 'text-text-primary'"
          @click="selectCity(city.slug)"
        >
          {{ city.name }}
        </button>
      </div>
    </div>

    <!-- Search button -->
    <button
      type="button"
      class="bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 md:rounded-xl rounded-b-xl md:rounded-bl-none transition-colors flex items-center justify-center gap-2"
      :class="compact ? 'text-sm' : ''"
      @click="handleSearch"
    >
      <Search :size="18" />
      <span>Caută</span>
    </button>
  </div>

  <!-- Click outside to close -->
  <div v-if="cityDropdownOpen" class="fixed inset-0 z-40" @click="cityDropdownOpen = false"></div>
</template>
