import { ref, computed } from 'vue'
import { businesses } from '@/data/businesses.js'

export function useSearch() {
  const query = ref('')
  const selectedCity = ref('')
  const selectedCategory = ref('')

  const filteredBusinesses = computed(() => {
    let result = [...businesses]

    if (query.value) {
      const q = query.value.toLowerCase()
      result = result.filter(b =>
        b.name.toLowerCase().includes(q) ||
        b.description.toLowerCase().includes(q) ||
        b.services.some(s => s.toLowerCase().includes(q))
      )
    }

    if (selectedCity.value) {
      result = result.filter(b => b.city === selectedCity.value)
    }

    if (selectedCategory.value) {
      result = result.filter(b => b.category === selectedCategory.value)
    }

    return result
  })

  function search(q, city) {
    if (q !== undefined) query.value = q
    if (city !== undefined) selectedCity.value = city
  }

  function reset() {
    query.value = ''
    selectedCity.value = ''
    selectedCategory.value = ''
  }

  return {
    query,
    selectedCity,
    selectedCategory,
    filteredBusinesses,
    search,
    reset
  }
}
