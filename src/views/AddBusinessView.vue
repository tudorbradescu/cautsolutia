<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ChevronRight, Send, MessageCircle } from 'lucide-vue-next'
import { categories } from '@/data/categories.js'
import { cities } from '@/data/cities.js'

const form = ref({
  name: '',
  category: '',
  city: '',
  phone: '',
  email: '',
  website: '',
  description: ''
})

const submitted = ref(false)

function handleSubmit() {
  const message = encodeURIComponent(
    `Salut, vreau să listez firma mea pe CautSoluția.ro!\n\n` +
    `📋 Nume firmă: ${form.value.name}\n` +
    `📂 Categorie: ${form.value.category}\n` +
    `📍 Oraș: ${form.value.city}\n` +
    `📞 Telefon: ${form.value.phone}\n` +
    `📧 Email: ${form.value.email}\n` +
    `🌐 Website: ${form.value.website || 'Nu am încă'}\n` +
    `📝 Descriere: ${form.value.description}`
  )

  const whatsappUrl = `https://wa.me/40727819906?text=${message}`
  window.open(whatsappUrl, '_blank')
  submitted.value = true
}
</script>

<template>
  <div class="pt-20">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-sm text-text-muted mb-8">
        <RouterLink to="/" class="hover:text-brand transition-colors">Acasă</RouterLink>
        <ChevronRight :size="14" />
        <span class="text-text-primary font-medium">Adaugă Firma</span>
      </nav>

      <div class="text-center mb-10">
        <h1 class="text-3xl md:text-4xl font-heading font-bold text-text-primary">
          Adaugă firma ta <span class="text-accent">GRATUIT</span>
        </h1>
        <p class="mt-3 text-text-secondary max-w-xl mx-auto">
          Completează formularul de mai jos și te vom contacta pentru a finaliza listarea firmei tale pe CautSoluția.
        </p>
      </div>

      <!-- Success state -->
      <div v-if="submitted" class="text-center py-12 bg-surface-secondary rounded-2xl">
        <div class="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <MessageCircle :size="32" class="text-brand" />
        </div>
        <h2 class="text-2xl font-heading font-bold text-text-primary">Mulțumim!</h2>
        <p class="text-text-secondary mt-2">Cererea ta a fost trimisă prin WhatsApp. Te vom contacta în curând!</p>
        <RouterLink to="/" class="inline-block mt-6 text-brand hover:text-brand-dark font-medium transition-colors">
          Înapoi la pagina principală
        </RouterLink>
      </div>

      <!-- Form -->
      <form v-else class="bg-white border border-border-subtle rounded-2xl p-8" @submit.prevent="handleSubmit">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <!-- Nume firmă -->
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-text-primary mb-2">Numele firmei *</label>
            <input
              v-model="form.name"
              type="text"
              required
              placeholder="ex: Firma Mea SRL"
              class="w-full px-4 py-3 rounded-xl border border-border-subtle bg-surface-secondary text-text-primary placeholder:text-text-muted outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
            >
          </div>

          <!-- Categorie -->
          <div>
            <label class="block text-sm font-medium text-text-primary mb-2">Categorie *</label>
            <select
              v-model="form.category"
              required
              class="w-full px-4 py-3 rounded-xl border border-border-subtle bg-surface-secondary text-text-primary outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
            >
              <option value="">Selectează categoria</option>
              <option v-for="cat in categories" :key="cat.slug" :value="cat.name">{{ cat.name }}</option>
            </select>
          </div>

          <!-- Oraș -->
          <div>
            <label class="block text-sm font-medium text-text-primary mb-2">Oraș *</label>
            <select
              v-model="form.city"
              required
              class="w-full px-4 py-3 rounded-xl border border-border-subtle bg-surface-secondary text-text-primary outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
            >
              <option value="">Selectează orașul</option>
              <option v-for="city in cities" :key="city.slug" :value="city.name">{{ city.name }}</option>
            </select>
          </div>

          <!-- Telefon -->
          <div>
            <label class="block text-sm font-medium text-text-primary mb-2">Telefon *</label>
            <input
              v-model="form.phone"
              type="tel"
              required
              placeholder="07xx xxx xxx"
              class="w-full px-4 py-3 rounded-xl border border-border-subtle bg-surface-secondary text-text-primary placeholder:text-text-muted outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
            >
          </div>

          <!-- Email -->
          <div>
            <label class="block text-sm font-medium text-text-primary mb-2">Email</label>
            <input
              v-model="form.email"
              type="email"
              placeholder="email@firma.ro"
              class="w-full px-4 py-3 rounded-xl border border-border-subtle bg-surface-secondary text-text-primary placeholder:text-text-muted outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
            >
          </div>

          <!-- Website -->
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-text-primary mb-2">Website (dacă ai)</label>
            <input
              v-model="form.website"
              type="url"
              placeholder="https://www.firma-ta.ro"
              class="w-full px-4 py-3 rounded-xl border border-border-subtle bg-surface-secondary text-text-primary placeholder:text-text-muted outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
            >
          </div>

          <!-- Descriere -->
          <div class="md:col-span-2">
            <label class="block text-sm font-medium text-text-primary mb-2">Descriere scurtă *</label>
            <textarea
              v-model="form.description"
              required
              rows="4"
              placeholder="Descrie pe scurt serviciile oferite de firma ta..."
              class="w-full px-4 py-3 rounded-xl border border-border-subtle bg-surface-secondary text-text-primary placeholder:text-text-muted outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all resize-none"
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          class="mt-8 w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-8 py-4 rounded-xl text-lg transition-colors"
        >
          <Send :size="20" />
          Trimite prin WhatsApp
        </button>

        <p class="mt-4 text-center text-text-muted text-sm">
          Prin trimiterea formularului, vei fi redirecționat către WhatsApp cu un mesaj pre-completat.
        </p>
      </form>
    </div>
  </div>
</template>
