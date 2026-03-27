<script setup lang="ts">
import { featuredDestinations } from '../../data/travelContent'
import BaseCard from '../ui/BaseCard.vue'
import SectionWrapper from '../ui/SectionWrapper.vue'
import TagBadge from '../ui/TagBadge.vue'
</script>

<template>
  <SectionWrapper
    id="destinations"
    kicker="Featured Destinations"
    title="Places Worth Returning To"
    description="Each destination card includes location context, trip style, season, and tags for quick planning."
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
            <h3 class="font-heading text-2xl font-bold text-ink">{{ destination.name }}</h3>
            <p class="mt-1 text-sm font-semibold uppercase tracking-wider text-ocean">
              {{ destination.location }}
            </p>
          </div>
          <p class="text-sm leading-relaxed text-slate-700">{{ destination.description }}</p>
          <div class="flex flex-wrap gap-2">
            <TagBadge v-for="tag in destination.tags" :key="tag">{{ tag }}</TagBadge>
          </div>
          <p class="text-xs font-medium uppercase tracking-wide text-slate-600">
            Best Season: {{ destination.season }} · Trip Type: {{ destination.tripType }}
          </p>
        </div>
      </BaseCard>
    </div>
  </SectionWrapper>
</template>
