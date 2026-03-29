<script setup lang="ts">
import { computed } from 'vue'
import { SAFE_EXTERNAL_REL } from '../../utils/linkSafety'

interface Props {
  href: string
  variant?: 'solid' | 'ghost'
  external?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'solid',
  external: false,
})

const classes = computed(() => {
  if (props.variant === 'ghost') {
    return 'border-2 border-black bg-transparent text-black hover:bg-black hover:text-white'
  }

  return 'border-2 border-black bg-black text-white hover:border-slate-800 hover:bg-slate-800'
})
</script>

<template>
  <a
    :href="href"
    class="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition focus-visible:outline-none"
    :class="classes"
    :target="external ? '_blank' : undefined"
    :rel="external ? SAFE_EXTERNAL_REL : undefined"
  >
    <slot></slot>
  </a>
</template>
