<template>
  <section id="regulations" class="regulations">
    <h2>Regulamin domków</h2>

    <div class="regulationList">
      <transition-group name="list" tag="ol" v-if="regulationText">
        <li
          v-for="(item, index) in listLimit(1)"
          :key="`ListLess_${index}`"
          v-html="parseDescriptionPhoneNumber(item)"
        />
        <template v-if="showMore">
          <li
            v-for="(item, index) in listLimit(2)"
            :key="`ListMore_${index}`"
            v-html="parseDescriptionPhoneNumber(item)"
          />
        </template>
      </transition-group>
    </div>

    <button class="readMore" @click="showMore = !showMore">
      {{ !showMore ? 'Czytaj więcej...' : 'Czytaj mniej...' }}
    </button>

    <h3>DZIĘKUJEMY ZA WSPÓŁPRACĘ I ŻYCZYMY UDANEGO WYPOCZYNKU</h3>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import { usePhoneNumber } from '~/composables/usePhoneNumber'

// Tymczasowo dodajemy regulamin jako tablica - potem powinien być importowany z pliku
const regulationText = ref([
  '1. Doba hotelowa rozpoczyna się o godz. 15.00, a kończy o godz. 12.00 dnia następnego.',
  '2. Opłata za pobyt pobierana jest w dniu przyjazdu, zgodnie z ustalonym przez Państwa terminem rezerwacji domku. W przypadku wcześniejszego wyjazdu niż w zarezerwowanym przez Państwa terminie, należność za całość pobytu nie ulega zmianie.',
  '3. Zakwaterowanie odbywa się na podstawie okazania dokumentu tożsamości.',
  '4. Cisza nocna obowiązuje od godz. 22.00 do godz. 7.00 rano.',
  '5. Osoby zameldowane w naszym obiekcie mają obowiązek zapoznania się z regulaminem WOPR, zobowiązane są do przestrzegania przepisów BHP i P.POŻ obowiązujących na terenie całego ośrodka.',
  '6. Dzieci przebywające na terenie ośrodka powinny znajdować się pod stałą opieką dorosłych. Za bezpieczeństwo dzieci odpowiadają ich opiekunowie.',
  '7. Korzystanie ze sprzętu wodnego dozwolone jest tylko w kamizelkach ratunkowych.',
  '8. Parkowanie pojazdów dozwolone jest wyłącznie w miejscach wyznaczonych do tego celu.',
  '9. Prosimy o zachowanie porządku w zajmowanych domkach, a w szczególności o segregację śmieci.',
  '10. W całym domku obowiązuje zakaz palenia papierosów.',
  '11. W dniu wyjazdu należy posprzątać domek oraz zdać klucze u gospodarzy.',
  '12. Właściciel obiektu nie ponosi odpowiedzialności materialnej za przedmioty i rzeczy pozostawione bez nadzoru na terenie ośrodka.',
  '13. Właściciel obiektu zastrzega sobie prawo do żądania opuszczenia ośrodka przed upływem terminu w wypadku naruszenia zasad regulaminu.',
  '14. NIE WYNAJMUJEMY DOMKÓW MŁODZIEŻY BEZ OPIEKUNA.',
  '15. Za wszelkie zniszczenia lub uszkodzenia przedmiotów stanowiących własność ośrodka odpowiada materialnie gość.',
])

const showMore = ref(false)
const howManyLiShow = ref(5)

const { phoneNumber, phoneNumberTxt } = usePhoneNumber()

function parseDescriptionPhoneNumber(item) {
  if (!item) return item
  return item.includes(phoneNumberTxt.value)
    ? item.replace(
        phoneNumberTxt.value,
        `<a href="tel:${phoneNumber.value}" >${phoneNumberTxt.value}</a>`,
      )
    : item
}

function listLimit(parameter) {
  if (parameter == 1) {
    return regulationText.value.slice(0, howManyLiShow.value)
  }
  if (parameter == 2) {
    return regulationText.value.slice(howManyLiShow.value)
  }
  return []
}
</script>

<style lang="scss" scoped>
@use 'sass:color';
.regulations {
  @include graySection();
  text-align: justify;

  .regulationList {
    padding: 0px 1rem 3rem 3.2rem;

    @include mq(xlarge) {
      padding: 0 0 3rem 3.8rem;
    }

    li {
      margin-bottom: 0.5rem;
    }
  }

  .readMore {
    box-shadow: 4px 4px 5px 0px rgba(0, 0, 0, 0.45);
    text-align: center;
    background-color: $black;
    border: 2px solid $black;
    border-radius: 1em;
    border-bottom-right-radius: 0;
    padding: 0.3em 0.8em;
    margin: 0.3em;
    color: $yellow;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      background-color: color.scale($black, $lightness: 20%);
    }
  }

  .list-item {
    display: inline-block;
    margin-right: 10px;
  }

  .list-enter-active,
  .list-leave-active {
    transition: all 1s;
  }

  .list-enter-from,
  .list-leave-to {
    opacity: 0;
    transform: translateY(30px);
  }

  h3 {
    margin-top: 2rem;
    font-size: 1.2rem;

    @include mq(medium) {
      font-size: 1.4rem;
    }

    @include mq(large) {
      font-size: 1.6rem;
    }
  }
}
</style>
