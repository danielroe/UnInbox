export default defineNuxtConfig({
  // extends: ['../../layers/landing'],
  extends: ['nuxt-umami'],
  modules: [
    '@nuxt/devtools',
    '@nuxthq/ui',
    '@vueuse/nuxt',
    '@nuxtjs/hanko',
    'nuxt-security',
    'nuxt-og-image',
    '@pinia/nuxt'
  ],

  runtimeConfig: {
    // paths: [...pagePaths],
    databaseUrl: process.env.NUXT_DATABASE_URL || '',
    emailApiUrl: process.env.NUXT_EMAIL_API_URL || '',
    emailApiKey: process.env.NUXT_EMAIL_API_KEY || '',
    public: {}
  },

  // Styling
  css: ['@/assets/css/main.css'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in', duration: 300 }
  },
  ui: {
    icons: ['mdi', 'ph']
  },
  ogImage: {
    host: 'https://uninbox.com',
    fonts: [
      'Inter:400',
      {
        name: 'CalSans',
        weight: 800,
        // path must point to a public font file
        path: '/fonts/CalSans-SemiBold.ttf'
      }
    ]
  },

  // Nitro/Build Configs

  build: {
    transpile: ['trpc-nuxt']
  },
  typescript: {
    shim: false
  },
  // import the Pinia stores
  imports: {
    dirs: ['stores']
  },
  nitro: {
    prerender: {
      crawlLinks: true // recommended
    }
  },
  /**
   * * Module Configurations
   */

  //* Hanko
  hanko: {
    redirects: {
      login: '/login',
      success: '/dashboard'
    }
  },

  //* Pinia
  pinia: {
    autoImports: ['defineStore', ['defineStore', 'definePiniaStore']]
  },

  //* Nuxt-Security
  security: {
    headers: {
      crossOriginEmbedderPolicy: {
        value:
          process.env.NODE_ENV === 'development'
            ? 'unsafe-none'
            : 'require-corp',
        route: '/**'
      }
    }
  }
});
