<script setup lang="ts">
import { travelTips } from '../../data/travelContent'
import SectionWrapper from '../ui/SectionWrapper.vue'
</script>

<template>
  <SectionWrapper
    id="tips"
    kicker="Travel Tips"
    title="Simple Guides That Save Time"
    description="Reusable tip cards grouped by category to keep advice practical and easy to scan."
    classes="border-y border-white/50 bg-white/55"
  >
    <div class="grid gap-6 md:grid-cols-3">
      <article v-for="tip in travelTips" :key="tip.category" class="rounded-3xl bg-white p-6 shadow-travel">
        <h3 class="font-heading text-2xl font-bold text-ink">{{ tip.category }}</h3>
        <ul class="mt-4 space-y-3 text-sm leading-relaxed text-slate-700">
          <li v-for="item in tip.items" :key="item" class="flex gap-2">
            <span class="mt-1 text-ocean" aria-hidden="true">•</span>
            <span>{{ item }}</span>
          </li>
        </ul>
      </article>
    </div>
  </SectionWrapper>
</template>
