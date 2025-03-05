<template>
  <div class="content" :style="checkReverse()">
    <div class="content__picture" @click="modalShowHide()">
      <figure class="content__picture--img">
        <NuxtImg
          :src="`/img/${path}${img}`"
          :alt="alt"
          format="webp"
          loading="lazy"
          class="content__picture--img"
          sizes="sm:100vw md:50vw lg:50vw"
        />
      </figure>

      <div v-if="modal" class="content__picture--modal" :style="modalStyle">
        <NuxtImg
          :src="`/img/fullSize/${path}${img}`"
          :alt="alt"
          format="webp"
          loading="lazy"
          sizes="sm:90vw md:90vw lg:90vw"
        />
        <div class="x" @click="modalShowHide()">X</div>
      </div>
    </div>
    <div class="content__description">
      <p v-html="parseDescription" />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { usePhoneNumber } from '~/composables/usePhoneNumber'

const props = defineProps({
  path: {
    type: String,
    required: true,
  },
  img: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: '',
  },
  reverse: {
    type: Number,
    default: 0,
  },
})

const { phoneNumber, phoneNumberTxt, parsePhoneNumber } = usePhoneNumber()

const windowWidth = ref(null)
const modal = ref(false)

const modalStyle = computed(() => {
  return modal.value ? { display: 'block' } : { display: 'none' }
})

const parseDescription = computed(() => {
  return parsePhoneNumber(props.description)
})

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

const checkReverse = () => {
  if (windowWidth.value > 576) {
    return props.reverse
      ? { flexDirection: 'row' }
      : { flexDirection: 'row-reverse' }
  }
  return {}
}

const modalShowHide = () => {
  modal.value = !modal.value
}

onMounted(() => {
  if (process.client) {
    windowWidth.value = window.innerWidth
    window.addEventListener('resize', handleResize)
  }
})

onUnmounted(() => {
  if (process.client) {
    window.removeEventListener('resize', handleResize)
  }
})
</script>

<style lang="scss" scoped>
@use 'sass:color';
.content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @include flexColumn();

  &__picture {
    cursor: pointer;
    @include pictureAndDescription();

    &--img {
      width: 100%;
      border-radius: 1.5rem;
      overflow: hidden;
      box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.75);
      transition: 0.4s ease-in-out transform;

      &:hover {
        transform: scale(1.05);
      }
    }

    &--modal {
      display: none;
      position: fixed;
      left: 0;
      top: 0;
      width: 100vw;
      height: 100vh;
      z-index: 999;
      background-color: rgba(0, 0, 0, 0.95);

      img {
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 1000;
        width: 90%;
        height: auto;
        transform: translate(-50%, -50%);
      }

      .x {
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

  &__description {
    padding: 0.5em 1em;
    text-align: justify;
    @include pictureAndDescription();

    a {
      color: $black;
      font-weight: bold;
      text-decoration: underline;

      &:hover {
        /* color: rgba($yellow, 0.75); */
        /* color: darken($yellow, 25%); */
        color: color.adjust($yellow, $lightness: -25%);
      }
    }
  }
}
</style>
