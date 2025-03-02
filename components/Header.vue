<template>
  <header>
    <div class="header">
      <div class="header__left">
        <div class="logo">
          <NuxtLink to="/">
            <p>
              kama
              <span class="logo__yellow">-</span>
              przydworz
              <span class="logo__yellow">.</span>
              pl
            </p>
          </NuxtLink>
        </div>
        <a :href="`tel:${phoneNumber}`">
          <div class="call">
            <div class="call-phone">
              <img
                class="call-phone-img"
                src="/img/phone.svg"
                :alt="`telefon ${phoneNumberTxt}`"
              />
            </div>
            <div class="call-wrapper">
              <div class="call-number">{{ phoneNumberTxt }}</div>
              <div class="call-text">zarezerwuj domek już dziś</div>
            </div>
          </div>
        </a>
      </div>
      <div class="nav justify-content-end align-items-end">
        <Nav />
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue'
import { usePhoneNumber } from '~/composables/usePhoneNumber'

const { phoneNumber, phoneNumberTxt } = usePhoneNumber()
</script>

<style lang="scss" scoped>
header {
  background-color: $black;
  color: $white;
  height: 100%;
  display: flex;
  flex-direction: row;
}
.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  background-color: $black;
  width: 100%;
  &__left {
    padding-left: 1em;
  }
}
.logo {
  font-weight: 700;
  text-transform: uppercase;
  font-size: 0.7em;
  @include mq(xxsmall) {
    min-width: 0;
  }
  @include mq(medium) {
    min-width: 0;
  }
  & a:hover {
    color: $white;
  }

  & p {
    font-size: 1.2rem;
    @include mq(xsmall) {
      font-size: 1.5rem;
    }
    @include mq(medium) {
      font-size: 1.7rem;
    }
    @include mq(large) {
      font-size: 2.1rem;
    }
  }
}
.logo__yellow {
  color: $yellow !important;
}
.call {
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-left: 0.5em;
  cursor: pointer;
  @include mq(xxsmall) {
    margin-right: 0.9em;
  }
}
.call-wrapper {
  display: flex;
  flex-direction: column;
  text-align: center;
}
.call-number {
  font-size: 0.6em;
  font-weight: 700;
  color: $yellow;
  @include mq(xsmall) {
    font-size: 0.8em;
  }

  @include mq(medium) {
    font-size: 0.9em;
  }
  @include mq(large) {
    font-size: 1em;
  }
}
.call-text {
  font-size: 0.5em;
  @include mq(small) {
    font-size: 0.6em;
  }
  @include mq(medium) {
    font-size: 0.8em;
  }
  @include mq(large) {
    font-size: 0.7em;
  }
}
.call-phone {
  margin-right: 0.5em;
  margin-bottom: 1em;
  @include mq(xsmall) {
    margin-right: 0.8em;
  }
  @include mq(medium) {
    margin-right: 0.9em;
  }
}
.call-phone-img {
  height: 15px;
  width: 15px;
  @include mq(xsmall) {
    height: 25px;
    width: 25px;
  }
  @include mq(large) {
    height: 35px;
    width: 35px;
  }
}
a {
  text-decoration: none;
  color: $white;
}
span {
  margin: 0;
  padding: 0;
}
.nobreak {
  white-space: nowrap;
}
</style>
