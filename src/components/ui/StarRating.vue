<script setup>
import { Star } from 'lucide-vue-next'

defineProps({
  rating: { type: Number, default: 0 },
  reviewCount: { type: Number, default: 0 },
  size: { type: Number, default: 16 }
})
</script>

<template>
  <div class="flex items-center gap-1.5">
    <div class="flex gap-0.5">
      <Star
        v-for="i in 5"
        :key="i"
        :size="size"
        :class="i <= Math.round(rating) ? 'text-star fill-star' : 'text-gray-300'"
      />
    </div>
    <span class="text-sm font-semibold text-text-primary">{{ rating.toFixed(1) }}</span>
    <span v-if="reviewCount" class="text-sm text-text-muted">({{ reviewCount }})</span>
  </div>
</template>
