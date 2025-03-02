<template>
  <a
    href="#"
    class="arrow"
    :class="{ arrowAnimation: isAnimation }"
    title="Przewiń na górę strony"
    @click.prevent="scrollToTop"
  >
    <!-- <Icon name="fa6-solid:angle-double-up" class="arrow__icon" /> -->
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      class="arrow__icon"
    >
      <path d="M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z" />
      <path d="M7.41,9.41L12,4.83L16.59,9.41L18,8L12,2L6,8L7.41,9.41Z" />
    </svg>
  </a>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isAnimation = ref(true)

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

const isTouchDevice = () => {
  if (process.server) return false

  const prefixes = ' -webkit- -moz- -o- -ms- '.split(' ')
  const mq = (query) => window.matchMedia(query).matches

  if (
    'ontouchstart' in window ||
    (window.DocumentTouch && document instanceof DocumentTouch)
  ) {
    return true
  }

  const query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('')
  return mq(query)
}

onMounted(() => {
  isAnimation.value = !isTouchDevice()
})
</script>

<style lang="scss" scoped>
.arrow {
  position: fixed;
  bottom: 1em;
  right: 1em;
  height: 2em;
  width: 2em;
  background-color: $yellow;
  border: 0.1em solid $black;
  border-radius: 50%;
  opacity: 0.3;
  overflow: hidden;
  transition: 0.4s opacity;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  &:hover {
    opacity: 1;
  }
}

.arrowAnimation:hover .arrow__icon {
  animation-duration: 0.7s;
  animation-name: arrowUp;
  animation-iteration-count: infinite;
}

@keyframes arrowUp {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-100%);
    opacity: 1;
  }
  26% {
    opacity: 0;
  }
  27% {
    transform: translateY(100%);
    opacity: 1;
  }
  28% {
    opacity: 1;
  }
  100% {
    transform: translateY(0);
  }
}

.arrow__icon {
  color: $black;
  font-size: 1em;
  width: 80%;
  height: 80%;
  transition: 0.2s transform;
}
</style>
