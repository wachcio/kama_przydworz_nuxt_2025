<template>
  <section id="access-to-us" class="access-to-us">
    <h2>Jak dojechać do nas</h2>
    <div class="map">
      <div class="map__picture">
        <figure>
          <NuxtImg
            src="/img/map/map_street_map.png"
            alt="Mapa poglądowa"
            loading="lazy"
            format="webp"
            class="map-image"
            sizes="sm:100vw md:50vw lg:50vw"
          />
        </figure>
      </div>
      <div class="map__description">
        <p>
          Nasze domki znajdują się w miejscowości Przydwórz niedaleko Wąbrzeźna.
          Dokładna lokalizacja GPS to N 53.263331 i E 18.812688
        </p>

        <a
          href="https://www.google.pl/maps/dir//53.263331,+18.812688/@53.2623893,18.7781456"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NuxtImg
            :src="`/img/map/google_maps.svg`"
            :alt="`Google maps`"
            loading="lazy"
          />
          Wyznacz trasę z Google Maps
        </a>

        <a
          href="https://mapa.targeo.pl/531548N_1848457E,19,18.8126900,53.2633300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NuxtImg
            :src="`/img/map/targeo.svg`"
            :alt="`Targeo`"
            loading="lazy"
          />
          Wyznacz trasę z Targeo
        </a>

        <a
          href="https://www.openstreetmap.org/directions?to=53.26203%2C18.81262"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NuxtImg
            :src="`/img/map/open_street_map.png`"
            :alt="`Google maps`"
            loading="lazy"
          />
          Wyznacz trasę z OpenStreetMap
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// Brak logiki w tym komponencie
</script>

<style lang="scss" scoped>
@use 'sass:color';
.access-to-us {
  @include yellowSection();
}

.map {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include flexColumn();

  &__picture {
    @include pictureAndDescription();

    .map-image {
      width: 100%;
      box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.75);
    }
  }

  &__description {
    padding: 0.5em 1em;
    text-align: justify;
    @include pictureAndDescription();
  }

  a {
    text-decoration: none;
    color: $black;
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;

    &:hover {
      color: color.scale($black, $lightness: -45%);
    }

    font-size: 1rem;

    @include mq(xsmall) {
      font-size: 1rem;
    }
    @include mq(small) {
      font-size: 1rem;
    }
    @include mq(medium) {
      font-size: 1.3rem;
    }
    @include mq(large) {
      font-size: 1.7rem;
    }
    @include mq(xlarge) {
      font-size: 1.8rem;
    }
    @include mq(xxlarge) {
      font-size: 1.9rem;
    }
  }
}

.map-icon {
  display: inline-block;
  width: 24px;
  height: 24px;
  margin-right: 8px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;

  @include mq(medium) {
    width: 32px;
    height: 32px;
  }
}

.google-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' fill='%23EA4335'/%3E%3C/svg%3E");
}

.targeo-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' fill='%234285F4'/%3E%3C/svg%3E");
}

.osm-icon {
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z' fill='%2377A63A'/%3E%3C/svg%3E");
}
</style>
