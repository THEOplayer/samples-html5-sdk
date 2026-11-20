# OptiView Player with Parcel and TypeScript

This sample shows how to bundle the OptiView Player Web SDK from the [`theoplayer`](https://www.npmjs.com/package/theoplayer) npm package with [Parcel](https://parceljs.org/) in TypeScript.

## Requirements
* [Node.js](https://nodejs.org/) 22.12 or later
* An OptiView Player license for domains other than _localhost_. Get one on the [THEOportal](https://portal.theoplayer.com).

## Running this sample
1. In this folder, install the dependencies:
   ```sh
   npm install
   ```
   This installs the latest OptiView Player 11.x release, because `package.json` depends on `theoplayer` `^11`.
2. Set your license string in `LICENSE` in [`bundlers/util/constants.js`](../../util/constants.js). An empty license only allows playback on _localhost_.
3. Build and serve the sample:
* `npm run build` creates a production build in `dist/` (`npm run build-dev` for a development build).
* `npm run serve` serves `dist/` on http://localhost:8080.

## How it works
* `src/` creates a `Player`, with `libraryLocation` set to `vendor/theoplayer/`, and sets a source.
* The `staticFiles` setting copies the player files from `node_modules/theoplayer` to `dist/vendor/theoplayer/`. `ui.css` is added to the page at runtime, because Parcel cannot parse it. The player loads its workers and other files from there at runtime.
* See `package.json` for the Parcel configuration.

## Documentation
* [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/)
* [Live examples](https://optiview.dolby.com/docs/theoplayer/examples/)
* [All bundler samples](../../README.md)
