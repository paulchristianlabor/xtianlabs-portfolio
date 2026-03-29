<script setup lang="ts">
import { galleryPhotos } from '../../data/travelContent'
import SectionWrapper from '../ui/SectionWrapper.vue'
</script>

<template>
  <SectionWrapper
    id="gallery"
    kicker="Gallery"
    title="Travel Photos"
    description="Visual-first highlights from each trip."
  >
    <div class="grid auto-rows-[220px] gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <figure
        v-for="(photo, index) in galleryPhotos"
        :key="photo.title"
        class="group relative overflow-hidden rounded-3xl"
        :class="index % 3 === 0 ? 'sm:row-span-2 sm:auto-rows-[220px]' : ''"
      >
        <img
          :src="photo.image"
          :alt="photo.alt"
          class="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <figcaption class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-16 text-white">
          <p class="text-sm font-semibold tracking-wide">{{ photo.title }}</p>
        </figcaption>
      </figure>
    </div>
  </SectionWrapper>
</template>
