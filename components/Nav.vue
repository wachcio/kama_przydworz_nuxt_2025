<template>
  <nav class="navbar navbar-expand-sm navbar-dark">
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon" />
    </button>

    <div id="navbarNav" class="collapse navbar-collapse">
      <ul class="navbar-nav">
        <li v-for="item in items" :key="item.link" class="nav-item">
          <a
            class="nav-link"
            :href="item.link"
            @click.prevent="scrollTo(item.link)"
          >
            {{ item.text }}
          </a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const items = ref([
  { text: 'Domki', link: '#houses' },
  { text: 'Ośrodek', link: '#resort' },
  { text: 'Dojazd', link: '#access-to-us' },
  { text: 'Regulamin', link: '#regulations' },
  { text: 'Kontakt', link: '#contact' }
])

const scrollTo = (elementId) => {
  const element = document.querySelector(elementId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }

  // Close mobile menu if open
  const navbarCollapse = document.getElementById('navbarNav')
  if (navbarCollapse && navbarCollapse.classList.contains('show')) {
    const bsCollapse = new bootstrap.Collapse(navbarCollapse)
    bsCollapse.hide()
  }
}

onMounted(() => {
  // Import Bootstrap JS only on client-side
  if (process.client) {
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
  }
})
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  padding-right: 1em;
  justify-content: flex-end;
  z-index: 99;
  @include mq(xxsmall) {
    padding-right: 0.2em;
  }
}

.nav-item {
  padding: 10px 0;
  color: $white;
  border-bottom: 2px solid transparent;
  transition: border-bottom 0.2s;
  &:hover,
  &:active,
  &:focus,
  &:target {
    border-bottom: 2px solid $yellow;
  }
}

.nav-link {
  color: $white !important;
  font-size: 0.5em;
  @include mq(xsmall) {
    padding-right: 0.6em;
    font-size: 0.7em;
  }
  @include mq(medium) {
    font-size: 1.1em;
  }
}

.navbar-nav {
  align-items: center;
  justify-content: flex-end;
}
</style>
