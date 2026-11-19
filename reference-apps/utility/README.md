# Utility

Tools that help you test OptiView Player.

* [measure-loading-time](measure-loading-time/index.html) logs to the browser console how long the player takes to load its files, to load the source and to start playback. Open the developer tools to see the results.

## Running this sample
1. Install [Node.js](https://nodejs.org/) 22.12 or later.
2. In the repository root, install the dependencies and start the local server:
   ```sh
   npm install
   npm start
   ```
   `npm install` gets the latest OptiView Player 11.x release from the [`theoplayer`](https://www.npmjs.com/package/theoplayer) npm package.
3. Open http://localhost:8080/reference-apps/utility/measure-loading-time/index.html.

The page loads the player from `../../../node_modules/theoplayer/`:
* UI CSS: `../../../node_modules/theoplayer/ui.css`
* Player library: `../../../node_modules/theoplayer/THEOplayer.js`
* `libraryLocation`: `../../../node_modules/theoplayer/`

### License
The license in this sample only allows playback on _localhost_.
To play on other domains, get your own license on the [THEOportal](https://portal.theoplayer.com) and set it in the player configuration.

See [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/) for the full setup guide, and the [examples page](https://optiview.dolby.com/docs/theoplayer/examples/) for more live demos.
