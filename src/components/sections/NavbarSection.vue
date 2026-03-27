<script setup lang="ts">
import { ref, watch } from 'vue'
import PageContainer from '../ui/PageContainer.vue'
import { useScrollLock } from '../../composables/useScrollLock'

interface NavItem {
  label: string
  href: string
}

const navItems: NavItem[] = [
  { label: 'About', href: '#about' },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Stories', href: '#stories' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Tips', href: '#tips' },
  { label: 'Contact', href: '#contact' },
]

const isMenuOpen = ref(false)
useScrollLock(isMenuOpen)

function toggleMenu(): void {
  isMenuOpen.value = !isMenuOpen.value
}

function closeMenu(): void {
  isMenuOpen.value = false
}

watch(
  () => isMenuOpen.value,
  (open) => {
    if (!open) {
      return
    }

    const firstFocusable = document.querySelector<HTMLAnchorElement>('#mobile-menu a')
    firstFocusable?.focus()
  },
)
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-white/60 bg-[#f8f4ee]/90 backdrop-blur-sm">
    <PageContainer>
      <div class="flex h-20 items-center justify-between gap-4">
        <a href="#home" class="font-heading text-xl font-bold text-ink">Wander Notes</a>

        <nav aria-label="Primary" class="hidden items-center gap-6 text-sm font-semibold text-slate-700 md:flex">
          <a
            v-for="item in navItems"
            :key="item.href"
            :href="item.href"
            class="transition hover:text-ocean"
          >
            {{ item.label }}
          </a>
        </nav>

        <button
          type="button"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 text-slate-700 transition hover:border-ocean hover:text-ocean md:hidden"
          aria-controls="mobile-menu"
          :aria-expanded="isMenuOpen"
          :aria-label="isMenuOpen ? 'Close menu' : 'Open menu'"
          @click="toggleMenu"
        >
          <span class="sr-only">Menu</span>
          <span aria-hidden="true">{{ isMenuOpen ? '×' : '☰' }}</span>
        </button>
      </div>
    </PageContainer>

    <nav
      v-if="isMenuOpen"
      id="mobile-menu"
      aria-label="Mobile"
      class="border-t border-slate-200 bg-white md:hidden"
    >
      <PageContainer>
        <ul class="flex flex-col gap-2 py-4">
          <li v-for="item in navItems" :key="item.href">
            <a
              :href="item.href"
              class="block rounded-xl px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-mist hover:text-ocean"
              @click="closeMenu"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </PageContainer>
    </nav>
  </header>
</template>
