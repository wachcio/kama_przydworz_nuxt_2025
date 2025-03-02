<template>
  <section class="map-legend">
    <h2>Plan ośrodka</h2>
    <div class="map-legend__container">
      <div class="map">
        <div class="map__img" @click="mapFullSizeShowHide()">
          <MapSvg class="map__svg" />
          <!-- <img
            src="~/components/icons/map.svg"
            alt="Plan ośrodka"
            class="map__svg"
          /> -->
        </div>

        <div
          v-if="mapFullSize"
          class="map__full-size"
          :style="fullSizeStyle"
          @click="mapFullSizeShowHide()"
        >
          <MapSvg class="map__svg-fullsize" />
          <div class="x">X</div>
        </div>
      </div>

      <div class="legend">
        <div
          v-for="item in legend_items"
          :key="item.source"
          class="legend__item"
        >
          <NuxtImg
            :src="`/img/resort/mapLegend/${item.source}.svg`"
            :alt="item.description"
            loading="lazy"
          />
          <span class="legend-icon" :class="`icon-${item.source}`"></span>
          <p>{{ item.description }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import MapSvg from '~/components/icons/map.svg'

const mapFullSize = ref(false)

const fullSizeStyle = computed(() => {
  return mapFullSize.value ? { display: 'block' } : { display: 'none' }
})

const legend_items = ref([
  { source: 'our_houses', description: 'nasze domki' },
  { source: 'playground', description: 'plac zabaw' },
  { source: 'information', description: 'tablica informacyjna' },
  { source: 'parking', description: 'parking' },
  { source: 'reception', description: 'recepcja' },
  { source: 'parkomat', description: 'parkomat' },
  { source: 'police', description: 'policja' },
  {
    source: 'bicycle_parking_place',
    description: 'miejsce postojowe dla rowerów',
  },
  { source: 'beach', description: 'plaża' },
  { source: 'wc', description: 'WC' },
  {
    source: 'water_equipment_rental',
    description: 'wypożyczalnia sprzętu wodnego',
  },
  { source: 'houses', description: 'domki letniskowe' },
  { source: 'lake', description: 'jezioro Wieczno' },
  { source: 'barbecue_with_gazebo', description: 'grill z altaną' },
  { source: 'bridge', description: 'pomost' },
  { source: 'campsite', description: 'pole namiotowe' },
  { source: 'watering_place', description: 'kąpielisko' },
  { source: 'volleyball_court', description: 'boisko do siatkówki' },
  { source: 'shop', description: 'sklep' },
  { source: 'bar', description: 'bar' },
  { source: 'green_areas', description: 'tereny ziolone' },
])

function mapFullSizeShowHide() {
  mapFullSize.value = !mapFullSize.value
}
</script>

<style lang="scss" scoped>
.map-legend {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 0.4em;
  margin-top: 3rem;

  @include mq(xsmall) {
    font-size: 0.5em;
  }

  @include mq(small) {
    font-size: 0.7em;
  }

  @include mq(large) {
    font-size: 1em;
  }

  @include mq(xlarge) {
    font-size: 1.1em;
  }

  &__container {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

.legend {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;

  &__item {
    width: 33%;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 0.7em;
    margin-bottom: 1.1em;

    & img {
      width: 3em;
      height: 3em;
      margin: 0 0.1em;
      @include mq(small) {
      }
    }

    & p {
      font-size: 1rem;
      margin: 0;
      padding: 0;
      margin-left: 0.5em;

      @include mq(xsmall) {
        font-size: 1.1rem;
      }

      @include mq(small) {
        font-size: 1.1rem;
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
}

.map {
  width: 100%; // Przeniesiona deklaracja
  cursor: pointer;
  @include pictureAndDescription();

  &__img {
    width: 100%;
    box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.75);
    position: relative;
    // Usunięte aspect-ratio: 1 / 1;
  }

  &__iframe {
    width: 100%;
    min-height: 400px; // Minimalna wysokość dla mapy
    border: none;
    display: block;
  }

  &__svg {
    width: 100%;
    height: auto; // Zachowaj proporcje
    min-height: 400px; // Minimalna wysokość
  }

  &__full-size {
    display: none;
    position: fixed;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.95);

    .map__iframe-fullsize,
    .map__svg-fullsize {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: auto;
      height: 80vh; // Większa wysokość w widoku pełnoekranowym
      max-width: 90vw;
    }

    & .x {
      position: absolute;
      z-index: 1001;
      width: 1.5em;
      height: 1.5em;
      background-color: rgba(0, 0, 0, 0.75);
      right: 2em;
      top: 2em;
      color: gray;
      font-size: 1.5em;
      text-align: center;
      line-height: 1.5em;
      transition: 0.3s color;
      cursor: pointer;

      &:hover {
        color: $white;
      }
    }
  }
}
</style>
