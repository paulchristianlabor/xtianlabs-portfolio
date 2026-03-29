<script setup lang="ts">
import SectionWrapper from '../ui/SectionWrapper.vue'
</script>

<template>
  <SectionWrapper
    id="about"
    kicker="About"
    title="A Minimal Travel Portfolio"
    description="I explore places and document real experiences. Nature, culture, and quiet moments."
    classes="border-y border-slate-200 bg-white/70"
  >
    <div class="grid gap-6 md:grid-cols-3">
      <article class="rounded-3xl border border-slate-200 bg-white p-6">
        <h3 class="font-heading text-2xl text-slate-900">Travel Style</h3>
        <p class="mt-3 leading-relaxed text-slate-700">
          Slow routes with visual-first storytelling.
        </p>
      </article>
      <article class="rounded-3xl border border-slate-200 bg-white p-6">
        <h3 class="font-heading text-2xl text-slate-900">What I Share</h3>
        <p class="mt-3 leading-relaxed text-slate-700">
          Destinations, snapshots, and short notes.
        </p>
      </article>
      <article class="rounded-3xl border border-slate-200 bg-white p-6">
        <h3 class="font-heading text-2xl text-slate-900">Goal</h3>
        <p class="mt-3 leading-relaxed text-slate-700">
          Keep each journey quick to scan and remember.
        </p>
      </article>
    </div>
  </SectionWrapper>
</template>
