<script setup>
import { RouterLink, useRoute } from 'vue-router'
import { Home, Search, Grid3x3, Plus } from 'lucide-vue-next'
import { computed } from 'vue'

const route = useRoute()

const tabs = [
  { to: '/', icon: Home, label: 'Acasă', name: 'home' },
  { to: '/oras/bucuresti', icon: Search, label: 'Caută', name: 'city' },
  { to: '/categorie/constructii', icon: Grid3x3, label: 'Categorii', name: 'category' },
  { to: '/adauga-firma', icon: Plus, label: 'Adaugă', name: 'add-business' },
]

const isActive = (tab) => {
  if (tab.name === 'home') return route.name === 'home'
  if (tab.name === 'city') return route.name === 'city'
  if (tab.name === 'category') return route.name === 'category'
  return route.name === tab.name
}
</script>

<template>
  <div class="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-md border-t border-border-subtle pb-safe">
    <div class="flex items-center justify-around h-16">
      <RouterLink
        v-for="tab in tabs"
        :key="tab.name"
        :to="tab.to"
        class="flex flex-col items-center gap-1 px-3 py-2 transition-colors"
        :class="isActive(tab) ? 'text-brand' : 'text-text-muted'"
      >
        <component :is="tab.icon" :size="20" />
        <span class="text-[10px] font-medium">{{ tab.label }}</span>
      </RouterLink>
    </div>
  </div>
</template>
