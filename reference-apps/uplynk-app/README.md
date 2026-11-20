# Uplynk with OptiView Player

This app shows the OptiView Player integration with Uplynk: playback of Uplynk assets with server-side ads, ad and asset markers on the timeline, ad skipping, and asset information. It is the source of the [live demo](https://cdn.theoplayer.com/demos/uplynk/index.html).

## Running this sample

1. Install [Node.js](https://nodejs.org/) 22.12 or later.
2. In this folder, install the dependencies, build the app and start the local server:
   ```sh
   npm install
   npm run build
   npm start
   ```
   Use `npm run build-dev` instead of `npm run build` for an unminified build with a source map.
3. Open http://localhost:8000.

This sample is a separate npm project, so the root `npm start` does not build or serve it.

## License

Uplynk playback needs a license with the Uplynk feature. The default `localhost` license does not include it, so the player shows a license error until you add your own. Set `license` in the player configuration in [`src/player.js`](src/player.js), then run `npm run build` again. Get a license on [THEOportal](https://portal.theoplayer.com).

## About the player implementation

* `npm run build` bundles [`src/`](src) into `public/js/dist.js` with webpack and Babel. It also copies the player files from `node_modules/theoplayer` to `public/vendor/theoplayer/`. Both are build output and not committed.
* [`public/index.html`](public/index.html) loads `vendor/theoplayer/THEOplayer.js`, and [`src/player.js`](src/player.js) sets `libraryLocation` to `vendor/theoplayer/`.
* [`src/config.js`](src/config.js) has the player configuration and the Uplynk sources. [`src/app.js`](src/app.js) has the app logic, and [`src/player.js`](src/player.js) creates the player and listens to its Uplynk events.
* The `uplynk` object in the player configuration sets the Uplynk UI: content and ad notifications, asset and ad break markers, and the skip offset.
* The layout uses Bootstrap Material Design 4.
* To deploy the app, build it and upload the `public/` folder to a web server.

## Resources

* [Uplynk guides](https://optiview.dolby.com/docs/theoplayer/how-to-guides/web/uplynk/introduction/)
* [`UplynkSource` API](https://optiview.dolby.com/docs/theoplayer/v11/api-reference/web/interfaces/UplynkSource.html)
* [`UplynkConfiguration` API](https://optiview.dolby.com/docs/theoplayer/v11/api-reference/web/interfaces/UplynkConfiguration.html)
* [`UplynkUiConfiguration` API](https://optiview.dolby.com/docs/theoplayer/v11/api-reference/web/interfaces/UplynkUiConfiguration.html)
* [OptiView Player examples](https://optiview.dolby.com/docs/theoplayer/examples/)
