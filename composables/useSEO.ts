import { useHead, useSeoMeta } from '#imports'

interface SEOOptions {
  title?: string
  description?: string
  keywords?: string
  ogImage?: string
}

export function useSEO(options: SEOOptions = {}) {
  const defaultOptions = {
    title: 'Kama-przydworz.pl - wynajem domków w Przydworzu - 532 623 229',
    description:
      'Domki Przydwórz(wynajem)|Wynajem domków letniskowych w Przydworzu|+48532623229',
    keywords:
      'Kama-przydworz.pl,kama-przydwórz,kama-przydwórz.pl,+48 532 623 229,+48532623229,532623229,kama,domki, domy,wynajem domków,wynajem domki,wynajem domków w Przydworzu',
    ogImage: '/og-image.jpg'
  }

  const mergedOptions = { ...defaultOptions, ...options }

  useHead({
    title: mergedOptions.title,
    meta: [
      {
        name: 'og:title',
        content: mergedOptions.title
      },
      {
        name: 'twitter:title',
        content: mergedOptions.title
      },
      {
        name: 'og:image',
        content: mergedOptions.ogImage
      }
    ]
  })

  useSeoMeta({
    title: mergedOptions.title,
    description: mergedOptions.description,
    keywords: mergedOptions.keywords,
    ogDescription: mergedOptions.description,
    twitterDescription: mergedOptions.description
  })
}
