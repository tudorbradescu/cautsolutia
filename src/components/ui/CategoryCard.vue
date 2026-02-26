<script setup>
import { RouterLink } from 'vue-router'
import {
  Paintbrush, Building2, Droplets, Zap, Layers, Sofa, TreePine, Sparkles,
  Truck, Monitor, Wrench, ShieldCheck, Heart, Home, UtensilsCrossed, Briefcase, HelpCircle
} from 'lucide-vue-next'
import { computed } from 'vue'

const iconMap = { Paintbrush, Building2, Droplets, Zap, Layers, Sofa, TreePine, Sparkles, Truck, Monitor, Wrench, ShieldCheck, Heart, Home, UtensilsCrossed, Briefcase }

const props = defineProps({
  category: { type: Object, required: true }
})

const iconComponent = computed(() => iconMap[props.category.icon] || HelpCircle)
</script>

<template>
  <RouterLink
    :to="{ name: 'category', params: { slug: category.slug } }"
    class="group flex items-center gap-4 bg-surface-card border border-border-subtle rounded-2xl p-5 transition-all duration-300 hover:border-brand hover:shadow-md hover:-translate-y-0.5"
  >
    <div class="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-brand/20">
      <component :is="iconComponent" :size="24" class="text-brand" />
    </div>
    <div class="min-w-0">
      <h3 class="font-semibold text-text-primary group-hover:text-brand transition-colors truncate">
        {{ category.name }}
      </h3>
      <p class="text-text-muted text-sm mt-0.5">{{ category.businessCount }} firme</p>
    </div>
  </RouterLink>
</template>
