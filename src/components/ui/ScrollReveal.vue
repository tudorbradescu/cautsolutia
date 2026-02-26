<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  threshold: { type: Number, default: 0.15 },
  delay: { type: Number, default: 0 }
})

const el = ref(null)
const visible = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => { visible.value = true }, props.delay)
        observer.disconnect()
      }
    },
    { threshold: props.threshold }
  )
  if (el.value) observer.observe(el.value)
})
</script>

<template>
  <div
    ref="el"
    class="transition-all duration-700 ease-out"
    :class="visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'"
  >
    <slot />
  </div>
</template>
