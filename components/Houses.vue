<template>
  <section id="houses" class="houses">
    <h1>Domki na wynajem kama-przydwórz</h1>
    <div class="houses__content">
      <PictureDescription
        v-for="(item, index) in content"
        :key="index"
        path="houses/"
        :img="item.img"
        :description="item.text"
        :alt="`Kama Przydwórz domek na wynajem_${index + 1}`"
        :reverse="index % 2"
      />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { usePhoneNumber } from '~/composables/usePhoneNumber'

import PictureDescription from '~/components/PictureDescription.vue'

const { phoneNumber, phoneNumberTxt } = usePhoneNumber()

const content = ref([
  {
    img: 'IMG_6176.jpg',
    text: 'Mamy do wynajęcia domek w cichej miejscowości Przydwórz nad jeziorem Wieczno, gmina Wąbrzeźno.',
  },
  {
    img: 'IMG_6173.jpg',
    text: 'Domek w zabudowie bliźniaczej, do wynajęcia każda z części, teren ogrodzony z możliwością zaparkowania na nim auta. W każdej części znajduje się kuchnia (lodówka, kuchenka gazowa), łazienka z prysznicem (ciepła woda) oraz dwa pokoje w których najmłodsi goście w razie niepogody znajdą zabawki, karty, szachy czy kolorowanki.',
  },
  {
    img: 'IMG_9205.jpg',
    text: 'Możliwość wynajęcia dwóch stron domku jednocześnie. Domek z TV naziemną kompletnie wyposażony (talerze, szklanki, sztućce, garnki itp). Dla naszych gości dostępny jest grill, hamak, miejsce na ognisko i dwa stoły z ławkami. Ogrodzony teren wspaniale nadaje się do zabawy z dziećmi, jak również dla dorosłych.',
  },
  {
    img: 'IMG_9219.jpg',
    text: 'Piękne malownicze jezioro, ok 150 m do plaży. Idealne miejsce do wypoczynku z dziećmi (płytka czysta woda). Doskonałe tereny do wypoczynku wraz z rodziną, raj dla wędkarzy.',
  },
  {
    img: 'IMG_9226.jpg',
    text: 'W sezonie czynne sklepy, bary, dyskoteki przy plaży, możliwość wypożyczenia rowerów wodnych, kajaków. NIE WYNAJMUJEMY MŁODZIEŻY BEZ OPIEKUNA.',
  },
  {
    img: 'IMG_9238.jpg',
    text: 'Czas wynajmu minimum 2 doby w okresie poza sezonem. W sezonie czas wynajmu minimum 5 dni. Cena za wynajęcie 300 zł na dobę, dotyczy jednej strony domku w której pomieści się maksymalnie 6 osób. Doba zaczyna się w dniu przyjazdu od godz. 15:00 do godz. 12:00 dnia następnego.',
  },
  {
    img: 'IMG_9251.jpg',
    text: `Więcej informacji udzielamy pod numerem telefonu ${phoneNumberTxt.value}`,
  },
])
</script>

<style lang="scss" scoped>
.houses {
  @include yellowSection();
}
</style>
