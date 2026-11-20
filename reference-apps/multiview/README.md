# OptiView Player MultiView

This sample plays several streams side by side with the MultiView API of the OptiView Player Web SDK. MultiView is part of the [`@theoplayer/extended`](https://www.npmjs.com/package/@theoplayer/extended) npm package, not of `theoplayer`.

## Running this sample
1. Install [Node.js](https://nodejs.org/) 22.12 or later.
2. In the repository root, install the dependencies and start the local server:
   ```sh
   npm install
   npm start
   ```
   The root `package.json` depends on `@theoplayer/extended` `^11`, so `npm install` gets the latest OptiView Player 11.x release.
3. Open http://localhost:8080/reference-apps/multiview/index.html.

The page loads the player from `../../node_modules/@theoplayer/extended/` (`ui.css`, `THEOplayer.js` and `libraryLocation`).

### License
The license in this sample only allows playback on _localhost_. To play on other domains, get your own license with MultiView enabled on the [THEOportal](https://portal.theoplayer.com).

## Documentation
* [Getting started on Web](https://optiview.dolby.com/docs/theoplayer/getting-started/sdks/web/getting-started/)
* [MultiView API reference](https://optiview.dolby.com/docs/theoplayer/v11/api-reference/web/classes/MultiViewPlayer.html)
* [Live examples](https://optiview.dolby.com/docs/theoplayer/examples/)
