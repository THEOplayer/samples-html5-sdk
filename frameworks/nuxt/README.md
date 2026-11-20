# OptiView Player with Nuxt

A Nuxt 4 app that renders OptiView Player in a client-only component.

This sample is a separate npm project, so the root `npm start` of this repository does not build or serve it. You can copy this folder out of the repository and use it as a starting point.

## Running this sample

1. Install [Node.js](https://nodejs.org/) 22.22.3 or later (24.15 or later on Node.js 24).
2. In this folder, install the dependencies:
   ```sh
   npm install
   ```
   This gets the latest OptiView Player 11.x release from the [`theoplayer`](https://www.npmjs.com/package/theoplayer) npm package.
3. Optional: set your license in the `NUXT_PUBLIC_THEOPLAYER_LICENSE` environment variable, for example in a `.env` file in this folder. You can leave it empty on `localhost`.
4. Start the dev server:
   ```sh
   npm run dev
   ```
   Open http://localhost:3000.

To make a production build in `.output/` and serve it on http://localhost:3000:
```sh
npm run build
npm run preview
```
Use `npm run generate` instead of `npm run build` to make a static site.

## About the player implementation

* The player needs browser APIs, so it cannot render on the server. [`app/app.vue`](app/app.vue) wraps the player in `<ClientOnly>`.
* [`app/components/Player.vue`](app/components/Player.vue) creates the `Player` in `onMounted`, watches the `source` prop, and calls `player.destroy()` in `onBeforeUnmount`. It reads the license from `useRuntimeConfig().public.theoplayerLicense`, which Nuxt fills from `NUXT_PUBLIC_THEOPLAYER_LICENSE` at runtime.
* The player loads extra files, such as the transmuxer worker, from `libraryLocation`. [`nuxt.config.ts`](nuxt.config.ts) serves `node_modules/theoplayer` at `/vendor/theoplayer` with `nitro.publicAssets`. In development Nitro serves the files from `node_modules`, and `npm run build` copies them to `.output/public/vendor/theoplayer/`, so no copy script is needed. The component sets `libraryLocation` to `/vendor/theoplayer/`. `nuxt.config.ts` also adds `theoplayer/ui.css` to the global CSS.

## License

Without a license, OptiView Player only plays on `localhost`. To play on other domains, get a license for the Web SDK on [THEOportal](https://portal.theoplayer.com) and set it as described above.

This sample falls under the license defined in https://github.com/THEOplayer/license-and-disclaimer.

## Documentation

* [Getting started with Nuxt](https://optiview.dolby.com/docs/theoplayer/getting-started/frameworks/nuxtjs/getting-started/)
* [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/)
* [OptiView Player examples](https://optiview.dolby.com/docs/theoplayer/examples/)
