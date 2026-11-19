# OptiView Player with React

A React 19 app, built with Vite 8, that plays a stream with the `<DefaultUI>` component from [OptiView Web UI for React](https://www.npmjs.com/package/@theoplayer/react-ui) (`@theoplayer/react-ui` `^2`).

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

* [`src/App.tsx`](src/App.tsx) renders `<DefaultUI>` with a player `configuration` and a `source`. `<DefaultUI>` creates the player when it mounts and destroys it when it unmounts. Set your license in the `license` constant in this file.
* The `onReady` callback receives the `ChromelessPlayer`, so you can use the full player API from there. The sample uses it to mute the player and start it automatically. See [OptiView Web UI for React](https://www.npmjs.com/package/@theoplayer/react-ui) for custom layouts.
* The player loads extra files, such as the transmuxer worker, from `libraryLocation`. [`vite.config.ts`](vite.config.ts) copies the files from `node_modules/theoplayer` to `vendor/theoplayer/` with `vite-plugin-static-copy`, and `src/App.tsx` sets `libraryLocation` to `${import.meta.env.BASE_URL}vendor/theoplayer/`, so it also works when the app is not served from `/`.

## License

Without a license, OptiView Player only plays on `localhost`. To play on other domains, get a license for the Web SDK on [THEOportal](https://portal.theoplayer.com) and set it as described above.

This sample falls under the license defined in https://github.com/THEOplayer/license-and-disclaimer.

## Documentation

* [Getting started with React](https://optiview.dolby.com/docs/theoplayer/getting-started/frameworks/react/getting-started/)
* [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/)
* [OptiView Player examples](https://optiview.dolby.com/docs/theoplayer/examples/)
