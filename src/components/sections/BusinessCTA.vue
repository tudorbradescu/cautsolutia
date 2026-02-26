<script setup>
import { RouterLink } from 'vue-router'
import { Plus, ArrowRight } from 'lucide-vue-next'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
</script>

<template>
  <section class="py-20 bg-surface-dark relative overflow-hidden">
    <!-- Background accent -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-brand/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3"></div>

    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <ScrollReveal>
        <span class="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand-light mb-3">
          Pentru firme
        </span>
        <h2 class="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
          Ai o firmă?
          <br>
          Listează-o
          <span class="text-accent">GRATUIT</span>!
        </h2>
        <p class="mt-4 text-white/60 text-lg max-w-2xl mx-auto">
          Fii vizibil pentru mii de potențiali clienți. Listarea pe CautSoluția este complet gratuită și durează doar 2 minute.
        </p>

        <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <RouterLink
            to="/adauga-firma"
            class="inline-flex items-center gap-2 bg-accent hover:bg-accent-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors shadow-lg"
          >
            <Plus :size="20" />
            Adaugă Firma Ta
          </RouterLink>
          <RouterLink
            to="/despre"
            class="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium transition-colors"
          >
            Află mai multe <ArrowRight :size="16" />
          </RouterLink>
        </div>
      </ScrollReveal>
    </div>
  </section>
</template>
