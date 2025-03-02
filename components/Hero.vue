<template>
  <div class="carousel-container">
    <Carousel :autoplay="6000" :wrap-around="true" :items-to-show="1">
      <Slide v-for="(image, index) in images" :key="index">
        <div class="carousel-slide">
          <NuxtImg
            :src="`/img/hero/${image.img}`"
            :alt="image.caption"
            format="webp"
            quality="80"
            class="carousel-image"
            sizes="sm:100vw md:100vw lg:100vw"
          />
          <div class="carousel-caption">
            <h3>{{ image.caption }}</h3>
            <p>{{ image.text }}</p>
          </div>
        </div>
      </Slide>

      <template #addons>
        <Navigation />
        <Pagination />
      </template>
    </Carousel>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Carousel, Navigation, Pagination, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'

const images = ref([
  {
    img: 'forest_2.jpg',
    caption: 'Nieskażona niczym przyroda...',
    text: 'Weź głęboki wdech świeżego leśnego powietrza.',
  },
  {
    img: 'forest_1.jpg',
    caption: 'Leśne ścieżki...',
    text: 'Wyjdź na spacer z rodziną lub pupilem.',
  },
  {
    img: 'brooke-campbell.jpg',
    caption: 'Czyste jezioro...',
    text: 'Weź orzeźwiającą kąpiel w płytkiej i czystej wodzie.',
  },
  {
    img: 'roe.jpg',
    caption: 'Dzika natura...',
    text: 'Jeśli będziesz miał odrobinę szczęścia zobaczysz dzikie zwierzęta.',
  },
  {
    img: 'dry-leaves-fallen-leaves-fungus.jpg',
    caption: 'Udane grzybobranie...',
    text: 'Masz ochotę na grzyby? Tutaj jest ich dostatek...',
  },
  {
    img: 'depth-of-field-fungus-green.jpg',
    caption: 'Cuda natury...',
    text: 'Dbajmy o nią a ona się nam odwdzięczy.',
  },
])
</script>

<style lang="scss" scoped>
.carousel-container {
  width: 100%;
  margin-bottom: 1rem;
}

.carousel-slide {
  position: relative;
  width: 100%;
  height: auto;
}

.carousel-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.carousel-caption {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 0.5rem;
  padding: 0.2rem 1rem;
  text-align: center;
  max-width: 90%;

  h3 {
    font-size: 0.9rem;
    color: $yellow;
    font-weight: bold;
    @include mq(xsmall) {
      font-size: 1.2rem;
    }
    @include mq(small) {
      font-size: 1.6rem;
    }
    @include mq(large) {
      font-size: 1.9rem;
    }
    @include mq(xlarge) {
      font-size: 2.1rem;
    }
  }

  p {
    padding: 0;
    margin: 0;
    margin-bottom: 0.3rem;
    font-size: 0.6rem;
    color: white;
    @include mq(xsmall) {
      font-size: 0.8rem;
    }
    @include mq(small) {
      font-size: 1.4rem;
    }
    @include mq(large) {
      font-size: 1.6rem;
    }
    @include mq(xlarge) {
      font-size: 1.9rem;
    }
  }
}

/* Style dla kropek zamiast prostokątnych wskaźników */
:deep(.carousel__pagination) {
  margin-top: 0.5rem;
  display: flex;
  justify-content: center;
}

:deep(.carousel__pagination-button) {
  width: 12px;
  height: 12px;
  border-radius: 50%; /* Zmiana na okrągłe kropki */
  margin: 0 5px;
  background-color: rgba(0, 0, 0, 0.3);
  transition:
    background-color 0.3s,
    transform 0.3s;

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }

  &::after {
    height: 0;
  }

  @include mq(small) {
    width: 14px;
    height: 14px;
  }

  @include mq(large) {
    width: 16px;
    height: 16px;
  }
}

:deep(.carousel__pagination-button--active) {
  background-color: $yellow;
  transform: scale(1.2); /* Lekko powiększ aktywną kropkę */
}

:deep(.carousel__prev),
:deep(.carousel__next) {
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  color: white;

  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
}
</style>
