<script setup lang="ts">
interface Props {
  kicker?: string
  title: string
  description?: string
}

defineProps<Props>()
</script>

<template>
  <header class="max-w-3xl">
    <p v-if="kicker" class="text-sm font-semibold uppercase tracking-[0.2em] text-slate-600">
      {{ kicker }}
    </p>
    <h2 class="mt-2 font-heading text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
      {{ title }}
    </h2>
    <p v-if="description" class="mt-4 text-base leading-relaxed text-slate-700 sm:text-lg">
      {{ description }}
    </p>
  </header>
</template>
