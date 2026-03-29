<script setup lang="ts">
import FooterSection from '../components/sections/FooterSection.vue'
import NavbarSection from '../components/sections/NavbarSection.vue'
</script>

<template>
  <a
    href="#main-content"
    class="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-black"
  >
    Skip to main content
  </a>
  <div class="min-h-screen overflow-x-clip text-slate-900">
    <NavbarSection />
    <main id="main-content">
      <slot></slot>
    </main>
    <FooterSection />
  </div>
</template>
