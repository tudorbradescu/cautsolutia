<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'
import { ChevronRight, Phone, Mail, MapPin, Send, MessageCircle } from 'lucide-vue-next'
import BackToTop from '@/components/ui/BackToTop.vue'

const form = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const submitted = ref(false)

function handleSubmit() {
  const message = encodeURIComponent(
    `Mesaj de pe CautSoluția.ro\n\n` +
    `👤 Nume: ${form.value.name}\n` +
    `📧 Email: ${form.value.email}\n` +
    `📋 Subiect: ${form.value.subject}\n` +
    `💬 Mesaj: ${form.value.message}`
  )

  const whatsappUrl = `https://wa.me/40727819906?text=${message}`
  window.open(whatsappUrl, '_blank')
  submitted.value = true
}
</script>

<template>
  <div class="pt-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Breadcrumb -->
      <nav class="flex items-center gap-2 text-sm text-text-muted mb-8">
        <RouterLink to="/" class="hover:text-brand transition-colors">Acasă</RouterLink>
        <ChevronRight :size="14" />
        <span class="text-text-primary font-medium">Contact</span>
      </nav>

      <div class="text-center max-w-3xl mx-auto mb-12">
        <h1 class="text-3xl md:text-4xl font-heading font-bold text-text-primary">Contactează-ne</h1>
        <p class="mt-3 text-text-secondary">Ai o întrebare sau vrei să colaborăm? Suntem aici să te ajutăm.</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <!-- Contact info -->
        <div class="lg:col-span-1 space-y-6">
          <div class="bg-surface-secondary rounded-2xl p-6">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                <Phone :size="20" class="text-brand" />
              </div>
              <div>
                <p class="text-sm text-text-muted">Telefon</p>
                <a href="tel:+40727819906" class="text-text-primary font-medium hover:text-brand transition-colors">+40 727 819 906</a>
              </div>
            </div>
          </div>

          <div class="bg-surface-secondary rounded-2xl p-6">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                <Mail :size="20" class="text-brand" />
              </div>
              <div>
                <p class="text-sm text-text-muted">Email</p>
                <a href="mailto:tudor@bradysoftware.ro" class="text-text-primary font-medium hover:text-brand transition-colors">tudor@bradysoftware.ro</a>
              </div>
            </div>
          </div>

          <div class="bg-surface-secondary rounded-2xl p-6">
            <div class="flex items-center gap-3 mb-3">
              <div class="w-10 h-10 rounded-xl bg-brand/10 flex items-center justify-center">
                <MessageCircle :size="20" class="text-brand" />
              </div>
              <div>
                <p class="text-sm text-text-muted">WhatsApp</p>
                <a href="https://wa.me/40727819906" target="_blank" rel="noopener" class="text-text-primary font-medium hover:text-brand transition-colors">Scrie-ne pe WhatsApp</a>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact form -->
        <div class="lg:col-span-2">
          <div v-if="submitted" class="text-center py-12 bg-surface-secondary rounded-2xl">
            <div class="w-16 h-16 bg-brand/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle :size="32" class="text-brand" />
            </div>
            <h2 class="text-2xl font-heading font-bold text-text-primary">Mulțumim!</h2>
            <p class="text-text-secondary mt-2">Mesajul tău a fost trimis. Te contactăm în curând!</p>
          </div>

          <form v-else class="bg-white border border-border-subtle rounded-2xl p-8" @submit.prevent="handleSubmit">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-text-primary mb-2">Numele tău *</label>
                <input
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Ion Popescu"
                  class="w-full px-4 py-3 rounded-xl border border-border-subtle bg-surface-secondary text-text-primary placeholder:text-text-muted outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                >
              </div>
              <div>
                <label class="block text-sm font-medium text-text-primary mb-2">Email *</label>
                <input
                  v-model="form.email"
                  type="email"
                  required
                  placeholder="email@exemplu.ro"
                  class="w-full px-4 py-3 rounded-xl border border-border-subtle bg-surface-secondary text-text-primary placeholder:text-text-muted outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                >
              </div>
              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-text-primary mb-2">Subiect *</label>
                <input
                  v-model="form.subject"
                  type="text"
                  required
                  placeholder="Cu ce te putem ajuta?"
                  class="w-full px-4 py-3 rounded-xl border border-border-subtle bg-surface-secondary text-text-primary placeholder:text-text-muted outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all"
                >
              </div>
              <div class="md:col-span-2">
                <label class="block text-sm font-medium text-text-primary mb-2">Mesaj *</label>
                <textarea
                  v-model="form.message"
                  required
                  rows="5"
                  placeholder="Scrie mesajul tău aici..."
                  class="w-full px-4 py-3 rounded-xl border border-border-subtle bg-surface-secondary text-text-primary placeholder:text-text-muted outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-all resize-none"
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              class="mt-6 w-full flex items-center justify-center gap-2 bg-brand hover:bg-brand-dark text-white font-bold px-6 py-4 rounded-xl transition-colors"
            >
              <Send :size="18" />
              Trimite prin WhatsApp
            </button>
          </form>
        </div>
      </div>
    </div>
    <BackToTop />
  </div>
</template>
