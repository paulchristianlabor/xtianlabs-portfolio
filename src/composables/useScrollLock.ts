import { onBeforeUnmount, watch, type Ref } from 'vue'

export function useScrollLock(locked: Ref<boolean>): void {
  let previousOverflow = ''

  watch(
    locked,
    (isLocked) => {
      if (typeof document === 'undefined') {
        return
      }

      if (isLocked) {
        previousOverflow = document.body.style.overflow
        document.body.style.overflow = 'hidden'
      } else {
        document.body.style.overflow = previousOverflow
      }
    },
    { immediate: true },
  )

  onBeforeUnmount(() => {
    if (typeof document !== 'undefined') {
      document.body.style.overflow = previousOverflow
    }
  })
}
