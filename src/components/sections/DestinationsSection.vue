<script setup lang="ts">
import { featuredDestinations } from '../../data/travelContent'
import BaseCard from '../ui/BaseCard.vue'
import SectionWrapper from '../ui/SectionWrapper.vue'
</script>

<template>
  <SectionWrapper
    id="destinations"
    kicker="Destinations"
    title="Places I Visited"
    description="Location and one short vibe line."
  >
    <div class="grid gap-6 lg:grid-cols-3">
      <BaseCard v-for="destination in featuredDestinations" :key="destination.name">
        <img
          :src="destination.image"
          :alt="destination.alt"
          class="h-52 w-full object-cover"
          loading="lazy"
        />
        <div class="space-y-4 p-6">
          <div>
            <h3 class="font-heading text-2xl font-bold text-slate-900">{{ destination.name }}</h3>
            <p class="mt-1 text-sm font-semibold uppercase tracking-wider text-slate-600">
              {{ destination.location }}
            </p>
          </div>
          <p class="text-sm leading-relaxed text-slate-700">{{ destination.description }}</p>
        </div>
      </BaseCard>
    </div>
  </SectionWrapper>
</template>
