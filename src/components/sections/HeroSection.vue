<script setup lang="ts">
import PrimaryButton from '../ui/PrimaryButton.vue'
import PageContainer from '../ui/PageContainer.vue'
</script>

<template>
  <section id="home" class="relative overflow-hidden pt-14 sm:pt-20">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(14,116,144,0.2),transparent_40%),radial-gradient(circle_at_20%_80%,rgba(199,102,61,0.18),transparent_35%)]"
    ></div>

    <PageContainer>
      <div class="relative grid items-center gap-10 pb-16 md:grid-cols-2 md:pb-20">
        <div class="space-y-6 section-enter">
          <p class="text-sm font-semibold uppercase tracking-[0.24em] text-ocean">Personal Travel Journal</p>
          <h1 class="font-heading text-4xl font-bold leading-tight text-ink sm:text-5xl lg:text-6xl">
            Collecting Calm Roads, Wild Skies, And Tiny Stories In Between
          </h1>
          <p class="max-w-xl text-lg leading-relaxed text-slate-700">
            A static personal travel website sharing favorite destinations, practical tips, and journal-style memories from slow and meaningful trips.
          </p>
          <div class="flex flex-wrap gap-4">
            <PrimaryButton href="#destinations">Explore Destinations</PrimaryButton>
            <PrimaryButton href="#stories" variant="ghost">Read Stories</PrimaryButton>
          </div>
        </div>

        <div class="section-enter" style="animation-delay: 120ms">
          <div class="rounded-[2.5rem] border border-white/60 bg-white/70 p-6 shadow-travel backdrop-blur-sm sm:p-8">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-ocean">Next Adventure</p>
            <h2 class="mt-3 font-heading text-3xl font-bold text-ink">Patagonia Blue Trail</h2>
            <p class="mt-4 leading-relaxed text-slate-700">
              Planning a two-week route with glacier walks, remote villages, and sunrise photo stops.
            </p>
            <dl class="mt-6 grid grid-cols-2 gap-4 text-sm text-slate-700">
              <div class="rounded-2xl bg-mist p-4">
                <dt class="font-semibold uppercase tracking-wide text-ocean">Duration</dt>
                <dd class="mt-1">14 Days</dd>
              </div>
              <div class="rounded-2xl bg-mist p-4">
                <dt class="font-semibold uppercase tracking-wide text-ocean">Focus</dt>
                <dd class="mt-1">Hiking + Photo</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </PageContainer>
  </section>
</template>
