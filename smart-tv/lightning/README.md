# OptiView Player sample for Lightning

This sample shows how to use OptiView Player in a [Lightning](https://lightningjs.io/) app. Lightning is an open-source JavaScript platform for (TV) apps that renders with WebGL or Canvas2D. The app shows a list of sources from [`static/sources.json`](static/sources.json) and plays the selected one with play and pause controls.

This sample is a separate npm project, so the root `npm start` of this repository does not build or serve it.

## Requirements
* [Node.js](https://nodejs.org/) 22.12 or later
* An OptiView Player license for any host other than `localhost`, such as a TV. Get one on [THEOportal](https://portal.theoplayer.com).

The sample uses Lightning SDK 5 and Lightning CLI 2. The CLI is a dev dependency, so you don't need a global install.

## Running the app
1. In this folder, install the dependencies:
   ```sh
   npm install
   ```
   This gets the latest OptiView Player 11.x release from the [`theoplayer`](https://www.npmjs.com/package/theoplayer) npm package and copies its files to `static/THEOplayer/`.
2. Build the app:
   ```sh
   npm run build
   ```
3. Serve the build and open it in a browser:
   ```sh
   npm run serve
   ```
   This serves the app at http://localhost:8080. Press Enter (OK on a remote) to start playback.

To rebuild the app whenever you change a file in `src/` or `static/`, run `npm run watch` in a second terminal while `npm run serve` is running.

`npm run serve` uses `http-server` instead of `lng serve`, because `lng serve` opens the app on `127.0.0.1`. The default license only covers `localhost`, so the player would show a license error there.

## About the player implementation
* Lightning renders the app UI with WebGL, so the player has no UI of its own. The app uses `THEOplayer.chromeless.js` and draws its controls in Lightning.
* `npm install` copies the player files from `node_modules/theoplayer` to `static/THEOplayer/`. [`src/utils/THEOplayer.js`](src/utils/THEOplayer.js) loads the player script from `/static/THEOplayer` at runtime, adds a `<div id="theoplayer-wrapper">` to the page for the video, and sets `libraryLocation` to the same folder.
* To run the app from another host or on a device, set `license` in [`src/utils/THEOplayer.js`](src/utils/THEOplayer.js). Without a license, the app shows a banner when it is not served from `localhost`.
* `npx lng docs` opens the Lightning SDK documentation.

## License
This project falls under the license defined in https://github.com/THEOplayer/license-and-disclaimer.

## Documentation
* [Lightning documentation](https://lightningjs.io/docs)
* [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/)
* [OptiView Player examples](https://optiview.dolby.com/docs/theoplayer/examples/)
