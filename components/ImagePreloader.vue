<template>
  <div style="display: none">
    <!-- Ładowanie obrazów z Houses -->
    <NuxtImg
      v-for="img in housesImages"
      :key="`house-${img}`"
      :src="`/img/fullSize/${img}`"
      format="webp"
      loading="lazy"
    />

    <!-- Ładowanie obrazów z Resort -->
    <NuxtImg
      v-for="img in resortImages"
      :key="`resort-${img}`"
      :src="`/img/fullSize/${img}`"
      format="webp"
      loading="lazy"
    />
  </div>
</template>

<script setup>
import { computed } from 'vue'

// Importujemy dane z komponentów Houses i Resort
// Możemy wykorzystać te same tablice danych lub stworzyć nowe
const housesContent = [
  { img: 'IMG_6176.jpg' },
  { img: 'IMG_6173.jpg' },
  { img: 'IMG_9205.jpg' },
  { img: 'IMG_9219.jpg' },
  { img: 'IMG_9226.jpg' },
  { img: 'IMG_9238.jpg' },
  { img: 'IMG_9251.jpg' },
]

const resortContent = [
  { img: 'IMG_6324.jpg' },
  { img: 'IMG_6316.jpg' },
  { img: 'IMG_6201.jpg' },
  { img: 'IMG_6328.jpg' },
  { img: 'IMG_6269.jpg' },
]

// Wyodrębniamy same nazwy obrazów do tablicy
const housesImages = computed(() => housesContent.map((item) => item.img))
const resortImages = computed(() => resortContent.map((item) => item.img))
</script>
