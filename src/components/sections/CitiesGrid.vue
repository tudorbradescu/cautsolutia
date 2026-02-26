<script setup>
import { cities } from '@/data/cities.js'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import CityCard from '@/components/ui/CityCard.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
</script>

<template>
  <section id="cities-section" class="py-20 bg-surface-secondary">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <SectionHeading
          label="Orașe"
          title="Alege orașul tău"
          subtitle="Selectează un oraș pentru a vedea categoriile și firmele disponibile."
        />
      </ScrollReveal>

      <div class="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <ScrollReveal v-for="(city, i) in cities" :key="city.slug" :delay="i * 60">
          <CityCard :city="city" />
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
