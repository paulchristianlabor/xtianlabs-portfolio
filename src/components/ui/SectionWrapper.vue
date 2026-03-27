<script setup lang="ts">
import PageContainer from './PageContainer.vue'
import SectionHeading from './SectionHeading.vue'

interface Props {
  id: string
  kicker?: string
  title?: string
  description?: string
  classes?: string
}

defineProps<Props>()
</script>

<template>
  <section :id="id" :class="['py-16 sm:py-20', classes]">
    <PageContainer>
      <div class="space-y-10">
        <slot name="heading">
          <SectionHeading
            v-if="title"
            :kicker="kicker"
            :title="title"
            :description="description"
          />
        </slot>
        <slot></slot>
      </div>
    </PageContainer>
  </section>
</template>
