<script setup lang="ts">
import SectionWrapper from '../ui/SectionWrapper.vue'
</script>

<template>
  <SectionWrapper
    id="about"
    kicker="About The Traveler"
    title="A Curious Planner Who Loves Slow Routes"
    description="This template highlights a travel-first personal site with content that is easy to edit and keep private. Replace the placeholder story with your own travel perspective, themes, and goals."
    classes="border-y border-white/50 bg-white/55"
  >
    <div class="grid gap-6 md:grid-cols-3">
      <article class="rounded-3xl bg-sand p-6">
        <h3 class="font-heading text-2xl text-ink">Travel Style</h3>
        <p class="mt-3 leading-relaxed text-slate-700">
          Slow travel, walkable neighborhoods, and local mornings over crowded schedules.
        </p>
      </article>
      <article class="rounded-3xl bg-sand p-6">
        <h3 class="font-heading text-2xl text-ink">What I Collect</h3>
        <p class="mt-3 leading-relaxed text-slate-700">
          Small human stories, hidden viewpoints, and practical notes for future trips.
        </p>
      </article>
      <article class="rounded-3xl bg-sand p-6">
        <h3 class="font-heading text-2xl text-ink">Goal Of This Site</h3>
        <p class="mt-3 leading-relaxed text-slate-700">
          Share memories and guidance in a clean static format, with privacy and accessibility in mind.
        </p>
      </article>
    </div>
  </SectionWrapper>
</template>
