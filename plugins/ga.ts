// plugins/google-analytics.client.ts
export default defineNuxtPlugin(() => {
  const runtimeConfig = useRuntimeConfig()

  // Only run on client-side and only in production mode
  if (process.env.NODE_ENV !== 'production') return

  // Add Google Analytics script
  const script = document.createElement('script')
  script.async = true
  script.src = 'https://www.googletagmanager.com/gtag/js?id=UA-155148154-1'
  document.head.appendChild(script)

  window.dataLayer = window.dataLayer || []
  function gtag() {
    dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', 'UA-155148154-1')

  // Track page views on route changes
  const router = useRouter()
  router.afterEach((to) => {
    gtag('set', 'page_location', window.location.href)
    gtag('set', 'page_path', to.fullPath)
    gtag('send', 'pageview')
  })
})
