<template>
  <section id="resort" class="resort">
    <h2>Ośrodek wypoczynkowy Przydwórz</h2>
    <div class="resort__content">
      <PictureDescription
        v-for="(item, index) in content"
        :key="item.img"
        path="resort/"
        :img="item.img"
        :alt="`Kama - Ośrodek wypoczynkowy Przydwórz_${index + 1}`"
        :description="item.text"
        :reverse="index % 2"
      />
    </div>
    <MapLegend />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import PictureDescription from '~/components/PictureDescription.vue'
import MapLegend from '~/components/MapLegend.vue'

const content = ref([
  {
    img: 'IMG_6324.jpg',
    text: 'Ośrodek wypoczynkowy w Przydworzu położony jest nad jeziorem Wieczno. Jest to obszar działania lokalnej Grupy Rybackiej "RYBAK" obejmującej teren sześciu partnerskich gmin położonych w północno wschodniej części województwa kujawsko pomorskiego: Chełmżę, Grudziądz, Płużnicę, Radzyń Chełmiński, Świecie n/O, Wąbrzeźno. Obszar objęty jest Lokalną Strategią Rozwoju Obszarów Rybackich. Największym z jezior położonym na tym terenie jest WIECZNO.',
  },
  {
    img: 'IMG_6316.jpg',
    text: ' Niegdyś jeden akwen, dziś podzielony na dwie części: Północną i Południową, które łączy wąski przesmyk Północna część jeziora Wieczno ma powierzchnię 147 ha, w najgłębszym miejscu dno osiąga 18 m (klara wody II) Południowa część jeziora Wieczno ma powierzchnię 199 ha i jest stosunkowo płytkie-średnia głębokość akwenu to 2,2 m (klara wody II). Przy zachodnim brzegu jeziora znajduje się wyspa, która w 1998 r została uznana za pomnik przyrody. Wyspa jest miejscem lęgowym ptaków, głównie kormorana czarnego.',
  },
  {
    img: 'IMG_6201.jpg',
    text: 'Jednak spotkać tu można ok. 18 gatunków innych ptaków, jak rybitwa zwyczajna, rybitwa czarna, gęgawa oraz mewa śmieszka. Zapaleni wędkarze cenią zasoby jeziora, w którym żyją liczne gatunki ryb takie jak: węgorz, okoń, szczupak, wzdręga, lin, leszcz , a nawet raki. W okolicy jeziora występuje charakterystyczny drzewostan z dominacją olszy czarnej, sosny zwyczajnej i jesionu wyniosłego. Spotkać można także dęby bezszypułkowe, brzozy brodawkowate, topolę szarą i świerk zwyczajny.',
  },
  {
    img: 'IMG_6328.jpg',
    text: 'Chętni na grzybobranie też znajdą ciekawe miejsca dla siebie. Jest to rejon o niepowtarzalnych walorach krajobrazowych i przyrodniczych co sprzyja rozwojowi turystyki i atrakcyjności tego regionu. W południowej części jeziora Wieczno, zlokalizowany jest znany w kraju Ośrodek Wypoczynkowy w Przydworzu. Dysponuje rozległą plażą z wydzielonym miejscem do zabaw dla najmłodszych, licznymi domkami letniskowymi, hotelikiem, pokojami noclegowymi, wypożyczalnią sprzętu wodnego, parkingiem, punkami handlowymi i gastronomicznymi.',
  },
  {
    img: 'IMG_6269.jpg',
    text: 'Na terenie ośrodka jest również pole namiotowe z wydzielonym miejscem na ognisko i grillowanie, jak również boisko do siatkówki i place zabaw. Jest to idealne miejsce dla rodzin z małymi dziećmi, czemu sprzyja czysta i płytka woda. Rejon jeziora słynie z silnych wiatrów, co sprzyja miłośnikom sportów wodnych jak żeglarstwo i windsurfing.',
  },
])
</script>

<style lang="scss" scoped>
.resort {
  @include graySection();
}
</style>
