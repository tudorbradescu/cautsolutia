<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'
import { Menu, X, Plus } from 'lucide-vue-next'

defineProps({
  transparent: { type: Boolean, default: false }
})

const scrolled = ref(false)
const mobileOpen = ref(false)

function handleScroll() {
  scrolled.value = window.scrollY > 50
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const navLinks = [
  { to: '/', label: 'Acasă' },
  { to: '/despre', label: 'Despre' },
  { to: '/contact', label: 'Contact' },
]
</script>

<template>
  <nav
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      transparent && !scrolled
        ? 'bg-transparent'
        : 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border-subtle',
    ]"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 md:h-18">
        <!-- Logo -->
        <RouterLink to="/" class="flex items-baseline gap-0 font-heading font-bold text-xl">
          <span :class="transparent && !scrolled ? 'text-white' : 'text-brand'">Caut</span>
          <span :class="transparent && !scrolled ? 'text-white' : 'text-text-primary'">Soluția</span>
          <span class="text-accent font-extrabold text-sm">.ro</span>
        </RouterLink>

        <!-- Desktop nav -->
        <div class="hidden md:flex items-center gap-8">
          <RouterLink
            v-for="link in navLinks"
            :key="link.to"
            :to="link.to"
            class="text-sm font-medium transition-colors hover:text-brand"
            :class="transparent && !scrolled ? 'text-white/90 hover:text-white' : 'text-text-secondary'"
          >
            {{ link.label }}
          </RouterLink>

          <RouterLink
            to="/adauga-firma"
            class="inline-flex items-center gap-1.5 bg-brand hover:bg-brand-dark text-white text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors"
          >
            <Plus :size="16" />
            Adaugă Firma
          </RouterLink>
        </div>

        <!-- Mobile hamburger -->
        <button
          type="button"
          class="md:hidden p-2 rounded-lg transition-colors"
          :class="transparent && !scrolled ? 'text-white' : 'text-text-primary'"
          @click="mobileOpen = !mobileOpen"
        >
          <Menu v-if="!mobileOpen" :size="24" />
          <X v-else :size="24" />
        </button>
      </div>
    </div>
  </nav>

  <!-- Mobile overlay -->
  <Transition name="slide">
    <div
      v-if="mobileOpen"
      class="fixed inset-0 z-[60] bg-white flex flex-col pt-20 px-6"
    >
      <button
        type="button"
        class="absolute top-5 right-5 p-2 text-text-primary"
        @click="mobileOpen = false"
      >
        <X :size="24" />
      </button>

      <RouterLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class="text-2xl font-heading font-bold text-text-primary py-4 border-b border-border-subtle hover:text-brand transition-colors"
        @click="mobileOpen = false"
      >
        {{ link.label }}
      </RouterLink>

      <RouterLink
        to="/adauga-firma"
        class="mt-8 inline-flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white text-lg font-semibold px-6 py-4 rounded-xl transition-colors"
        @click="mobileOpen = false"
      >
        <Plus :size="20" />
        Adaugă Firma Gratuită
      </RouterLink>
    </div>
  </Transition>
</template>

<style scoped>
.slide-enter-active, .slide-leave-active { transition: transform 0.3s ease, opacity 0.3s ease; }
.slide-enter-from, .slide-leave-to { transform: translateX(100%); opacity: 0; }
</style>
