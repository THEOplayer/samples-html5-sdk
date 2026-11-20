export default defineNuxtConfig({
  compatibilityDate: '2026-11-01',
  css: ['theoplayer/ui.css'],
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
  runtimeConfig: {
    public: {
      // Set NUXT_PUBLIC_THEOPLAYER_LICENSE to your OptiView Player license string.
      // Without a license, the player only works on localhost.
      theoplayerLicense: ''
    }
  }
})
