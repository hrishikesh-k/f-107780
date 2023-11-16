const shortName = 'Butter Uitvaartservice'
const siteName = 'Butter Uitvaartservice - Post Mortem Support'
const description = 'Met aandacht verzorgd opbaren in de omgeving Noord Holland, West Friesland, Amsterdam, Zaandam, Zaanstreek, Purmerend, Volendam, Waterland, Noordkop, Hollands Kroon, Alkmaar, Haarlem. Het is vanuit de stellige overtuiging dat wanneer een goed verzorgde opbaring het rouwproces voor nabestaande pas écht begint. De eerste uren na het overlijden is het voor de nabestaanden chaos en weet men soms niet wat hen is overkomen en hoe nu verder. Door een goede verzorging die met aandacht voor zowel de overledene en nabestaanden is uitgevoerd, is er vaak al meer rust voor de aanwezige nabestaanden. Het rouwen kan dan pas écht beginnen.'
const themeColor = '#ffffff'
const baseURL = process.env.NODE_ENV !== 'production' ? 'http://localhost:3000' : 'https://www.butteruitvaart.nl'

export default defineNuxtConfig({
  app: {
    head: {
      htmlAttrs: {
        lang: 'nl'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: siteName,
      meta: [
        { name: 'theme-color', content: themeColor },
      ],
      link: [
        { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' },
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', href: '/apple-touch-icon.png', sizes: '180x180' },
        { rel: 'mask-icon', href: '/mask-icon.svg' },
        { rel: 'manifest', href: '/manifest.webmanifest' }
      ]
    },
    pageTransition: {
      name: 'slide-up-fade',
      mode: 'out-in'
    },
  },
  runtimeConfig: {
    public: {
      baseURL
    }
  },
  pwa: {
    includeAssets: ['favicon.svg', 'favicon.png', 'apple-touch-icon.png', 'mask-icon.svg'],
    manifest: {
      lang: 'nl',
      name: shortName,
      short_name: shortName,
      description: description,
      theme_color: themeColor,
      icons: [
        {
          src: 'icon-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'icon.png',
          sizes: '512x512',
          type: 'image/png'
        },
        {
          src: 'icon.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'any'
        },
        {
          src: 'icon.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable'
        }
      ]
    }
  },
  css: [
    '@fortawesome/fontawesome-svg-core/styles.css',
  ],
  modules: [
    ['@nuxtjs/google-fonts', {
      families: {
          'Roboto+Slab': {
            wght: [300, 400, 500],
            ital: [300, 400, 500]
          },
          Roboto: {
            wght: [300, 400, 500],
            ital: [300, 400, 500]
          }
        },
        display: 'swap'
    }],
    'nuxt-gtag',
    '@vite-pwa/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-og-image',
    '@nuxt/devtools',
  ],
  image: {
    provider: 'netlify'
  },
  ogImage: {
    fonts: [
      'Roboto+Slab:300'
    ]
  },
  gtag: {
    id: 'G-MJ555L687Q',
    initialConsent: false
  },
  build: {
    transpile: [
      'gsap',
    ]
  }
})
