<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { ArrowUp } from 'lucide-vue-next'

const visible = ref(false)

function handleScroll() {
  visible.value = window.scrollY > 400
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<template>
  <Transition name="fade">
    <button
      v-show="visible"
      type="button"
      class="fixed bottom-24 lg:bottom-8 right-6 z-40 w-11 h-11 bg-brand hover:bg-brand-dark text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
      aria-label="Înapoi sus"
      @click="scrollToTop"
    >
      <ArrowUp :size="20" />
    </button>
  </Transition>
</template>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
