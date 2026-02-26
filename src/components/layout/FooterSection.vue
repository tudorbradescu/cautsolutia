<script setup>
import { RouterLink } from 'vue-router'
import { MapPin, Phone, Mail, ExternalLink } from 'lucide-vue-next'
</script>

<template>
  <footer class="bg-surface-dark text-white pb-20 lg:pb-0">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- Brand -->
        <div>
          <RouterLink to="/" class="flex items-baseline gap-0 font-heading font-bold text-2xl">
            <span class="text-brand-light">Caut</span>
            <span class="text-white">Soluția</span>
            <span class="text-accent font-extrabold text-sm">.ro</span>
          </RouterLink>
          <p class="mt-4 text-white/60 text-sm leading-relaxed">
            Directorul firmelor din România. Găsește cele mai bune servicii din orașul tău.
          </p>
        </div>

        <!-- Navigare -->
        <div>
          <h4 class="font-heading font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Navigare</h4>
          <div class="flex flex-col gap-3">
            <RouterLink to="/" class="text-white/70 hover:text-white text-sm transition-colors">Acasă</RouterLink>
            <RouterLink to="/despre" class="text-white/70 hover:text-white text-sm transition-colors">Despre noi</RouterLink>
            <RouterLink to="/adauga-firma" class="text-white/70 hover:text-white text-sm transition-colors">Adaugă firma</RouterLink>
            <RouterLink to="/contact" class="text-white/70 hover:text-white text-sm transition-colors">Contact</RouterLink>
          </div>
        </div>

        <!-- Categorii populare -->
        <div>
          <h4 class="font-heading font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Categorii</h4>
          <div class="flex flex-col gap-3">
            <RouterLink :to="{ name: 'category', params: { slug: 'constructii' } }" class="text-white/70 hover:text-white text-sm transition-colors">Construcții</RouterLink>
            <RouterLink :to="{ name: 'category', params: { slug: 'zugravit-vopsit' } }" class="text-white/70 hover:text-white text-sm transition-colors">Zugrăvit</RouterLink>
            <RouterLink :to="{ name: 'category', params: { slug: 'instalatii-sanitare' } }" class="text-white/70 hover:text-white text-sm transition-colors">Instalații</RouterLink>
            <RouterLink :to="{ name: 'category', params: { slug: 'electricieni' } }" class="text-white/70 hover:text-white text-sm transition-colors">Electricieni</RouterLink>
            <RouterLink :to="{ name: 'category', params: { slug: 'auto' } }" class="text-white/70 hover:text-white text-sm transition-colors">Auto & Service</RouterLink>
          </div>
        </div>

        <!-- Contact -->
        <div>
          <h4 class="font-heading font-bold text-sm uppercase tracking-wider text-white/40 mb-4">Contact</h4>
          <div class="flex flex-col gap-3">
            <a href="tel:+40727819906" class="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
              <Phone :size="14" />
              +40 727 819 906
            </a>
            <a href="mailto:tudor@bradysoftware.ro" class="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
              <Mail :size="14" />
              tudor@bradysoftware.ro
            </a>
            <a href="https://bradysoftware.ro" target="_blank" rel="noopener" class="flex items-center gap-2 text-white/70 hover:text-white text-sm transition-colors">
              <ExternalLink :size="14" />
              bradysoftware.ro
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom -->
      <div class="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p class="text-white/40 text-sm">
          © {{ new Date().getFullYear() }} CautSoluția.ro — Toate drepturile rezervate.
        </p>
        <p class="text-white/40 text-sm">
          Realizat de
          <a href="https://bradysoftware.ro" target="_blank" rel="noopener" class="text-brand-light hover:text-white transition-colors font-medium">
            Brady Software
          </a>
        </p>
      </div>
    </div>
  </footer>
</template>
