<script setup>
import { categories } from '@/data/categories.js'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import CategoryCard from '@/components/ui/CategoryCard.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
</script>

<template>
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <SectionHeading
          label="Categorii"
          title="Ce serviciu cauți?"
          subtitle="Explorează categoriile populare și găsește firma potrivită pentru tine."
        />
      </ScrollReveal>

      <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <ScrollReveal v-for="(cat, i) in categories" :key="cat.slug" :delay="i * 60">
          <CategoryCard :category="cat" />
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
