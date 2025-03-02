<template>
  <section id="contact" class="contact">
    <h2>Kontakt</h2>
    <div class="contact__container">
      <div class="contact__picture">
        <figure>
          <NuxtImg
            src="/img/contact/iphone.jpg"
            alt="Telefon"
            loading="lazy"
            format="webp"
            sizes="sm:100vw md:50vw lg:50vw"
          />
        </figure>
      </div>
      <div class="contact__description">
        <p>Głównym kontaktem do nas jest telefon.</p>
        <a
          class="contact__description--phone-number"
          :href="`tel:${phoneNumber}`"
        >
          {{ phoneNumberTxt }}
        </a>
        <p>
          Tutaj zawsze uzyskasz najpewniejsze i najświeższe informacje na każdy
          temat związany z domkami, kosztami czy terminami najmu.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePhoneNumber } from '~/composables/usePhoneNumber'

const { phoneNumber, phoneNumberTxt } = usePhoneNumber()
</script>

<style lang="scss" scoped>
@use 'sass:color';
.contact {
  @include yellowSection();
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    @include flexColumn();
  }

  &__picture {
    width: 100%;
    @include mq(small) {
      width: 50%;
    }

    img {
      width: 100%;
      box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.75);
    }
  }

  &__description {
    padding: 2rem 0;
    text-align: justify;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @include mq(small) {
      width: 50%;
      padding-left: 1rem;
    }

    &--phone-number {
      text-align: center;
      font-size: 2.7rem;
      font-weight: bold;
      color: $black;
      text-decoration: none;
      margin: 1rem 0;

      &:hover {
        /* color: darken($black, 20%); */
        color: color.scale($black, $lightness: 40%);
      }
    }
  }
}
</style>
