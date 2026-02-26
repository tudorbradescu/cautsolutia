<script setup>
import { testimonials } from '@/data/testimonials.js'
import { Quote } from 'lucide-vue-next'
import StarRating from '@/components/ui/StarRating.vue'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
</script>

<template>
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <SectionHeading
          label="Testimoniale"
          title="Ce spun utilizatorii"
          subtitle="Experiențele reale ale celor care au folosit CautSoluția."
        />
      </ScrollReveal>

      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ScrollReveal v-for="(t, i) in testimonials" :key="t.id" :delay="i * 100">
          <div class="bg-white border border-border-subtle rounded-2xl p-7 transition-all duration-300 hover:shadow-md">
            <Quote :size="24" class="text-brand/20 mb-3" />
            <p class="text-text-secondary text-sm leading-relaxed italic">
              "{{ t.text }}"
            </p>
            <div class="mt-5 flex items-center justify-between">
              <div>
                <p class="font-semibold text-text-primary text-sm">{{ t.name }}</p>
                <p class="text-text-muted text-xs mt-0.5">{{ t.city }} · {{ t.service }}</p>
              </div>
              <StarRating :rating="t.rating" :size="12" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
