<script setup>
defineProps({
  label: String,
  title: String,
  subtitle: String,
  center: { type: Boolean, default: true }
})
</script>

<template>
  <div :class="center ? 'text-center' : ''">
    <span v-if="label" class="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-brand mb-2">
      {{ label }}
    </span>
    <h2 class="text-3xl md:text-4xl font-heading font-bold text-text-primary">
      {{ title }}
    </h2>
    <p v-if="subtitle" class="mt-3 text-text-secondary max-w-2xl" :class="center ? 'mx-auto' : ''">
      {{ subtitle }}
    </p>
  </div>
</template>
