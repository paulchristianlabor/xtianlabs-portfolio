<script setup lang="ts">
import { travelStories } from '../../data/travelContent'
import BaseCard from '../ui/BaseCard.vue'
import PrimaryButton from '../ui/PrimaryButton.vue'
import SectionWrapper from '../ui/SectionWrapper.vue'
</script>

<template>
  <SectionWrapper
    id="stories"
    kicker="Travel Journal"
    title="Short Notes From The Road"
    description="Journal entries are designed as modular cards so you can add, remove, or reorder stories quickly."
    classes="bg-white/55"
  >
    <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <BaseCard v-for="story in travelStories" :key="story.title">
        <img :src="story.image" :alt="story.alt" class="h-48 w-full object-cover" loading="lazy" />
        <div class="space-y-4 p-6">
          <p class="text-xs font-semibold uppercase tracking-wider text-ocean">
            {{ new Date(story.date).toLocaleDateString() }} · {{ story.location }}
          </p>
          <h3 class="font-heading text-2xl font-bold text-ink">{{ story.title }}</h3>
          <p class="text-sm leading-relaxed text-slate-700">{{ story.excerpt }}</p>
          <PrimaryButton :href="story.href" variant="ghost">Read More</PrimaryButton>
        </div>
      </BaseCard>
    </div>
  </SectionWrapper>
</template>
