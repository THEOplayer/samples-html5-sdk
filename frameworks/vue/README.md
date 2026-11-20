# OptiView Player with Vue

A Vue 3 app, built with Vite 8, with a single-file component that wraps OptiView Player.

This sample is a separate npm project, so the root `npm start` of this repository does not build or serve it. You can copy this folder out of the repository and use it as a starting point.

## Running this sample

1. Install [Node.js](https://nodejs.org/) 22.12 or later.
2. In this folder, install the dependencies:
   ```sh
   npm install
   ```
   This gets the latest OptiView Player 11.x release from the [`theoplayer`](https://www.npmjs.com/package/theoplayer) npm package.
3. Start the dev server:
   ```sh
   npm run dev
   ```
   Open http://localhost:5173.

To make a production build in `dist/` and serve it on http://localhost:4173:
```sh
npm run build
npm run preview
```

## About the player implementation

* It uses `DefaultUI` from [OptiView Web UI](https://www.npmjs.com/package/@theoplayer/web-ui) (`@theoplayer/web-ui` `^2`), which brings its own styles, so no `ui.css` is needed.
* [`src/components/Player.vue`](src/components/Player.vue) is the player component. It creates a `DefaultUI` in `onMounted`, watches the `source` prop, and in `onBeforeUnmount` removes the UI element, which destroys the player. Set your license in the `LICENSE` constant in this file.
* [`src/App.vue`](src/App.vue) renders the component with a source.
* The player loads extra files, such as the transmuxer worker, from `libraryLocation`. [`vite.config.js`](vite.config.js) copies the files from `node_modules/theoplayer` to `vendor/theoplayer/` with `vite-plugin-static-copy`, and the component sets `libraryLocation` to `${import.meta.env.BASE_URL}vendor/theoplayer/`.

## License

Without a license, OptiView Player only plays on `localhost`. To play on other domains, get a license for the Web SDK on [THEOportal](https://portal.theoplayer.com) and set it as described above.

This sample falls under the license defined in https://github.com/THEOplayer/license-and-disclaimer.

## Documentation

* [Getting started with Vue](https://optiview.dolby.com/docs/theoplayer/getting-started/frameworks/vuejs/getting-started/)
* [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/)
* [OptiView Player examples](https://optiview.dolby.com/docs/theoplayer/examples/)
