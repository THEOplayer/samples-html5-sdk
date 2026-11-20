export default defineNuxtConfig({
  compatibilityDate: '2026-11-01',
  app: {
    head: {
      title: 'OptiView Player Nuxt sample',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
    }
  },
  nitro: {
    // OptiView Player loads its workers from libraryLocation, so the library files are served from /vendor/theoplayer.
    publicAssets: [{ dir: '../node_modules/theoplayer', baseURL: '/vendor/theoplayer', maxAge: 0 }]
  },
  vite: {
    // The player is one large module by design, so raise the limit above its chunk size.
    build: { chunkSizeWarningLimit: 4000 }
  },
  runtimeConfig: {
    public: {
      // Set NUXT_PUBLIC_THEOPLAYER_LICENSE to your OptiView Player license string.
      // Without a license, the player only works on localhost.
      theoplayerLicense: ''
    }
  }
})
