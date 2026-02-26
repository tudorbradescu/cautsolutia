<script setup>
import { computed } from 'vue'
import { businesses } from '@/data/businesses.js'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import BusinessCard from '@/components/ui/BusinessCard.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'

const featured = computed(() => businesses.filter(b => b.featured))
</script>

<template>
  <section class="py-20 bg-surface-secondary">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <SectionHeading
          label="Recomandate"
          title="Firme de top"
          subtitle="Firme verificate și recomandate de utilizatorii noștri."
        />
      </ScrollReveal>

      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ScrollReveal v-for="(biz, i) in featured" :key="biz.slug" :delay="i * 100">
          <BusinessCard :business="biz" />
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
