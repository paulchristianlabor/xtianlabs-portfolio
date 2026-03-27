<script setup lang="ts">
import { reactive, ref } from 'vue'
import SectionWrapper from '../ui/SectionWrapper.vue'

interface ContactForm {
  name: string
  email: string
  message: string
}

const form = reactive<ContactForm>({
  name: '',
  email: '',
  message: '',
})

const isSubmitted = ref(false)

function handleSubmit(): void {
  isSubmitted.value = true
}
</script>

<template>
  <SectionWrapper
    id="contact"
    kicker="Contact"
    title="Plan A Future Route Together"
    description="This static form is frontend-only and intended as a UI placeholder for a secure provider later."
  >
    <div class="grid gap-8 lg:grid-cols-2">
      <article class="rounded-3xl bg-sand p-6 sm:p-8">
        <h3 class="font-heading text-3xl text-ink">Say Hello</h3>
        <p class="mt-4 leading-relaxed text-slate-700">
          Share destination ideas, journal prompts, or collaboration notes. No private information is required in this placeholder form.
        </p>
        <p class="mt-6 text-sm font-semibold uppercase tracking-[0.14em] text-ocean">
          Response style: Friendly, practical, and travel-focused
        </p>
      </article>

      <form class="rounded-3xl bg-white p-6 shadow-travel sm:p-8" @submit.prevent="handleSubmit">
        <div class="space-y-5">
          <div>
            <label for="contact-name" class="mb-2 block text-sm font-semibold text-slate-700">Name</label>
            <input
              id="contact-name"
              v-model="form.name"
              name="name"
              type="text"
              required
              class="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm transition focus:border-ocean"
            />
          </div>

          <div>
            <label for="contact-email" class="mb-2 block text-sm font-semibold text-slate-700">Email</label>
            <input
              id="contact-email"
              v-model="form.email"
              name="email"
              type="email"
              required
              class="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm transition focus:border-ocean"
            />
          </div>

          <div>
            <label for="contact-message" class="mb-2 block text-sm font-semibold text-slate-700">Message</label>
            <textarea
              id="contact-message"
              v-model="form.message"
              name="message"
              required
              rows="5"
              class="w-full rounded-xl border border-slate-300 px-4 py-3 text-sm transition focus:border-ocean"
            ></textarea>
          </div>

          <button
            type="submit"
            class="rounded-full border-2 border-clay bg-clay px-6 py-3 text-sm font-semibold text-white transition hover:border-amber-700 hover:bg-amber-700"
          >
            Send Message
          </button>

          <p v-if="isSubmitted" role="status" class="text-sm font-medium text-ocean">
            Thanks, your message was captured in this frontend demo.
          </p>
        </div>
      </form>
    </div>
  </SectionWrapper>
</template>
