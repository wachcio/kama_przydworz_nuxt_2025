export default defineNuxtConfig({
  ssr: true, // Zmiana z false na true dla lepszej obsługi generowania statycznego

  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/', // Odkomentowane
    head: {
      htmlAttrs: {
        lang: 'pl',
      },
      title: 'Kama-przydworz.pl - wynajem domków w Przydworzu - 532 623 229',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        {
          name: 'description',
          content:
            'Domki Przydwórz(wynajem)|Wynajem domków letniskowych w Przydworzu|+48532623229',
        },
        {
          name: 'Keywords',
          content:
            'Kama-przydworz.pl,kama-przydwórz,kama-przydwórz.pl,+48 532 623 229,+48532623229,532623229,kama,domki, domy,wynajem domków,wynajem domki,wynajem domków w Przydworzu,domki Przydwórz,domki Przydworz,Przydworz domki,Przydwórz,Przydworz,wieczno,kwatery,wynajem,odpoczynek,wakacje,pokoje,pokoj,pokój,wypoczynek,tanie domki,tani wypoczynek,tani,Wieczno,jezioro Wieczno,domki do wynajęcia,przydwórz domki,przydworz domki do wynajecia,domki w przydworzu,jezioro wieczno noclegi,noclegi,domki letniskowe przydwórz,domki przydwórz wynajem',
        },
        {
          name: 'robots',
          content: 'index, follow',
        },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '16x16',
          href: '/favicon-16x16.png',
        },
        {
          rel: 'icon',
          type: 'image/png',
          sizes: '32x32',
          href: '/favicon-32x32.png',
        },
      ],
    },
  },

  // Jawne zdefiniowanie katalogów
  dir: {
    public: 'public',
    assets: 'assets',
  },

  css: [
    '~/assets/scss/_reset.scss',
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/scss/main.scss',
  ],

  modules: [
    '@nuxtjs/robots',
    '@pinia/nuxt',
    '@nuxt/image',
    'nuxt-icon',
    'nuxt-svgo',
  ],

  robots: {
    rules: {
      UserAgent: '*',
      Allow: '/',
      Disallow: '/Regulamin.odt',
      Sitemap: 'https://kama-przydworz.pl/sitemap.xml',
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/scss/variables.scss" as *;',
        },
      },
    },
  },

  // Poprawiona konfiguracja modułu obrazów
  image: {
    quality: 80,
    format: ['webp', 'jpg', 'png'],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
    dir: 'public',
    // staticImages: {
    //   dir: 'public/img', // Katalog z oryginalnymi obrazami
    //   include: ['**/*.{jpg,jpeg,png,svg}'], // Wzorce plików do przetworzenia
    // },
  },

  // Poprawiona konfiguracja nitro
  nitro: {
    prerender: {
      crawlLinks: true, // Włączone automatyczne odkrywanie linków
      routes: ['/'], // Strona główna jako punkt wyjścia
    },
    output: {
      publicDir: 'dist',
    },
    // Dodane reguły dla statycznych zasobów
    routeRules: {
      // Te reguły są nadal potrzebne
      // '/img/**': { static: true },
      '/_nuxt/**': { static: true },
      '/_ipx/**': { static: true }, // Dodaj obsługę dla ścieżek _ipx
    },
  },

  // Usunięta problematyczna data kompatybilności
  compatibilityDate: '2025-03-11',
})
