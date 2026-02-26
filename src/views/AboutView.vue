<script setup>
import { RouterLink } from 'vue-router'
import { ChevronRight, Target, Users, Shield, Rocket } from 'lucide-vue-next'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import BackToTop from '@/components/ui/BackToTop.vue'

const values = [
  { icon: Target, title: 'Misiunea noastră', description: 'Să conectăm consumatorii cu cele mai bune firme locale din România, ușurând procesul de căutare și selecție.' },
  { icon: Users, title: 'Comunitate', description: 'Construim o comunitate de firme verificate și clienți mulțumiți, bazată pe transparență și încredere.' },
  { icon: Shield, title: 'Calitate', description: 'Fiecare firmă listată este verificată de echipa noastră. Recenziile sunt reale, de la clienți adevărați.' },
  { icon: Rocket, title: 'Inovație', description: 'Îmbunătățim continuu platforma pentru a oferi cea mai bună experiență atât firmelor, cât și utilizatorilor.' },
]
</script>

<template>
  <div class="pt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-sm text-text-muted mb-8">
        <RouterLink to="/" class="hover:text-brand transition-colors">Acasă</RouterLink>
        <ChevronRight :size="14" />
        <span class="text-text-primary font-medium">Despre noi</span>
      </nav>

      <!-- Hero -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h1 class="text-3xl md:text-5xl font-heading font-bold text-text-primary">
          Despre <span class="text-brand">CautSoluția</span><span class="text-accent">.ro</span>
        </h1>
        <p class="mt-4 text-lg text-text-secondary leading-relaxed">
          CautSoluția.ro este directorul firmelor din România — locul unde oamenii găsesc servicii de calitate, iar firmele locale își găsesc clienți noi.
        </p>
      </div>

      <!-- Values -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <ScrollReveal v-for="(v, i) in values" :key="i" :delay="i * 100">
          <div class="bg-surface-secondary rounded-2xl p-8">
            <div class="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4">
              <component :is="v.icon" :size="24" class="text-brand" />
            </div>
            <h3 class="text-xl font-heading font-bold text-text-primary">{{ v.title }}</h3>
            <p class="mt-2 text-text-secondary leading-relaxed">{{ v.description }}</p>
          </div>
        </ScrollReveal>
      </div>

      <!-- Brady Software -->
      <ScrollReveal>
        <div class="bg-surface-dark rounded-3xl p-10 md:p-16 text-center">
          <span class="text-xs font-semibold uppercase tracking-[0.2em] text-brand-light">Realizat de</span>
          <h2 class="mt-3 text-3xl md:text-4xl font-heading font-bold text-white">
            Brady Software
          </h2>
          <p class="mt-4 text-white/60 max-w-2xl mx-auto leading-relaxed">
            CautSoluția.ro este un proiect dezvoltat de Brady Software, o agenție de web design și dezvoltare software din România. Creăm site-uri web moderne, performante și optimizate pentru business-urile locale.
          </p>
          <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://bradysoftware.ro"
              target="_blank"
              rel="noopener"
              class="inline-flex items-center gap-2 bg-brand hover:bg-brand-dark text-white font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Vizitează bradysoftware.ro
            </a>
            <RouterLink
              to="/contact"
              class="text-white/70 hover:text-white font-medium transition-colors"
            >
              Contactează-ne
            </RouterLink>
          </div>
        </div>
      </ScrollReveal>
    </div>
    <BackToTop />
  </div>
</template>
