<script setup lang="ts">
import PrimaryButton from '../ui/PrimaryButton.vue'
import PageContainer from '../ui/PageContainer.vue'
</script>

<template>
  <section id="home" class="relative overflow-hidden pt-14 sm:pt-20">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(0,0,0,0.08),transparent_42%),radial-gradient(circle_at_20%_80%,rgba(0,0,0,0.05),transparent_38%)]"
    ></div>

    <PageContainer>
      <div class="relative grid items-center gap-10 pb-16 md:grid-cols-2 md:pb-20">
        <div class="space-y-6 section-enter">
          <p class="text-sm font-semibold uppercase tracking-[0.24em] text-slate-600">Traveller Portfolio</p>
          <h1 class="font-heading text-4xl font-bold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Traveller & Explorer
          </h1>
          <p class="max-w-xl text-lg leading-relaxed text-slate-700">
            Capturing moments from around the world.
          </p>
          <p class="max-w-xl text-base text-slate-600">Simple journeys. Real experiences.</p>
          <div class="flex flex-wrap gap-4">
            <PrimaryButton href="#destinations">View Trips</PrimaryButton>
            <PrimaryButton href="#gallery" variant="ghost">View Gallery</PrimaryButton>
          </div>
        </div>

        <div class="section-enter" style="animation-delay: 120ms">
          <div class="rounded-[2.5rem] border border-slate-200 bg-white/85 p-6 shadow-travel backdrop-blur-sm sm:p-8">
            <p class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">Current Focus</p>
            <h2 class="mt-3 font-heading text-3xl font-bold text-slate-900">Nature, Coast, And Culture</h2>
            <p class="mt-4 leading-relaxed text-slate-700">Minimal notes with strong visual storytelling.</p>
          </div>
        </div>
      </div>
    </PageContainer>
  </section>
</template>
