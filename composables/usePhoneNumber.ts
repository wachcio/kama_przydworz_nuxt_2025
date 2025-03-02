import { computed, ref } from 'vue'
import { useStore } from '~/store'

export function usePhoneNumber() {
  // Bezpośrednie wartości jako fallback
  const phoneNumberFallback = ref('+48 532 623 229')
  const phoneNumberTxtFallback = ref('+48532623229')

  // Próba użycia store
  let phoneNumber, phoneNumberTxt

  try {
    const store = useStore()
    phoneNumber = computed(() => store.phoneNumber)
    phoneNumberTxt = computed(() => store.phoneNumberTxt)
  } catch (error) {
    // Fallback jeśli store nie jest dostępny
    phoneNumber = phoneNumberFallback
    phoneNumberTxt = phoneNumberTxtFallback
    console.warn('Store not available, using fallback values')
  }

  function createPhoneLink() {
    return `tel:${phoneNumber.value}`
  }

  function parsePhoneNumber(text) {
    if (!text) return text

    return text.includes(phoneNumberTxt.value)
      ? text.replace(
          phoneNumberTxt.value,
          `<a href="tel:${phoneNumber.value}">${phoneNumberTxt.value}</a>`,
        )
      : text
  }

  return {
    phoneNumber,
    phoneNumberTxt,
    createPhoneLink,
    parsePhoneNumber,
  }
}
