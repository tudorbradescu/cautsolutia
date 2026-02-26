<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import NavBar from './components/layout/NavBar.vue'
import FooterSection from './components/layout/FooterSection.vue'
import MobileBottomNav from './components/layout/MobileBottomNav.vue'
import SplashScreen from './components/ui/SplashScreen.vue'

const route = useRoute()
const splashDone = ref(false)
const heroAnimate = ref(false)

const showSplash = ref(!sessionStorage.getItem('cautsolutia-splash-done'))

function onSplashDone() {
  splashDone.value = true
  heroAnimate.value = true
  sessionStorage.setItem('cautsolutia-splash-done', '1')
}

const isHome = computed(() => route.name === 'home')
</script>

<template>
  <SplashScreen v-if="showSplash && !splashDone" @done="onSplashDone" />

  <div v-show="!showSplash || splashDone">
    <NavBar :transparent="isHome" />

    <main class="min-h-screen">
      <router-view :animate="heroAnimate || !showSplash" />
    </main>

    <FooterSection />
    <MobileBottomNav />
  </div>
</template>
