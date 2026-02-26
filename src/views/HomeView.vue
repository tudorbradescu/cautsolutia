<script setup>
import HeroSearch from '@/components/sections/HeroSearch.vue'
import CitiesGrid from '@/components/sections/CitiesGrid.vue'
import CategoriesGrid from '@/components/sections/CategoriesGrid.vue'
import FeaturedListings from '@/components/sections/FeaturedListings.vue'
import HowItWorks from '@/components/sections/HowItWorks.vue'
import WhyCautSolutia from '@/components/sections/WhyCautSolutia.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import BusinessCTA from '@/components/sections/BusinessCTA.vue'
import BackToTop from '@/components/ui/BackToTop.vue'

defineProps({
  animate: { type: Boolean, default: false }
})
</script>

<template>
  <div>
    <HeroSearch :animate="animate" />
    <CitiesGrid />
    <CategoriesGrid />
    <FeaturedListings />
    <HowItWorks />
    <WhyCautSolutia />
    <TestimonialsSection />
    <BusinessCTA />
    <BackToTop />
  </div>
</template>
