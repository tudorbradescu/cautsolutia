<script setup>
import { ShieldCheck, Gift, MessageSquare, Globe } from 'lucide-vue-next'
import SectionHeading from '@/components/ui/SectionHeading.vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'

const cards = [
  {
    icon: ShieldCheck,
    title: 'Firme Verificate',
    description: 'Fiecare firmă listată este verificată de echipa noastră pentru a asigura calitatea serviciilor.'
  },
  {
    icon: Gift,
    title: 'Listare Gratuită',
    description: 'Orice firmă se poate lista gratuit pe platformă. Fără costuri ascunse, fără abonamente.'
  },
  {
    icon: MessageSquare,
    title: 'Recenzii Reale',
    description: 'Recenziile sunt lăsate de clienți reali care au folosit serviciile firmelor listate.'
  },
  {
    icon: Globe,
    title: 'Acoperire Națională',
    description: 'Acoperim peste 15 orașe din România cu mii de firme din toate domeniile.'
  }
]
</script>

<template>
  <section class="py-20 bg-surface-secondary">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ScrollReveal>
        <SectionHeading
          label="De ce noi"
          title="De ce CautSoluția?"
          subtitle="Platforma ta de încredere pentru a găsi cele mai bune servicii."
        />
      </ScrollReveal>

      <div class="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <ScrollReveal v-for="(card, i) in cards" :key="i" :delay="i * 100">
          <div class="bg-white border border-border-subtle rounded-2xl p-7 text-center transition-all duration-300 hover:shadow-md hover:-translate-y-1">
            <div class="w-14 h-14 rounded-xl bg-brand/10 flex items-center justify-center mx-auto mb-5">
              <component :is="card.icon" :size="28" class="text-brand" />
            </div>
            <h3 class="text-lg font-heading font-bold text-text-primary">{{ card.title }}</h3>
            <p class="mt-2 text-text-secondary text-sm leading-relaxed">{{ card.description }}</p>
          </div>
        </ScrollReveal>
      </div>
    </div>
  </section>
</template>
