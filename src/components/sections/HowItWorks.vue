<script setup>
import { Search, BarChart3, Phone } from 'lucide-vue-next'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'

const steps = [
  {
    number: '01',
    icon: Search,
    title: 'Caută',
    description: 'Scrie ce serviciu cauți și selectează orașul tău. Rezultatele apar instant.'
  },
  {
    number: '02',
    icon: BarChart3,
    title: 'Compară',
    description: 'Compară firme după rating, recenzii și servicii oferite. Alege ce ți se potrivește.'
  },
  {
    number: '03',
    icon: Phone,
    title: 'Contactează',
    description: 'Contactează firma direct prin telefon sau vizitează site-ul pentru mai multe detalii.'
  }
]
</script>

<template>
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <SectionHeading
          label="Cum funcționează"
          title="3 pași simpli"
          subtitle="Găsește firma perfectă în câteva minute."
        />
      </ScrollReveal>

      <div class="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        <ScrollReveal v-for="(step, i) in steps" :key="i" :delay="i * 150">
          <div class="text-center relative">
            <!-- Number -->
            <div class="text-7xl font-heading font-bold text-brand/10 absolute -top-6 left-1/2 -translate-x-1/2">
              {{ step.number }}
            </div>

            <!-- Icon -->
            <div class="relative w-16 h-16 rounded-2xl bg-brand/10 flex items-center justify-center mx-auto mb-5">
              <component :is="step.icon" :size="28" class="text-brand" />
            </div>

            <h3 class="text-xl font-heading font-bold text-text-primary">{{ step.title }}</h3>
            <p class="mt-2 text-text-secondary text-sm leading-relaxed max-w-xs mx-auto">
              {{ step.description }}
            </p>

            <!-- Connector line (desktop) -->
            <div
              v-if="i < 2"
              class="hidden md:block absolute top-8 -right-6 lg:-right-8 w-12 lg:w-16 h-px bg-border-subtle"
            ></div>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
