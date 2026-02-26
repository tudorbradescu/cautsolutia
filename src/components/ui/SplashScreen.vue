<script setup>
import { ref, onMounted } from 'vue'
import gsap from 'gsap'

const emit = defineEmits(['done'])
const show = ref(true)
const containerRef = ref(null)
const slideUp = ref(false)

function skip() {
  finish()
}

function finish() {
  if (!show.value) return
  slideUp.value = true
  setTimeout(() => {
    show.value = false
    document.body.style.overflow = ''
    emit('done')
  }, 900)
}

onMounted(() => {
  document.body.style.overflow = 'hidden'

  const tl = gsap.timeline()

  // Animate "CautSoluția" letters char by char
  tl.from('.splash-char', {
    y: 60,
    opacity: 0,
    duration: 0.5,
    stagger: 0.04,
    ease: 'back.out(1.7)'
  })

  // Animate ".ro" with elastic
  tl.from('.splash-domain', {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    ease: 'elastic.out(1, 0.5)'
  }, '-=0.2')

  // Gradient line
  tl.from('.splash-line', {
    width: 0,
    duration: 0.5,
    ease: 'power2.out'
  }, '-=0.3')

  // Tagline fade in
  tl.from('.splash-tagline', {
    y: 20,
    opacity: 0,
    duration: 0.4,
    ease: 'power2.out'
  }, '-=0.1')

  // Auto finish after animation
  tl.call(() => {
    setTimeout(finish, 800)
  })
})
</script>

<template>
  <div
    v-if="show"
    ref="containerRef"
    class="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-white cursor-pointer transition-transform duration-[900ms]"
    :class="slideUp ? '-translate-y-full' : 'translate-y-0'"
    style="transition-timing-function: cubic-bezier(0.76, 0, 0.24, 1)"
    @click="skip"
  >
    <div class="flex items-baseline font-heading text-[clamp(2rem,6vw,4.5rem)] font-bold tracking-tight">
      <span
        v-for="(letter, i) in 'CautSoluția'.split('')"
        :key="i"
        class="splash-char inline-block"
        :class="i < 4 ? 'text-brand' : 'text-text-primary'"
      >{{ letter }}</span>
      <span class="splash-domain text-accent font-extrabold">.ro</span>
    </div>

    <div
      class="splash-line h-[3px] rounded-full mt-5 w-[200px]"
      style="background: linear-gradient(90deg, #0D9488, #F59E0B)"
    ></div>

    <p class="splash-tagline mt-4 text-sm tracking-[0.25em] uppercase text-text-muted">
      Directorul Firmelor din România
    </p>

    <p class="absolute bottom-8 text-xs text-text-muted animate-pulse">
      Click pentru a continua
    </p>
  </div>
</template>
