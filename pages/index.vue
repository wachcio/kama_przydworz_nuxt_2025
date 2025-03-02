<template>
  <div class="container-fluid p-0">
    <div class="container">
      <Header id="top" />
      <Hero />
      <main>
        <Houses />
        <Resort />
        <AccessToUs />
        <Regulations />
        <Contact />
      </main>
      <footer>
        <p>Wachcio &copy; 2019-{{ getCurrentYear }}</p>
      </footer>
      <Arrow />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useSeoMeta } from '#imports'

// Components
import Header from '~/components/Header.vue'
import Hero from '~/components/Hero.vue'
import Houses from '~/components/Houses.vue'
import Resort from '~/components/Resort.vue'
import AccessToUs from '~/components/AccesToUs.vue'
import Regulations from '~/components/Regulations.vue'
import Contact from '~/components/Contact.vue'
import Arrow from '~/components/Arrow.vue'

// SEO
useSeoMeta({
  title: 'Kama-przydworz.pl - wynajem domków w Przydworzu - 532 623 229',
  description:
    'Domki Przydwórz(wynajem)|Wynajem domków letniskowych w Przydworzu|+48532623229',
  keywords:
    'Kama-przydworz.pl,kama-przydwórz,kama-przydwórz.pl,+48 532 623 229,+48532623229,532623229,kama,domki,wynajem domków,domki Przydwórz,Przydworz,wieczno,wakacje,wypoczynek,Wieczno,jezioro Wieczno',
})

const getCurrentYear = computed(() => {
  return new Date().getFullYear()
})
</script>

<style lang="scss">
footer {
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  background-color: $black;
  color: $white;
  text-transform: uppercase;
  margin-bottom: 2rem;

  & p {
    line-height: 1;
    padding: 0;
    margin: 0;
    font-size: 1rem;
    padding: 0.6rem;

    @include mq(xsmall) {
      padding: 0.7rem;
      font-size: 1rem;
    }
    @include mq(small) {
      padding: 0.7rem;
      font-size: 1rem;
    }
    @include mq(medium) {
      padding: 0.7rem;
      font-size: 1.2rem;
    }
    @include mq(large) {
      padding: 0.7rem;
      font-size: 1.3rem;
    }
    @include mq(xlarge) {
      padding: 0.7rem;
      font-size: 1.4rem;
    }
    @include mq(xxlarge) {
      padding: 0.7rem;
      font-size: 1.5rem;
    }
  }
}
</style>
