<script setup lang="ts">
import PageContainer from '../ui/PageContainer.vue'
import { SAFE_EXTERNAL_REL } from '../../utils/linkSafety'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Stories', href: '#stories' },
  { label: 'Contact', href: '#contact' },
]
</script>

<template>
  <footer class="border-t border-white/60 bg-[#f8f4ee] py-10">
    <PageContainer>
      <div class="flex flex-col gap-6 text-sm text-slate-700 md:flex-row md:items-center md:justify-between">
        <div>
          <p class="font-heading text-2xl font-bold text-ink">Wander Notes</p>
          <p class="mt-2">A static, travel-focused personal website template built with Vue and TypeScript.</p>
        </div>

        <nav aria-label="Footer" class="flex flex-wrap gap-4">
          <a v-for="link in links" :key="link.href" :href="link.href" class="font-semibold transition hover:text-ocean">
            {{ link.label }}
          </a>
          <a
            href="https://vuejs.org"
            target="_blank"
            :rel="SAFE_EXTERNAL_REL"
            class="font-semibold transition hover:text-ocean"
          >
            Vue
          </a>
        </nav>
      </div>
    </PageContainer>
  </footer>
</template>
